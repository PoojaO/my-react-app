// src/App.test.js

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title element", () => {
  render(<App />);
  const titleElement = screen.getByText(/My React App- Pooja Ojha/i);
  expect(titleElement).toBeInTheDocument();
});