import Page from "@/components/Page";
import { Categories } from "@/utils/constants";
import { newsApi } from "@/redux/services/newsApi";
import userEvent from "@testing-library/user-event";
import { mswServer as server } from "mocks/mswServer";

import { renderWithProvider, screen, makeStore, waitFor } from "./test-utils";
import { errInvalidCategory } from "mocks/handlers/api/news";
import { rest } from "msw";

const store = makeStore({});

describe("Each news page behaviour-success", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
    // This is the solution to clear RTK Query cache after each test
    store.dispatch(newsApi.util.resetApiState());
  });

  afterAll(() => server.close());

  it("Renders a page correctly", () => {
    renderWithProvider(
      <Page
        category={Categories.business}
        seoTitle="Business"
        pageTitle="Business Today"
      />
    );

    const heading = screen.getByText("Business Today");
    const spinner = screen.getByText("Loading...");

    expect(heading).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });

  it("Fetches posts on intial load", async () => {
    renderWithProvider(
      <Page
        category={Categories.business}
        seoTitle="Business"
        pageTitle="Business Today"
      />
    );

    await waitFor(() => {
      const articles = screen.getAllByText(
        /Sunday's Championship predictions/i
      );

      return expect(articles.length).toBeGreaterThan(1);
    });

    await waitFor(() => {
      const showMore = screen.getByRole("button", {
        name: /show more/i,
      });

      return expect(showMore).toBeInTheDocument();
    });
  });

  it("Fetches more posts after clicking show more", async () => {
    renderWithProvider(
      <Page
        category={Categories.business}
        seoTitle="Business"
        pageTitle="Business Today"
      />
    );

    await waitFor(async () => {
      const articles = screen.getAllByText(
        /Sunday's Championship predictions/i
      );

      const showMore = screen.getByRole("button", {
        name: /show more/i,
      });

      const oldLength = articles.length;

      userEvent.click(showMore);

      return await waitFor(() => {
        const newArticles = screen.getAllByText(
          /Sunday's Championship predictions/i
        );

        const newLength = newArticles.length;

        return expect(newLength).toBeGreaterThan(oldLength);
      });
    });
  });

  it("Hides show more after getting to last page in api request", async () => {
    renderWithProvider(
      <Page
        category={Categories.business}
        seoTitle="Business"
        pageTitle="Business Today"
      />
    );

    await waitFor(async () => {
      const showMore = screen.getByRole("button", {
        name: /show more/i,
      });

      userEvent.click(showMore);
      userEvent.click(showMore);
      userEvent.click(showMore);

      return await waitFor(() => {
        const showMore = screen.queryByRole("button", {
          name: /show more/i,
        });

        return expect(showMore).not.toBeInTheDocument();
      });
    });
  });
});

describe("Each news page behaviour-error", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
    // This is the solution to clear RTK Query cache after each test
    store.dispatch(newsApi.util.resetApiState());
  });

  afterAll(() => server.close());

  it("Renders error message for invalid category", async () => {
    server.use(
      rest.get("*", (_req, res, ctx) =>
        res(ctx.status(422), ctx.json(errInvalidCategory))
      )
    );

    renderWithProvider(
      <Page
        category={Categories.business} //value here isn't actually being used due to mock
        seoTitle="Business"
        pageTitle="Business Today"
      />
    );

    await waitFor(() => {
      const err = screen.getByText(
        /Sorry! No such category exists in our database/i
      );

      return expect(err).toBeInTheDocument();
    });
  });
});
