import { Component } from 'react';
import { connect } from 'react-redux';

import { scaleDetection } from '../../utils/resolution';

const canvasResolution = {
  w: 1280,
  h: 720
}

const ItemsToDisplay = ["car","bike","truck","motorbike"];

class Canvas extends Component {

  constructor(props) {
    super(props);
    this.lastFrameDrawn = -1;
    this.loopUpdateCanvas = this.loopUpdateCanvas.bind(this);
    this.isUpdatingCanvas = false;
  }

  // TODO IMPLEMENT COMPONENT UNMOUNT TO CLEAN UP STUFF

  componentWillReceiveProps(nextProps) {
    if(nextProps.isPlaying === true &&
       nextProps.isObjectTrackerDataFetched === true) {
      if(!this.isUpdatingCanvas) {
        console.log('Start loop update canvas');
        this.isUpdatingCanvas = true;
        this.loopUpdateCanvas();
      }
    }

    // TODO IF VIDEO PAUSES, STOP UPDATING CANVAS
  }

  componentDidMount() {
    // init global var
    window.itemsMasked = [];
  }

  shouldComponentUpdate() {
    return false;
  }

  drawObjectTrackerData(context, objectTrackerData) {
    context.strokeStyle = "red";
    context.lineWidth = 40; // draw the rectangle bigger than the bounding box
    context.fillStyle = "red";
    objectTrackerData.map((objectTracked) => {
      let objectTrackedScaled = scaleDetection(objectTracked, canvasResolution, this.props.originalResolution);     
      let x = objectTrackedScaled.x - objectTrackedScaled.w / 2;
      let y = objectTrackedScaled.y - objectTrackedScaled.h / 2;
      // context.strokeRect(x+5, y+5, objectTrackedScaled.w-10, objectTrackedScaled.h-10);
      // context.fillText(objectTrackedScaled.idDisplay,x + objectTrackedScaled.w / 2 - 20,y + objectTrackedScaled.h / 2);
      context.fillRect(x, y, objectTrackedScaled.w, objectTrackedScaled.h);
      context.strokeRect(x, y, objectTrackedScaled.w, objectTrackedScaled.h);
    });
  }

  loopUpdateCanvas() {
    if(window.currentFrame &&
       this.lastFrameDrawn !== window.currentFrame) {

      this.canvasContext.clearRect(0, 0, 1280, 720);

      const currentDetectionOrTrackingFrame = window.currentFrame * this.props.ratioVideoTrackerFPS;

      // Draw debug raw detections data
      // let rawDetectionsForThisFrame = this.props.rawDetections[currentDetectionOrTrackingFrame];
      // if(this.props.showDebugUI && rawDetectionsForThisFrame) {
      // this.drawRawDetections(this.canvasContext, rawDetectionsForThisFrame);
      // }

      // Draw debug objectTracker data
      let objectTrackerDataForThisFrame = this.props.objectTrackerData[currentDetectionOrTrackingFrame];
      if(objectTrackerDataForThisFrame) {
        objectTrackerDataForThisFrame = objectTrackerDataForThisFrame.filter((objectTracked) => {
          return window.itemsMasked.find((itemMasked) => itemMasked.id === objectTracked.id)
        })
        this.drawObjectTrackerData(this.canvasContext, objectTrackerDataForThisFrame);
      }

      // Draw tracker ui data
      // if(objectTrackerDataForThisFrame) {
      //   this.drawTrackerUIData(this.canvasContext, objectTrackerDataForThisFrame);
      // }

      this.lastFrameDrawn = window.currentFrame;
    }
    requestAnimationFrame(this.loopUpdateCanvas.bind(this));
  }

  render() { 
    console.log('render');
    return (
      <canvas 
        ref={(el) => { 
          this.canvasEl = el;
          if(this.canvasEl) {
            this.canvasContext = el.getContext('2d');
          }
        }}
        width="1280"
        height="720"
        className="canvas2d" />
    );
  }
}
 
export default connect((state) => {

  const selectedVideo = state.app.get('availableVideos').find((video) => {
    return video.get('name') === state.app.get('selectedVideo')
  });

  const ratioVideoTrackerFPS = selectedVideo.get('trackerAndDetectionsFPS') / selectedVideo.get('videoFPS');

  return {
    rawDetections: state.rawDetections.get('data'),
    areRawDetectionsFetched: state.rawDetections.get('fetched'),
    objectTrackerData: state.objectTracker.get('data'),
    isObjectTrackerDataFetched: state.objectTracker.get('fetched'),
    isPlaying: state.video.get('isPlaying'),
    showDebugUI: state.settings.get('showDebugUI'),
    isVideoReadyToPlay: state.video.get('isReadyToPlay'),
    originalResolution: selectedVideo.get('originalResolution').toJS(),
    ratioVideoTrackerFPS
  }
})(Canvas);
