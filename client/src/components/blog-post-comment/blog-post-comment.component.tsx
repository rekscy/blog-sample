import React from "react";
import { BlogPostCommentProps } from "./blog-post-comment.types";
import "./blog-post-comment.style.css";

const BlogPostComment = ({ comment }: BlogPostCommentProps) => {
  const { title, message } = comment;
  return (
    <div className="comment-wrapper">
      <h6>{title}</h6>
      <p>{message}</p>
    </div>
  );
};

export default BlogPostComment;
