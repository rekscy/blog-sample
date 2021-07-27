import FakeDataBase from "../../fake-database/fake-database.class";

export default class BlogPostsRepository {
  static BLOG_POST_COLLECTION = "blog_posts";

  static findAll() {
    return FakeDataBase.db
      .getCollection(BlogPostsRepository.BLOG_POST_COLLECTION)
      .findAll();
  }

  static findOneById(id: string) {
    const [result] = FakeDataBase.db
      .getCollection(BlogPostsRepository.BLOG_POST_COLLECTION)
      .findWhereRowEquals("id", id);

    return result || null;
  }
}
