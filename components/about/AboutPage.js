import React, { Component } from 'react'
import ButtonClose from '../shared/ButtonClose'

class AboutPage extends Component {
  render () {
    return (
      <div className={`about-page`}>
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

        <div className={`about-container`}>
          <div className={`about-inner`}>
            <h2 className='headline'>ABOUT</h2>

            <div className='title-wrapper'>
              <div className='title-container'>
                <img
                  className='tree'
                  src='/static/assets/landing/asset-tree.png'
                />
                <h1>
                  Beat the traffic<br />
                  <span>X</span>
                </h1>
              </div>
            </div>

            <div className='text-container'>
              <img src='/static/assets/about-highscores/leftover.jpg' />
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <h1>WANT TO SEE YOUR CITY IN THE GAME?</h1>
            </div>
          </div>
        </div>
        <style jsx>{`
          .about-page {
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
          .about-container {
            max-width: 700px;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0%;
            left: 50%;
            transform: translateX(-50%);
          }
          .about-inner {
            top: 0rem;
            position: absolute;
            padding-bottom: 20rem;
          }
          .about-inner .headline {
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
            background-color: #fffe4a;
            top: 0%;
            width: 100%;
            height: 100%;
            z-index: -10;
          }

          .title-container {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            text-align: center;
          }
          .title-wrapper {
            width: 100%;
            height: 100%;
            left: 0%;
            top: 0%;
            position: fixed;
          }

          .title-container span {
            color: #ff3bff;
          }
          .title-container img {
            width: 7rem;
          }

          .text-container {
            margin-top: 90vh;
            margin-left: 2.9rem;
            margin-right: 2.9rem;
          }

          .text-container img {
            width: 100%;
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
            .text-container {
              margin-top: 90vh;
            }
            .about-inner .headline {
              margin-top: 2.3rem;
              text-align: center;
              margin-left: 0;
            }
          }

          @media (max-height: 400px) {
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

export default AboutPage
