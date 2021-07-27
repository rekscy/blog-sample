import axios from "axios";
import { config } from "../../config/config";
import { BlogPost, BlogPosts } from "./blog-post.types";
import { BlogPostComments } from "../blog-post-comment-list/blog-post-comment-list.types";

/** ........
 * Get blog posts from server.
 *
 * @param {string} postId - Blog post id.
 */
export const fetchBlogPostById = async (postId: string) => {
  const response = await axios.get<BlogPost>(`/blog-posts/${postId}`, {
    baseURL: config.backendApiBaseEndpoint,
  });
  return response.data;
};

/** ........
 * Get blog posts comments.
 *
 * @param {string} postId - Blog post id.
 */
export const fetchBlogPostCommentsByBlogPostId = async (postId: string) => {
  const response = await axios.get<BlogPostComments>(
    `/blog-posts/${postId}/comments`,
    {
      baseURL: config.backendApiBaseEndpoint,
    }
  );
  return response.data;
};

/** ........
 * Get create blog posts comment.
 *
 * @param {string} postId - Blog post id.
 */
export const createCommentWithBlogPostId = async (postId: string) => {
  const response = await axios.get<BlogPosts>(
    `/blog-posts/${postId}/comments`,
    {
      baseURL: config.backendApiBaseEndpoint,
    }
  );
  return response.data;
};

/** ........
 * Update blog posts comment.
 *
 * @param {string} postId - Blog post id.
 * @param {string} commentId - Blog post comment id.
 */
export const updateCommentWithBlogPostId = async (
  postId: string,
  commentId: string
) => {
  const response = await axios.get<BlogPosts>(
    `/blog-posts/${postId}/comments/${commentId}`,
    {
      baseURL: config.backendApiBaseEndpoint,
    }
  );
  return response.data;
};
