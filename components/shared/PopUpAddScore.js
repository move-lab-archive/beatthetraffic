import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import ButtonClose from './ButtonClose'

class PopUpAddScore extends Component {
  static propTypes = {
    onClose: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      isSaving: false,
      error: false
    }
  }

  saveScore () {
    this.setState({
      isSaving: true,
      error: false
    })

    setTimeout(() => {
      // TODO Redirect to highscore page
      this.props.onClose()
    }, 1000)
  }

  render () {
    return (
      <div className='popup-page'>
        <div className='popup-overlay' onClick={() => this.props.onClose()} />
        <div className='popup-container'>
          <ButtonClose onClick={() => this.props.onClose()} smallPadding />
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
              <div className='cta'>
                <Button
                  disabled={this.state.isSaving}
                  title={`Cancel`}
                  onClick={() => this.props.onClose()}
                  bgBlack
                />
                <div className='separator' />
                <Button
                  bgBlack
                  disabled={this.state.isSaving}
                  title={`${
                    this.state.isSaving ? 'Saving score...' : 'Save score'
                  }`}
                  onClick={() => this.saveScore()}
                />
              </div>
            </form>
          </div>
        </div>
        <style jsx>{`
          .popup-page {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 50;
            color: #262626;
          }

          .popup-overlay {
            background: rgba(78, 255, 255, 0.9);
            z-index: 49;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }

          .popup-container {
            position: fixed;
            z-index: 50;
            max-width: 450px;
            width: 90%;
            height: 42.5rem;
            background-color: white;
            border: 4px solid #262626;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
          }

          .popup-container-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            padding-left: 2.8rem;
            padding-right: 2.8rem;
          }

          .popup-container-inner p {
            margin-bottom: 1rem;
          }

          .cta {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          }

          .separator {
            width: 2rem;
          }

          .input-text {
            width: 97.5%;
            height: 3.2rem;
            margin-top: 1rem;
            border: 4px solid #262626;
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 2rem;
            line-height: 2.9rem;
            background-color: #efefef;
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
            display: none;
          }

          input[type='checkbox'] + label span {
            display: inline-block;
            width: 3.2rem;
            height: 3.2rem;
            margin-right: 8px;
            vertical-align: middle;
            border: 4px solid #262626;
            cursor: pointer;
          }

          input[type='checkbox']:checked + label span {
            background-color: #ff3bff;
          }

          .input-box {
            margin-top: 1rem;
          }

          .cancel {
            left: 0%;
          }
          .addscore {
            left: 12.5rem;
          }

          @media (max-width: 600px) {
            .popup-container {
              height: 44rem;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default PopUpAddScore
