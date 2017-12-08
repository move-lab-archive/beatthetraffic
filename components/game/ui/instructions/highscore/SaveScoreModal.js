import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ButtonClose from '../../../../shared/ButtonClose'

// TODO handle logic of saving score in database ..., for now style everything static

class SaveScoreModal extends Component {
  static propTypes = {
    onClose: PropTypes.func
  }

  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          blabablablbal
          <ButtonClose onClick={() => this.props.onClose()} />
        </div>
        <style jsx>{`
          .modal-overlay {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 254, 74, 0.9);
          }

          .modal-content {
            position: relative;
            width: 80%;
            min-height: 300px;
            background-color: white;
            border: 3px solid black;
          }
        `}</style>
      </div>
    )
  }
}

export default SaveScoreModal
