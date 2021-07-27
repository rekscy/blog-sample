import { DateTime } from "luxon";
import FakeDataBase from "../../fake-database/fake-database.class";
import { BlogPostCommentDataBase } from "./blog-post-comments.types";

/**
 * Database layer for blog post comments.
 */
export default class BlogPostCommentsRepository {
  static BLOG_POST_COMMENT_COLLECTION = "blog_posts_comments";

  /** ........
   * Find every blog post by ID.
   *
   * @param {string} postId - Blog post id.
   */
  static findAllByBlogPostId(postId: string) {
    return FakeDataBase.db
      .getCollection(BlogPostCommentsRepository.BLOG_POST_COMMENT_COLLECTION)
      .findWhereRowEquals([
        { rowKey: "blogPostId", rowValue: postId }
      ]) as BlogPostCommentDataBase[];
  }

  /** ........
   * Find one comment by his id and his post id.
   *
   * @param {string} postId - Blog post id.
   * @param {string} commentId - Blog post comment id.
   */
  static findOneByPostIdAndCommentId(postId: string, commentId: string) {
    const [result] = FakeDataBase.db
      .getCollection(BlogPostCommentsRepository.BLOG_POST_COMMENT_COLLECTION)
      .findWhereRowEquals([
        { rowKey: "blogPostId", rowValue: postId },
        { rowKey: "id", rowValue: commentId }
      ]) as BlogPostCommentDataBase[];

    return result || null;
  }

  /** ........
   * Allow to save a new blog post comment in the database.
   *
   * @param {BlogPostCommentDataBase} newComment - Blog post object to be created.
   */
  static insertNewBlogPostComment(newComment: BlogPostCommentDataBase) {
    FakeDataBase.db
      .getCollection(BlogPostCommentsRepository.BLOG_POST_COMMENT_COLLECTION)
      .rows.push(newComment);
    FakeDataBase.db.save();

    return newComment;
  }

  /** ..................
   * Allow to update an existing blog post comment in the database.
   *
   * @param {BlogPostCommentDataBase} updatedComment - Blog post object to be updated.
   */
  static updateBlogPostCommentInDataBase(
    updatedComment: BlogPostCommentDataBase
  ) {
    updatedComment.updatedAt = DateTime.now().valueOf();
    FakeDataBase.db.save();

    return updatedComment;
  }
}
