import React from 'react'

const FacebookIcon = '/static/assets/icons/icon-facebook.svg'
const TwitterIcon = '/static/assets/icons/icon-twitter.svg'

class SocialShareButtons extends React.Component {
  constructor (props) {
    super(props)
    this.websiteUrl = 'https://beatthetraffic.moovellab.com'

    this.state = {
      showIcons: false
    }
  }

  twitterUrl () {
    let text = ''

    text +=
      "I've beaten the traffic! Try to beat my highscore and create your own mobility wonderland with 'Beat The Traffic X' #BeatTheTrafficX via @moovellab"

    return `https://twitter.com/intent/tweet?text=${encodeURI(
      text
    )}&url=${encodeURI(this.websiteUrl)}`
  }

  facebookUrl () {
    return `https://www.facebook.com/sharer.php?u=${encodeURI(this.websiteUrl)}`
  }

  toggleIcons () {
    this.setState({
      showIcons: !this.state.showIcons
    })
  }

  render () {
    return (
      <div className='List'>
        <h1 onClick={() => this.toggleIcons()}>SHARE</h1>
        {this.state.showIcons && (
          <React.Fragment>
            <a className='Button' href={this.facebookUrl()} target='_blank'>
              <img alt='FacebookIcon' src={FacebookIcon} />
            </a>
            <a className='Button' href={this.twitterUrl()} target='_blank'>
              <img alt='TwitterIcon' src={TwitterIcon} />
            </a>
          </React.Fragment>
        )}
        <style jsx>{`
          .List {
            display: flex;
            align-items: center;
            height: 22px;
          }

          h1 {
            margin: 0;
            margin-right: 2rem;
            cursor: pointer;
          }

          .Button {
            list-style: none;
            cursor: pointer;
            padding: 5px 5px 0 0;
          }

          .Button:hover,
          .Button:focus,
          .Button:active {
            opacity: 0.8;
          }
        `}</style>
      </div>
    )
  }
}

export default SocialShareButtons
