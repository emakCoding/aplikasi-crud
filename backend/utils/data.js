/** @format */

// import {error} from "node:console";
// import {error} from "node:console";
import * as fs from "node:fs";
import {v4 as uuidv4} from "uuid";
uuidv4();

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/data.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadData = () => {
  const fileBuffer = fs.readFileSync("data/data.json", "utf-8");
  const datas = JSON.parse(fileBuffer);
  return datas;
};

const findData = (id) => {
  const datas = loadData();
  const data = datas.find((data) => data.id === id);
  return data;
};

const saveDatas = (datas) => {
  fs.writeFileSync("data/data.json", JSON.stringify(datas, null, 4));
};

const checkDuplicate = (email) => {
  const datas = loadData();
  return datas.find((data) => data.email === email);
};

const addData = (data) => {
  const uniqId = uuidv4();
  const datas = loadData();
  const duplicate = checkDuplicate(data.email);
  if (duplicate) {
    throw new Error("Email sudah terdaftar. Silahkan ganti alamat email!");
  } else {
    data.id = uniqId;
    datas.push(data);
    saveDatas(datas);
  }
};

const deleteData = (id) => {
  const datas = loadData();
  const filteredDatas = datas.filter((data) => data.id !== id);
  saveDatas(filteredDatas);
};

const editDatas = (id, data) => {
  const datas = loadData().map((user) => {
    if (user.id === id) {
      user.name = data.name;
      user.email = data.email;
      user.gender = data.gender;
      // console.log(email);
    }
    return user;
    // console.log(email);
  });
  // console.log(loadData());
  // console.log(datas);
  saveDatas(datas);
};

export {loadData, findData, addData, checkDuplicate, deleteData, editDatas};
