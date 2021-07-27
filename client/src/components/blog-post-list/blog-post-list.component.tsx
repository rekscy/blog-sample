import { DateTime } from "luxon";
import React from "react";
import { useHistory } from "react-router";
import { BlogPostListProps } from "./blog-post-list.types";
import "./blog-post-list.style.css";

const BlogPostListComponent = (props: BlogPostListProps) => {
  const { blogPosts } = props;
  const history = useHistory();

  const redirectToBlogPost = (id: string) => {
    history.push(`/blog/${id}`);
  };

  return (
    <div className="blog-post-list">
      <h2>Last posts</h2>
      {blogPosts.map(({ id, title, nbrComments, content, createdAt }) => {
        return (
          <div
            data-testid="blog-post-container"
            className="blog-post-container"
            key={id}
            onClick={() => redirectToBlogPost(id)}
          >
            <div className="blog-post-header">
              <h3>{title}</h3>
            </div>
            <div className="blog-post-body">
              <p className="blog-post-content">{content}</p>
            </div>
            <div className="blog-post-footer">
              <div className="blog-post-nbr-comments">
                <i className="fas fa-comments" />
                <span>{nbrComments}</span>
              </div>
              <div className="blog-post-date">
                <i className="fas fa-calendar-alt" />
                <span>
                  {DateTime.fromMillis(createdAt)
                    .setLocale("FR-ch")
                    .toLocaleString(DateTime.DATETIME_SHORT)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPostListComponent;
