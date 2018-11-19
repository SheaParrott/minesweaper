import React, { Component } from 'react'
import Axios from 'axios'
import MineSweaperButton from './MineSweaperButton'

class MineSweaperBoard extends Component {
  url = 'https://minesweeper-api.herokuapp.com'

  constructor(props) {
    super(props)

    this.state = {
      game: {
        id: 'XX',
        board: [
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ],
        state: 'Click to start Game',
        mines: 'XX'
      }
    }
  }
  changeTextOnGameStatus = () => {
    // won/loss display text to play again
    // make game not playable still after loss or win
  }
  gameNumber = () => {
    Axios.post(`${this.url}/games`).then(Response => {
      console.log(Response.data)

      this.setState({
        game: Response.data
      })
    })
  }

  checkBoard = (row, column) => {
    Axios.post(`${this.url}/games/${this.state.game.id}/check`, {
      row: row,
      col: column
    }).then(Response => {
      console.log(Response.data)
      this.setState({
        game: Response.data
      })
    })
  }
  flagBoard = (row, column) => {
    console.log('flagBoardTest')
    Axios.post(`${this.url}/games/${this.state.game.id}/flag`, {
      row: row,
      col: column
    }).then(Response => {
      console.log(Response.data)
      this.setState({
        game: Response.data
      })
    })
  }
  render() {
    return (
      <div>
        <h3>{this.state.game.state}</h3>
        <button className="newGame" onClick={this.gameNumber}>
          NEW GAME!
        </button>
        <p>Mines Left: {this.state.game.mines}</p>
        <table className="board">
          <tbody>
            {this.state.game.board.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {row.map((value, colIndex) => {
                    return (
                      <MineSweaperButton
                        key={colIndex}
                        value={value}
                        row={rowIndex}
                        column={colIndex}
                        checkBoard={this.checkBoard}
                        flagBoard={this.flagBoard}
                        gameStatus={this.state.game.state}
                      />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <p className="gameNumberDisplayed">game # {this.state.game.id} </p>
      </div>
    )
  }
}

export default MineSweaperBoard

//
// Need onclick for check and flag
//    - needs to set the new state
//
// if game is loss remove event listener
//
//
//
//
//
//
//
//
//
//
