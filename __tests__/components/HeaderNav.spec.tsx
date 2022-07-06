import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

import HeaderNav from "../../components/Layout/HeaderNav";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("HeaderNav component", () => {
  const push = jest.fn();
  (useRouter as jest.Mock).mockImplementation(() => ({ push }));

  it("should render correctly ", () => {
    render(<HeaderNav />);

    const logo = screen.getByAltText(/logo/i);
    const link = screen.getByRole("link", {
      name: /github/i,
      exact: false,
    });

    const search = screen.getByLabelText(/search/i);

    expect(logo).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });

  test("input field updates as we type", async () => {
    render(<HeaderNav />);
    const search = screen.getByLabelText(/search/i);

    const user = userEvent.setup();
    await user.clear(search);

    await user.type(search, "meat");

    expect(search).toHaveValue("meat");
  });

  test("on submit form, we navigate with provided input value", async () => {
    render(<HeaderNav />);

    const search = screen.getByLabelText(/search/i);

    const user = userEvent.setup();
    await user.clear(search);
    await user.type(search, "meat");

    await userEvent.keyboard("[Enter]");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith("/search?q=meat");
  });
});
