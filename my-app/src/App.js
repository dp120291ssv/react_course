import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, useCallback, useState } from "react";
import Users from "./components/menus/Users";
import Albums from "./components/menus/Albums";
import Navbar from "./components/Navbar";
import api from "./service/api";
import "./App.css";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/albums" component={Albums} />
        <Route path="/" exact component={Navbar} />
      </Switch>
    </Router>
  );
}
