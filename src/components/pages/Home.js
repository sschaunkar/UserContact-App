import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Home = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    window.location.reload(false);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>Welcome To Contact App</h2>
        <table className="table table-striped table-dark">
          <thead className="thead-dark">
            <tr>
              <th scope="col">SrNo.</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/userview/${user._id}`}>
                    <VisibilityIcon />
                  </Link>

                  <Link to={`/users/${user._id}`}>
                    <EditIcon />
                  </Link>
                  <Link to="" onClick={() => deleteUser(user._id)}>
                    <DeleteIcon />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
