import React, { useEffect, useState } from "react";
import { store } from "react-notifications-component";
import { createNotificationFromAxiosHttpError } from "../../utils/global/global.utils";
import { BlogPost, BlogPostProps } from "./blog-post.types";
import { fetchBlogPostById } from "./blog-post.requests";
import Loader from "../loader/loader.component";
import "./blog-post.style.css";

const BlogPostComponent = ({ postId }: BlogPostProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [blogPost, setBlogPost] = useState<BlogPost>();

  useEffect(() => {
    const fetch = async () => {
      const post = await fetchBlogPostById(postId);
      setIsLoading(false);
      setBlogPost(post);
    };

    fetch().catch((e) => {
      const notification = createNotificationFromAxiosHttpError(e);
      store.addNotification(notification);
    });
  }, []);

  if (isLoading || !blogPost) {
    return <Loader />;
  }

  const { title, content } = blogPost;

  return (
    <div className="blog-post-wrapper">
      <div className="post-header">
        <h2>{title}</h2>
      </div>
      <div className="post-body">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogPostComponent;
