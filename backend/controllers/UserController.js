/** @format */

// import User from "../models/UserModel.js";
import {loadData, addData, findData, deleteData, editDatas} from "../utils/data.js";

export const getUsers = async (req, res) => {
  try {
    const response = await loadData();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await findData(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const response = await addData(req.body);
    res.status(201).json({msg: "User Created"});
  } catch (error) {
    res.status(400).json({msg: error.message});
  }
};

export const updateUser = async (req, res) => {
  try {
    const response = await editDatas(req.params.id, req.body);
    res.send(req.body);
    // res.status(200).json(req.body);
    // console.log(req.body);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const data = await findData(req.params.id);
    if (!data) {
      res.status(404);
      res.send("<h1>404</h1>");
    } else {
      const response = await deleteData(req.params.id);
      res.status(200).json(response);
      // console.log(response);
    }
  } catch (error) {
    console.log(error.message);
  }
};
