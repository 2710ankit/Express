import express from "express";
import userRouter from "./routes/userRoutes.js";
import { AppError } from "./utils/error-handler.util.js";
import { globalErrorHandler } from "./controllers/errorController.js";
import taskRouter from "./routes/taskRoutes.js";
import { connectDB } from "./database-connection.js";
import cors from "cors";
import { verifyToken } from "./middlewares/token-verification.middleware.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());

app.use(cors());
app.use(cookieParser())

app.use("/api/user", userRouter);
app.use("/api/tasks",verifyToken, taskRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Url ${req.originalUrl} NOT FOUND`, 404));
});

app.use(globalErrorHandler);

const port = 3001;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
connectDB();
