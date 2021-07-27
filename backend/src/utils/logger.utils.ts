import { createLogger, format, transports } from "winston";

const { combine } = format;

// Possible levels from the documentation
export enum LogLevel {
  ERROR = "error",
  WARNING = "warn",
  INFO = "info",
  VERBOSE = "verbose",
  DEBUG = "debug",
  SILLY = "silly"
}

/**
 * Winston instantiation to show logs in console (possible to add files to if needed).
 */
export const logger = createLogger({
  format: combine(
    format.colorize(),
    format.splat(),
    format.simple(),
    format.timestamp()
  ),
  transports: [
    new transports.Console({
      level: LogLevel.VERBOSE
    })
  ]
});
