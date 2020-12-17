import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/pages/layout/Navbar";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";
import Footer from "./components/pages/layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/adduser" component={AddUser}></Route>
        <Route exact path="/users/:id" component={EditUser}></Route>
        <Route exact path="/userview/:id" component={ViewUser}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
