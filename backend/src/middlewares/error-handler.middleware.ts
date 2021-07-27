import { NextFunction, Request, Response } from "express";
import AbstractError from "../errors/abstract.error";
import { logger } from "../utils/logger.utils";

/** .........
 * Handler to send errors to http client in a normalized way.
 *
 * @param {AbstractError | Error} error - Error raised.
 * @param {Request} request - Express request.
 * @param {Response} response - Express response.
 * @param {NextFunction} next - Express next function.
 */
export const errorHandler = (
  error: AbstractError | Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (response.headersSent) {
    return next(error);
  }
  if (error instanceof AbstractError) {
    const { errorCode } = error;
    response.status(errorCode).json(error.getError());
  } else {
    logger.error(`An error has occurred: ${error.message}`);
    response.status(500).json({
      message: "An unknown error has occurred while performing the action"
    });
  }
};
