import { DateTime } from "luxon";
import BlogPostCommentsRepository from "./blog-post-comments.repository";
import {
  BlogPostCommentDataBase,
  BlogPostCommentInput
} from "./blog-post-comments.types";
import BlogPostsService from "../blog-posts/blog-posts.service";
import { generateUniqueId } from "../../utils/gloabl.utils";
import BlogPostCommentNotFoundError from "../../errors/blog-post-comment-not-found.error";
import BlogPostsRepository from "../blog-posts/blog-posts.repository";

/**
 * Business logic for blog post comments.
 */
export default class BlogPostCommentsService {
  /** ........
   * Find every blog post by ID.
   *
   * @param {string} postId - Blog post id.
   */
  static getAllCommentsByBlogPostId(postId: string) {
    const post = BlogPostsService.getOneBlogPostById(postId);
    return BlogPostCommentsRepository.findAllByBlogPostId(post.id);
  }

  /** ........
   * Create a new blog post comment.
   *
   * @param {string} postId - Blog post id.
   * @param {BlogPostCommentInput} - - NewCommentData - Data required to create a new blog post comment.
   */
  static createNewCommentByBlogPostId(
    postId: string,
    { message, title }: BlogPostCommentInput
  ) {
    // Check that is a valid blog post
    const post = BlogPostsService.getOneBlogPostById(postId);

    // Create new comment
    const newComment: BlogPostCommentDataBase = {
      id: generateUniqueId(),
      title: title || null,
      message,
      blogPostId: post.id,
      createdAt: DateTime.now().valueOf(),
      updatedAt: null
    };

    // Save the comment
    const commentCreated =
      BlogPostCommentsRepository.insertNewBlogPostComment(newComment);

    // Update the number of comments
    /*
    I made this choice to keep a track with number of comments to prevent to query the database about comments(if it was a big project) when fetch list and improve performance
     */
    post.nbrComments++;

    BlogPostsRepository.updateBlogPostInDataBase(post);
    return commentCreated;
  }

  /** ........
   * Update an existent blog post comment.
   *
   * @param {string} postId - Blog post id.
   * @param {string} commentId - Blog post comment id.
   * @param {BlogPostCommentInput} - - NewCommentData - Data required to update the blog post comment.
   */
  static updateCommentByBlogPostId(
    postId: string,
    commentId: string,
    { message, title }: BlogPostCommentInput
  ) {
    // Check that is a valid blog post
    const post = BlogPostsService.getOneBlogPostById(postId);

    // Get the comment to update
    const comment = BlogPostCommentsRepository.findOneByPostIdAndCommentId(
      post.id,
      commentId
    );
    if (!comment) {
      throw new BlogPostCommentNotFoundError();
    }

    // update and save the comment
    comment.title = title || null;
    comment.message = message;
    return BlogPostCommentsRepository.updateBlogPostCommentInDataBase(comment);
  }
}
