import { useHistory, useParams } from "react-router";
import React from "react";
import BlogPostComponent from "../../components/blog-post/blog-post.component";
import BlogPostCommentListComponent from "../../components/blog-post-comment-list/blog-post-comment-list.component";
import "./blog-post.style.css";

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const history = useHistory();

  const redirectToList = () => {
    history.push(`/`);
  };

  return (
    <div className="blog-post-page-wrapper">
      <div className="btn-back-container" onClick={() => redirectToList()}>
        <i className="fa fa-arrow-left" />
      </div>
      <BlogPostComponent postId={postId} />
      <BlogPostCommentListComponent postId={postId} />
    </div>
  );
};

export default BlogPostPage;
