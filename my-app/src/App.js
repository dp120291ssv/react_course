import React, { Component } from 'react'
import './App.css'
import Contacts from './components/Contacts'

export default class App extends Component {
  render() {
    return (
      <div id='app'>
        <Contacts />
      </div>
    )
  }
}
