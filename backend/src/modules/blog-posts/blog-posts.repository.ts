import {Router} from "express";

const BlogPostsRouter = Router();

/**
 * Get all blog posts
 */
BlogPostsRouter.get("/", async (request, response) => {

});

/**
 * Get a specific blog post by his id
 */
BlogPostsRouter.get("/:postId", async (request, response) => {

});

export default BlogPostsRouter;
