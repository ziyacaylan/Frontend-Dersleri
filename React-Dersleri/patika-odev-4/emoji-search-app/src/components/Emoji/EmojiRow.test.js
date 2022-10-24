/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-render-in-setup */
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../../App";

describe("Emojies Results testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("Copying emoji should work successfully", () => {
    const click = screen.getAllByText("copy");
    userEvent.click(click);
    expect(screen.getAllByTestId("row")).toBeInTheDocument();
    //expect(Click[0]).toHaveAttribute("data-clipboard-text");
  });
});
