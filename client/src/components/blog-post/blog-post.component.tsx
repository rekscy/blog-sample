import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogPostListPage from "../../pages/blog-post-list/blog-post-list.page";
import BlogPostPage from "../../pages/blog-post/blog-post.page";
import './app.style.css';

const AppComponent = () => {
  return (
    <div className="app-wrapper">
      <h1>TIAGO'S MINI BLOG</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <BlogPostListPage />
          </Route>
          <Route path="/blog/:postId">
            <BlogPostPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default AppComponent;
