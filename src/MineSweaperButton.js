import React, { Component } from 'react'

class MineSweaperButton extends Component {
  click = () => {
    if (this.props.gameStatus === 'won' || this.props.gameStatus === 'lost') {
      console.log('game over')
    } else {
      let rowValue = this.props.row
      let columnValue = this.props.column
      this.props.checkBoard(rowValue, columnValue)
    }
    this.addClassToButton()
  }
  flag = event => {
    let rowValue = this.props.row
    let columnValue = this.props.column
    event.preventDefault()
    this.props.flagBoard(rowValue, columnValue)
  }
  addClassToButton = () => {
    console.log('trying')
    // if (this.props.value === '_') {
    //   return `button.blue`
    // } else {
    //   return ''
    // }
    return 'button.blue'
  }
  render() {
    return (
      <td>
        <button
          className={this.addClassToButton}
          onClick={this.click}
          onContextMenu={this.flag}
        >
          {this.props.value}
        </button>
      </td>
    )
  }
}

export default MineSweaperButton
