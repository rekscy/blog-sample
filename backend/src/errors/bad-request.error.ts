import AbstractError from "./abstract.error";
import {ValidationError} from "express-validator";

/**
 *  Blog post comment bad request error definition
 */
export default class BlogPostCommentBadRequestError extends AbstractError{
  errorCode: number;
  message: string;
  validationErrors: ValidationError[];

  constructor(validationErrors: ValidationError[]) {
    super();
    this.message = "Invalid parameters provided";
    this.errorCode = 400;
    this.validationErrors = validationErrors;

    Object.setPrototypeOf(this, BlogPostCommentBadRequestError.prototype);
  }

  /**
   *  Extract the error in a json format
   */
  getError() {
    const {message} = this;
    return {
      message,
      errors: this.validationErrors.map(value => {
        return {
          field: value.param,
          errorMessage: value.msg,
        };
      })
    };
  }
}
