/** @format */

import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-crud-khaki.vercel.app/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response.data.msg);
      }
    }
  };

  return (
    <div className="w-full h-screen  flex justify-center items-center ">
      <div className="w-[500px] flex flex-col gap-3 border border-slate-500 px-10 py-10 rounded-md">
        <form onSubmit={saveUser}>
          <div className="flex flex-col items-start">
            <label htmlFor="name">Name :</label>
            <input
              className="inputStyle"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="name">Email :</label>
            <input
              className="inputStyle"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="name">Gender :</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="py-1 px-2 rounded-md bg-slate-300"
              name="gender"
              id="">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-36 mt-5 bg-slate-400 rounded-md py-2 px-1 text-white">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
