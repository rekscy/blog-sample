import axios from "axios";
import { config } from "../../config/config";
import { BlogPosts } from "../blog-post/blog-post.types";

/**
 * Get blog posts from server.
 */
export const fetchBlogPosts = async () => {
  const response = await axios.get<BlogPosts>("/blog-posts", {
    baseURL: config.backendApiBaseEndpoint,
  });
  return response.data;
};
