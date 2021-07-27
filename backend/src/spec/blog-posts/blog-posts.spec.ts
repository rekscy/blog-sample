const getBlogPosts = require('./get-todos');
const getBlogPost = require('./get-todo');
const createBlogPost = require('./create-todo');
const updateBlogPost = require('./update-todo');
const deleteBlogPost = require('./delete-todo');

module.exports = {
  paths:{
    '/todos':{
      ...getBlogPosts,
      ...createBlogPost
    },
    '/todos/{id}':{
      ...getBlogPost,
      ...updateBlogPost,
      ...deleteBlogPost
    }
  }
}
