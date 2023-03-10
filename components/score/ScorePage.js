import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ButtonClose from '../shared/ButtonClose'

import { fetchHighscores } from '../../statemanagement/app/GameStateManagement'
import { showCityPicker } from '../../statemanagement/app/AppStateManagement'
import { prefixURL } from '../../utils/url';

class ScorePage extends PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchHighscores())
  }

  getCityLabel(city) {
    const cityData = this.props.availableCities[city]
    if (cityData) {
      return cityData.label
    } else {
      return ''
    }
  }

  followLink(link) {
    if (link) {
      if (link.indexOf('https://') > -1 || link.indexOf('http://') > -1) {
        window.open(link, '_blank')
      } else {
        window.open(`http://${link}`, '_blank')
      }
    }
  }

  render() {
    return (
      <div className={`highscore-page`}>
        <ButtonClose onClick={this.props.onClose} />
        <h2 className='headline'>HIGH SCORES</h2>
        <img
          className={`rightcloud`}
          src={prefixURL('/static/assets/menu/menu-rightcloud.svg')}
        />
        <img
          className={`leftcloud`}
          src={prefixURL('/static/assets/menu/menu-leftcloud.svg')}
        />
        <img
          className={`thirdcloud`}
          src={prefixURL('/static/assets/menu/menu-leftcloud.svg')}
        />
        <img
          className={`fourthcloud`}
          src={prefixURL('/static/assets/menu/menu-leftcloud.svg')}
        />
        <div className={`background-white`} />

        <div className={`highscore-container`}>
          <div className={`highscore-inner`}>
            {/* {this.props.highscores.size === 0 &&
              this.props.isFetchingHighscores && <div>Loading ...</div>}
            {this.props.highscores.size === 0 &&
              this.props.highscoresFetched && <div>No highscores yet.</div>} */}
            {this.props.highscores.size > 0 && (
              <React.Fragment>
                <div className='first-place-wrapper'>
                  <div className='first-place-container'>
                    <img
                      className='cup'
                      src={prefixURL('/static/assets/about-highscores/cup.gif')} // maybe better with sprints? need to add transparent backrgound
                    />

                    <div className='first-place'>
                      <div
                        className={`name ${
                          this.props.highscores.first().get('link')
                            ? 'clickable'
                            : ''
                          }`}
                        onClick={this.followLink.bind(
                          this,
                          this.props.highscores.first().get('link')
                        )}
                      >
                        <h1>{this.props.highscores.first().get('name')}</h1>
                      </div>
                      <div className='score'>
                        <h2>{this.props.highscores.first().get('score')}</h2>
                        <img src={prefixURL('/static/assets/icons/icon-star.svg')} />
                      </div>
                      <div className='city'>
                        <p>
                          {this.getCityLabel(
                            this.props.highscores.first().get('city')
                          )}
                        </p>
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
                        <h2
                          className={`name ${
                            highscore.get('link') ? 'clickable' : ''
                            }`}
                          onClick={this.followLink.bind(
                            this,
                            highscore.get('link')
                          )}
                        >
                          {highscore.get('name')}
                        </h2>
                        <h1 className='score'>{highscore.get('score')}</h1>
                        <img
                          className='star'
                          src={prefixURL('/static/assets/icons/icon-star.svg')}
                        />
                        <p className='city'>
                          {this.getCityLabel([highscore.get('city')])}
                        </p>
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
                          <h2
                            className={`name ${
                              this.props.scoreData.link ? 'clickable' : ''
                              }`}
                            onClick={this.followLink.bind(
                              this,
                              this.props.scoreData.link
                            )}
                          >
                            {this.props.scoreData.name}
                          </h2>
                          <h1 className='score'>
                            {this.props.scoreData.score}
                          </h1>
                          <img
                            className='star'
                            src={prefixURL('/static/assets/icons/icon-star.svg')}
                          />
                          <p className='city'>
                            {this.getCityLabel(this.props.scoreData.city)}
                          </p>
                          <h2 className='number'>{this.props.rank}</h2>
                        </div>
                      </React.Fragment>
                    )}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>

        <div
          className='play-fixed-cta'
          onClick={() => {
            if (this.props.scoreData) {
              this.props.dispatch(showCityPicker())
            } else {
              window.location.href = prefixUrl('');
            }
          }}
        >
          {this.props.scoreData ? 'PLAY AGAIN' : 'PLAY GAME'}
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
            width: 100%;
          }
          .headline {
            margin-top: 1.9rem;
            margin-left: 2.3rem;
            text-align: left;
          }

          .rightcloud {
            position: absolute;
            top: 0%;
            width: 60%;
            right: 0%;
            z-index: -1;
            transform: translate(30%, -30%);
          }

          .leftcloud {
            position: absolute;
            bottom: 0%;
            width: 110%;
            left: 2%;
            z-index: -1;
            transform: translate(-30%, 30%);
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
              width: 40%;
            }
            .leftcloud {
              width: 45%;
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

          .play-fixed-cta {
            will-change: transform;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 6rem;
            background-color: #262626;
            color: white;
            font-size: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .play-fixed-cta:hover {
            background-color: #ff3bff;
          }

          .name.clickable {
            cursor: pointer;
          }

          .name.clickable:hover {
            text-decoration: underline;
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
    highscoresFetchError: state.game.get('highscoresFetchError'),
    availableCities: state.app.get('availableCities').toJS()
  }
})(ScorePage)
