import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TweenLite } from 'gsap'

class Score extends Component {
  componentWillReceiveProps () {
    if (this.iconStar) {
      TweenLite.to(this.iconStar, 0.3, { scale: 1.4 })
      TweenLite.to(this.iconStar, 0.3, { scale: 1, delay: 0.3 })
    }
  }

  render () {
    return (
      <div className='score-container'>
        <span className='score'>{this.props.score}</span>
        <img
          ref={el => (this.iconStar = el)}
          className='icon-star'
          src='/static/assets/icons/icon-star.svg'
        />
        <style jsx>{`
          .score-container {
            display: flex;
            flex: 1;
            justify-content: space-between;
            align-items: center;
            margin-left: -0.3rem;
          }
          .score {
            color: white;
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 4rem;
            line-height: 6rem;
            text-transform: uppercase;
          }

          .icon-star {
            width: 3rem;
            height: 3rem;
            margin-left: 0.5rem;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => {
  return {
    score: state.game.get('score')
  }
})(Score)
