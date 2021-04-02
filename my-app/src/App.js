import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, useCallback, useState } from "react";
import Users from "./components/menus/Users";
import Alboms from "./components/menus/Alboms";
import Navbar from "./components/Navbar";
import api from "./service/api";
import "./App.css";

export default function App() {
  const [someData, setSomeData] = useState([]);

  const getData = useCallback((path) => {
    api.get(path).then(({ data }) => setSomeData(data));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/alboms" component={Alboms} />
        <Route path="/" exact component={Navbar} />
      </Switch>
    </Router>
  );
}
