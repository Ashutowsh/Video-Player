import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express";
// require("dotenv").config({ path: "./env" });

dotenv.config({
  path: "./env",
});
// console.log(process.env.PORT);
const port = process.env.PORT;
const app = express();
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(port || 3000, () => {
      console.log(`Server running at ${port}`);
    });
  })
  .catch((error) => {
    console.log("Database Connection Failed : ", error);
  });

import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);
