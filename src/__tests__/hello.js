import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Hello from "../hello";

test("It properly renders the component", () => {
  const { container } = render(<Hello />);

  expect(container.firstChild).toMatchSnapshot();
});
