import connectDB from "./db/index.js";
import dotenv from "dotenv";
// require("dotenv").config({ path: "./env" });

dotenv.config({
  path: "./env",
});
// console.log(process.env.PORT);
connectDB();
