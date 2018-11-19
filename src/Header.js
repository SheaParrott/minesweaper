import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          <span role="img" aria-label="bomb">
            💣
          </span>
          MineSweaper
          <span role="img" aria-label="bomb">
            💣
          </span>
        </h1>
      </div>
    )
  }
}

export default Header
