/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-render-in-setup */
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../../App";
import EmojiRow from "./EmojiRow";

describe("Emojies Results testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("copies all codes to clipboard when clicked", async () => {
    //const user = userEvent.setup();

    const click = screen.getAllByTestId("row");
    const copytext = screen.getAllByText("Copy to clipboard");
    const readText = navigator.readText().then((data) => data.symbol);
    expect(readText).toBeGreaterThan(0);
    //await user.click(copyButton);
    // const clipboardText = await navigator.clipboard.readText();
    // expect(clipboardText).toBe("bla bla bla");
  });

  // test("Copying emoji should work successfully", () => {
  // const click = screen.getAllByTestId("row");
  // expect(click[0]).toHaveAttribute("data-clipboard-text");
  // const copytext = screen.getAllByText("Copy to clipboard");
  // fireEvent.change(copytext, { target: { value: "smile" } });
  //const input = screen.getByRole("textbox");
  //userEvent.paste(input, copytext);
  //expect(input.length === 1);
  //   jest.spyOn(navigator.clipboard, "writeText");
  //   beforeAll(() => {
  //     // yourImplementationThatWouldInvokeClipboardWriteText();
  //   });
  //   it("should call clipboard.writeText", () => {
  //     expect(navigator.clipboard.writeText).toHaveBeenCalledWith("smile");
  //   });
  // });
});
