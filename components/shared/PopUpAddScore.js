import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

class PopUpAddScore extends Component {
  static propTypes = {
    onClose: PropTypes.func
  }

  render () {
    return (
      <div className='popup-page'>
        <div className='popup-container'>
          <div className='popup-container-inner'>
            <form>
              <p>Please add a name to save your score.</p>
              <input className='input-text' type='text' placeholder='Name' />
              <br />
              <input
                className='input-text'
                type='text'
                placeholder='E-mail / optional'
              />
              <br />
              <input
                className='input-text'
                type='text'
                placeholder='Link / optional'
              />
              <br />
              <div className='input-box'>
                <input
                  type='checkbox'
                  name='first-accept'
                  id='first-accept'
                  value='1'
                />
                <label htmlFor='first-accept' className='check'>
                  <span />
                  Inform me ones if somebody beats my score.
                </label>
              </div>
              <div className='input-box'>
                <input
                  type='checkbox'
                  name='second-accept'
                  id='second-accept'
                  value='1'
                />
                <label htmlFor='second-accept' className='check'>
                  <span />
                  I want to know about upcoming moovel lab projects.
                </label>
              </div>
              <Button
                title={`Cancel`}
                onClick={() => this.props.onClose()}
                bgBlack
              />
              <Button title={`Add score`} bgBlack />
            </form>
          </div>
        </div>
        <style jsx>{`
          .popup-page{
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(78, 255, 255, .9);
            z-index: 50;
            color: #262626;
          }

          .popup-container{
            position: fixed;
            max-width: 450px;
            width: 90%;
            height: 42.5rem;
            background-color: white;
            border: 4px solid #262626;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
          }

          .popup-container-inner{
            position: absolute;
            left: 2.9rem;
            right: 2.9rem;
            top: 0.4rem;
            bottom: 2.9rem;
          }

          .popup-container-inner p{
            margin-bottom: 1rem;
          }

          .input-text{
            width: 97.5%;
            height: 3.2rem;
            margin-top: 1rem;
            border: 4px solid #262626;
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 2rem;
            line-height: 2.9rem;
            background-color: #EFEFEF;
            text-indent: 0.7rem;
          }
          input:focus {
            outline: none;
          }

          ::placeholder {
            color: #a3a3a3;
          }

          .check {
            font-family: 'Geo', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
          }

          input[type='checkbox'] {
            display:none;
          }

          input[type='checkbox'] + label span {
            display:inline-block;
            width: 3.2rem;
            height: 3.2rem;
            margin-right:8px;
            vertical-align:middle;
            border: 4px solid #262626;
            cursor:pointer;
          }

          input[type='checkbox']:checked + label span {
             background-color: #FF3BFF;
           }

           .input-box{
             margin-top: 1rem;
           }

           .cancel{
             left: 0%;
           }
           .addscore{
             left: 12.5rem;
           }

          @media (max-width: 600px) {
            .popup-container{
              height: 44rem;
          }

        `}</style>
      </div>
    )
  }
}

export default PopUpAddScore
