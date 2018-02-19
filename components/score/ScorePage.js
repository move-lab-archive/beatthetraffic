import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ButtonClose from '../shared/ButtonClose'

import Button from '../shared/Button'
import { fetchHighscores } from '../../statemanagement/app/GameStateManagement'

class ScorePage extends PureComponent {
  componentWillReceiveProps (newProps) {
    // if (
    //   this.props.highscoresFetched !== newProps.highscoresFetched &&
    //   newProps.highscoresFetched === true
    // ) {
    //   if (newProps.rank) {
    //     // Scroll to rank when highscore data rendered
    //   }
    // }
  }

  componentDidMount () {
    this.props.dispatch(fetchHighscores())
  }

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
        <div className={`background-white`} />

        <div className={`highscore-container`}>
          <div className={`highscore-inner`}>
            <h2 className='headline'>HIGH SCORES</h2>
            {this.props.highscores.size === 0 &&
              this.props.isFetchingHighscores && (
                <div>Fetching highscore ....</div>
              )}
            {this.props.highscores.size === 0 &&
              this.props.highscoresFetched && <div>No highscores yet.</div>}
            {this.props.highscores.size > 0 && (
              <React.Fragment>
                <div className='first-place-wrapper'>
                  <div className='first-place-container'>
                    <img
                      className='cup'
                      src='/static/assets/about-highscores/cup.gif' // maybe better with sprints? need to add transparent backrgound
                    />

                    <div className='first-place'>
                      <div className='name'>
                        <h1>{this.props.highscores.first().get('name')}</h1>
                      </div>
                      <div className='score'>
                        <h2>{this.props.highscores.first().get('score')}</h2>
                        <img src='/static/assets/icons/icon-star.svg' />
                      </div>
                      <div className='city'>
                        <p>{this.props.highscores.first().get('city')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='list-container'>
                  {this.props.highscores
                    .filter((value, index) => index > 1)
                    .map((highscore, index) => (
                      <div
                        className={`list-item 
                        ${
                      index + 2 === parseInt(this.props.rank, 10)
                        ? 'selected'
                        : ''
                      }`}
                        key={`${index}-${highscore.get('name')}`}
                        ref={el => {
                          if (index + 2 === parseInt(this.props.rank, 10)) {
                            setTimeout(() => {
                              if (!el) {
                                return
                              }
                              el.scrollIntoView()
                            }, 200)
                          }
                        }}
                      >
                        <h2 className='name'>{highscore.get('name')}</h2>
                        <h1 className='score'>{highscore.get('score')}</h1>
                        <img
                          className='star'
                          src='/static/assets/icons/icon-star.svg'
                        />
                        <p className='city'>{highscore.get('city')}</p>
                        <h2 className='number'>{index + 2}</h2>
                      </div>
                    ))}
                  {this.props.scoreData &&
                    this.props.rank > this.props.highscores.size + 1 && (
                      <React.Fragment>
                        <div
                          className={`list-item`}
                          ref={el => {
                            setTimeout(() => {
                              if (!el) {
                                return
                              }
                              el.scrollIntoView()
                            }, 200)
                          }}
                        >
                          <div className='etcetcetc'>...</div>
                        </div>
                        <div className={`list-item selected`}>
                          <h2 className='name'>{this.props.scoreData.name}</h2>
                          <h1 className='score'>
                            {this.props.scoreData.score}
                          </h1>
                          <img
                            className='star'
                            src='/static/assets/icons/icon-star.svg'
                          />
                          <p className='city'>{this.props.scoreData.city}</p>
                          <h2 className='number'>{this.props.rank}</h2>
                        </div>
                      </React.Fragment>
                    )}
                </div>

                <h1 className='reminder'>Not on the list?</h1>
                <div className='align-center'>
                  <Button
                    medium
                    title={`Play again`}
                    onClick={() => this.props.dispatch(retry())}
                  />
                </div>
              </React.Fragment>
            )}
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
            padding-bottom: 20rem;
          }
          .highscore-inner .headline {
            margin-top: 2.3rem;
            margin-left: 2.9rem;
            text-align: left;
          }

          .rightcloud {
            position: absolute;
            top: -15%;
            width: 60%;
            right: -5%;
            z-index: -1;
          }
          .leftcloud {
            position: absolute;
            bottom: -1%;
            width: 80%;
            left: -10%;
            z-index: -1;
          }
          .thirdcloud {
            position: absolute;
            bottom: -1%;
            width: 50%;
            left: 70%;
          }
          .fourthcloud {
            position: absolute;
            bottom: -1%;
            width: 50%;
            left: 30%;
          }
          .background-white {
            position: absolute;
            background-color: #4effff;
            top: 0%;
            width: 100%;
            height: 100%;
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

          .first-place .name h1 {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-align: center;
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
            margin-top: 90vh;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-flow: row wrap;
            justify-content: center;
          }
          .list-item {
            width: 290px;
            height: 20rem;
            margin-top: 2.9rem;
            margin-left: 1.5rem;
            margin-right: 1.5rem;
            position: relative;
            background-color: rgb(240, 240, 240);
          }

          .list-item .etcetcetc {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            font-size: 5rem;
          }

          .list-item.selected {
            border: 10px solid yellow;
          }

          .list-item .name {
            position: absolute;
            top: 1rem;
            right: 1.4rem;
            margin-top: 0;
            color: #ff3bff;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 92%;
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

          .reminder {
            text-align: center;
            margin-top: 15rem;
          }

          .playagainbutton {
            position: absolute;
            left: 50%;
          }

          .align-center {
            text-align: center;
          }

          @media (min-width: 550px) {
            .rightcloud {
              width: 35%;
              right: -10%;
            }
            .leftcloud {
              width: 42%;
              left: -5%;
            }
            .thirdcloud {
              width: 42%;
              left: 60%;
              bottom: -15%;
            }
            .fourthcloud {
              width: 50%;
              left: 30%;
              bottom: -25%;
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
            .fourthcloud {
              width: 43%;
            }
          }

          @media (min-height: 800px) {
            .fourthcloud {
              bottom: -5%;
            }
            .thirdcloud {
              bottom: -5%;
            }
            .leftcloud {
              bottom: -1%;
            }
            .rightcloud {
              right: -5%;
            }
            .cup {
              width: 20rem;
              margin-top: 0rem;
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

export default connect(state => {
  return {
    highscores: state.game.get('highscores'),
    isFetchingHighscores: state.game.get('isFetchingHighscores'),
    highscoresFetched: state.game.get('highscoresFetched'),
    highscoresFetchError: state.game.get('highscoresFetchError')
  }
})(ScorePage)
