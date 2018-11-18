import React, { Component } from 'react'

class MineSweaperButton extends Component {
  check = () => {
    let rowValue = this.props.row
    let columnValue = this.props.column
    this.props.checkBoard(rowValue, columnValue)
  }
  flag = event => {
    let rowValue = this.props.row
    let columnValue = this.props.column
    event.preventDefault()
    this.props.flagBoard(rowValue, columnValue)
  }
  render() {
    return (
      <td>
        <button onClick={this.check} onContextMenu={this.flag}>
          {this.props.value}
        </button>
      </td>
    )
  }
}

export default MineSweaperButton
