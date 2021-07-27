import React, {useEffect, useState} from "react";
import {createNotificationFromAxiosHttpError} from "../../utils/global/global.utils";
import {store} from "react-notifications-component";
import {BlogPostCommentListListProps, BlogPostComments} from "./blog-post-comment-list-list.types";
import './blog-post-comment-list.style.css';
import Loader from "../loader/loader.component";
import {fetchBlogPostCommentsByBlogPostId} from "../blog-post/blog-post.requests";

const BlogPostCommentListComponent = ({postId}: BlogPostCommentListListProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [blogPostComments, setBlogPostComments] = useState<BlogPostComments>([]);

  useEffect(() => {
    const fetch = async () => {
      const comments = await fetchBlogPostCommentsByBlogPostId(postId)
      setIsLoading(false);
      setBlogPostComments(comments);
    }

    fetch().catch(e => {
      const notification = createNotificationFromAxiosHttpError(e);
      store.addNotification(notification);
    });
  }, []);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className="blog-post-comment-list-wrapper">
      <h3>Comments ({blogPostComments.length})</h3>
      {blogPostComments.map(({title, content}) => {
        return (
          <div>
            <div>{title}</div>
            <div>{content}</div>
            <div>{content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogPostCommentListComponent;
