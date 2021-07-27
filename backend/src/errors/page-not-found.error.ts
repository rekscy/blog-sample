/**
 *  Abstract class that gives the base structure of an error
 */
export default abstract class AbstractError extends Error{
  abstract errorCode: number;
  abstract message: string;

  abstract printError(): void;
  abstract getError(): void;
  abstract asHttpResponse(): void;
}
