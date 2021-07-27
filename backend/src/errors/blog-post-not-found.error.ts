import AbstractError from "./abstract.error";

/**
 *  Page not found error definition
 */
export default class PageNotFoundError extends AbstractError{
  errorCode = 404;
  message = "This page does not exists";

  getError() {
    const {message} = this;
    return {message};
  }
}
