import dotenv from "dotenv";

dotenv.config();

export const config = {
  env: process.env.NODE_ENV || "development",
  server: {
    hostName: process.env.SERVER_HOSTNAME || "127.0.0.1",
    port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 4000
  }
};
