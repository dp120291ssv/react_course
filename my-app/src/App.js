import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Router>
          <Switch>
            <Route path="/">
              <Header />
              <Container />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
