import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TweenLite, TimelineLite } from 'gsap'

class ScoreBox extends Component {
  static propTypes = {
    score: PropTypes.number,
    nbCarsConverted: PropTypes.number,
    color: PropTypes.oneOf(['pink'])
  }

  constructor (props) {
    super(props)

    // Compute scorebox data
    let scoreBox = []
    scoreBox.push({
      icon: 'star',
      value: props.score
    })
    scoreBox.push({
      icon: 'car',
      value: props.nbCarsConverted
    })
    scoreBox.push({
      icon: 'bus',
      value: Math.round(props.nbCarsConverted / 10)
    })
    scoreBox.push({
      icon: 'train',
      value: Math.round(props.nbCarsConverted / 20)
    })

    this.state = {
      scoreBox,
      scoreBoxIndex: 0
    }

    this.scoreToDisplay = {
      left: this.state.scoreBox[this.state.scoreBoxIndex].value,
      right: 0
    }
  }

  componentDidMount () {
    this.scoreBoxAnimation = setTimeout(() => {
      this.animateScoreBox()
    }, 2000)
  }

  componentWillUnmount () {
    if (this.scoreBoxAnimation) {
      clearInterval(this.scoreBoxAnimation)
    }

    if (this.timeoutRestartScoreBoxAmimation) {
      clearInterval(this.timeoutRestartScoreBoxAmimation)
    }

    if (this.countingAnimation) {
      this.countingAnimation.kill()
    }
  }

  getIconSrc (name, color) {
    if (color) {
      return `/static/assets/icons/icon-${name}-${color}.svg`
    } else {
      return `/static/assets/icons/icon-${name}.svg`
    }
  }

  animateScoreBox (index = 0) {
    this.countingAnimation = TweenLite.to(this.scoreToDisplay, 2, {
      left: 0,
      right: this.getNextScoreBoxData(index).value,
      roundProps: ['left', 'right'],
      ease: Linear.easeNone,
      onUpdate: () => {
        this.refScoreLeft.innerText = this.scoreToDisplay.left
        this.refScoreRight.innerText = this.scoreToDisplay.right
      },
      onComplete: () => {
        this.timeoutRestartScoreBoxAmimation = setTimeout(() => {
          let nextIndex = this.state.scoreBoxIndex + 1
          // We directly go to the first anim
          if (nextIndex === this.state.scoreBox.length - 1) {
            nextIndex = 0
          }
          // Init values for next animation
          this.scoreToDisplay = {
            left: this.state.scoreBox[nextIndex].value,
            right: 0
          }

          // Set them in the dom
          this.refScoreLeft.innerText = this.scoreToDisplay.left
          this.refScoreRight.innerText = this.scoreToDisplay.right

          this.setState({
            scoreBoxIndex: nextIndex
          })

          this.scoreBoxAnimation = setTimeout(() => {
            this.animateScoreBox(nextIndex)
          }, 1000)
        }, 1000)
      }
    })
  }

  getNextScoreBoxData (index) {
    if (index + 1 > this.state.scoreBox.length - 1) {
      return this.state.scoreBox[0]
    } else {
      return this.state.scoreBox[index + 1]
    }
  }

  render () {
    // let leftValue = this.state.scoreBox[this.state.scoreBoxIndex].value
    // let rightValue = this.getNextScoreBoxData(this.state.scoreBoxIndex).value
    let leftIcon = this.state.scoreBox[this.state.scoreBoxIndex].icon
    let rightIcon = this.getNextScoreBoxData(this.state.scoreBoxIndex).icon

    return (
      <div className={`score-box ${this.props.color} ${this.props.score >= 100 ? 'threedigits' : ''}`}>
        <div className='score-component left'>
          <h1 ref={el => (this.refScoreLeft = el)}>
            {this.scoreToDisplay.left}
          </h1>
          <img src={this.getIconSrc(leftIcon, this.props.color)} />
        </div>
        <div className='separator'>
          <img src={`/static/assets/icons/icon-arrow-pink.svg`} />
        </div>
        <div className='score-component right'>
          <h1 ref={el => (this.refScoreRight = el)}>
            {this.scoreToDisplay.right}
          </h1>
          <img src={this.getIconSrc(rightIcon, this.props.color)} />
        </div>
        <style jsx>{`
          .score-box {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
            border-bottom: 4px solid white;
          }

          .score-box.threedigits {
            min-width: 260px;
          }

          .score-box.pink {
            border-bottom: 4px solid #262626;
          }

          .separator {
            margin-left: 1rem;
            margin-right: 1rem;
          }

          .score-component {
            display: flex;
            flex-direction: row;
            min-width: 12rem;
          }

          .score-component h1 {
            margin: 0;
          }

          .score-component img {
            margin-left: 0.5rem;
          }

          .score-component.left {
            justify-content: flex-start;
          }

          .score-component.right {
            justify-content: flex-end;
          }

          .score h1 {
            margin: 0;
            margin-right: 0.5rem;
          }
        `}</style>
      </div>
    )
  }
}

export default ScoreBox
