/* eslint-disable testing-library/no-render-in-setup */
import { getByText, render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import Todo from ".";

describe("Todo Testleri", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });

  test("Input ve button dokümanda bulunmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("inputa string girilip butobna basılınca listeye eklenmeli", () => {
    // inputu doldur
    const name = "Mehmet";
    useEvent.type(input, name);

    //butona tıkla
    useEvent.click(button);
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
