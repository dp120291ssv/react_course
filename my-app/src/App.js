import React, { Component } from 'react'
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div id='app'>
        <Header/>
        <Container/>
        <Footer/>
      </div>
    )
  }
}
