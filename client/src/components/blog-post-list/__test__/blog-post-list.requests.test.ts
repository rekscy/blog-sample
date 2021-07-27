import axios from "axios";
import { postsMockedData } from "./blog-post-list.mocked-data";
import { fetchBlogPosts } from "../blog-post-list.requests";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Blog post list requests", () => {
  it("fetch posts correctly with status 200", async () => {
    const mockedAxiosResponse = {
      status: 200,
      data: postsMockedData,
    };

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve(mockedAxiosResponse)
    );
    await expect(fetchBlogPosts()).resolves.toEqual(postsMockedData);
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
