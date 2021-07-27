import { act, render, waitFor } from "@testing-library/react";
import React from "react";
import axios from "axios";
import { postsMockedData } from "../../../components/blog-post-list/__test__/blog-post-list.mocked-data";
import BlogPostListPage from "../blog-post-list.page";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Blog post list", () => {
  it(" renders the page correctly", async () => {
    const mockedAxiosResponse = {
      status: 200,
      data: postsMockedData,
    };

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve(mockedAxiosResponse)
    );
    const { getAllByTestId } = await waitFor(() =>
      render(<BlogPostListPage />)
    );

    expect(getAllByTestId("blog-post-container").length).toEqual(1);
  });
});
