import getBlogPosts from "./get-todos";
import getBlogPost from "./get-todo";
import createBlogPost from "./create-todo";
import updateBlogPost from "./update-todo";
import deleteBlogPost from "./delete-todo";

export default {
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
