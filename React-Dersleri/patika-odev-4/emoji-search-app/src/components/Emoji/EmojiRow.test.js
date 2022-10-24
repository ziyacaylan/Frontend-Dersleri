/* eslint-disable testing-library/no-node-access */
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
    const click = screen.getAllByText("Copy to clipboard").at(0);
    const parent = click.parentElement;

    expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(
      0
    );

    // async function get_clip() {
    //   try {
    //     return await navigator.clipboard.readText();
    //   } catch (err) {
    //     console.error("Failed to read clipboard contents: ", err);
    //   }
    // }
    // get_clip().then((str) => console.log("okunan...", str));
  });
});
