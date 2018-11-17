import React, { Component } from 'react'
import './App.css'
import MineSweaperBoard from './MineSweaperBoard'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MineSweaperBoard />
      </div>
    )
  }
}

export default App
