import { DateTime } from "luxon";
import FakeDataBase from "../../fake-database/fake-database.class";
import { BlogPostDataBase } from "./blog-posts.types";

/**
 * Database layer for blog post.
 */
export default class BlogPostsRepository {
  static BLOG_POST_COLLECTION = "blog_posts";

  /**
   * Fake search function to search every blog posts.
   */
  static findAll() {
    return FakeDataBase.db
      .getCollection(BlogPostsRepository.BLOG_POST_COLLECTION)
      .findAll() as BlogPostDataBase[];
  }

  /** ........
   * Fake search function to simulate the search of one blog post by id
   *
   * @param {string} postId - blog post id.
   */
  static findOneById(postId: string) {
    const [result] = FakeDataBase.db
      .getCollection(BlogPostsRepository.BLOG_POST_COLLECTION)
      .findWhereRowEquals([
        { rowKey: "id", rowValue: postId }
      ]) as BlogPostDataBase[];

    return result || null;
  }

  /** ........
   * Fake update function to simulate the store in database
   *
   * @param {BlogPostDataBase} updatedBlogPost - blog post object to be updated.
   */
  static updateBlogPostInDataBase(updatedBlogPost: BlogPostDataBase) {
    updatedBlogPost.updatedAt = DateTime.now().valueOf();
    FakeDataBase.db.save();
    return updatedBlogPost;
  }
}
