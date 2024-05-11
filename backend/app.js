import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddlerware } from "./error/error.js"
import reservationRoute from "./routes/reservationRoute.js"


const app = express();
dotenv.config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL] ,
    method: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRoute);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "Hello world"
  })
})

dbConnection();

app.use(errorMiddlerware);

export default app;