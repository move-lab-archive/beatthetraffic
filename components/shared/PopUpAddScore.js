import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  render() {
    return (
      <div className='popup-page'>
        <div className='popup-container'>
          <div className='popup-container-inner'>
            <form>
              <p>Please add a name to save your score.</p>
              <input className='input-text' type='text' placeholder='Name' /><br />
              <input className='input-text' type='text' placeholder='E-mail / optional' /><br />
              <input className='input-text' type='text' placeholder='Link / optional' /><br />

              <div className="input-box">
                <input type="checkbox" name="first-accept" id="first-accept" value="1" />
                  <label htmlFor="first-accept" className="check">
                    <span></span>
                    Inform me ones if somebody beats my score.
                  </label>
              </div>
              <div className="input-box">
                <input type="checkbox" name="second-accept" id="second-accept" value="1" />
                  <label htmlFor="second-accept" className="check">
                    <span></span>
                    I want to know about upcoming moovel lab projects.
                  </label>
              </div>

              <a className="btn cancel">
                <div className="inner" />
                <div className="outer">
                    <h4>Cancel</h4>
                </div>
              </a>

              <a className="btn addscore">
                <div className="inner" />
                <div className="outer">
                    <h4>Add score</h4>
                </div>
              </a>

            </form>
          </div>
        </div>

        <style jsx>{`

          .popup-page{
            position: fixed;
            width: 100%;
            height: 100%;
            background: rgba(255, 254, 74, .93);
            z-index: 50;
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
          input[type="checkbox"] {
	           display:none;
          }
          input[type="checkbox"] + label span {
          	display:inline-block;
          	width: 3.2rem;
          	height: 3.2rem;
          	margin-right:8px;
          	vertical-align:middle;
            border: 4px solid #262626;
          	cursor:pointer;
          }
          input[type="checkbox"]:checked + label span {
	           background-color: #262626;
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

           .btn {
             width: 10.5rem;
             height: 4rem;
             will-change: transform;
             margin-top: 3rem;
             position: absolute;
           }
           .btn h4{
             margin: 0;
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


            @media (max-width: 600px) {
              .popup-container{
                height: 44rem;
            }

        `}</style>
      </div>
    )
  }
}

export default Button
