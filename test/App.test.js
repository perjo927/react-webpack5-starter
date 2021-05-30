/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../src/components/App.jsx";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders 'Hello'", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe("Hello");
});
