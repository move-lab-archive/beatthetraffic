import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TweenMax } from 'gsap';

import Clippath from './Clippath';
import PuffAnimation from './PuffAnimation';
import ScoreAnimation from './ScoreAnimation';


import { scaleDetection, isInsideSomeAreas } from '../../utils/resolution';

import { incrementScore, addMissedItem, addKilledItem } from '../../statemanagement/app/GameStateManagement';

import { getAverageImgPath } from '../../statemanagement/app/AppStateManagement';

import SoundsManager from '../../statemanagement/app/SoundsManager';

const canvasResolution = {
  w: 1280,
  h: 720
}

const initialState = {
  masks: [],
  carsNotMasked: [],
  carrots: [],
  bananas: [],
  puffAnimations: [],
  scoreAnimations: []
}

class Mask extends PureComponent {

  constructor(props) {
    super(props);

    this.state = initialState;

    this.clicksRecorded = [];

    this.isUpdatingMasks = false;
    this.lastFrameDrawn = -1;
    this.loopUpdateMasks = this.loopUpdateMasks.bind(this);
    this.recordClick = this.recordClick.bind(this);
    this.initClickRecorder = this.initClickRecorder.bind(this);
    this.cleanClickRecorder = this.cleanClickRecorder.bind(this);
    this.removePuffAnimation = this.removePuffAnimation.bind(this);
    this.removeScoreAnimation = this.removeScoreAnimation.bind(this);
  }

  componentDidMount() {
    this.initClickRecorder();

    // prefetch puff image
    let puffImage = new Image();
    puffImage.src = '/static/puff-smoke.svg';

    // prefetch unicor image
    let unicornImage = new Image();
    unicornImage.src = '/static/assets/icons/icon-unicorn.svg';

    // init global var
    window.itemsMasked = [];
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isPlaying === true &&
       nextProps.isObjectTrackerDataFetched === true) {
      if(!this.isUpdatingMasks) {
        console.log('Start loop update masks');
        this.isUpdatingMasks = true;
        this.loopUpdateMasks();
      }
    }

    if(nextProps.selectedVideoName !== this.props.selectedVideoName) {
      console.log("Changed level, need to clear up masking canvas");
      this.setState(initialState);
    }

