import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
const app = express();

app.use("/", routes);
app.use(bodyParser.json());

export default app;
