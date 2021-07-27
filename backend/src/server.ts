import { app } from "./app";
import FakeDataBase from "./fake-database/fake-database.class";
import { logger } from "./utils/logger.utils";
import { config } from "./config/config";

const main = async () => {
  // Reset the database if needed
  FakeDataBase.db.resetData();
  const { port } = config.server;

  app.listen(port, () => {
    logger.info(`Server listening in port ${port}`);
  });
};

// Catch process errors
main().catch((error) => {
  logger.error(error);
});