    if(nextProps.isAtBeggining !== this.props.isAtBeggining) {
      console.log("Level reset, need to clear up masking canvas");
      this.setState(initialState);
    }
  }

  loopUpdateMasks() {
    if(window.currentFrame &&
      this.lastFrameDrawn !== window.currentFrame) {
        this.lastFrameDrawn = window.currentFrame;
        // Enlarge bbox of 25px
        const ENLARGE_SIZE = 25;

        let objectTrackerDataForThisFrame = this.props.objectTrackerData[window.currentFrame];
        if(objectTrackerDataForThisFrame) {
          let objectsMaskedToUpdate = this.state.masks;
          let objectsMaskedUpdated = [];

          // Clean up objects to mask that have disapeared
          objectsMaskedToUpdate = objectsMaskedToUpdate.filter((objectMasked) => {
            return objectTrackerDataForThisFrame.find((objectTracked) => objectTracked.id === objectMasked.id)
          });
          
          objectTrackerDataForThisFrame = objectTrackerDataForThisFrame.map((objectTracked) => {
            
            let objectTrackedScaled = scaleDetection(objectTracked, canvasResolution, this.props.originalResolution);
            let potentialObjectToMask = {
              idDisplay: objectTrackedScaled.idDisplay,
              id: objectTrackedScaled.id,
              x: objectTrackedScaled.x - objectTrackedScaled.w/2 - ENLARGE_SIZE,
              y: objectTrackedScaled.y - objectTrackedScaled.h/2 - ENLARGE_SIZE,
              w: objectTrackedScaled.w + ENLARGE_SIZE * 2,
              h: objectTrackedScaled.h + ENLARGE_SIZE * 2,
            }

            // If this is one of the objects we are already masking and that need update of its position
            const objectToUpdate = objectsMaskedToUpdate.find((objectMasked) => objectMasked.id === potentialObjectToMask.id)
            if(objectToUpdate) {
              // Add it to the new list
              objectsMaskedUpdated.push(potentialObjectToMask);
            } else {
              // Look if clicks to disappear things exists for this object
              if(this.clicksRecorded.length > 0) {
                this.clicksRecorded.forEach((click) => {
                  if(click.x >= potentialObjectToMask.x + ENLARGE_SIZE &&
                    click.x <= potentialObjectToMask.x + potentialObjectToMask.w - ENLARGE_SIZE &&
                    click.y >= potentialObjectToMask.y + ENLARGE_SIZE &&
                    click.y <= potentialObjectToMask.y + potentialObjectToMask.h - ENLARGE_SIZE) {
                      console.log(`${potentialObjectToMask.idDisplay} clicked !`)
                      objectsMaskedUpdated.push(potentialObjectToMask);
                      this.setState({
                        puffAnimations: [...this.state.puffAnimations, {
                          x: click.xReal,
                          y: click.yReal,
                          id: potentialObjectToMask.id
                        }],
                        scoreAnimations: [...this.state.scoreAnimations, {
                          x: click.xReal,
                          y: click.yReal,
                          id: potentialObjectToMask.id
                        }],
                        carrots: [...this.state.carrots, {
                          x: click.xReal,
                          y: click.yReal,
                          w: potentialObjectToMask.w,
                          h: potentialObjectToMask.h,
                          id: potentialObjectToMask.id
                        }]
                      });
                      // TODO push some carrot


                      this.props.dispatch(incrementScore());
                      this.props.dispatch(addKilledItem(potentialObjectToMask.id));
                      // Play puff sound
                      SoundsManager.playSound("puffA");
                    }
                });
              }
            }
            
            // Return the object scaled without enlarging for
            // the mask
            return {
              id: objectTrackedScaled.id,
              x: objectTrackedScaled.x - objectTrackedScaled.w/2,
              y: objectTrackedScaled.y - objectTrackedScaled.h/2,
              w: objectTrackedScaled.w,
              h: objectTrackedScaled.h
            }
          });
          this.clicksRecorded = [];
          // Get object tracked NOT masked
          let carsNotMasked = objectTrackerDataForThisFrame.filter((objectTracked) => { 
            if(objectsMaskedUpdated.find((maskedObject) => maskedObject.id === objectTracked.id)) {
              return false;
            } else {
              return true;
            }
          });
          // console.log(carsNotMasked.length);
          this.setState({ 
            masks: objectsMaskedUpdated,
            carsNotMasked
          });
          
          window.itemsMasked = objectsMaskedUpdated;
        }

      // TODO RENAME DISSAPEAR AREA INTO DISAPPEAR POINT
      const itemsDisappearingThisFrame = this.props.objectTrackerData["general"]
                                            .filter((objectTracked) => 
                                              objectTracked.disappearFrame === window.currentFrame &&
                                              objectTracked.nbActiveFrame > 60 &&
                                              isInsideSomeAreas(this.props.disappearAreas , objectTracked.disappearArea, objectTracked.idDisplay)
                                            )
      if(itemsDisappearingThisFrame.length > 0) {
        // Add to missed list the one we haven't clicked
        itemsDisappearingThisFrame.forEach((itemDisappearing) => {
          if(!this.props.killedItems.includes(itemDisappearing.id)) {
            console.log(`Frame ${window.currentFrame}, ${itemDisappearing.idDisplay} missed:`);
            this.props.dispatch(addMissedItem(itemDisappearing.id));
          }
        });
        
        
      }
    }
    requestAnimationFrame(this.loopUpdateMasks.bind(this));
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

  initClickRecorder() {
    window.document.body.addEventListener("click", this.recordClick);
    window.document.body.addEventListener("touchstart", this.recordClick);
  }

  cleanClickRecorder() {
    window.document.body.removeEventListener("click", this.recordClick);
  }

  removePuffAnimation(id) {
    this.setState({
      puffAnimations: this.state.puffAnimations.filter((puffAnimation) => puffAnimation.id !== id)
    });
  }

  removeScoreAnimation(id) {
    this.setState({
      scoreAnimations: this.state.scoreAnimations.filter((scoreAnimation) => scoreAnimation.id !== id)
    });
  }

  componentWillUnmount() {
    this.cleanClickRecorder();
  }

  getUnicornSize(mask) {
    const maskArea = mask.w * mask.h;
    return Math.sqrt(maskArea / 30);
  }

  getPollutionOverlayStyle() {
    const pollutionPercentage = this.props.nbMissed * 100 / this.props.maxMissed
    let pollutionFillColor;
    let pollutionOpacity = 0;

    if(pollutionPercentage < 80) {
      pollutionFillColor = "#262626";
      pollutionOpacity = pollutionPercentage / 100;
    } else {
      pollutionFillColor = "#FF0000";
      pollutionOpacity = 0.4;
    }
    
    return {
      pollutionFillColor,
      pollutionOpacity
    }
  }

  collectCarrot(id) {
    console.log(id);
    this.setState({
      carrots: this.state.carrots.filter((carrot) => carrot.id !== id)
    })
    
    // this.anim = TweenMax.to(this.el, 1,{
    //   top: "9rem", 
    //   left: "2rem",
    //   opacity: 0.1,
    //   onComplete: () => this.props.removeScoreAnimation(this.props.id)
    // });
    // this.anim.play();
  }

  render() {

    const pollutionOverlayStyle = this.getPollutionOverlayStyle();

    return (
      <div className="mask-container">
        <svg
          id="average-img"
          preserveAspectRatio="xMinYMax meet"
          viewBox="0 0 1280 720"
          className={`average-img`}
        >
          <image
            xlinkHref={this.props.averageImgSrc}
            x="0" 
            y="0"
            width="1280px" 
            height="720px"
            clipPath="url(#svgPath)"
          />
          <rect
            x="0"
            y="0"
            fill={pollutionOverlayStyle.pollutionFillColor}
            fillOpacity={pollutionOverlayStyle.pollutionOpacity}
            width="1280"
            height="720"
          ></rect>
          {this.state.masks.map((mask) =>
            <image
              key={`${mask.id}-unicorn`}
              x={mask.x + mask.w / 2 - this.getUnicornSize(mask) / 2}
              y={mask.y + mask.h / 2 - this.getUnicornSize(mask) / 2}
              width={this.getUnicornSize(mask)}
              height={this.getUnicornSize(mask)}
              xlinkHref="/static/assets/icons/icon-unicorn.svg"
            />
          )}
          {this.state.carrots.map((carrot) => 
            <image
              key={`carrot-${carrot.id}`} 
              x={carrot.x}
              y={carrot.y}
              width={this.getUnicornSize(carrot)}
              height={this.getUnicornSize(carrot)}
              xlinkHref="/static/assets/icons/icon-carrot.svg"
              mask="url(#myMask)"
              onClick={this.collectCarrot.bind(this, carrot.id)}
            />
          )}
          <defs>
            <Clippath masks={this.state.masks} />
            <mask id="myMask">
              <rect width="100%" height="100%" fill="white"/>
              {this.state.carsNotMasked.map((mask) =>
                <rect
                  key={`mask-${mask.id}`}
                  x={mask.x}
                  y={mask.y}
                  width={mask.w}
                  height={mask.h}
                  fill="black"
                ></rect>
              )}
            </mask>
          </defs>
        </svg>
        {this.state.puffAnimations.map((puffAnimation) => 
          <PuffAnimation
            key={puffAnimation.id}
            id={puffAnimation.id}
            x={puffAnimation.x}
            y={puffAnimation.y}
            removePuffAnimation={this.removePuffAnimation}
          />
        )}
        {/* {this.state.scoreAnimations.map((scoreAnimation) => 
          <ScoreAnimation
            key={scoreAnimation.id}
            id={scoreAnimation.id}
            x={scoreAnimation.x}
            y={scoreAnimation.y}
            removeScoreAnimation={this.removeScoreAnimation}
          />
        )} */}
        <style jsx>{`
          .mask-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            left:0;
          }
          .average-img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            overflow: hidden;
          }

          @media (min-aspect-ratio: 16/9) {
            .average-img {
              width: 100%;
              height: auto;
            }
          }

          @media (max-aspect-ratio: 16/9) {
            .average-img {
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

  return {
    objectTrackerData: state.objectTracker.get('data'),
    isObjectTrackerDataFetched: state.objectTracker.get('fetched'),
    isPlaying: state.video.get('isPlaying'),
    isAtBeggining: state.video.get('isAtBeggining'),
    averageImgSrc: getAverageImgPath(selectedVideo.get('name')),
    soundEnabled: state.settings.get('soundEnabled'),
    originalResolution: selectedVideo.get('originalResolution').toJS(),
    killedItems: state.game.get('killedItems'),
    disappearAreas: selectedVideo.get('disappearAreas').toJS(),
    selectedVideoName: state.app.get('selectedVideo'),
    nbMissed: state.game.get('missedItems').size,
    maxMissed: state.game.get('maxMissed')
  }
})(Mask);
