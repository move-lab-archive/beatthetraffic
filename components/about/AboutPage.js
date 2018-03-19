import React, { Component } from 'react'
import ButtonClose from '../shared/ButtonClose'

import Button from '../shared/Button'

class AboutPage extends Component {
  render () {
    return (
      <div className={`about-page`}>
        <ButtonClose onClick={this.props.onClose} />
        <h2 className='headline'>ABOUT</h2>
        <img
          className='rightcloud'
          src='/static/assets/menu/menu-rightcloud.svg'
        />
        <img
          className='leftcloud'
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
            <div className='text-container'>
              <h1>
                <span>Beat the traffic</span> is a game VR by LCD and their fans
              </h1>
              <img src='/static/assets/about-highscores/leftover.jpg' />
              <p className='maintext'>
                With Beat The Traffic X moovel Lab is aiming to create an online
                mini game where players can interact with the mass of cars that
                roll through our cities everyday. The road traffic is based on
                pre-recorded videos filmed in 11 global cities from Tokyo to LA.
                The mission of the player is to transform masses of traffic into
                “nicer” things like unicorns, rainbows, trees, while adding up a
                high score. At the end of the game the highscore is unveiled and
                compared to public transit. The player has furthermore the
                chance to save the highscore and to sign up for a newsletter.
                <br /> <br />
                http://lab.moovel.com/blog/about-what-the-street
                <br />
                Download the Press Kit
              </p>
              <div className='linktoopendata'>
                <div className='linktoopendatainner'>
                  <h2>Beat the traffic is powered by the open data cam</h2>
                  <Button large title={`Open data cam`} />
                </div>
              </div>
              <h1 className='headlinetopspace'>Credits</h1>
              <div className='credits'>
                <div className='task'>
                  <p>Concept & Idea</p>
                  <h3>
                    Benedikt Groß<br />Markus Kreutzer<br />Thibault Durand
                  </h3>
                </div>
                <div className='task'>
                  <p>Direction</p>
                  <h3>Benedikt Groß</h3>
                </div>
                <div className='task'>
                  <p>Visual Design</p>
                  <h3>Markus Kreutzer</h3>
                </div>
                <div className='task'>
                  <p>Interaction Design</p>
                  <h3>Markus Kreutzer</h3>
                </div>
                <div className='task'>
                  <p>Website Frontend Engineering</p>
                  <h3>
                    Thibault Durand<br />Markus Kreutzer
                  </h3>
                </div>
                <div className='task'>
                  <p>Backend Engineering</p>
                  <h3>Thibault Durand</h3>
                </div>
                <div className='task'>
                  <p>Extended Team</p>
                  <h3>
                    Raphael Reimann<br />Florian Porada<br />Daniel Schmid
                  </h3>
                </div>
                <div className='task'>
                  <p>Soundtrack and Sounds</p>
                  <a target='_blank' href='https://myspace.com/bobbykudlicz'>
                    <h3>Patric Schmidt aka Bobby Kudlicz</h3>
                  </a>
                </div>
                <div className='task'>
                  <p>Text</p>
                  <h3>Raphael Reimann</h3>
                </div>
                <div className='task'>
                  <p>3D Modeling</p>
                  <a target='_blank' href='https://www.scherabon.com/'>
                    <h3>Herwig Scherabon</h3>
                  </a>
                </div>
                <div className='task'>
                  <p>Dev Ops</p>
                  <h3>
                    Florian Porada<br />Thomas Derleth
                  </h3>
                </div>
                <div className='task'>
                  <p>Made with</p>
                  <h3>
                    yolo<br />node-yolo<br />Open Data Cam
                  </h3>
                </div>
                <div className='task'>
                  <p>Tooling and Scripting</p>
                  <h3>
                    Florian Porada<br />Benedikt Groß
                  </h3>
                </div>
                <div className='task'>
                  <p>License Plate Censoring</p>
                  <a
                    target='_blank'
                    href='http://uhurumkate.blogspot.de/2017/12/automatic-license-plate-recognition.html'
                  >
                    <h3>Dror Gluska</h3>
                  </a>
                </div>
                <div className='task cities'>
                  <p>City Road Traffic Footage</p>
                  <h3>
                    Barcelona,
                    <a target='_blank' href='http://moritzphleps.com'>
                      &nbsp;Moritz Phleps
                    </a>
                    <br />Berlin,
                    <a target='_blank' href='http://markuskreutzer.com'>
                      &nbsp;Markus Kreutzer
                    </a>
                    <br />Buenos Aires, Mariana Greif
                    <br />London,
                    <a
                      target='_blank'
                      href='http://www.kristinacranfeld.co.uk/'
                    >
                      &nbsp;Kristina Cranfeld
                    </a>
                    <br />Los Angeles,
                    <a target='_blank' href='http://davidleonard.tv/'>
                      &nbsp;David Leonard
                    </a>
                    <br />Moscow, Piotr Erdman
                    <br />New Delhi,
                    <a target='_blank' href='https://superflyindia.com/'>
                      &nbsp;Superfly Productions
                    </a>
                    <br />New York,
                    <a target='_blank' href='http://jk-lee.com/'>
                      &nbsp;Joey Lee
                    </a>
                    <br />Portland,
                    <a target='_blank' href='http://vividframemedia.com/'>
                      &nbsp;Vivid Frame Media
                    </a>
                    <br />Stuttgart,
                    <a target='_blank' href='http://markuskreutzer.com'>
                      &nbsp;Markus Kreutzer
                    </a>
                    <br />Tokyo,
                    <a target='_blank' href='http://hirokiyokoyama.com'>
                      &nbsp;Hiroki Yokoyama
                    </a>
                  </h3>
                </div>
              </div>
              footer
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
            background-color: #fffe4a;
            top: 0%;
            width: 100%;
            height: 100%;
            z-index: -10;
          }

          .text-container {
            margin-top: 25vh;
            margin-left: 2.2rem;
            margin-right: 2.2rem;
          }

          .text-container span {
            color: #ff3bff;
          }

          .linktoopendata {
            background-color: #fffe4a;
            padding-top: 3rem;
            padding-bottom: 5rem;
            padding-left: 5rem;
            padding-right: 5rem;
            margin-top: 6rem;
          }

          .text-container img {
            width: 130%;
            margin-left: -15%;
            margin-top: 5rem;
          }

          .credits {
            display: flex;
            flex-wrap: wrap;
          }
          .task {
            width: 50%;
          }
          .task h3 {
            margin-top: -1rem;
            color: #ff3bff;
          }
          .task a {
            color: #ff3bff;
          }

          .cities {
            width: 100%;
          }
          .task a:hover,
          .task a h3:hover {
            color: #4effff;
          }

          .maintext {
            margin-top: 6rem;
          }

          .headlinetopspace {
            margin-top: 7rem;
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
            .text-container {
              margin-top: 30vh;
            }
          }

          @media (max-height: 400px) {
            .fourthcloud {
              width: 43%;
            }
          }

          @media (max-width: 500px) {
            .task {
              width: 100%;
            }
          }

          @media (max-width: 1000px) {
            .text-container img {
              width: 100%;
              margin-left: 0%;
              margin-top: 5rem;
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
