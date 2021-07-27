/**
 *  Abstract class that gives the base structure of an error.
 */
export default abstract class AbstractError extends Error {
  abstract errorCode: number;
  abstract message: string;

  /**
   *  Extract the error in a json format.
   */
  abstract getError(): {
    message: string;
  };
}
