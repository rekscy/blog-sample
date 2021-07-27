import { Request, Response, Router } from "express";
import { body, param, validationResult } from "express-validator";
import BlogPostCommentsService from "./blog-post-comments.service";
import BadRequestError from "../../errors/bad-request.error";

const BlogPostCommentsRouter = Router();

/**
 * Create a blog post comment for a specific post.
 */
BlogPostCommentsRouter.post(
  "/:postId/comments",
  param("postId").isAlphanumeric(),
  body("title")
    .optional()
    .isString()
    .withMessage("Title must be a valid string")
    .bail(),
  body("message")
    .exists()
    .withMessage("Content must be provided")
    .bail()
    .isString()
    .withMessage("Content must be a valid string")
    .bail(),
  async (request: Request, response: Response) => {
    // Check validation errors
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      console.log(errors);
      throw new BadRequestError(errors.array());
    }

    // Create new comment
    const { postId } = request.params;
    const { title, content } = request.body;
    const newComment = BlogPostCommentsService.createNewCommentByBlogPostId(
      postId,
      {
        title,
        message: content
      }
    );
    return response.status(201).json(newComment);
  }
);

/**
 * Get blog post comments for a specific post.
 */
BlogPostCommentsRouter.get(
  "/:postId/comments",
  param("postId").isAlphanumeric(),
  async (request: Request, response: Response) => {
    // Check validation errors
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new BadRequestError(errors.array());
    }

    const comments = BlogPostCommentsService.getAllCommentsByBlogPostId(
      request.params.postId
    );
    return response.status(200).json(comments);
  }
);

/**
 * Update blog post comment by id for a specific post.
 */
BlogPostCommentsRouter.put(
  "/:postId/comments/:commentId",
  param("postId").isAlphanumeric(),
  param("commentId").isAlphanumeric(),
  body("title")
    .optional()
    .isString()
    .withMessage("Title must be a valid string")
    .bail(),
  body("message")
    .exists()
    .withMessage("Content must be provided")
    .bail()
    .isString()
    .withMessage("Content must be a valid string")
    .bail(),
  async (request: Request, response: Response) => {
    // Check validation errors
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new BadRequestError(errors.array());
    }

    // Get variables
    const { postId, commentId } = request.params;
    const { message, title } = request.body;

    // Update comment
    const updatedComment = BlogPostCommentsService.updateCommentByBlogPostId(
      postId,
      commentId,
      { message, title }
    );
    return response.status(204).json(updatedComment);
  }
);

export default BlogPostCommentsRouter;
