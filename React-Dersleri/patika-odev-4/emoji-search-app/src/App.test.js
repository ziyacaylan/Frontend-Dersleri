import { getByText, render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  const headerTitle = screen.getByText("Emoji Search");
  expect(headerTitle).toBeInTheDocument();
});
