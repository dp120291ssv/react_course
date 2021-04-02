import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Users from "../navbar/Users";
import Alboms from "../navbar/Alboms";

export default function Navbar() {
  return (
    <Router>
      <Switch>
        <div id="navbar">
          <div id="navbar_user">Users</div>
          <Route path="users">
            <Users />
          </Route>
          <div id="navbar_alboms">Albums</div>
          <Route path="albums">
            <Alboms />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}
