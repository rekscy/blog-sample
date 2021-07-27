import BlogPostCommentsRepository from "./blog-post-comments.repository";

export default class BlogPostCommentsService{
  static getAllCommentsByBlogPostId(postId: string) {
    return BlogPostCommentsRepository.findAllByBlogPostId(postId);
  }

  static findOneCommentsByBlogPostIdAndCommentId(postId: string, commentId: string) {
    return BlogPostCommentsRepository.findOneByPostIdAndCommentId(postId, commentId);
  }
}
