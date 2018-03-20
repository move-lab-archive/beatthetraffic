import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'

import Button from '../../../shared/Button'
import ChangeCityButton from '../../../shared/ChangeCityButton'

import { retry } from '../../../../statemanagement/app/GameStateManagement'

import SoundsManager from '../../../../statemanagement/app/SoundsManager'

import PopUpAddScore from '../../../shared/PopUpAddScore'

import ScorePage from '../../../score/ScorePage'

import {
  blockCanvasScrolling,
  restoreCanvasScrolling
} from '../../../../statemanagement/app/ViewportStateManagement'
import ScoreBox from './shared/ScoreBox'

class Win extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showAddScorePopup: false,
      rank: null,
      scoreData: null,
      showScore: false
    }

    this.closePopupAddScore = this.closePopupAddScore.bind(this)
    this.showScore = this.showScore.bind(this)
    this.hideScore = this.hideScore.bind(this)
  }

  componentWillReceiveProps (newProps) {
    if (
      this.props.url.query.show === 'win' &&
      newProps.url.query.page === 'score'
    ) {
      // console.log('Show highscore')
      this.setState({
        showScore: true,
        rank: newProps.url.query.rank,
        showAddScorePopup: false
      })
    }
    if (
      this.props.url.query.show === 'win' &&
      newProps.url.query.page === 'popup'
    ) {
      // console.log('Show save score popup')
      this.setState({
        showAddScorePopup: true,
        showScore: false
      })
    }
    if (
      this.props.url.query.show === 'win' &&
      newProps.url.query.page === undefined
    ) {
      // console.log('Hide highscore or popup')
      this.setState({
        showScore: false,
        showAddScorePopup: false
      })
    }
    if (
      this.props.url.query.page === 'score' &&
      newProps.url.query.page === undefined
    ) {
      // console.log('back from highscore')
      this.hideScore()
    }
  }

  componentDidMount () {
    SoundsManager.playSound('youwin')
    SoundsManager.playSound('youwinloop')

    this.props.dispatch(blockCanvasScrolling())

    this.urlWhenEnteringWinToRestore = Router.asPath

    // Doing the ?show=menu trick because of a bug of next.js
    // https://github.com/zeit/next.js/issues/2668
    Router.replace(
      '/?show=win',
      `${this.urlWhenEnteringWinToRestore}?show=win`,
      {
        shallow: true
      }
    )

    // Redirect back to landing page after 20s
    this.timeoutRedirectToLanding = setTimeout(() => {
      // Do not redirect if we opened up the menu / add score / highscores
      if (
        !this.props.showMenu &&
        !this.state.showAddScorePopup &&
        !this.state.showScore
      ) {
        window.location.href = `/${this.props.city}/level/1`
      }
    }, 20000)
  }

  componentWillUnmount () {
    this.props.dispatch(restoreCanvasScrolling())
    // Restore url
    Router.replace('/', `${this.urlWhenEnteringWinToRestore}`, {
      shallow: true
    })

    if (this.timeoutRedirectToLanding) {
      clearTimeout(this.timeoutRedirectToLanding)
    }
  }

  startAnimatingScoreBox () {
    this.scoreBoxAnimation = setInterval(() => {
      let nextIndex = this.state.scoreBoxIndex + 1
      if (nextIndex > this.state.scoreBox.length - 1) {
        nextIndex = 0
      }

      this.setState({
        scoreBoxIndex: nextIndex
      })
    }, 2000)
  }

  getNextScoreBoxData (index) {
    if (index + 1 > this.state.scoreBox.length - 1) {
      return this.state.scoreBox[0]
    } else {
      return this.state.scoreBox[index + 1]
    }
  }

  closePopupAddScore () {
    // console.log('back')
    window.history.back()
  }

  showPopupAddScore () {
    Router.push(
      '/?show=win&page=popup',
      `${this.urlWhenEnteringWinToRestore}?show=savescore`,
      {
        shallow: true
      }
    )
  }

  showScore (rank, highscore) {
    this.setState({
      scoreData: highscore
    })

    Router.replace(`/?show=win&page=score&rank=${rank}`, `/highscores`, {
      shallow: true
    })
  }

  hideScore () {
    this.props.dispatch(retry())
  }

  render () {
    return (
      <div className='instructions-win'>
        <div className='title'>YOU WON</div>
        <div className='content'>
          <ScoreBox
            color='pink'
            score={this.props.score}
            nbCarsConverted={this.props.nbCarsConverted}
          />
        </div>
        <Button
          large
          title={`Save your score`}
          onClick={() => this.showPopupAddScore()}
        />
        {!this.state.showScore && (
          <ChangeCityButton label='PLAY ANOTHER CITY' noAnim />
        )}
        {this.state.showAddScorePopup && (
          <PopUpAddScore
            onClose={this.closePopupAddScore}
            onSuccess={this.showScore}
            score={this.props.score}
            city={this.props.currentCity}
          />
        )}
        {this.state.showScore && (
          <ScorePage
            onClose={() => this.hideScore()}
            rank={this.state.rank}
            scoreData={this.state.scoreData}
          />
        )}
        <style jsx>{`
          .instructions-win {
            color: #262626;
            background-color: #fffe4a;
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            padding-bottom: 5rem;
            width: 100%;
            height: 100%;
            cursor: default;
          }
          .title {
            font-size: 10rem;
            line-height: 11rem;
            width: 80%;
            color: #4effff;
            text-align: center;
            animation: flashingTitle 0.1s linear infinite;
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 4rem;
            margin-top: 4rem;
          }

          .cta-secondary {
            display: flex;
          }

          .cta-secondary-separator {
            width: 2rem;
          }

          @media (max-height: 575px) {
            .title {
              font-size: 7rem;
              line-height: 8rem;
            }

            .content {
              margin-top: 2rem;
              margin-bottom: 2rem;
            }
          }

          @media (max-height: 475px) {
            .title {
              font-size: 6.5rem;
              line-height: 7rem;
            }

            .content {
              margin-top: 0rem;
              margin-bottom: 0rem;
            }
          }

          @keyframes flashingTitle {
            0% {
              color: #4effff;
            }
            50% {
              color: #ff3bff;
            }
            100% {
              color: #4effff;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    score: state.game.get('score'),
    currentLevel: state.game.get('currentLevel'),
    currentCity: state.app.get('selectedCity'),
    nbCarsConverted: state.game.get('nbCarsConverted'),
    city: state.app.get('selectedCity'),
    showMenu: state.app.get('showMenu')
  }
})(Win)
