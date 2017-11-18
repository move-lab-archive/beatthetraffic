import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class LevelProgressBar extends PureComponent {

  constructor(props) {
    super(props)

    // TODO adapt if all level are not the same time
    this.currentTime = 0;
    this.progressByLevel = 1 / props.nbTotalLevel; 

    this.monitorProgress = this.monitorProgress.bind(this);
  }

  componentDidMount() {
    this.monitorProgress();
  }

  monitorProgress() {
    if(window.currentTime &&
      window.currentTime !== this.currentTime) {
      const progressInLevel = window.currentTime / this.props.totalDuration || 0;
      const progressOffset = this.progressByLevel * (this.props.currentLevel - 1);
      this.el.style.transform = `scaleX(${progressOffset + progressInLevel * this.progressByLevel})`;
      this.currentTime = window.currentTime;
    }
    requestAnimationFrame(this.monitorProgress)
  }

  render() {

    return (
      <div className="progress-bar">
        <div 
          className="progress-bar-content" 
          ref={(el) => this.el = el}
        />
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

          .progress-bar-content {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #FFFE4A;
            will-change: transform;
            transform-origin: 0 0;
            transform: scale(0);
          } 
        `}</style>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    totalDuration: Math.trunc(state.video.get('duration')),
    currentLevel: state.game.get('currentLevel'),
    nbTotalLevel: state.game.get('nbTotalLevel')
  }
})(LevelProgressBar);
