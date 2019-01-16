import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Hello from "../hello";

test("It properly shows the checked status", () => {
  const { container,  getByLabelText } = render(<Hello />);

  expect(container.firstChild).toMatchSnapshot();

  const checkbox = getByLabelText(/Checkbox/);
  expect(checkbox.checked).toBe(true);

  fireEvent.click(checkbox);

  expect(container.firstChild).toMatchSnapshot();
  expect(checkbox.checked).toBe(false);
});
