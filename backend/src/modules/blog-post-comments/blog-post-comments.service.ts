import FakeDataBase from "../../fake-database/fake-database.class";
import BlogPostsRepository from "./blog-posts.repository";

export default class BlogPostsService{
  static getAllBlogPosts() {
    return BlogPostsRepository.findAll();
  }

  static getOneBlogPostById(id: string) {
    return BlogPostsRepository.findOneById(id);
  }
}
