import React, { Component } from 'react'
import MineSweaperRow from './MineSweaperRow'
import mineTest from './mineTest'

class MineSweaperBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: {
        id: 1,
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
        state: 'new',
        mines: 10
      }
    }
  }
  gameNumber = () => {
    // fetch or axios url
    // set state of game.id
  }
  render() {
    return (
      <div>
        <button className="newGame" onClick={this.gameNumber}>
          New Game!
        </button>
        <p>We are playing game number {this.state.game.id} </p>
        {this.state.game.board.map((row, index) => (
          <MineSweaperRow key={index} row={row} />
        ))}
      </div>
    )
  }
}

// render() {
//   React.createElement('div', null, [
//     React.createElement('button', { classNAme: "newGame"}, "New Game!"),
//     React.createElement('p', null, `We are playing game number ${this.state.game.id}`),
//     [
//       React.createElement(MineSweaperRow, {key: 0, row: [' ', ' ', ' ', ...]}),
//       React.createElement(MineSweaperRow, {key: 0, row: [' ', ' ', ' ', ...]})
//     ]
//   ])
// }
// OnContextMenu .. learn how to make menu not show prevent default

export default MineSweaperBoard
