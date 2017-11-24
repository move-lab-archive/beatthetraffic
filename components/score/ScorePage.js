import React, { Component } from 'react'
import ButtonClose from '../shared/ButtonClose'

class ScorePage extends Component {
  render () {
    return (
      <div className={`highscore-page`}>
        <ButtonClose onClick={this.props.onClose} />
        <h2>HIGHSCORES</h2>
        <ol>
          <li>@mmmmm</li>
          <li>@tdurand</li>
          <li>@b-g</li>
          <li>@tdurand</li>
          <li>@tdurand</li>
          <li>@tdurand</li>
          <li>@tdurand</li>
          <li>@tdurand</li>
          <li>@tdurand</li>
          <li>@tdurand</li>
        </ol>
        <style jsx>{`
          .highscore-page {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 10;
            color: white;
            background-color: #262626;
            padding: 2.4rem;
            padding-top: 4.4rem;
            overflow: scroll;
          }
        `}</style>
      </div>
    )
  }
}

export default ScorePage
