import dotenv from "dotenv";
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || "development",
  server: {
    hostName: process.env.SERVER_HOSTNAME || "localhost",
    port: process.env.SERVER_PORT || 3000,
  }
};
