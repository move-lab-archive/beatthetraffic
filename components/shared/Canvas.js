import { Component } from 'react';
import { connect } from 'react-redux';
import { TweenMax } from 'gsap';

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
    this.clicksRecorded = [];
    this.initClickRecorder = this.initClickRecorder.bind(this);
    this.cleanClickRecorder = this.cleanClickRecorder.bind(this);
    this.recordClick = this.recordClick.bind(this);
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

    if(nextProps.isAtBeggining !== this.props.isAtBeggining) {
      console.log("Level reset, need to clear up canvas");
      this.clearCanvas();
    }
  }

  componentDidMount() {
    // init global var
    window.itemsMasked = [];
    window.itemsToCollect = [];

    // Preload image
    this.imgCarrot = new Image();
    this.imgCarrot.src = "/static/assets/icons/icon-carrot.svg";

    this.initClickRecorder();
  }

  componentWillUnmount() {
    this.cleanClickRecorder();
  }

  initClickRecorder() {
    window.document.body.addEventListener("click", this.recordClick);
    window.document.body.addEventListener("touchstart", this.recordClick);
  }

  cleanClickRecorder() {
    window.document.body.removeEventListener("click", this.recordClick);
  }

  drawRawDetections(context, detections) {
    context.strokeStyle = "#f00";
    context.lineWidth = 5;
    context.font = "15px Arial";
    context.fillStyle = "#f00";
    detections.map((detection) => {
      let scaledDetection = scaleDetection(detection, canvasResolution, this.props.originalResolution);
      let x = scaledDetection.x - scaledDetection.w / 2;
      let y = scaledDetection.y - scaledDetection.h / 2;
      context.strokeRect(x, y, scaledDetection.w, scaledDetection.h);
      context.fillText(scaledDetection.name, x, y-10);
    });
  }

  drawObjectTrackerData(context, objectTrackerData) {
    context.globalAlpha = 1;
    context.strokeStyle = "blue";
    context.lineWidth = 5;
    context.font = "30px Arial";
    context.fillStyle = "blue";
    objectTrackerData.map((objectTracked) => { 
      let objectTrackedScaled = scaleDetection(objectTracked, canvasResolution, this.props.originalResolution);     
      if(objectTrackedScaled.isZombie) {
        context.fillStyle = `rgba(255, 153, 0, ${objectTrackedScaled.zombieOpacity})`;
        context.strokeStyle = `rgba(255, 153, 0, ${objectTrackedScaled.zombieOpacity})`;
      } else {
        context.fillStyle = "blue";
        context.strokeStyle = "blue";
      }
      let x = objectTrackedScaled.x - objectTrackedScaled.w / 2;
      let y = objectTrackedScaled.y - objectTrackedScaled.h / 2;
      context.strokeRect(x+5, y+5, objectTrackedScaled.w-10, objectTrackedScaled.h-10);
      context.fillText(objectTrackedScaled.idDisplay,x + objectTrackedScaled.w / 2 - 20,y + objectTrackedScaled.h / 2);
    });
  }

  computeCircleRadius(bboxArea) {
    return Math.sqrt(bboxArea / 100);
  }

  computeCornerLength(bboxArea) {
    return Math.sqrt(bboxArea / 50);
  }

  drawTrackerUIData(context, objectTrackerDataForThisFrame) {

    objectTrackerDataForThisFrame.filter((objectTracked) => {
      return (
        !window.itemsMasked.find((itemMasked) => itemMasked.id === objectTracked.id) &&
        objectTracked.isZombie !== true &&
        ItemsToDisplay.indexOf(objectTracked.name) > -1
      )
    }).map((objectTracked) => {
      let objectTrackedScaled = scaleDetection(objectTracked, canvasResolution, this.props.originalResolution);


      // Set params
      context.strokeStyle = "#4EFFFF";
      context.fillStyle = "#4EFFFF";
      context.lineWidth = 2;
      context.globalAlpha = 1;

      const bboxArea = objectTrackedScaled.w * objectTrackedScaled.h;
      const canvasArea = canvasResolution.w * canvasResolution.h;
      const bboxAreaPercentageOfCanvas = bboxArea * 100 / canvasArea;

      // Draw circle with dynamic radius depending on Bbox size
      let bboxCenter = {
        x: objectTrackedScaled.x,
        y: objectTrackedScaled.y
      }

      // Clear react if there is a carrot of stuff 
      // Maybe better to check when drawing
      context.clearRect(
        objectTrackedScaled.x - objectTrackedScaled.w / 2,
        objectTrackedScaled.y - objectTrackedScaled.h / 2,
        objectTrackedScaled.w,
        objectTrackedScaled.h,
      );

      context.beginPath();
      context.arc(
        bboxCenter.x,
        bboxCenter.y, 
        this.computeCircleRadius(bboxArea),
        0,
        2 * Math.PI,
        false
      );
      context.fill();

      

      // If bbox area is more than 0.8% of canvas area, display the target
      if(bboxAreaPercentageOfCanvas > 0.8) {
        // Shortcut to objectTrackedScaled to avoid writing 1000 lines of code
        const obj = objectTrackedScaled;

        // Compute target corner relative size
        const cornerLength = this.computeCornerLength(bboxArea);
        const cornerTickness = cornerLength / 3;

        // Draw target
        // Top right
        context.fillRect(
          obj.x + obj.w / 2,
          obj.y - obj.h / 2,
          cornerTickness,
          cornerLength
        );
        context.fillRect(
          obj.x + obj.w / 2 - cornerLength + cornerTickness,
          obj.y - obj.h / 2,
          cornerLength,
          cornerTickness
        );
        // Top left
        context.fillRect(
          obj.x - obj.w / 2,
          obj.y - obj.h / 2,
          cornerTickness,
          cornerLength
        );
        context.fillRect(
          obj.x - obj.w / 2,
          obj.y - obj.h / 2,
          cornerLength,
          cornerTickness
        );
        // Bottom left
        context.fillRect(
          obj.x - obj.w / 2,
          obj.y + obj.h / 2 - cornerLength + cornerTickness,
          cornerTickness,
          cornerLength
        );
        context.fillRect(
          obj.x - obj.w / 2,
          obj.y + obj.h / 2,
          cornerLength,
          cornerTickness
        );
        // Bottom right
        context.fillRect(
          obj.x + obj.w / 2,
          obj.y + obj.h / 2 - cornerLength + cornerTickness,
          cornerTickness,
          cornerLength
          
        );
        context.fillRect(
          obj.x + obj.w / 2 - cornerLength + cornerTickness,
          obj.y + obj.h / 2,
          cornerLength,
          cornerTickness
        );
      }
    });
  }

  recordClick(event) {
    let coordinates = {
      x: event.pageX,
      y: event.pageY
    };

    // Ignore Chrome mobile touchstart event
    if(coordinates.x === undefined) {
      return;
    }

    let width, height; 

    // Map coordinates to canvas coordinates
    if(window.innerWidth / window.innerHeight < 16/9) {
      width = window.innerHeight * 1280 / 720;
      height = window.innerHeight;
    } else {
      width = window.innerWidth;
      height = window.innerWidth * 720 / 1280;
    }

    coordinates = {
      x: coordinates.x * 1280 / width,
      y: coordinates.y * 720 / height,
      xReal: coordinates.x,
      yReal: coordinates.y
    }

    this.clicksRecorded.push(coordinates);
  }

  collectCarrot(itemToCollect) {
    // let item = itemToCollect;
    TweenMax.to(itemToCollect, 1,{
      x: 0,
      y: 0,
      opacity: 0.1,
      onComplete: () => {
        // TODO REMOVE item from itemsToCollect
        window.itemsToCollect = window.itemsToCollect.filter((item) => item.id != itemToCollect.id)
        console.log(window.itemsToCollect.length);
      }
    });
    
  }

  drawCarrots(context) {
    window.itemsToCollect.forEach((item) => {
      context.drawImage(this.imgCarrot, item.x, item.y, item.w, item.h);
    })
  }

  // drawItemCollectionAnimationFrame(item) {
  //   this.canvasContext.drawImage(this.imgCarrot, item.x, item.y, item.w, item.h);
  // }

  clearCanvas() {
    this.canvasContext.clearRect(0, 0, 1280, 720);
  }

  loopUpdateCanvas() {
    if(window.currentFrame &&
       this.lastFrameDrawn !== window.currentFrame) {

      this.canvasContext.clearRect(0, 0, 1280, 720);

      if(this.clicksRecorded.length > 0) {
        this.clicksRecorded.forEach((click) => {
          window.itemsToCollect.forEach((itemToCollect) => {
            if(
              itemToCollect.isCollectable &&
              click.x >= itemToCollect.x &&
              click.x <= itemToCollect.x + itemToCollect.w &&
              click.y >= itemToCollect.y &&
              click.y <= itemToCollect.y + itemToCollect.h) {
              this.collectCarrot(itemToCollect);
            }
          });
        });
      }

      this.clicksRecorded = [];

      const currentDetectionOrTrackingFrame = window.currentFrame * this.props.ratioVideoTrackerFPS;

      // Draw debug raw detections data
      let rawDetectionsForThisFrame = this.props.rawDetections[currentDetectionOrTrackingFrame];
      if(this.props.showDebugUI && rawDetectionsForThisFrame) {
        this.drawRawDetections(this.canvasContext, rawDetectionsForThisFrame);
      }

      // Draw debug objectTracker data
      let objectTrackerDataForThisFrame = this.props.objectTrackerData[currentDetectionOrTrackingFrame];
      if(this.props.showDebugUI && objectTrackerDataForThisFrame) {
        this.drawObjectTrackerData(this.canvasContext, objectTrackerDataForThisFrame);
      }

      this.drawCarrots(this.canvasContext);

      // Draw tracker ui data
      if(objectTrackerDataForThisFrame) {
        this.drawTrackerUIData(this.canvasContext, objectTrackerDataForThisFrame);
      }

      this.lastFrameDrawn = window.currentFrame;
    }
    requestAnimationFrame(this.loopUpdateCanvas.bind(this));
  }

  render() { 
    return (
      <div
        className={`canvas-container`}
      >
        {/* Canvas width and height must 
        be set the the yolo detections resolution
        Then it is scaled down to viewport */}
        <canvas 
         ref={(el) => { 
          this.canvasEl = el;
          if(this.canvasEl) {
            this.canvasContext = el.getContext('2d');
          }
         }}
         width="1280"
         height="720"
         className="canvas" />
        <style jsx>{`
          .canvas-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            left:0;
            pointer-events: none;
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
              width: 100%;
              height: auto;
            }
          }

          @media (max-aspect-ratio: 16/9) {
            .canvas {
              width: auto;
              height: 100%;
            }
          }
        `}</style>
      </div>
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
    isAtBeggining: state.video.get('isAtBeggining'),
    showDebugUI: state.settings.get('showDebugUI'),
    originalResolution: selectedVideo.get('originalResolution').toJS(),
    ratioVideoTrackerFPS
  }
})(Canvas);
