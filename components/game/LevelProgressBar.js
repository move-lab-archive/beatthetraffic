import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class LevelProgressBar extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      currentTime: 0
    }

    this.monitorProgress = this.monitorProgress.bind(this);
  }

  componentDidMount() {
    this.monitorProgress();
  }

  monitorProgress() {
    if(window.currentTime &&
      window.currentTime !== this.state.currentTime) {
      this.setState({
        currentTime: window.currentTime
      });
    }
    requestAnimationFrame(this.monitorProgress)
  }

  render() {

    const progress = this.state.currentTime / this.props.totalDuration || 0;

    return (
      <div className="progress-bar">
        <style jsx>{`
          .progress-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0.8rem;
            background-color: #262626;
            z-index: 1;
          }

          .progress-bar:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #FFFE4A;
            will-change: transform;
            transform-origin: 0 0;
          } 
        `}</style>
        <style jsx>{`
          // Dynamic style are separated for better runtime perf
          .progress-bar:after {
            transform: scaleX(${progress});
          }
        `}
        </style>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    totalDuration: Math.trunc(state.video.get('duration'))
  }
})(LevelProgressBar);
