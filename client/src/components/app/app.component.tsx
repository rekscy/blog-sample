import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BlogPostListPage from "../../pages/blog-post-list/blog-post-list.page";
import BlogPostPage from "../../pages/blog-post/blog-post.page";
import "./app.style.css";

const AppComponent = () => {
  return (
    <div className="app-wrapper">
      <h1>TX MINI BLOG</h1>
      <Router>
        <Switch>
          <Route exact path="/blog">
            <BlogPostListPage />
          </Route>
          <Route path="/blog/:postId">
            <BlogPostPage />
          </Route>
          <Route render={() => <Redirect to="/blog" />} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppComponent;
