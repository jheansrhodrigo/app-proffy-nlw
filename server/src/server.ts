import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
console.log();
app.use(cors);
app.use(express.json());
app.use(routes);

app.listen(3333);
