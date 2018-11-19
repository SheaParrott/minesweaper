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
  }

  flag = event => {
    let rowValue = this.props.row
    let columnValue = this.props.column
    event.preventDefault()
    this.props.flagBoard(rowValue, columnValue)
  }
  addCSSToButton = () => {
    const LOOKUP = {
      '*': 'value-bomb',
      F: 'value-flag',
      '@': 'value-flagCorrect',
      ' ': 'value-covered',
      '1': 'value-1',
      '2': 'value-2',
      '3': 'value-3',
      '4': 'value-4',
      '5': 'value-5',
      '6': 'value-6',
      '7': 'value-7',
      '8': 'value-8'
    }

    return LOOKUP[this.props.value] || 'cell-exposed'
  }

  lookupValue = () => {
    let VALUES = {
      '*': '💣',
      F: '🚩',
      '@': '🏁',
      _: '_'
    }
    let foundValue = VALUES[this.props.value] || this.props.value

    return foundValue
  }
  render() {
    return (
      <td>
        <button
          className={this.addCSSToButton()}
          onClick={this.click}
          onContextMenu={this.flag}
        >
          {this.lookupValue()}
        </button>
      </td>
    )
  }
}

export default MineSweaperButton
