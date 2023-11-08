/** @format */

import express from "express";
import {getUsers, createUser, getUserById, deleteUser, updateUser} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.patch("/users/edit/:id", updateUser);
router.post("/users", createUser);
router.delete("/users/delete/:id", deleteUser);

export default router;
