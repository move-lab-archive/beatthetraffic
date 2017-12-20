import React, { Component } from 'react'
import ButtonClose from '../shared/ButtonClose'

class AboutPage extends Component {
  render () {
    return (
      <div className={`about-page`}>
        <ButtonClose onClick={this.props.onClose} />
        <div className='about-container'>
          <div className='about-inner'>
            <h2>"Beat The Traffic" is an online game where players interact with current traffic circumstances.</h2>
            <img
              className='leftover'
              src='/static/assets/about-highscores/leftover.jpg'
            />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet.
            </p>
            <h2>WANT TO SEE YOUR CITY IN THE GAME?</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos.
            </p>
            <h2>CREDITS</h2>
            <p className='last-item'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos.
            </p>
          </div>
        </div>

        <img
          className='cloud-1'
          src='/static/assets/about-highscores/cloud-1.svg'
        />

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
            overflow: scroll;
          }
          .about-container{
            max-width: 700px;
            width: 100%;
            height: 100%;
            position:absolute;
            top: 0%;
            left: 50%;
            transform: translateX(-50%);
          }
          .about-inner{
            left: 2.9rem;
            right: 2.9rem;
            top: 0rem;
            position: absolute;
          }
          .about-inner h2{
            margin-top: 7.1rem;
          }

          .cloud-1{
            position: absolute;
            top: 0%;
            width: 60%;
            right: 0%;
            z-index: -1;
            transition: 1.2s cubic-bezier(0.19, 1, 0.22, 1);
          }

          .leftover{
            margin-top: 5rem;
            margin-bottom: 5rem;
            border: 4px solid yellow;
            opacity: 1;
            width: 100%;
            margin-left: 0%;
          }

          .last-item{
            margin-bottom: 7.1rem;
          }

          @media (min-width: 600px) {

            .cloud-1{
              width: 40%;
            }

          }

          @media (min-width: 900px) {

            .leftover{
              width: 130%;
              margin-left: -15%;
            }

          }
        `}</style>
      </div>
    )
  }
}

export default AboutPage
