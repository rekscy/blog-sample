import AbstractError from "./abstract.error";

/**
 *  Blog post not found error definition.
 */
export default class BlogPostNotFoundError extends AbstractError {
  errorCode: number;
  message: string;

  constructor() {
    super();
    this.message = "Invalid blog post";
    this.errorCode = 404;

    Object.setPrototypeOf(this, BlogPostNotFoundError.prototype);
  }

  /**
   *  Extract the error in a json format.
   */
  getError() {
    const { message } = this;
    return { message };
  }
}
