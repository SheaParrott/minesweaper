import React, { Component } from 'react'

class MineSweaperButton extends Component {
  render() {
    return (
      <div>
        <button>{this.props.value}</button>
      </div>
    )
  }
}

export default MineSweaperButton
