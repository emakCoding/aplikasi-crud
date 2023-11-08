/** @format */

import express from "express";
import cors from "cors";
import UserRoute from "./routes/UseRoute.js";
// import {loadData, findData, addData} from "./utils/data.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(express.urlencoded({extended: true}));
app.set("json spaces", 4);

app.listen(5000, () => {
  console.log("server running at http://localhost:5000/users");
});
