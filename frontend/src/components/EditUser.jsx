/** @format */

import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  // const [id, setId] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getUserById(id);
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
      console.log(name);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  return (
    <div className="w-full h-screen  flex justify-center items-center ">
      <div className="w-[500px] flex flex-col gap-3 border border-slate-500 px-10 py-10 rounded-md">
        <form onSubmit={updateUser}>
          <div className="flex flex-col items-start">
            <label htmlFor="name">Name :</label>
            <input
              className="inputStyle"
              type="text"
              value={name}
              required
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="email">Email :</label>
            <input
              className="inputStyle"
              type="email"
              placeholder="Email"
              value={email}
              required
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="gender">Gender :</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="py-1 px-2 rounded-md bg-slate-300"
              name="gender"
              id="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button
            type="submit"
            to={`/`}
            className="w-36 mt-5 bg-slate-400 rounded-md py-2 px-1 text-white">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
