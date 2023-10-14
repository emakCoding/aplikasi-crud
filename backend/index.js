/** @format */

import express from "express";
import cors from "cors";
import UserRoute from "./routes/UseRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => {
  console.log("server running at http://localhost:5000");
});
