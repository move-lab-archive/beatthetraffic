import React, { Component } from 'react'
import ButtonClose from '../shared/ButtonClose'
import { prefixURL } from '../../utils/url';

import Footer from './Footer'

class AboutPage extends Component {
  render() {
    return (
      <div className={`about-page`}>
        <ButtonClose onClick={this.props.onClose} /> */}
        <h2 className='headline'>ABOUT</h2>
        <img
          className='rightcloud'
          src={prefixURL("/static/assets/menu/menu-rightcloud.svg")}
        />
        <img
          className='leftcloud'
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

        <div className={`about-container`}>
          <div className={`about-inner`}>
            <div className='text-container'>
              <h2>
                <span>Beat The Traffic X</span> is a magical way of using
                traffic data to face current challenges of urban mobility.
              </h2>
              <img src={prefixURL('/static/assets/about-highscores/leftover.jpg')} />
              <p className='maintext'>
                Making traffic disappear can be as easy as detecting it.
                Automated object detection using machine learning allows to
                identify and interact with mobility data. We analyzed traffic
                videos from around the world with our "Open Data Cam"
                technology. This shows us exactly what objects are identified,
                where they move and ultimately let's them disappear with a
                single click.
                <br /> <br />
                Submit your highscore if you manage to rescue your city from the
                avalanche of cars rolling through cities every day. The mobility
                wonderland you've created by transforming cars into unicorns,
                rainbows and trees isn't only magical. The cars you've
                transformed are finally converted into the amount of public
                transit needed to transport everybody sitting in these cars. For
                cities with less cars and more quality of life.
              </p>
              <div className='headlinetopspace linktoopendata'>
                <div className='linktoopendatainner'>
                  <h2>‘Open Data Cam’ is a DIY data creation tool.</h2>
                  <a href='https://opendatacam.moovellab.com' target='_blank'>
                    <p>opendatacam.moovellab.com</p>
                  </a>
                  <p>
                    <br />
                    Equipped with computer vision ‘Open Data Cam’ understands
                    and quantifies moving objects. The free and simple DIY guide
                    enables everybody to become an urban data miner. ‘Open Data
                    Cam’ consists of a video camera attached to a mini computer
                    running an interface which allows for counting detections
                    within the video stream. For us the obvious use case for
                    ‘Open Data Cam’ was to count vehicles at any given location.
                  </p>
                </div>
              </div>

              <div className='buttons'>
                <div className='buttoncontainer'>
                  <div className='btn headlinetopspace'>
                    <a href={prefixURL('/static/assets/presskit.zip')} target='_blank'>
                      <div className='inner' />
                      <div className='outer'>
                        <h4>Press kit</h4>
                      </div>
                    </a>
                  </div>
                </div>
                {/*
                <div className='buttoncontainer'>
                  <div className='btn headlinetopspace secondbtn'>
                    <a
                      href='http://lab.moovel.com/projects/beat-the-traffic-x'
                      target='_blank'
                    >
                      <div className='inner' />
                      <div className='outer'>
                        <h4>blog post</h4>
                      </div>
                    </a>
                  </div>
                </div> */}
              </div>

              <div className='headlinetopspace credits'>
                <div className='task'>
                  <p>Concept & Idea</p>
                  <h3>
                    <a
                      target='_blank'
                      href='http://lab.moovel.com/people/benedikt-gross'
                    >
                      Benedikt Groß
                    </a>
                    <br />
                    <a target='_blank' href='http://markuskreutzer.com'>
                      Markus Kreutzer
                    </a>
                    <br />
                    <a target='_blank' href='http://thibault-durand.fr/'>
                      Thibault Durand
                    </a>
                  </h3>
                </div>
                <div className='task'>
                  <p>Direction</p>
                  <h3>
                    <a
                      target='_blank'
                      href='http://lab.moovel.com/people/benedikt-gross'
                    >
                      Benedikt Groß
                    </a>
                  </h3>
                </div>
                <div className='task'>
                  <p>Visual Design</p>
                  <h3>
                    <a target='_blank' href='http://markuskreutzer.com'>
                      Markus Kreutzer
                    </a>
                  </h3>
                </div>
                <div className='task'>
                  <p>Interaction Design</p>
                  <h3>
                    <a target='_blank' href='http://markuskreutzer.com'>
                      Markus Kreutzer
                    </a>
                  </h3>
                </div>
                <div className='task'>
                  <p>Website Frontend Engineering</p>
                  <h3>
                    <a target='_blank' href='http://thibault-durand.fr/'>
                      Thibault Durand
                    </a>
                    <br />
                    <a target='_blank' href='http://markuskreutzer.com'>
                      Markus Kreutzer
                    </a>
                  </h3>
                </div>
                <div className='task'>
                  <p>Backend Engineering</p>
                  <h3>
                    <a target='_blank' href='http://thibault-durand.fr/'>
                      Thibault Durand
                    </a>
                  </h3>
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
                    <a
                      href='https://pjreddie.com/darknet/yolo/'
                      target='_blank'
                    >
                      yolo
                    </a>
                    <br />
                    <a
                      href='https://github.com/moovel/node-yolo'
                      target='_blank'
                    >
                      node-yolo
                    </a>
                    <br />
                    <a href='https://opendatacam.moovellab.com' target='_blank'>
                      Open Data Cam
                    </a>
                    <br />
                    <a
                      href='https://github.com/tdurand/node-moving-things-tracker'
                      target='_blank'
                    >
                      node-moving-things-tracker
                    </a>
                  </h3>
                </div>
                <div className='task'>
                  <p>Tooling and Scripting</p>
                  <h3>
                    Florian Porada<br />
                    <a
                      target='_blank'
                      href='http://lab.moovel.com/people/benedikt-gross'
                    >
                      Benedikt Groß
                    </a>
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
                    Barcelona –
                    <a target='_blank' href='http://moritzphleps.com'>
                      &nbsp;Moritz Phleps
                    </a>
                    <br />Berlin –
                    <a target='_blank' href='http://markuskreutzer.com'>
                      &nbsp;Markus Kreutzer
                    </a>
                    <br />Buenos Aires –{' '}
                    <a target='_blank' href='http://www.mge.uy/'>
                      Mariana Greif
                    </a>
                    <br />London –
                    <a
                      target='_blank'
                      href='http://www.kristinacranfeld.co.uk/'
                    >
                      &nbsp;Kristina Cranfeld
                    </a>
                    <br />Los Angeles –
                    <a target='_blank' href='http://davidleonard.tv/'>
                      &nbsp;David Leonard
                    </a>
                    <br />Moscow – Piotr Erdman
                    <br />New Delhi –
                    <a target='_blank' href='https://superflyindia.com/'>
                      &nbsp;Superfly Productions
                    </a>
                    <br />New York –
                    <a target='_blank' href='http://jk-lee.com/'>
                      &nbsp;Joey Lee
                    </a>
                    <br />Portland –
                    <a target='_blank' href='http://vividframemedia.com/'>
                      &nbsp;Vivid Frame Media
                    </a>
                    <br />Stuttgart –
                    <a target='_blank' href='http://markuskreutzer.com'>
                      &nbsp;Markus Kreutzer
                    </a>
                    <br />Tokyo –
                    <a target='_blank' href='http://hirokiyokoyama.com'>
                      &nbsp;Hiroki Yokoyama
                    </a>
                  </h3>
                </div>
                <div className='task cities'>
                  <p>Tools & Libraries</p>
                  <h3>
                    React.js, next.js, canvas, yolo, node-yolo,
                    node-track-moving-things
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <Footer />
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
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
          }
          .about-inner {
            max-width: 700px;
            width: 100%;
            padding-left: 10px;
            padding-right: 10px;
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
            margin-top: 4rem;
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

          .buttons {
            display: flex;
            flex-wrap: wrap;
          }
          .buttoncontainer {
            width: 50%;
          }
          .btn {
            width: 20rem;
            height: 6rem;
            will-change: transform;
            position: relative;
          }
          .btn h4 {
            margin: 0;
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 3.4rem;
            text-transform: uppercase;
            color: #262626;
          }
          .btn .inner {
            width: 100%;
            height: 100%;
            left: 5px;
            top: 5px;
            background-color: #262626;
            position: absolute;
          }
          .btn .outer {
            width: 100%;
            height: 100%;
            background-color: #4effff;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            transform-origin: 0 0;
          }
          .btn .outer:hover {
            background-color: #ff3bff;
            cursor: pointer;
          }

          .btn .outer:active {
            background-color: #ff3bff;
            left: 2px;
            top: 2px;
          }

          a {
            color: #ff3bff;
          }

          .cities {
            width: 100%;
          }
          a:hover,
          a h3:hover {
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
              margin-top: 15vh; /*please do not change distance to top ;)*/
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

          @media (max-width: 500px) {
            .buttons {
              display: block;
            }
            .secondbtn {
              margin-top: 4rem;
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
