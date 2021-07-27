import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "../loader.component";

describe("Loader", () => {
  it("expect to render Loader Component correctly", () => {
    render(<Loader />);
    expect(screen.getByTestId("loading-container")).toHaveTextContent(
      "Loading..."
    );
  });
});
