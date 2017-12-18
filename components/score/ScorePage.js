import React, { Component } from 'react'
import ButtonClose from '../shared/ButtonClose'

// TODO handle logic of retriving scores, for now style everything static

class ScorePage extends Component {
  render () {
    return (
      <div className={`highscore-page`}>
        <ButtonClose onClick={this.props.onClose} />
        <div className={`highscore-container`}>
          <div className={`highscore-inner`}>
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
          </div>
        </div>
        <style jsx>{`
          .highscore-page {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            color: #262626;
            z-index: 10;
            background-color: white;
            overflow: scroll;
          }
          .highscore-container{
            max-width: 700px;
            width: 100%;
            height: 100%;
            position:absolute;
            top: 0%;
            left: 50%;
            transform: translateX(-50%);
          }
          .highscore-inner{
            left: 2.9rem;
            right: 2.9rem;
            top: 0rem;
            position: absolute;
          }
          .highscore-inner h2{
            margin-top: 7.1rem;
          }
        `}</style>
      </div>
    )
  }
}

export default ScorePage
