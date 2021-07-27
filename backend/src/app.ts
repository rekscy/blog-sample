import express, { RequestHandler } from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import specs from "./spec";
import { errorHandler } from "./middlewares/error-handler.middleware";
import PageNotFoundError from "./errors/page-not-found.error";
import BlogPostsRouter from "./modules/blog-posts/blog-posts.router";
import BlogPostCommentRouter from "./modules/blog-post-comments/blog-post-comments.router";

const app = express();
app.use(cors());
app.use(morgan("dev") as RequestHandler);
app.use(compression());
app.use(bodyParser.json() as RequestHandler);
app.use(bodyParser.urlencoded({ extended: false }) as RequestHandler);
app.use(helmet() as RequestHandler);

app.use("/api-spec", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/blog-posts", BlogPostsRouter);
app.use("/blog-posts", BlogPostCommentRouter);
app.all("*", async () => {
  throw new PageNotFoundError();
});

app.use(errorHandler);

export { app };
