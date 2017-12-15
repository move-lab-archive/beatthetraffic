'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _resolution = require('../../../utils/resolution');

var _masking = require('../masking/masking');

var _detectMissedItems = require('./utils/detectMissedItems');

var _detectMissedItems2 = _interopRequireDefault(_detectMissedItems);

var _CollectableItem = require('./models/CollectableItem');

var _CollectableItem2 = _interopRequireDefault(_CollectableItem);

var _CollectableItemsEngine = require('./engines/CollectableItemsEngine');

var _CollectableItemsEngine2 = _interopRequireDefault(_CollectableItemsEngine);

var _MissedCarAnimationsEngine = require('./engines/MissedCarAnimationsEngine');

var _MissedCarAnimationsEngine2 = _interopRequireDefault(_MissedCarAnimationsEngine);

var _MissedCarAnimation = require('./models/MissedCarAnimation');

var _MissedCarAnimation2 = _interopRequireDefault(_MissedCarAnimation);

var _PuffAnimationsEngine = require('./engines/PuffAnimationsEngine');

var _PuffAnimationsEngine2 = _interopRequireDefault(_PuffAnimationsEngine);

var _PuffAnimation = require('./models/PuffAnimation');

var _PuffAnimation2 = _interopRequireDefault(_PuffAnimation);

var _StarsAnimationsEngine = require('./engines/StarsAnimationsEngine');

var _StarsAnimationsEngine2 = _interopRequireDefault(_StarsAnimationsEngine);

var _StarsAnimation = require('./models/StarsAnimation');

var _StarsAnimation2 = _interopRequireDefault(_StarsAnimation);

var _DebugTrackerEngine = require('./engines/DebugTrackerEngine');

var _DebugTrackerEngine2 = _interopRequireDefault(_DebugTrackerEngine);

var _TrackerUIEngine = require('./engines/TrackerUIEngine');

var _TrackerUIEngine2 = _interopRequireDefault(_TrackerUIEngine);

var _UnicornEngine = require('./engines/UnicornEngine');

var _UnicornEngine2 = _interopRequireDefault(_UnicornEngine);

var _GameStateManagement = require('../../../statemanagement/app/GameStateManagement');

var _ViewportStateManagement = require('../../../statemanagement/app/ViewportStateManagement');

