import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    address: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/userview/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {user._id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">First Name: {user.fname}</li>
        <li className="list-group-item">Last Name: {user.lname}</li>
        <li className="list-group-item">Address: {user.address}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
      </ul>
    </div>
  );
};

export default ViewUser;
