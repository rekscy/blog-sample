import BlogPostsRepository from "./blog-posts.repository";
import BlogPostNotFoundError from "../../errors/blog-post-not-found.error";

export default class BlogPostsService {
  static getAllBlogPosts() {
    return BlogPostsRepository.findAll();
  }

  static getOneBlogPostById(id: string) {
    const post = BlogPostsRepository.findOneById(id);
    if (!post) {
      throw new BlogPostNotFoundError();
    }
    return post;
  }
}
