import * as util from "util";
import logger from "./logger.utils";
import AbstractError from "../errors/abstract.error";

export default {
  /**
   * Write an error in the logs
   * @param {AbstractError} error - Error to log.
   */
  logError(error: AbstractError) {
    logger.error(error.getError());
  },

  /**
   * Allow to show in the console nodejs objects (any being used because we can't know the types before, and the code should not remain, only for debug purposes)
   * @param {any} object - Any parameter that we want to inspect.
   */
  debug(object: any) {
    console.log(util.inspect(object, { showHidden: false, depth: null }));
  }
};
