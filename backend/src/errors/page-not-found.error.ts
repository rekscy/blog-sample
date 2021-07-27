import AbstractError from "./abstract.error";

/**
 *  Page not found error definition.
 */
export default class PageNotFoundError extends AbstractError {
  errorCode: number;
  message: string;

  constructor() {
    super();
    this.message = "This page does not exist";
    this.errorCode = 404;

    Object.setPrototypeOf(this, PageNotFoundError.prototype);
  }

  /**
   *  Extract the error in a json format.
   */
  getError() {
    const { message } = this;
    return { message };
  }
}
