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
        <img
          className={`leftcloud`}
          src='/static/assets/menu/menu-leftcloud.svg'
        />
        <img
          className={`thirdcloud`}
          src='/static/assets/menu/menu-leftcloud.svg'
        />
        <img
          className={`fourthcloud`}
          src='/static/assets/menu/menu-leftcloud.svg'
        />
        <img
          className={`fifthcloud`}
          src='/static/assets/menu/menu-leftcloud.svg'
        />
        <div className={`background-white`} />

        <div className={`highscore-container`}>
          <div className={`highscore-inner`}>
            <h2 className='headline'>HIGH SCORES</h2>

            <div className='first-place-wrapper'>
              <div className='first-place-container'>
                <img
                  className='cup'
                  src='/static/assets/about-highscores/cup.gif' // maybe better with sprints? need to add transparent backrgound
                />

                <div className='first-place'>
                  <div className='name'>
                    <h1>Carla</h1>
                  </div>
                  <div className='score'>
                    <h2>886</h2>
                    <img src='/static/assets/icons/icon-star.svg' />
                  </div>
                  <div className='city'>
                    <p>Berlin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='list-container'>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img
                  className='star'
                  src='/static/assets/icons/icon-star.svg'
                />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>2</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@mmmmm</h2>
                <h1 className='score'>765</h1>
                <img
                  className='star'
                  src='/static/assets/icons/icon-star.svg'
                />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>3</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img
                  className='star'
                  src='/static/assets/icons/icon-star.svg'
                />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>4</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img
                  className='star'
                  src='/static/assets/icons/icon-star.svg'
                />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>5</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@b-g</h2>
                <h1 className='score'>765</h1>
                <img
                  className='star'
                  src='/static/assets/icons/icon-star.svg'
                />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>6</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@mmmmm</h2>
                <h1 className='score'>765</h1>
                <img
                  className='star'
                  src='/static/assets/icons/icon-star.svg'
                />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>7</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@mmmmm</h2>
                <h1 className='score'>765</h1>
                <img
                  className='star'
                  src='/static/assets/icons/icon-star.svg'
                />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>8</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img
                  className='star'
                  src='/static/assets/icons/icon-star-purple.svg'
                />
                <p className='city'>Stuttgart</p>
                <h2 className='number'>9</h2>
              </div>
              <div className='list-item'>
                <h2 className='name'>@tdurand</h2>
                <h1 className='score'>765</h1>
                <img
                  className='star'
                  src='/static/assets/icons/icon-star-purple.svg'
                />
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
            background-color: white;
            overflow-y: scroll;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
            cursor: default;
          }
          .highscore-container {
            max-width: 700px;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0%;
            left: 50%;
            transform: translateX(-50%);
          }
          .highscore-inner {
            top: 0rem;
            position: absolute;
            padding-bottom: 7.1rem;
          }
          .highscore-inner .headline {
            margin-top: 2.3rem;
            margin-left: 2.9rem;
            text-align: left;
          }

          .rightcloud {
            position: absolute;
            top: -20%;
            width: 60%;
            right: -25%;
            z-index: -1;
          }
          .leftcloud {
            position: absolute;
            bottom: -15%;
            width: 80%;
            left: -5%;
            z-index: -1;
          }
          .thirdcloud {
            position: absolute;
            top: 95%;
            width: 50%;
            left: 70%;
          }
          .fourthcloud {
            position: absolute;
            top: 85%;
            width: 50%;
            left: 30%;
          }
          .fifthcloud {
            position: absolute;
            top: 90%;
            width: 60%;
            left: -10%;
          }
          .background-white {
            position: absolute;
            background-color: #4effff;
            top: 0%;
            width: 100%;
            height: 110%;
            z-index: -10;
          }

          .first-place-container {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
          }
          .first-place-wrapper {
            width: 100%;
            height: 100%;
            left: 0%;
            top: 0%;
            position: fixed;
          }

          .cup {
            margin-top: 1rem;
            width: 20rem;
            left: 50%;
            transform: translateX(-50%);
            position: relative;
          }

          .first-place {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            margin-top: -2rem;
            width: 30rem;
            height: 15rem;
          }

          .first-place .name {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 7.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ff3bff;
            animation: flashingTitle 0.1s linear infinite;
          }

          .first-place .score {
            position: absolute;
            top: 6rem;
            left: 0;
            width: 50%;
            height: 7.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .first-place .score img {
            margin-left: 0.5rem;
            margin-top: -0.2rem;
          }

          .first-place .city {
            position: absolute;
            top: 6rem;
            left: 50%;
            width: 50%;
            height: 7.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .list-container {
            width: 100%;
            margin-right: 2.9rem;
            margin-top: 90vh;
          }
          .list-item {
            width: 300px;
            float: left;
            height: 20rem;
            border-bottom: 4px solid black;
            margin-left: 2.9rem;
            margin-top: 2.9rem;
            position: relative;
          }
          .list-item .name {
            position: absolute;
            top: 1rem;
            right: 1.4rem;
            margin-top: 0;
            color: #ff3bff;
          }
          .list-item .score {
            position: absolute;
            right: 5.3rem;
            top: 4rem;
          }
          .list-item .star {
            position: absolute;
            right: 1.6rem;
            top: 8.9rem;
          }
          .list-item .city {
            position: absolute;
            bottom: 1.4rem;
            right: 1.6rem;
            margin-bottom: 0;
          }
          .list-item .number {
            position: absolute;
            left: 1.4rem;
            bottom: 1rem;
            margin-bottom: 0;
          }

          @media (max-width: 670px) {
            .list-item {
              position: relative;
              left: 50%;
              transform: translateX(-50%);
              margin-left: 0rem;
            }
          }

          @media (min-width: 500px) {
            .rightcloud {
              width: 40%;
            }
            .leftcloud {
              width: 35%;
            }
            .fifthcloud {
              top: 85%;
            }
            .list-container {
              margin-top: 90vh;
            }
            .highscore-inner .headline {
              margin-top: 2.3rem;
              text-align: center;
              margin-left: 0;
            }
          }

          @media (max-height: 400px) {
            .cup {
              width: 14rem;
              margin-top: 5rem;
            }
          }

          @keyframes flashingTitle {
            0% {
              color: #fffe4a;
            }
            50% {
              color: #ff3bff;
            }
            100% {
              color: #fffe4a;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default ScorePage
