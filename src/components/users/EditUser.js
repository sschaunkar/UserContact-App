import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams(); //destructring
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loadUser = async () => {
    const result = await Axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
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
          <button className="btn btn-success btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
