import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/users", user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter First Name"
              name="fname"
              value={user.fname}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Last Name"
              name="lname"
              value={user.lname}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
              name="address"
              value={user.address}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
