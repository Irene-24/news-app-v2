import { Article } from "@/utils/types";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NewsContainer } from "../../components/News";

import data from "../../utils/dummyData/news.json";

const loadArticles = jest.fn();

const emptyConfig = {
  articles: [],
  loading: false,
  error: null,
  isLast: true,
  loadArticles,
};

const emptyLoading = {
  ...emptyConfig,
  loading: true,
};

const loadedNotLast = {
  ...emptyConfig,
  isLast: false,
  articles: data.results.slice(0, 5) as Article[],
};

const loadingNotLast = {
  ...loadedNotLast,
  loading: true,
};

const all = {
  loading: false,
  error: null,
  isLast: true,
  loadArticles,
  articles: data.results as Article[],
};

const errEmpty = {
  loading: false,
  error: "Error",
  isLast: true,
  loadArticles,
  articles: [],
};

const errExistingData = {
  loading: false,
  error: "Error",
  isLast: false,
  loadArticles,
  retryLoadingArticles: loadArticles,
  articles: data.results.slice(0, 3) as Article[],
};

describe("NewsContainer component", () => {
  test("render only `No data` when no articles", () => {
    render(<NewsContainer {...emptyConfig} />);

    const empty = screen.getByText(/no data/i);
    const loaders = screen.queryAllByText(/loading/i);
    const showMore = screen.queryByRole("button", {
      name: /show more/i,
    });

    const articles = screen.queryAllByRole("img");

    expect(empty).toBeInTheDocument();
    expect(loaders).toHaveLength(0);
    expect(showMore).toBeNull();
    expect(articles).toHaveLength(0);
  });

  test("should show only one loader when loading and no data", () => {
    render(<NewsContainer {...emptyLoading} />);

    const empty = screen.queryByText(/no data/i);
    const loaders = screen.getAllByText(/loading/i);

    const showMore = screen.queryByRole("button", {
      name: /show more/i,
    });

    const articles = screen.queryAllByRole("img");

    expect(empty).toBeNull();
    expect(loaders).toHaveLength(1);
    expect(showMore).toBeNull();
    expect(articles).toHaveLength(0);
  });

  test("render subset of articles, when not loading and there is data", () => {
    render(<NewsContainer {...loadedNotLast} />);

    const empty = screen.queryByText(/no data/i);
    const loaders = screen.queryAllByText(/loading/i);

    const showMore = screen.getByRole("button", {
      name: /show more/i,
    });

    const articles = screen.getAllByRole("img");
    expect(empty).toBeNull();

    expect(loaders).toHaveLength(0);
    expect(showMore).toBeInTheDocument();
    expect(articles).toHaveLength(loadedNotLast.articles.length);
  });

  test("render subset of articles but loading in progress", () => {
    render(<NewsContainer {...loadingNotLast} />);

    const empty = screen.queryByText(/no data/i);
    const showMore = screen.queryByRole("button", {
      name: /show more/i,
    });

    const loaders = screen.getAllByText(/loading/i);
    const articles = screen.getAllByRole("img");

    expect(empty).toBeNull();
    expect(showMore).toBeNull();

    expect(loaders).toHaveLength(1);
    expect(articles).toHaveLength(loadedNotLast.articles.length);
  });

  test("render all articles, no other thing", () => {
    render(<NewsContainer {...all} />);

    const empty = screen.queryByText(/no data/i);
    const loaders = screen.queryAllByText(/loading/i);
    const showMore = screen.queryByRole("button", {
      name: /show more/i,
    });

    const articles = screen.getAllByRole("img");
    expect(empty).toBeNull();

    expect(loaders).toHaveLength(0);
    expect(showMore).not.toBeInTheDocument();
    expect(articles).toHaveLength(data.results.length);
  });

  test("Test that load more fires an event on click", async () => {
    render(<NewsContainer {...loadedNotLast} />);

    const user = userEvent.setup();

    const showMore = screen.getByRole("button", {
      name: /show more/i,
    });

    await user.click(showMore);
    expect(loadArticles).toHaveBeenCalled();
  });

  test("render error component when no data", () => {
    render(<NewsContainer {...errEmpty} />);

    const empty = screen.queryByText(/no data/i);
    const loaders = screen.queryAllByText(/loading/i);
    const showMore = screen.queryByRole("button", {
      name: /show more/i,
    });

    const err = screen.getByText(/error message/i);

    const articles = screen.queryAllByRole("img");

    expect(empty).toBeNull();
    expect(loaders).toHaveLength(0);
    expect(showMore).not.toBeInTheDocument();
    expect(articles).toHaveLength(0);

    expect(err).toBeInTheDocument();
  });

  test("render error component, when  data", () => {
    render(<NewsContainer {...errExistingData} />);

    const empty = screen.queryByText(/no data/i);
    const loaders = screen.queryAllByText(/loading/i);
    const showMore = screen.queryByRole("button", {
      name: /show more/i,
    });

    const err = screen.getByText(/error message/i);

    const articles = screen.getAllByRole("img");

    expect(empty).toBeNull();
    expect(loaders).toHaveLength(0);
    expect(showMore).not.toBeInTheDocument();
    expect(articles).toHaveLength(errExistingData.articles.length);

    expect(err).toBeInTheDocument();
  });
});
