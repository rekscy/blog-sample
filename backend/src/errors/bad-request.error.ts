import { ValidationError } from "express-validator";
import AbstractError from "./abstract.error";

/**
 *  Blog post comment bad request error definition.
 */
export default class BadRequestError extends AbstractError {
  errorCode: number;
  message: string;
  validationErrors: ValidationError[];

  constructor(validationErrors: ValidationError[]) {
    super();
    this.message = "Invalid parameters provided";
    this.errorCode = 400;
    this.validationErrors = validationErrors;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  /**
   *  Extract the error in a json format.
   */
  getError() {
    const { message } = this;
    return {
      message,
      errors: this.validationErrors.map((value) => {
        return {
          field: value.param,
          errorMessage: value.msg
        };
      })
    };
  }
}
