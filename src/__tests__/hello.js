import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Hello from "../hello";

test("It properly renders the component", () => {
  const { container } = render(<Hello />);
  fireEvent.mouseMove(container.querySelector('.playground'), {
    clientX: 5,
    clientY: 10,
  });

  expect(container.firstChild).toMatchSnapshot();

  fireEvent.mouseMove(container.querySelector('.playground'), {
    clientX: 5,
    clientY: 10,
    pageX: 5,
    pageX: 10,
    offsetX: 2,
    offsetY: 7,
  });

  expect(container.firstChild).toMatchSnapshot();
});
