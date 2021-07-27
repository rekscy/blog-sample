import React, { useEffect, useState } from "react";
import { store } from "react-notifications-component";
import { createNotificationFromAxiosHttpError } from "../../utils/global/global.utils";
import BlogPostListComponent from "../../components/blog-post-list/blog-post-list.component";
import Loader from "../../components/loader/loader.component";
import { BlogPosts } from "../../components/blog-post/blog-post.types";
import { fetchBlogPosts } from "../../components/blog-post-list/blog-post-list.requests";

const BlogPostListPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [blogPostsList, setBlogPostsList] = useState<BlogPosts>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchBlogPosts();
      setIsLoading(false);
      setBlogPostsList(response);
    };

    fetch().catch((e) => {
      const notification = createNotificationFromAxiosHttpError(e);
      store.addNotification(notification);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <BlogPostListComponent blogPosts={blogPostsList} />;
};

export default BlogPostListPage;
