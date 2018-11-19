import React, { Component } from 'react'

class MineSweaperButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checkClick: this.check
    }
  }
  gameOverRemoveClickOption = () => {
    console.log(this.props.gameStatus)
    if (this.props.gameStatus === 'won' || this.props.gameStatus === 'lost') {
      console.log('game over')
      this.setState({
        checkClick: 'quitWorking'
      })
    }
  }
  check = () => {
    this.gameOverRemoveClickOption()
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
        <button onClick={this.state.checkClick} onContextMenu={this.flag}>
          {this.props.value}
        </button>
      </td>
    )
  }
}

export default MineSweaperButton
