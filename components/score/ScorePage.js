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
            <h2 className='headline'>HIGHSCORES</h2>
            <img
              className='cup'
              src='/static/assets/about-highscores/cup.svg'
            />
            <div className='first-place'>
              <div className='name'>
                <h1>Carla</h1>
              </div>
              <div className='score'>
                <h2>886</h2>
              </div>
              <div className='city'>
                <p>Berlin</p>
              </div>
            </div>
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
        <img
          className='cloud-1'
          src='/static/assets/about-highscores/cloud-1.svg'
        />
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
          .highscore-inner .headline{
            margin-top: 7.1rem;
          }

          .cup{
            margin-top: 3rem;
            width: 15rem;
            left: 50%;
            transform: translateX(-50%);
            position:relative;
          }

          .first-place{
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 2rem;
            width: 30rem;
            height: 15rem;
          }

          .first-place .name{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 7.5rem;
            display:flex;
            justify-content:center;
            align-items:center;
            color: #FF3BFF;
          }

          .first-place .score{
            position: absolute;
            top: 7.5rem;
            left: 0;
            width: 50%;
            height: 7.5rem;
            display:flex;
            justify-content:center;
            align-items:center;
          }

          .first-place .city{
            position: absolute;
            top: 7.5rem;
            left: 50%;
            width: 50%;
            height: 7.5rem;
            display:flex;
            justify-content:center;
            align-items:center;
          }

          .cloud-1{
            position: absolute;
            top: 0%;
            width: 60%;
            right: 0%;
            z-index: -1;
            transition: 1.2s cubic-bezier(0.19, 1, 0.22, 1);
          }

          @media (min-width: 600px) {

            .cloud-1{
              width: 40%;
            }

          }
        `}</style>
      </div>
    )
  }
}

export default ScorePage
