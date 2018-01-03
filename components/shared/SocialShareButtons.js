import React from 'react'

const FacebookIcon = '/static/assets/icons/icon-facebook.svg'
const TwitterIcon = '/static/assets/icons/icon-twitter.svg'

class SocialShareButtons extends React.Component {
  constructor (props) {
    super(props)
    this.websiteUrl = 'https://beatthetraffic.moovellab.com'
  }

  twitterUrl () {
    let text = ''

    text += 'Great game 👌 ! Are you ready to beat the traffic 🚕 ?'

    return `https://twitter.com/intent/tweet?text=${encodeURI(
      text
    )}&url=${encodeURI(this.websiteUrl)}`
  }

  facebookUrl () {
    return `https://www.facebook.com/sharer.php?u=${encodeURI(this.websiteUrl)}`
  }

  render () {
    return (
      <div className='List'>
        <a className='Button' href={this.facebookUrl()} target='_blank'>
          <img alt='FacebookIcon' src={FacebookIcon} />
        </a>
        <a className='Button' href={this.twitterUrl()} target='_blank'>
          <img alt='TwitterIcon' src={TwitterIcon} />
        </a>
        <style jsx>{`
          .List {
            display: flex;
            margin-bottom: 10px;
            display: none;
          }

          .Button {
            list-style: none;
            cursor: pointer;
            padding: 0 5px 0 0;
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
