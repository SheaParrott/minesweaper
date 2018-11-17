import React, { Component } from 'react'
import mineTest from './mineTest.json'
import MineSweaperButton from './MineSweaperButton'

class MineSweaperRow extends Component {
  render() {
    return (
      <div className="mineSweaperRow">
        {this.props.row.map(value => (
          <MineSweaperButton value={value} />
        ))}
        <MineSweaperButton />
      </div>
    )
  }
}

export default MineSweaperRow

// goal going to make the row with map for each row
