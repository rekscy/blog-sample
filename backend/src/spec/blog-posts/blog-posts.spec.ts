import getBlogPosts from "./get-blog-posts.spec";
import getBlogPost from "./get-blog-post.spec";
import getBlogPostComments from "./get-blog-post-comments.spec";
import createBlogPostComment from "./create-blog-post-comment.spec";
import updateBlogPostComment from "./update-blog-post-comment.spec";

export default {
  paths: {
    "/blog-posts": {
      ...getBlogPosts
    },
    "/blog-posts/{postId}": {
      ...getBlogPost
    },
    "/blog-posts/{postId}/comments": {
      ...createBlogPostComment,
      ...getBlogPostComments
    },
    "/blog-posts/{postId}/comments/{commentId}": {
      ...updateBlogPostComment
    }
  }
};
