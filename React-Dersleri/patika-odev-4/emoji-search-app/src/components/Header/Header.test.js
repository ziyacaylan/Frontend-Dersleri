/* eslint-disable testing-library/no-render-in-setup */
import { getByText, render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import App from "../../App";

describe("Header testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Header must be rendered", () => {
    const headerTitle = screen.getByText("Emoji Search");
    expect(headerTitle).toBeInTheDocument();
  });
});
