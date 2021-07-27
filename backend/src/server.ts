import express, {Request, RequestHandler, Response} from "express";
import swaggerUI from "swagger-ui-express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import specs from "./spec";
import {logger} from "./utils/logger.utils";

const app = express();
app.use(cors());
app.use(morgan("dev") as RequestHandler);
app.use(compression());
app.use(bodyParser.json() as RequestHandler);
app.use(bodyParser.urlencoded({extended:false}) as RequestHandler);
app.use(helmet() as RequestHandler);
app.use('/api-spec',swaggerUI.serve,swaggerUI.setup(specs));

app.get("*", (req: Request, res: Response) => {
  res.json({state: "Page dont exist"});
});

const main = async () => {

  app.listen(() => {

  })
};

main()
.catch((error) => {
  logger.error(error);
});
