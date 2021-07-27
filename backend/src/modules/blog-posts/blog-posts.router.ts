import { Request, Response, Router } from "express";
import { param, validationResult } from "express-validator";
import BlogPostsService from "./blog-posts.service";
import BadRequestError from "../../errors/bad-request.error";

const BlogPostsRouter = Router();

/**
 * Get all blog posts.
 */
BlogPostsRouter.get("/", async (request, response) => {
  const posts = BlogPostsService.getAllBlogPosts();
  return response.status(200).json(posts);
});

/**
 * Get a specific blog post by his id.
 */
BlogPostsRouter.get(
  "/:postId",
  param("postId").isAlphanumeric(),
  async (request: Request, response: Response) => {
    // Check validation errors
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new BadRequestError(errors.array());
    }

    const post = BlogPostsService.getOneBlogPostById(request.params.postId);
    response.status(200).json(post);
  }
);

export default BlogPostsRouter;
