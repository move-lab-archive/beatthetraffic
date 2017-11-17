import React from 'react';
import { connect } from 'react-redux';
import { Surface } from "gl-react-dom";
import { Bus } from "gl-react";


import Loading from '../shared/Loading'; 
import Canvas from './Canvas'; 
import SettingsControl from '../shared/SettingsControl';
import BackgroundSubtraction from './BackgroundSubtraction';
import Darkmode from './Darkmode';
import Video from './Video'; 
import GameIndicators from '../game/GameIndicators';
import GameInstructions from '../game/GameInstructions';

import VideoSelector from '../shared/VideoSelector';

import { updateSettings, setClientRendering } from '../../statemanagement/app/SettingsStateManagement';

import { selectVideo, getAverageImgPath } from '../../statemanagement/app/AppStateManagement';

import { initViewportListeners } from '../../statemanagement/app/ViewportStateManagement';

class WebGLPage extends React.Component {

  constructor(props) {
    super(props);
    props.dispatch(updateSettings({ showDebugUI: false }));
  }

  componentDidMount() {
    this.props.dispatch(setClientRendering());
    this.props.dispatch(selectVideo("stuttgart1-level2"));
    this.props.dispatch(initViewportListeners());
  }

  render () {
    return (
      <div className="landing-page">
        <SettingsControl />
        <VideoSelector />
        <div className="canvas-container">
          <Surface 
            width={1280}
            height={720}
            className="canvas"
          >
            <Bus ref="detectionsCanvas">
              <Canvas />
            </Bus>
            {!this.props.darkMode &&
              <BackgroundSubtraction
                average={this.props.averageImgSrc}
                canvas2d={() => this.refs.detectionsCanvas}
              >
                {redraw => (
                  <Video onFrame={redraw} />
                )}
              </BackgroundSubtraction>
            }
            {this.props.darkMode &&
              <Darkmode average={this.props.averageImgSrc}>
                {redraw => (
                  <Video onFrame={redraw} />
                )}
              </Darkmode>
            }
          </Surface>
        </div>
        <style jsx global>{`
          .canvas-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            left:0;
          }
          .canvas {
            display: block;
            will-change: transform;
            position: absolute;
            top:0;
            left:0;
            z-index: 2;
          }

          @media (min-aspect-ratio: 16/9) {
            .canvas {
              width: 100% !important;
              height: auto !important;
            }
          }

          @media (max-aspect-ratio: 16/9) {
            .canvas {
              width: auto !important;
              height: 100% !important;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default connect((state) => {

  const selectedVideo = state.app.get('availableVideos').find((video) => {
    return video.get('name') === state.app.get('selectedVideo')
  });

  return {
    isGamePlaying: state.game.get('isPlaying'),
    averageImgSrc: getAverageImgPath(selectedVideo.get('name')),
    darkMode: state.settings.get('darkMode')
  }
})(WebGLPage);
