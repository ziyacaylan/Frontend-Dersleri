/* eslint-disable testing-library/no-render-in-setup */
import { getByText, render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import Counter from ".";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    console.log("Her testten önce çalışacağım...!");
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
  });

  beforeAll(() => console.log("Bir kere çalışacağım...!"));
  afterEach(() => {
    console.log("Her testten sonra bir kere çalışacağım...");
  });
  afterAll(() => console.log("En son bir kere çalışacağım..."));

  test("increase btn", () => {
    useEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    useEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("1");
  });
});
