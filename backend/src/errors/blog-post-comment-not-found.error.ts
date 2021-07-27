import AbstractError from "./abstract.error";

/**
 *  Blog post comment not found error definition.
 */
export default class BlogPostCommentNotFoundError extends AbstractError {
  errorCode: number;
  message: string;

  constructor() {
    super();
    this.message = "Invalid blog post comment";
    this.errorCode = 404;

    Object.setPrototypeOf(this, BlogPostCommentNotFoundError.prototype);
  }

  /**
   *  Extract the error in a json format.
   */
  getError() {
    const { message } = this;
    return { message };
  }
}
