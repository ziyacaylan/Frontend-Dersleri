/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import App from "../../App";

describe("Emojies Results testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Emoji List should be rendered successfully", () => {
    const items = screen.getAllByText("Copy to clipboard");
    expect(items.length).toEqual(1820);
  });

  test("Filtering should be working successfully", () => {
    const emoji = "smile";
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: emoji } });

    const items = screen.getAllByText("Copy to clipboard");
    expect(items.length).toBeLessThan(1820);
  });
});
