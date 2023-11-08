/** @format */

import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://backend-crud-khaki.vercel.app/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen  flex flex-col justify-center items-center gap-5 ">
        <Link
          to={`add`}
          className="py-1 px-2 bg-slate-400 rounded-md">
          ADD NEW
        </Link>
        <table className="w-[800px] table-auto border-collapse">
          <thead>
            <tr>
              <th className="borderTable">No.</th>
              <th className="borderTable">Name</th>
              <th className="borderTable">Email</th>
              <th className="borderTable">Gender</th>
              <th className="borderTable">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="borderTable">
                <td className="borderTable text-center">{index + 1}</td>
                <td className="borderTable">{user.name}</td>
                <td className="borderTable">{user.email}</td>
                <td className="borderTable">{user.gender}</td>
                <td className="flex justify-evenly">
                  <Link
                    to={`/edit/${user.id}`}
                    // onClick={() => updateUser(user.email)}
                    className="px-3 py-1  bg-slate-400 rounded-md">
                    EDIT
                  </Link>
                  <button
                    // to={`/${user.email}`}
                    onClick={() => deleteUser(user.id)}
                    className="px-3 py-1  bg-slate-400 rounded-md">
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
