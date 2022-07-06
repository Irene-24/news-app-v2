import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SideBar from "../../components/Layout/SideBar";

describe("Sidebar component", () => {
  test("Renders correctly", () => {
    render(<SideBar />);

    const logo = screen.getByAltText(/logo/i);
    const links = screen.getAllByRole("link");

    expect(logo).toBeInTheDocument();
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  test("button toggles sidebar/overlay state", async () => {
    render(<SideBar />);

    const user = userEvent.setup();

    const sideToggler = screen.getByRole("button", {
      name: /menu-toggle/i,
    });

    const nullOverlay = screen.queryByText(/overlay/i);

    expect(sideToggler).toBeInTheDocument();
    expect(nullOverlay).not.toBeInTheDocument();

    await user.click(sideToggler);

    const overlay = screen.getByText(/overlay/i);

    expect(overlay).toBeInTheDocument();

    await user.click(sideToggler);

    await waitForElementToBeRemoved(() => screen.queryByText(/overlay/i));
  });
});
