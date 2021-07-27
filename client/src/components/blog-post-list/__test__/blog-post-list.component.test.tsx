import { shallow } from "enzyme";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { postsMockedData } from "./blog-post-list.mocked-data";
import BlogPostListComponent from "./blog-post-list.component";

describe("Blog post list Component", () => {
  it("expect to render Blog post Component correctly", () => {
    expect(
      shallow(<BlogPostListComponent blogPosts={postsMockedData} />)
    ).toMatchSnapshot();
  });
  it("should go to blog post after click", async () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <BlogPostListComponent blogPosts={postsMockedData} />
      </Router>
    );
    const item = screen.getByTestId("blog-post-container");
    expect(item).toBeInTheDocument();
    userEvent.click(item);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe("/blog/abc123");
  });
});
