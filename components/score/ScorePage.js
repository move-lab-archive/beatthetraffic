import React, { Component } from 'react'
import ButtonClose from '../shared/ButtonClose'

// TODO handle logic of retriving scores, for now style everything static

class ScorePage extends Component {
  render () {
    return (
      <div className={`highscore-page`}>
        <ButtonClose onClick={this.props.onClose} />

        <img
          className={`rightcloud`}
          src='/static/assets/menu/menu-rightcloud.svg'
        />

        <div className={`highscore-container`}>
          <div className={`highscore-inner`}>
            <h2 className='headline'>HIGHSCORES</h2>
            <img
              className='cup'
              src='/static/assets/about-highscores/cup.gif'  //maybe better with sprints? need to add transparent backrgound
            />

            <div className='first-place'>
              <div className='name'>
                <h1>Carla</h1>
              </div>
              <div className='score'>
                <h2>886</h2>
                <img src='/static/assets/icons/icon-star-purple.svg' />
              </div>
              <div className='city'>
                <p>Berlin</p>
              </div>
            </div>
            <div className='list-container'>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img className='star' src='/static/assets/icons/icon-star-purple.svg' />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>2</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@mmmmm</h2>
                <h1 className='score'>765</h1>
                <img className='star' src='/static/assets/icons/icon-star-purple.svg' />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>3</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img className='star' src='/static/assets/icons/icon-star-purple.svg' />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>4</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img className='star' src='/static/assets/icons/icon-star-purple.svg' />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>5</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@b-g</h2>
                <h1 className='score'>765</h1>
                <img className='star' src='/static/assets/icons/icon-star-purple.svg' />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>6</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@mmmmm</h2>
                <h1 className='score'>765</h1>
                <img className='star' src='/static/assets/icons/icon-star-purple.svg' />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>7</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@mmmmm</h2>
                <h1 className='score'>765</h1>
                <img className='star' src='/static/assets/icons/icon-star-purple.svg' />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>8</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img className='star' src='/static/assets/icons/icon-star-purple.svg' />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>9</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img className='star' src='/static/assets/icons/icon-star-purple.svg' />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>10</h2>
              </div>
            </div>
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
            background-color: #4EFFFF;
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
            top: 0rem;
            position: absolute;
            margin-bottom: 7.1rem;
          }
          .highscore-inner .headline{
            margin-top: 7.1rem;
            margin-left: 2.9rem;
          }

          .rightcloud{
            position: absolute;
            top: 0%;
            width: 90%;
            right: 0%;
            z-index: -1;
          }

          .cup{
            margin-top: 3rem;
            width: 25rem;
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
            animation: flashingTitle 0.1s linear infinite;
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

          .first-place .score img{
            margin-left: 0.5rem;
            margin-top: -0.2rem;
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

          .list-container{
            width: 100%;
            margin-right: 2.9rem;
          }
          .list-item{
            width: 300px;
            float: left;
            height: 20rem;
            border: 4px solid black;
            margin-left: 2.9rem;
            margin-top: 2.9rem;
            position: relative;
            background-color: white;
          }
          .list-item .name{
            position: absolute;
            top: 1rem;
            right: 1.4rem;
            margin-top: 0;
            color: #FF3BFF;
          }
          .list-item .score{
            position: absolute;
            right: 4.7rem;
            top: 4rem;
          }
          .list-item .star{
            position: absolute;
            right: 1.6rem;
            top: 8.9rem;
          }
          .list-item .city{
            position: absolute;
            bottom: 1.4rem;
            right: 1.6rem;
            margin-bottom: 0;
          }
          .list-item .number{
            position: absolute;
            left: 1.4rem;
            bottom: 1rem;
            margin-bottom: 0;
          }

          @media (max-width: 670px) {

            .list-item{
              position:relative;
              left: 50%;
              transform: translateX(-50%);
              margin-left: 0rem;
              margin-right: 15rem;
            }

          }

          @keyframes flashingTitle {
            0% {
              color: #4EFFFF;
            }
            50% {
              color: #FF3BFF;
            }
            100% {
              color: #4EFFFF;
            }
          }

        `}</style>
      </div>
    )
  }
}

export default ScorePage
