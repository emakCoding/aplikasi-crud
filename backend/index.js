/** @format */

import express from "express";
import cors from "cors";
import UserRoute from "./routes/UseRoute.js";
// import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => {
  console.log("server running at http://localhost:5000");
});
// import("dotenv").config("./.env");
// const mysql = import("mysql2");

// const connection = mysql.createConnection(process.env.DATABASE_URL);
// console.log("Connected to PlanetScale!");
// connection();
