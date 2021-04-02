import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
    return (
        <Router>
        <div id="app">
        </div>
          <Switch>
            <Route path="/">
              <Header />
              <Container />
              <Footer />
            </Route>
          </Switch>
        </Router>
    );
  }
