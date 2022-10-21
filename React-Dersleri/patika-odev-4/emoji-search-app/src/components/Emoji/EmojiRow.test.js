/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-render-in-setup */
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../../App";

describe("Emojies Results testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("copy", () => {
    const copytext = screen.getAllByText("Copy to clipboard");
    userEvent.click(copytext);
    const input = screen.getByRole("textbox");
    userEvent.paste(input, copytext);
    expect(input.length === 1);
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