var _GameEngineStateManager = require('../../../statemanagement/app/GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/core/GameEngine.js';


var GameEngine = function (_Component) {
  (0, _inherits3.default)(GameEngine, _Component);

  function GameEngine(props) {
    (0, _classCallCheck3.default)(this, GameEngine);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GameEngine.__proto__ || (0, _getPrototypeOf2.default)(GameEngine)).call(this, props));

    _this.lastFrameDrawn = -1;
    _this.loopUpdateCanvas = _this.loopUpdateCanvas.bind(_this);
    _this.isUpdatingCanvas = false;
    return _this;
  }

  (0, _createClass3.default)(GameEngine, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isPlaying === true && nextProps.introAnimPlayed === true && nextProps.isObjectTrackerDataFetched === true) {
        if (!this.isUpdatingCanvas) {
          // console.log('Start loop update canvas')
          this.isUpdatingCanvas = true;
          this.loopUpdateCanvas();
        }
      }

      if (nextProps.isAtBeggining !== this.props.isAtBeggining) {
        // console.log('Level reset, need to clear up canvas')
        this.clearCanvas();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Rendering engine that have offscreen canvas to init on client
      _CollectableItemsEngine2.default.init();
      _PuffAnimationsEngine2.default.init();
      _StarsAnimationsEngine2.default.init();
      _UnicornEngine2.default.init();
      _MissedCarAnimationsEngine2.default.init();
    }
  }, {
    key: 'collectItem',
    value: function collectItem(itemToCollect) {
      this.props.dispatch((0, _GameStateManagement.collectItem)(itemToCollect));
    }
  }, {
    key: 'drawCollectableItems',
    value: function drawCollectableItems() {
      var _this2 = this;

      _GameEngineStateManager2.default.getItemsToCollect().forEach(function (collectableItem) {
        _this2.canvasContext.globalAlpha = collectableItem.opacity;
        _CollectableItemsEngine2.default.drawFrameOnCanvas(_this2.canvasContext, collectableItem);
        _this2.canvasContext.globalAlpha = 1;
      });
    }
  }, {
    key: 'drawPuffAnimations',
    value: function drawPuffAnimations() {
      var _this3 = this;

      _GameEngineStateManager2.default.getPuffAnimations().forEach(function (puffAnimation) {
        _PuffAnimationsEngine2.default.drawFrameOnCanvas(_this3.canvasContext, puffAnimation);
      });
    }
  }, {
    key: 'drawMissedCarAnimations',
    value: function drawMissedCarAnimations() {
      var _this4 = this;

      _GameEngineStateManager2.default.getMissedCarAnimations().forEach(function (missedCar) {
        _MissedCarAnimationsEngine2.default.drawFrameOnCanvas(_this4.canvasContext, missedCar);
      });
    }
  }, {
    key: 'drawStarsAnimations',
    value: function drawStarsAnimations() {
      var _this5 = this;

      _GameEngineStateManager2.default.getStarsAnimations().forEach(function (starAnimation) {
        _StarsAnimationsEngine2.default.drawFrameOnCanvas(_this5.canvasContext, starAnimation);
        // CollectableItemsEngine.drawStarsAnimationsFrameOnCanvas(
        //   this.canvasContext,
        //   starAnimation
        // )
      });
    }
  }, {
    key: 'clearCanvas',
    value: function clearCanvas() {
      this.canvasContext.clearRect(0, 0, 1280, 720);
    }
  }, {
    key: 'getItemSize',
    value: function getItemSize(mask) {
      // Compute size depending on bbox area
      var maskArea = mask.w * mask.h;
      var size = Math.floor(Math.sqrt(maskArea / 4));
      // TODO have this dynamic depending on canvas size / sprite image
      // between 30 and 50 pixel for  now
      size = Math.min(Math.max(parseInt(size), 30), 50);
      return size;
    }
  }, {
    key: 'addCollectableItem',
    value: function addCollectableItem(clickInfo, objectMaskedThatOutputObject, type) {
      var itemSize = this.getItemSize(objectMaskedThatOutputObject);
      var itemType = type;

      var size = {
        w: itemSize,
        h: itemSize
      };

      var newItem = new _CollectableItem2.default(itemType, clickInfo.x - size.w, clickInfo.y - size.h, size.w, size.h, 1, objectMaskedThatOutputObject.id);

      _GameEngineStateManager2.default.addCollectableItem(newItem);
    }
  }, {
    key: 'getWhatToOutputFromDisappearingACar',
    value: function getWhatToOutputFromDisappearingACar() {
      // Depending on smoke level, decide wheter we output heath helper or points, or nothing
      var output = null;

      if (this.props.smokeLevel < 50) {
        // Only output bananas or nothing, 50% nothing, 50% banana
        output = Math.random() < 0.5 ? _CollectableItemsEngine.COLLECTABLE_TYPES.BANANA : null;
      } else if (this.props.smokeLevel >= 50 && this.props.smokeLevel < 80) {
        // Output banananas or tree
        output = Math.random() < 0.5 ? _CollectableItemsEngine.COLLECTABLE_TYPES.BANANA : _CollectableItemsEngine.COLLECTABLE_TYPES.TREE;
      } else {
        // Output only trees
        output = _CollectableItemsEngine.COLLECTABLE_TYPES.TREE;
      }

      return output;
    }
  }, {
    key: 'loopUpdateCanvas',
    value: function loopUpdateCanvas() {
      var _this6 = this;

      if (this.lastFrameDrawn !== _GameEngineStateManager2.default.getCurrentFrame()) {
        // Clear previous frame
        this.canvasContext.clearRect(0, 0, 1280, 720);

        // Get current frame of the tracker
        // (sometimes it can be diffrent from the video framerate)
        var frame = _GameEngineStateManager2.default.getCurrentFrame() * this.props.ratioVideoTrackerFPS;

        // Get data from tracker
        var objectTrackerDataForThisFrame = this.props.objectTrackerData[frame];

        // Update masks
        var remainingPotentialObjectToMask = (0, _masking.updateMasking)(objectTrackerDataForThisFrame, this.props.canvasResolution, this.props.originalResolution);

        // Handle user actions
        if (_GameEngineStateManager2.default.getClicksBuffer().length > 0) {
          var clickUsed = false;
          // For each click
          _GameEngineStateManager2.default.getClicksBuffer().forEach(function (click) {
            // See if it will make a car dissapear with this click
            // for each remainingPotentialObjectToMask
            remainingPotentialObjectToMask.every(function (potentialObjectToMask) {
              if ((0, _resolution.isInsideArea)(potentialObjectToMask, click)) {
                // console.log(`${potentialObjectToMask.idDisplay} clicked !`)
                var whatObjectToOutput = _this6.getWhatToOutputFromDisappearingACar();

                if (whatObjectToOutput) {
                  // Output item to collect
                  _this6.addCollectableItem(click, potentialObjectToMask, whatObjectToOutput);
                }

                _GameEngineStateManager2.default.addMaskedItem(potentialObjectToMask);
                // Dispatch killed item notification
                _this6.props.dispatch((0, _GameStateManagement.addKilledItem)(potentialObjectToMask.id, whatObjectToOutput));
                // Add puff animation
                _GameEngineStateManager2.default.addPuffAnimation(new _MissedCarAnimation2.default(click.x, click.y, 90, potentialObjectToMask.id));

                // break from loop
                clickUsed = true;
                return false;
              } else {
                return true;
              }
            });

            // See if it can collect items, is click wasn't used to disappear a car
            if (!clickUsed) {
              _GameEngineStateManager2.default.getItemsToCollect().every(function (itemToCollect) {
                if (itemToCollect.isCollectable && (0, _resolution.isInsideArea)(itemToCollect, click)) {
                  _this6.collectItem(itemToCollect);

                  // Add explosion animation
                  _GameEngineStateManager2.default.addStarsAnimation(new _StarsAnimation2.default(click.x, click.y, itemToCollect.id));

                  // break from loop
                  clickUsed = true;
                  return false;
                } else {
                  return true;
                }
              });
            }

            // reset click used
            clickUsed = false;
          });
        }

        _GameEngineStateManager2.default.resetClickBuffer();

        // Handle Items missed this frame
        var itemsMissedThisFrame = (0, _detectMissedItems2.default)(frame, this.props.objectTrackerData, this.props.allowedDisappearAreas, this.props.alreadyKilledItems, (0, _ViewportStateManagement.computeVisibleArea)(this.props.originalResolution));

        itemsMissedThisFrame.forEach(function (itemMissed) {
          // console.log(`Frame ${frame}, ${itemMissed.idDisplay} missed:`)
          _this6.props.dispatch((0, _GameStateManagement.addMissedItem)());
          var centerOfDisapearItem = (0, _resolution.scalePoint)(itemMissed.disappearArea, _this6.props.canvasResolution, _this6.props.originalResolution);

          // Add a visual clue that we have missed them
          _GameEngineStateManager2.default.addMissedCarAnimation(new _PuffAnimation2.default(centerOfDisapearItem.x, centerOfDisapearItem.y, 100, itemMissed.id));
        });

        /*
          Draw things for this frame
        */

        // Draw collectable items state
        this.drawCollectableItems(this.canvasContext);

        // Draw start animations
        this.drawStarsAnimations(this.canvasContext);

        // Draw puff animations
        this.drawPuffAnimations(this.canvasContext);

        // Draw missed car animations
        this.drawMissedCarAnimations(this.canvasContext);

        if (objectTrackerDataForThisFrame) {
          // Draw unicorns
          _UnicornEngine2.default.drawUnicornsFromTrackerData(this.canvasContext, objectTrackerDataForThisFrame, this.props.canvasResolution, this.props.originalResolution);
        }

        // Draw tracker ui data
        if (objectTrackerDataForThisFrame) {
          _TrackerUIEngine2.default.drawTrackerUIData(this.canvasContext, objectTrackerDataForThisFrame, this.props.canvasResolution, this.props.originalResolution);
        }

        // Draw debug raw detections data
        var rawDetectionsForThisFrame = this.props.rawDetections[frame];
        if (this.props.showDebugUI && rawDetectionsForThisFrame) {
          _DebugTrackerEngine2.default.drawRawDetections(this.canvasContext, rawDetectionsForThisFrame, this.props.canvasResolution, this.props.originalResolution);
        }

        // Draw debug objectTracker data
        if (this.props.showDebugUI && objectTrackerDataForThisFrame) {
          _DebugTrackerEngine2.default.drawObjectTrackerData(this.canvasContext, objectTrackerDataForThisFrame, this.props.canvasResolution, this.props.originalResolution);
        }

        this.lastFrameDrawn = _GameEngineStateManager2.default.getCurrentFrame();
      }
      (0, _raf2.default)(this.loopUpdateCanvas.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-2684014408' + ' ' + 'canvas-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, _react2.default.createElement('canvas', {
        ref: function ref(el) {
          _this7.canvasEl = el;
          if (_this7.canvasEl) {
            _this7.canvasContext = el.getContext('2d');
          }
        },
        width: '1280',
        height: '720',
        className: 'jsx-2684014408' + ' ' + 'canvas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2684014408',
        css: '.canvas-container.jsx-2684014408{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none;}.canvas.jsx-2684014408{display:block;position:absolute;top:0;left:0;z-index:2;}@media (min-aspect-ratio:16/9){.canvas.jsx-2684014408{width:100%;height:auto;}}@media (max-aspect-ratio:16/9){.canvas.jsx-2684014408{width:auto;height:100%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL0dhbWVFbmdpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1hvQixBQUd3QixBQVFHLEFBU0QsQUFPQSxXQXZCRCxBQWlCRSxBQU9BLEdBaEJJLFNBUEEsQUFpQmxCLEFBT0EsU0FoQk0sTUFDQyxHQVJELElBU0ksRUFSSCxPQUNhLENBUXRCLG1CQVBBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FtZS9jb3JlL0dhbWVFbmdpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcblxuaW1wb3J0IHsgaXNJbnNpZGVBcmVhLCBzY2FsZVBvaW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcmVzb2x1dGlvbidcblxuaW1wb3J0IHsgdXBkYXRlTWFza2luZyB9IGZyb20gJy4uL21hc2tpbmcvbWFza2luZydcblxuaW1wb3J0IGRldGVjdE1pc3NlZEl0ZW1zVGhpc0ZyYW1lIGZyb20gJy4vdXRpbHMvZGV0ZWN0TWlzc2VkSXRlbXMnXG5cbmltcG9ydCBDb2xsZWN0YWJsZUl0ZW0gZnJvbSAnLi9tb2RlbHMvQ29sbGVjdGFibGVJdGVtJ1xuaW1wb3J0IENvbGxlY3RhYmxlSXRlbXNFbmdpbmUsIHtcbiAgQ09MTEVDVEFCTEVfVFlQRVNcbn0gZnJvbSAnLi9lbmdpbmVzL0NvbGxlY3RhYmxlSXRlbXNFbmdpbmUnXG5cbmltcG9ydCBNaXNzZWRDYXJBbmltYXRpb25zRW5naW5lIGZyb20gJy4vZW5naW5lcy9NaXNzZWRDYXJBbmltYXRpb25zRW5naW5lJ1xuaW1wb3J0IE1pc3NlZENhckFuaW1hdGlvbiBmcm9tICcuL21vZGVscy9NaXNzZWRDYXJBbmltYXRpb24nXG5cbmltcG9ydCBQdWZmQW5pbWF0aW9uc0VuZ2luZSBmcm9tICcuL2VuZ2luZXMvUHVmZkFuaW1hdGlvbnNFbmdpbmUnXG5pbXBvcnQgUHVmZkFuaW1hdGlvbiBmcm9tICcuL21vZGVscy9QdWZmQW5pbWF0aW9uJ1xuXG5pbXBvcnQgU3RhcnNBbmltYXRpb25zRW5naW5lIGZyb20gJy4vZW5naW5lcy9TdGFyc0FuaW1hdGlvbnNFbmdpbmUnXG5pbXBvcnQgU3RhcnNBbmltYXRpb24gZnJvbSAnLi9tb2RlbHMvU3RhcnNBbmltYXRpb24nXG5cbmltcG9ydCBEZWJ1Z1RyYWNrZXJFbmdpbmUgZnJvbSAnLi9lbmdpbmVzL0RlYnVnVHJhY2tlckVuZ2luZSdcbmltcG9ydCBUcmFja2VyVUlFbmdpbmUgZnJvbSAnLi9lbmdpbmVzL1RyYWNrZXJVSUVuZ2luZSdcbmltcG9ydCBVbmljb3JuRW5naW5lIGZyb20gJy4vZW5naW5lcy9Vbmljb3JuRW5naW5lJ1xuXG5pbXBvcnQge1xuICBhZGRLaWxsZWRJdGVtLFxuICBhZGRNaXNzZWRJdGVtLFxuICBjb2xsZWN0SXRlbSxcbiAgZ2V0U21va2VMZXZlbFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZW1hbmFnZW1lbnQvYXBwL0dhbWVTdGF0ZU1hbmFnZW1lbnQnXG5cbmltcG9ydCB7IGNvbXB1dGVWaXNpYmxlQXJlYSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlbWFuYWdlbWVudC9hcHAvVmlld3BvcnRTdGF0ZU1hbmFnZW1lbnQnXG5cbmltcG9ydCBHYW1lRW5naW5lU3RhdGVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL3N0YXRlbWFuYWdlbWVudC9hcHAvR2FtZUVuZ2luZVN0YXRlTWFuYWdlcidcblxuY2xhc3MgR2FtZUVuZ2luZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMubGFzdEZyYW1lRHJhd24gPSAtMVxuICAgIHRoaXMubG9vcFVwZGF0ZUNhbnZhcyA9IHRoaXMubG9vcFVwZGF0ZUNhbnZhcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5pc1VwZGF0aW5nQ2FudmFzID0gZmFsc2VcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIGlmIChcbiAgICAgIG5leHRQcm9wcy5pc1BsYXlpbmcgPT09IHRydWUgJiZcbiAgICAgIG5leHRQcm9wcy5pbnRyb0FuaW1QbGF5ZWQgPT09IHRydWUgJiZcbiAgICAgIG5leHRQcm9wcy5pc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hlZCA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgaWYgKCF0aGlzLmlzVXBkYXRpbmdDYW52YXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1N0YXJ0IGxvb3AgdXBkYXRlIGNhbnZhcycpXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZ0NhbnZhcyA9IHRydWVcbiAgICAgICAgdGhpcy5sb29wVXBkYXRlQ2FudmFzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmlzQXRCZWdnaW5pbmcgIT09IHRoaXMucHJvcHMuaXNBdEJlZ2dpbmluZykge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0xldmVsIHJlc2V0LCBuZWVkIHRvIGNsZWFyIHVwIGNhbnZhcycpXG4gICAgICB0aGlzLmNsZWFyQ2FudmFzKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gUmVuZGVyaW5nIGVuZ2luZSB0aGF0IGhhdmUgb2Zmc2NyZWVuIGNhbnZhcyB0byBpbml0IG9uIGNsaWVudFxuICAgIENvbGxlY3RhYmxlSXRlbXNFbmdpbmUuaW5pdCgpXG4gICAgUHVmZkFuaW1hdGlvbnNFbmdpbmUuaW5pdCgpXG4gICAgU3RhcnNBbmltYXRpb25zRW5naW5lLmluaXQoKVxuICAgIFVuaWNvcm5FbmdpbmUuaW5pdCgpXG4gICAgTWlzc2VkQ2FyQW5pbWF0aW9uc0VuZ2luZS5pbml0KClcbiAgfVxuXG4gIGNvbGxlY3RJdGVtIChpdGVtVG9Db2xsZWN0KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjb2xsZWN0SXRlbShpdGVtVG9Db2xsZWN0KSlcbiAgfVxuXG4gIGRyYXdDb2xsZWN0YWJsZUl0ZW1zICgpIHtcbiAgICBHYW1lRW5naW5lU3RhdGVNYW5hZ2VyLmdldEl0ZW1zVG9Db2xsZWN0KCkuZm9yRWFjaChjb2xsZWN0YWJsZUl0ZW0gPT4ge1xuICAgICAgdGhpcy5jYW52YXNDb250ZXh0Lmdsb2JhbEFscGhhID0gY29sbGVjdGFibGVJdGVtLm9wYWNpdHlcbiAgICAgIENvbGxlY3RhYmxlSXRlbXNFbmdpbmUuZHJhd0ZyYW1lT25DYW52YXMoXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCxcbiAgICAgICAgY29sbGVjdGFibGVJdGVtXG4gICAgICApXG4gICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZ2xvYmFsQWxwaGEgPSAxXG4gICAgfSlcbiAgfVxuXG4gIGRyYXdQdWZmQW5pbWF0aW9ucyAoKSB7XG4gICAgR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5nZXRQdWZmQW5pbWF0aW9ucygpLmZvckVhY2gocHVmZkFuaW1hdGlvbiA9PiB7XG4gICAgICBQdWZmQW5pbWF0aW9uc0VuZ2luZS5kcmF3RnJhbWVPbkNhbnZhcyh0aGlzLmNhbnZhc0NvbnRleHQsIHB1ZmZBbmltYXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIGRyYXdNaXNzZWRDYXJBbmltYXRpb25zICgpIHtcbiAgICBHYW1lRW5naW5lU3RhdGVNYW5hZ2VyLmdldE1pc3NlZENhckFuaW1hdGlvbnMoKS5mb3JFYWNoKG1pc3NlZENhciA9PiB7XG4gICAgICBNaXNzZWRDYXJBbmltYXRpb25zRW5naW5lLmRyYXdGcmFtZU9uQ2FudmFzKHRoaXMuY2FudmFzQ29udGV4dCwgbWlzc2VkQ2FyKVxuICAgIH0pXG4gIH1cblxuICBkcmF3U3RhcnNBbmltYXRpb25zICgpIHtcbiAgICBHYW1lRW5naW5lU3RhdGVNYW5hZ2VyLmdldFN0YXJzQW5pbWF0aW9ucygpLmZvckVhY2goc3RhckFuaW1hdGlvbiA9PiB7XG4gICAgICBTdGFyc0FuaW1hdGlvbnNFbmdpbmUuZHJhd0ZyYW1lT25DYW52YXModGhpcy5jYW52YXNDb250ZXh0LCBzdGFyQW5pbWF0aW9uKVxuICAgICAgLy8gQ29sbGVjdGFibGVJdGVtc0VuZ2luZS5kcmF3U3RhcnNBbmltYXRpb25zRnJhbWVPbkNhbnZhcyhcbiAgICAgIC8vICAgdGhpcy5jYW52YXNDb250ZXh0LFxuICAgICAgLy8gICBzdGFyQW5pbWF0aW9uXG4gICAgICAvLyApXG4gICAgfSlcbiAgfVxuXG4gIGNsZWFyQ2FudmFzICgpIHtcbiAgICB0aGlzLmNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDEyODAsIDcyMClcbiAgfVxuXG4gIGdldEl0ZW1TaXplIChtYXNrKSB7XG4gICAgLy8gQ29tcHV0ZSBzaXplIGRlcGVuZGluZyBvbiBiYm94IGFyZWFcbiAgICBjb25zdCBtYXNrQXJlYSA9IG1hc2sudyAqIG1hc2suaFxuICAgIGxldCBzaXplID0gTWF0aC5mbG9vcihNYXRoLnNxcnQobWFza0FyZWEgLyA0KSlcbiAgICAvLyBUT0RPIGhhdmUgdGhpcyBkeW5hbWljIGRlcGVuZGluZyBvbiBjYW52YXMgc2l6ZSAvIHNwcml0ZSBpbWFnZVxuICAgIC8vIGJldHdlZW4gMzAgYW5kIDUwIHBpeGVsIGZvciAgbm93XG4gICAgc2l6ZSA9IE1hdGgubWluKE1hdGgubWF4KHBhcnNlSW50KHNpemUpLCAzMCksIDUwKVxuICAgIHJldHVybiBzaXplXG4gIH1cblxuICBhZGRDb2xsZWN0YWJsZUl0ZW0gKGNsaWNrSW5mbywgb2JqZWN0TWFza2VkVGhhdE91dHB1dE9iamVjdCwgdHlwZSkge1xuICAgIGNvbnN0IGl0ZW1TaXplID0gdGhpcy5nZXRJdGVtU2l6ZShvYmplY3RNYXNrZWRUaGF0T3V0cHV0T2JqZWN0KVxuICAgIGNvbnN0IGl0ZW1UeXBlID0gdHlwZVxuXG4gICAgY29uc3Qgc2l6ZSA9IHtcbiAgICAgIHc6IGl0ZW1TaXplLFxuICAgICAgaDogaXRlbVNpemVcbiAgICB9XG5cbiAgICBjb25zdCBuZXdJdGVtID0gbmV3IENvbGxlY3RhYmxlSXRlbShcbiAgICAgIGl0ZW1UeXBlLFxuICAgICAgY2xpY2tJbmZvLnggLSBzaXplLncsXG4gICAgICBjbGlja0luZm8ueSAtIHNpemUuaCxcbiAgICAgIHNpemUudyxcbiAgICAgIHNpemUuaCxcbiAgICAgIDEsXG4gICAgICBvYmplY3RNYXNrZWRUaGF0T3V0cHV0T2JqZWN0LmlkXG4gICAgKVxuXG4gICAgR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5hZGRDb2xsZWN0YWJsZUl0ZW0obmV3SXRlbSlcbiAgfVxuXG4gIGdldFdoYXRUb091dHB1dEZyb21EaXNhcHBlYXJpbmdBQ2FyICgpIHtcbiAgICAvLyBEZXBlbmRpbmcgb24gc21va2UgbGV2ZWwsIGRlY2lkZSB3aGV0ZXIgd2Ugb3V0cHV0IGhlYXRoIGhlbHBlciBvciBwb2ludHMsIG9yIG5vdGhpbmdcbiAgICBsZXQgb3V0cHV0ID0gbnVsbFxuXG4gICAgaWYgKHRoaXMucHJvcHMuc21va2VMZXZlbCA8IDUwKSB7XG4gICAgICAvLyBPbmx5IG91dHB1dCBiYW5hbmFzIG9yIG5vdGhpbmcsIDUwJSBub3RoaW5nLCA1MCUgYmFuYW5hXG4gICAgICBvdXRwdXQgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gQ09MTEVDVEFCTEVfVFlQRVMuQkFOQU5BIDogbnVsbFxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zbW9rZUxldmVsID49IDUwICYmIHRoaXMucHJvcHMuc21va2VMZXZlbCA8IDgwKSB7XG4gICAgICAvLyBPdXRwdXQgYmFuYW5hbmFzIG9yIHRyZWVcbiAgICAgIG91dHB1dCA9XG4gICAgICAgIE1hdGgucmFuZG9tKCkgPCAwLjUgPyBDT0xMRUNUQUJMRV9UWVBFUy5CQU5BTkEgOiBDT0xMRUNUQUJMRV9UWVBFUy5UUkVFXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE91dHB1dCBvbmx5IHRyZWVzXG4gICAgICBvdXRwdXQgPSBDT0xMRUNUQUJMRV9UWVBFUy5UUkVFXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgbG9vcFVwZGF0ZUNhbnZhcyAoKSB7XG4gICAgaWYgKHRoaXMubGFzdEZyYW1lRHJhd24gIT09IEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuZ2V0Q3VycmVudEZyYW1lKCkpIHtcbiAgICAgIC8vIENsZWFyIHByZXZpb3VzIGZyYW1lXG4gICAgICB0aGlzLmNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDEyODAsIDcyMClcblxuICAgICAgLy8gR2V0IGN1cnJlbnQgZnJhbWUgb2YgdGhlIHRyYWNrZXJcbiAgICAgIC8vIChzb21ldGltZXMgaXQgY2FuIGJlIGRpZmZyZW50IGZyb20gdGhlIHZpZGVvIGZyYW1lcmF0ZSlcbiAgICAgIGNvbnN0IGZyYW1lID1cbiAgICAgICAgR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5nZXRDdXJyZW50RnJhbWUoKSAqXG4gICAgICAgIHRoaXMucHJvcHMucmF0aW9WaWRlb1RyYWNrZXJGUFNcblxuICAgICAgLy8gR2V0IGRhdGEgZnJvbSB0cmFja2VyXG4gICAgICBsZXQgb2JqZWN0VHJhY2tlckRhdGFGb3JUaGlzRnJhbWUgPSB0aGlzLnByb3BzLm9iamVjdFRyYWNrZXJEYXRhW2ZyYW1lXVxuXG4gICAgICAvLyBVcGRhdGUgbWFza3NcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1BvdGVudGlhbE9iamVjdFRvTWFzayA9IHVwZGF0ZU1hc2tpbmcoXG4gICAgICAgIG9iamVjdFRyYWNrZXJEYXRhRm9yVGhpc0ZyYW1lLFxuICAgICAgICB0aGlzLnByb3BzLmNhbnZhc1Jlc29sdXRpb24sXG4gICAgICAgIHRoaXMucHJvcHMub3JpZ2luYWxSZXNvbHV0aW9uXG4gICAgICApXG5cbiAgICAgIC8vIEhhbmRsZSB1c2VyIGFjdGlvbnNcbiAgICAgIGlmIChHYW1lRW5naW5lU3RhdGVNYW5hZ2VyLmdldENsaWNrc0J1ZmZlcigpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNsaWNrVXNlZCA9IGZhbHNlXG4gICAgICAgIC8vIEZvciBlYWNoIGNsaWNrXG4gICAgICAgIEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuZ2V0Q2xpY2tzQnVmZmVyKCkuZm9yRWFjaChjbGljayA9PiB7XG4gICAgICAgICAgLy8gU2VlIGlmIGl0IHdpbGwgbWFrZSBhIGNhciBkaXNzYXBlYXIgd2l0aCB0aGlzIGNsaWNrXG4gICAgICAgICAgLy8gZm9yIGVhY2ggcmVtYWluaW5nUG90ZW50aWFsT2JqZWN0VG9NYXNrXG4gICAgICAgICAgcmVtYWluaW5nUG90ZW50aWFsT2JqZWN0VG9NYXNrLmV2ZXJ5KHBvdGVudGlhbE9iamVjdFRvTWFzayA9PiB7XG4gICAgICAgICAgICBpZiAoaXNJbnNpZGVBcmVhKHBvdGVudGlhbE9iamVjdFRvTWFzaywgY2xpY2spKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3BvdGVudGlhbE9iamVjdFRvTWFzay5pZERpc3BsYXl9IGNsaWNrZWQgIWApXG4gICAgICAgICAgICAgIGNvbnN0IHdoYXRPYmplY3RUb091dHB1dCA9IHRoaXMuZ2V0V2hhdFRvT3V0cHV0RnJvbURpc2FwcGVhcmluZ0FDYXIoKVxuXG4gICAgICAgICAgICAgIGlmICh3aGF0T2JqZWN0VG9PdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAvLyBPdXRwdXQgaXRlbSB0byBjb2xsZWN0XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb2xsZWN0YWJsZUl0ZW0oXG4gICAgICAgICAgICAgICAgICBjbGljayxcbiAgICAgICAgICAgICAgICAgIHBvdGVudGlhbE9iamVjdFRvTWFzayxcbiAgICAgICAgICAgICAgICAgIHdoYXRPYmplY3RUb091dHB1dFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuYWRkTWFza2VkSXRlbShwb3RlbnRpYWxPYmplY3RUb01hc2spXG4gICAgICAgICAgICAgIC8vIERpc3BhdGNoIGtpbGxlZCBpdGVtIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgICAgICAgICAgIGFkZEtpbGxlZEl0ZW0ocG90ZW50aWFsT2JqZWN0VG9NYXNrLmlkLCB3aGF0T2JqZWN0VG9PdXRwdXQpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLy8gQWRkIHB1ZmYgYW5pbWF0aW9uXG4gICAgICAgICAgICAgIEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuYWRkUHVmZkFuaW1hdGlvbihcbiAgICAgICAgICAgICAgICBuZXcgTWlzc2VkQ2FyQW5pbWF0aW9uKFxuICAgICAgICAgICAgICAgICAgY2xpY2sueCxcbiAgICAgICAgICAgICAgICAgIGNsaWNrLnksXG4gICAgICAgICAgICAgICAgICA5MCxcbiAgICAgICAgICAgICAgICAgIHBvdGVudGlhbE9iamVjdFRvTWFzay5pZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIC8vIGJyZWFrIGZyb20gbG9vcFxuICAgICAgICAgICAgICBjbGlja1VzZWQgPSB0cnVlXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgLy8gU2VlIGlmIGl0IGNhbiBjb2xsZWN0IGl0ZW1zLCBpcyBjbGljayB3YXNuJ3QgdXNlZCB0byBkaXNhcHBlYXIgYSBjYXJcbiAgICAgICAgICBpZiAoIWNsaWNrVXNlZCkge1xuICAgICAgICAgICAgR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5nZXRJdGVtc1RvQ29sbGVjdCgpLmV2ZXJ5KGl0ZW1Ub0NvbGxlY3QgPT4ge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaXRlbVRvQ29sbGVjdC5pc0NvbGxlY3RhYmxlICYmXG4gICAgICAgICAgICAgICAgaXNJbnNpZGVBcmVhKGl0ZW1Ub0NvbGxlY3QsIGNsaWNrKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3RJdGVtKGl0ZW1Ub0NvbGxlY3QpXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgZXhwbG9zaW9uIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuYWRkU3RhcnNBbmltYXRpb24oXG4gICAgICAgICAgICAgICAgICBuZXcgU3RhcnNBbmltYXRpb24oY2xpY2sueCwgY2xpY2sueSwgaXRlbVRvQ29sbGVjdC5pZClcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAvLyBicmVhayBmcm9tIGxvb3BcbiAgICAgICAgICAgICAgICBjbGlja1VzZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZXNldCBjbGljayB1c2VkXG4gICAgICAgICAgY2xpY2tVc2VkID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5yZXNldENsaWNrQnVmZmVyKClcblxuICAgICAgLy8gSGFuZGxlIEl0ZW1zIG1pc3NlZCB0aGlzIGZyYW1lXG4gICAgICBjb25zdCBpdGVtc01pc3NlZFRoaXNGcmFtZSA9IGRldGVjdE1pc3NlZEl0ZW1zVGhpc0ZyYW1lKFxuICAgICAgICBmcmFtZSxcbiAgICAgICAgdGhpcy5wcm9wcy5vYmplY3RUcmFja2VyRGF0YSxcbiAgICAgICAgdGhpcy5wcm9wcy5hbGxvd2VkRGlzYXBwZWFyQXJlYXMsXG4gICAgICAgIHRoaXMucHJvcHMuYWxyZWFkeUtpbGxlZEl0ZW1zLFxuICAgICAgICBjb21wdXRlVmlzaWJsZUFyZWEodGhpcy5wcm9wcy5vcmlnaW5hbFJlc29sdXRpb24pXG4gICAgICApXG5cbiAgICAgIGl0ZW1zTWlzc2VkVGhpc0ZyYW1lLmZvckVhY2goaXRlbU1pc3NlZCA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBGcmFtZSAke2ZyYW1lfSwgJHtpdGVtTWlzc2VkLmlkRGlzcGxheX0gbWlzc2VkOmApXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkTWlzc2VkSXRlbSgpKVxuICAgICAgICBjb25zdCBjZW50ZXJPZkRpc2FwZWFySXRlbSA9IHNjYWxlUG9pbnQoXG4gICAgICAgICAgaXRlbU1pc3NlZC5kaXNhcHBlYXJBcmVhLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2FudmFzUmVzb2x1dGlvbixcbiAgICAgICAgICB0aGlzLnByb3BzLm9yaWdpbmFsUmVzb2x1dGlvblxuICAgICAgICApXG5cbiAgICAgICAgLy8gQWRkIGEgdmlzdWFsIGNsdWUgdGhhdCB3ZSBoYXZlIG1pc3NlZCB0aGVtXG4gICAgICAgIEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuYWRkTWlzc2VkQ2FyQW5pbWF0aW9uKFxuICAgICAgICAgIG5ldyBQdWZmQW5pbWF0aW9uKFxuICAgICAgICAgICAgY2VudGVyT2ZEaXNhcGVhckl0ZW0ueCxcbiAgICAgICAgICAgIGNlbnRlck9mRGlzYXBlYXJJdGVtLnksXG4gICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICBpdGVtTWlzc2VkLmlkXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICAvKlxuICAgICAgICBEcmF3IHRoaW5ncyBmb3IgdGhpcyBmcmFtZVxuICAgICAgKi9cblxuICAgICAgLy8gRHJhdyBjb2xsZWN0YWJsZSBpdGVtcyBzdGF0ZVxuICAgICAgdGhpcy5kcmF3Q29sbGVjdGFibGVJdGVtcyh0aGlzLmNhbnZhc0NvbnRleHQpXG5cbiAgICAgIC8vIERyYXcgc3RhcnQgYW5pbWF0aW9uc1xuICAgICAgdGhpcy5kcmF3U3RhcnNBbmltYXRpb25zKHRoaXMuY2FudmFzQ29udGV4dClcblxuICAgICAgLy8gRHJhdyBwdWZmIGFuaW1hdGlvbnNcbiAgICAgIHRoaXMuZHJhd1B1ZmZBbmltYXRpb25zKHRoaXMuY2FudmFzQ29udGV4dClcblxuICAgICAgLy8gRHJhdyBtaXNzZWQgY2FyIGFuaW1hdGlvbnNcbiAgICAgIHRoaXMuZHJhd01pc3NlZENhckFuaW1hdGlvbnModGhpcy5jYW52YXNDb250ZXh0KVxuXG4gICAgICBpZiAob2JqZWN0VHJhY2tlckRhdGFGb3JUaGlzRnJhbWUpIHtcbiAgICAgICAgLy8gRHJhdyB1bmljb3Juc1xuICAgICAgICBVbmljb3JuRW5naW5lLmRyYXdVbmljb3Juc0Zyb21UcmFja2VyRGF0YShcbiAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQsXG4gICAgICAgICAgb2JqZWN0VHJhY2tlckRhdGFGb3JUaGlzRnJhbWUsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jYW52YXNSZXNvbHV0aW9uLFxuICAgICAgICAgIHRoaXMucHJvcHMub3JpZ2luYWxSZXNvbHV0aW9uXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gRHJhdyB0cmFja2VyIHVpIGRhdGFcbiAgICAgIGlmIChvYmplY3RUcmFja2VyRGF0YUZvclRoaXNGcmFtZSkge1xuICAgICAgICBUcmFja2VyVUlFbmdpbmUuZHJhd1RyYWNrZXJVSURhdGEoXG4gICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LFxuICAgICAgICAgIG9iamVjdFRyYWNrZXJEYXRhRm9yVGhpc0ZyYW1lLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2FudmFzUmVzb2x1dGlvbixcbiAgICAgICAgICB0aGlzLnByb3BzLm9yaWdpbmFsUmVzb2x1dGlvblxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIERyYXcgZGVidWcgcmF3IGRldGVjdGlvbnMgZGF0YVxuICAgICAgbGV0IHJhd0RldGVjdGlvbnNGb3JUaGlzRnJhbWUgPSB0aGlzLnByb3BzLnJhd0RldGVjdGlvbnNbZnJhbWVdXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93RGVidWdVSSAmJiByYXdEZXRlY3Rpb25zRm9yVGhpc0ZyYW1lKSB7XG4gICAgICAgIERlYnVnVHJhY2tlckVuZ2luZS5kcmF3UmF3RGV0ZWN0aW9ucyhcbiAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQsXG4gICAgICAgICAgcmF3RGV0ZWN0aW9uc0ZvclRoaXNGcmFtZSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNhbnZhc1Jlc29sdXRpb24sXG4gICAgICAgICAgdGhpcy5wcm9wcy5vcmlnaW5hbFJlc29sdXRpb25cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyBEcmF3IGRlYnVnIG9iamVjdFRyYWNrZXIgZGF0YVxuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd0RlYnVnVUkgJiYgb2JqZWN0VHJhY2tlckRhdGFGb3JUaGlzRnJhbWUpIHtcbiAgICAgICAgRGVidWdUcmFja2VyRW5naW5lLmRyYXdPYmplY3RUcmFja2VyRGF0YShcbiAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQsXG4gICAgICAgICAgb2JqZWN0VHJhY2tlckRhdGFGb3JUaGlzRnJhbWUsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jYW52YXNSZXNvbHV0aW9uLFxuICAgICAgICAgIHRoaXMucHJvcHMub3JpZ2luYWxSZXNvbHV0aW9uXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0RnJhbWVEcmF3biA9IEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuZ2V0Q3VycmVudEZyYW1lKClcbiAgICB9XG4gICAgcmFmKHRoaXMubG9vcFVwZGF0ZUNhbnZhcy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYW52YXMtY29udGFpbmVyYH0+XG4gICAgICAgIHsvKiBDYW52YXMgd2lkdGggYW5kIGhlaWdodCBtdXN0XG4gICAgICAgIGJlIHNldCB0aGUgdGhlIHlvbG8gZGV0ZWN0aW9ucyByZXNvbHV0aW9uXG4gICAgICAgIFRoZW4gaXQgaXMgc2NhbGVkIGRvd24gdG8gdmlld3BvcnQgKi99XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWwgPSBlbFxuICAgICAgICAgICAgaWYgKHRoaXMuY2FudmFzRWwpIHtcbiAgICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gZWwuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgd2lkdGg9JzEyODAnXG4gICAgICAgICAgaGVpZ2h0PSc3MjAnXG4gICAgICAgICAgY2xhc3NOYW1lPSdjYW52YXMnXG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY2FudmFzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhbnZhcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLWFzcGVjdC1yYXRpbzogMTYvOSkge1xuICAgICAgICAgICAgLmNhbnZhcyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtYXNwZWN0LXJhdGlvOiAxNi85KSB7XG4gICAgICAgICAgICAuY2FudmFzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRWaWRlbyA9IHN0YXRlLmFwcC5nZXQoJ2F2YWlsYWJsZVZpZGVvcycpLmZpbmQodmlkZW8gPT4ge1xuICAgIHJldHVybiB2aWRlby5nZXQoJ25hbWUnKSA9PT0gc3RhdGUuYXBwLmdldCgnc2VsZWN0ZWRWaWRlbycpXG4gIH0pXG5cbiAgY29uc3QgcmF0aW9WaWRlb1RyYWNrZXJGUFMgPVxuICAgIHNlbGVjdGVkVmlkZW8uZ2V0KCd0cmFja2VyQW5kRGV0ZWN0aW9uc0ZQUycpIC8gc2VsZWN0ZWRWaWRlby5nZXQoJ3ZpZGVvRlBTJylcblxuICByZXR1cm4ge1xuICAgIHJhd0RldGVjdGlvbnM6IHN0YXRlLnJhd0RldGVjdGlvbnMuZ2V0KCdkYXRhJyksXG4gICAgYXJlUmF3RGV0ZWN0aW9uc0ZldGNoZWQ6IHN0YXRlLnJhd0RldGVjdGlvbnMuZ2V0KCdmZXRjaGVkJyksXG4gICAgb2JqZWN0VHJhY2tlckRhdGE6IHN0YXRlLm9iamVjdFRyYWNrZXIuZ2V0KCdkYXRhJyksXG4gICAgaXNPYmplY3RUcmFja2VyRGF0YUZldGNoZWQ6IHN0YXRlLm9iamVjdFRyYWNrZXIuZ2V0KCdmZXRjaGVkJyksXG4gICAgaXNQbGF5aW5nOiBzdGF0ZS52aWRlby5nZXQoJ2lzUGxheWluZycpLFxuICAgIGlzQXRCZWdnaW5pbmc6IHN0YXRlLnZpZGVvLmdldCgnaXNBdEJlZ2dpbmluZycpLFxuICAgIHNob3dEZWJ1Z1VJOiBzdGF0ZS5zZXR0aW5ncy5nZXQoJ3Nob3dEZWJ1Z1VJJyksXG4gICAgb3JpZ2luYWxSZXNvbHV0aW9uOiBzZWxlY3RlZFZpZGVvLmdldCgnb3JpZ2luYWxSZXNvbHV0aW9uJykudG9KUygpLFxuICAgIGNhbnZhc1Jlc29sdXRpb246IHN0YXRlLnZpZXdwb3J0LmdldCgnY2FudmFzUmVzb2x1dGlvbicpLnRvSlMoKSxcbiAgICByYXRpb1ZpZGVvVHJhY2tlckZQUyxcbiAgICBhbGxvd2VkRGlzYXBwZWFyQXJlYXM6IHNlbGVjdGVkVmlkZW8uZ2V0KCdkaXNhcHBlYXJBcmVhcycpLnRvSlMoKSxcbiAgICBhbHJlYWR5S2lsbGVkSXRlbXM6IHN0YXRlLmdhbWUuZ2V0KCdraWxsZWRJdGVtcycpLFxuICAgIHNtb2tlTGV2ZWw6IGdldFNtb2tlTGV2ZWwoXG4gICAgICBzdGF0ZS5nYW1lLmdldCgnbmJJdGVtc01pc3NlZCcpLFxuICAgICAgc3RhdGUuZ2FtZS5nZXQoJ21heE1pc3NlZCcpXG4gICAgKSxcbiAgICBpbnRyb0FuaW1QbGF5ZWQ6IHN0YXRlLmFwcC5nZXQoJ2ludHJvQW5pbVBsYXllZCcpXG4gIH1cbn0pKEdhbWVFbmdpbmUpXG4iXX0= */\n/*@ sourceURL=components/game/core/GameEngine.js */'
      }));
    }
  }]);

  return GameEngine;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  var selectedVideo = state.app.get('availableVideos').find(function (video) {
    return video.get('name') === state.app.get('selectedVideo');
  });

  var ratioVideoTrackerFPS = selectedVideo.get('trackerAndDetectionsFPS') / selectedVideo.get('videoFPS');

  return {
    rawDetections: state.rawDetections.get('data'),
    areRawDetectionsFetched: state.rawDetections.get('fetched'),
    objectTrackerData: state.objectTracker.get('data'),
    isObjectTrackerDataFetched: state.objectTracker.get('fetched'),
    isPlaying: state.video.get('isPlaying'),
    isAtBeggining: state.video.get('isAtBeggining'),
    showDebugUI: state.settings.get('showDebugUI'),
    originalResolution: selectedVideo.get('originalResolution').toJS(),
    canvasResolution: state.viewport.get('canvasResolution').toJS(),
    ratioVideoTrackerFPS: ratioVideoTrackerFPS,
    allowedDisappearAreas: selectedVideo.get('disappearAreas').toJS(),
    alreadyKilledItems: state.game.get('killedItems'),
    smokeLevel: (0, _GameStateManagement.getSmokeLevel)(state.game.get('nbItemsMissed'), state.game.get('maxMissed')),
    introAnimPlayed: state.app.get('introAnimPlayed')
  };
})(GameEngine);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL0dhbWVFbmdpbmUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwicmFmIiwiaXNJbnNpZGVBcmVhIiwic2NhbGVQb2ludCIsInVwZGF0ZU1hc2tpbmciLCJkZXRlY3RNaXNzZWRJdGVtc1RoaXNGcmFtZSIsIkNvbGxlY3RhYmxlSXRlbSIsIkNvbGxlY3RhYmxlSXRlbXNFbmdpbmUiLCJDT0xMRUNUQUJMRV9UWVBFUyIsIk1pc3NlZENhckFuaW1hdGlvbnNFbmdpbmUiLCJNaXNzZWRDYXJBbmltYXRpb24iLCJQdWZmQW5pbWF0aW9uc0VuZ2luZSIsIlB1ZmZBbmltYXRpb24iLCJTdGFyc0FuaW1hdGlvbnNFbmdpbmUiLCJTdGFyc0FuaW1hdGlvbiIsIkRlYnVnVHJhY2tlckVuZ2luZSIsIlRyYWNrZXJVSUVuZ2luZSIsIlVuaWNvcm5FbmdpbmUiLCJhZGRLaWxsZWRJdGVtIiwiYWRkTWlzc2VkSXRlbSIsImNvbGxlY3RJdGVtIiwiZ2V0U21va2VMZXZlbCIsImNvbXB1dGVWaXNpYmxlQXJlYSIsIkdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIiLCJHYW1lRW5naW5lIiwicHJvcHMiLCJsYXN0RnJhbWVEcmF3biIsImxvb3BVcGRhdGVDYW52YXMiLCJiaW5kIiwiaXNVcGRhdGluZ0NhbnZhcyIsIm5leHRQcm9wcyIsImlzUGxheWluZyIsImludHJvQW5pbVBsYXllZCIsImlzT2JqZWN0VHJhY2tlckRhdGFGZXRjaGVkIiwiaXNBdEJlZ2dpbmluZyIsImNsZWFyQ2FudmFzIiwiaW5pdCIsIml0ZW1Ub0NvbGxlY3QiLCJkaXNwYXRjaCIsImdldEl0ZW1zVG9Db2xsZWN0IiwiZm9yRWFjaCIsImNhbnZhc0NvbnRleHQiLCJnbG9iYWxBbHBoYSIsImNvbGxlY3RhYmxlSXRlbSIsIm9wYWNpdHkiLCJkcmF3RnJhbWVPbkNhbnZhcyIsImdldFB1ZmZBbmltYXRpb25zIiwicHVmZkFuaW1hdGlvbiIsImdldE1pc3NlZENhckFuaW1hdGlvbnMiLCJtaXNzZWRDYXIiLCJnZXRTdGFyc0FuaW1hdGlvbnMiLCJzdGFyQW5pbWF0aW9uIiwiY2xlYXJSZWN0IiwibWFzayIsIm1hc2tBcmVhIiwidyIsImgiLCJzaXplIiwiTWF0aCIsImZsb29yIiwic3FydCIsIm1pbiIsIm1heCIsInBhcnNlSW50IiwiY2xpY2tJbmZvIiwib2JqZWN0TWFza2VkVGhhdE91dHB1dE9iamVjdCIsInR5cGUiLCJpdGVtU2l6ZSIsImdldEl0ZW1TaXplIiwiaXRlbVR5cGUiLCJuZXdJdGVtIiwieCIsInkiLCJpZCIsImFkZENvbGxlY3RhYmxlSXRlbSIsIm91dHB1dCIsInNtb2tlTGV2ZWwiLCJyYW5kb20iLCJCQU5BTkEiLCJUUkVFIiwiZ2V0Q3VycmVudEZyYW1lIiwiZnJhbWUiLCJyYXRpb1ZpZGVvVHJhY2tlckZQUyIsIm9iamVjdFRyYWNrZXJEYXRhRm9yVGhpc0ZyYW1lIiwib2JqZWN0VHJhY2tlckRhdGEiLCJyZW1haW5pbmdQb3RlbnRpYWxPYmplY3RUb01hc2siLCJjYW52YXNSZXNvbHV0aW9uIiwib3JpZ2luYWxSZXNvbHV0aW9uIiwiZ2V0Q2xpY2tzQnVmZmVyIiwibGVuZ3RoIiwiY2xpY2tVc2VkIiwiZXZlcnkiLCJwb3RlbnRpYWxPYmplY3RUb01hc2siLCJjbGljayIsIndoYXRPYmplY3RUb091dHB1dCIsImdldFdoYXRUb091dHB1dEZyb21EaXNhcHBlYXJpbmdBQ2FyIiwiYWRkTWFza2VkSXRlbSIsImFkZFB1ZmZBbmltYXRpb24iLCJpc0NvbGxlY3RhYmxlIiwiYWRkU3RhcnNBbmltYXRpb24iLCJyZXNldENsaWNrQnVmZmVyIiwiaXRlbXNNaXNzZWRUaGlzRnJhbWUiLCJhbGxvd2VkRGlzYXBwZWFyQXJlYXMiLCJhbHJlYWR5S2lsbGVkSXRlbXMiLCJjZW50ZXJPZkRpc2FwZWFySXRlbSIsIml0ZW1NaXNzZWQiLCJkaXNhcHBlYXJBcmVhIiwiYWRkTWlzc2VkQ2FyQW5pbWF0aW9uIiwiZHJhd0NvbGxlY3RhYmxlSXRlbXMiLCJkcmF3U3RhcnNBbmltYXRpb25zIiwiZHJhd1B1ZmZBbmltYXRpb25zIiwiZHJhd01pc3NlZENhckFuaW1hdGlvbnMiLCJkcmF3VW5pY29ybnNGcm9tVHJhY2tlckRhdGEiLCJkcmF3VHJhY2tlclVJRGF0YSIsInJhd0RldGVjdGlvbnNGb3JUaGlzRnJhbWUiLCJyYXdEZXRlY3Rpb25zIiwic2hvd0RlYnVnVUkiLCJkcmF3UmF3RGV0ZWN0aW9ucyIsImRyYXdPYmplY3RUcmFja2VyRGF0YSIsImNhbnZhc0VsIiwiZWwiLCJnZXRDb250ZXh0Iiwic2VsZWN0ZWRWaWRlbyIsInN0YXRlIiwiYXBwIiwiZ2V0IiwiZmluZCIsInZpZGVvIiwiYXJlUmF3RGV0ZWN0aW9uc0ZldGNoZWQiLCJvYmplY3RUcmFja2VyIiwic2V0dGluZ3MiLCJ0b0pTIiwidmlld3BvcnQiLCJnYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBUyxBQUFjLEFBQWtCOztBQUV6QyxBQUFTLEFBQXFCOztBQUU5QixBQUFPLEFBQWdDOzs7O0FBRXZDLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBTyxBQUNMLEFBQ0s7Ozs7QUFFUCxBQUFPLEFBQStCOzs7O0FBQ3RDLEFBQU8sQUFBd0I7Ozs7QUFFL0IsQUFBTyxBQUEwQjs7OztBQUNqQyxBQUFPLEFBQW1COzs7O0FBRTFCLEFBQU8sQUFBMkI7Ozs7QUFDbEMsQUFBTyxBQUFvQjs7OztBQUUzQixBQUFPLEFBQXdCOzs7O0FBQy9CLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBTyxBQUFtQjs7OztBQUUxQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0s7O0FBRVAsQUFBUyxBQUEwQjs7QUFFbkMsQUFBTyxBQUE0Qjs7Ozs7Ozs7O0ksQUFFN0I7c0NBQ0o7O3NCQUFBLEFBQWEsT0FBTzt3Q0FBQTs7OElBQUEsQUFDWixBQUNOOztVQUFBLEFBQUssaUJBQWlC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