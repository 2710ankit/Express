import express from "express";
import userRouter from "./routes/userRoutes.js";

import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", userRouter);

const port = 3001;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
