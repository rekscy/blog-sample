import AbstractError from "./abstract.error";

/**
 *  Page not found error definition
 */
export default class BlogPostNotFoundError extends AbstractError{
  errorCode = 404;
  message = "Invalid blog post";

  getError() {
    const {message} = this;
    return {message};
  }
}
