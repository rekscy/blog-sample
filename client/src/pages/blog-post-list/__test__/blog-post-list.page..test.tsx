import {act, render} from "@testing-library/react";

describe("Blog post list", () => {
  it(" renders the page", () => {
    act(() => {
      render(<Hello />, container);
    });
    expect(container.textContent).toBe("Salut, étranger");

    act(() => {
      render(<Hello name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Bonjour, Jenny !");

    act(() => {
      render(<Hello name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Bonjour, Margaret !");
});
