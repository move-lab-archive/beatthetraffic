'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Image */

var PuffAnimationsEngine = function () {
  function PuffAnimationsEngine() {
    (0, _classCallCheck3.default)(this, PuffAnimationsEngine);

    this.offscreenCanvas = null;
    this.sprite = {
      width: 255,
      height: 69,
      src: '/static/assets/puff/v1.svg',
      nbFrames: 4
    };
  }

  (0, _createClass3.default)(PuffAnimationsEngine, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // Create image element and load sprite data
      var img = new Image();
      img.src = this.sprite.src;

      img.onload = function () {
        // Render sprite on offscreen canvas
        _this.offscreenCanvas = document.createElement('canvas');
        _this.offscreenCanvas.width = _this.sprite.width;
        _this.offscreenCanvas.height = _this.sprite.height;
        _this.offscreenCanvas.getContext('2d').drawImage(img, 0, 0, _this.sprite.width, _this.sprite.height);

        // Compute frame data for sprite
        _this.sprite.frameWidth = Math.floor(_this.sprite.width / _this.sprite.nbFrames);
        _this.sprite.frameHeight = Math.floor(_this.sprite.height);
      };
    }
  }, {
    key: 'getNbFrames',
    value: function getNbFrames() {
      return this.sprite.nbFrames;
    }

    /* frame needs to start at 0 */

  }, {
    key: 'getFrameData',
    value: function getFrameData(frameNb) {
      return {
        x: frameNb * this.sprite.frameWidth,
        y: 0,
        width: this.sprite.frameWidth,
        height: this.sprite.frameHeight
      };
    }
  }, {
    key: 'drawFrameOnCanvas',
    value: function drawFrameOnCanvas(contextToDrawOn, puffAnimation) {
      // Compute offscreenCanvas position of frame
      var sourceData = this.getFrameData(puffAnimation.currentFrame);
      contextToDrawOn.drawImage(this.offscreenCanvas, sourceData.x, sourceData.y, sourceData.width, sourceData.height, puffAnimation.x, puffAnimation.y, puffAnimation.w, puffAnimation.h);
    }
  }]);

  return PuffAnimationsEngine;
}();

var PuffAnimationsEngineInstance = new PuffAnimationsEngine();

exports.default = PuffAnimationsEngineInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL2VuZ2luZXMvUHVmZkFuaW1hdGlvbnNFbmdpbmUuanMiXSwibmFtZXMiOlsiUHVmZkFuaW1hdGlvbnNFbmdpbmUiLCJvZmZzY3JlZW5DYW52YXMiLCJzcHJpdGUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIm5iRnJhbWVzIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZnJhbWVXaWR0aCIsIk1hdGgiLCJmbG9vciIsImZyYW1lSGVpZ2h0IiwiZnJhbWVOYiIsIngiLCJ5IiwiY29udGV4dFRvRHJhd09uIiwicHVmZkFuaW1hdGlvbiIsInNvdXJjZURhdGEiLCJnZXRGcmFtZURhdGEiLCJjdXJyZW50RnJhbWUiLCJ3IiwiaCIsIlB1ZmZBbmltYXRpb25zRW5naW5lSW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTSxBLG1DQUNKO2tDQUFlO3dDQUNiOztTQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDdkI7U0FBQSxBQUFLO2FBQVMsQUFDTCxBQUNQO2NBRlksQUFFSixBQUNSO1dBSFksQUFHUCxBQUNMO2dCQUpGLEFBQWMsQUFJRixBQUViO0FBTmUsQUFDWjs7Ozs7MkJBT0k7a0JBQ047O0FBQ0E7VUFBSSxNQUFNLElBQVYsQUFBVSxBQUFJLEFBQ2Q7VUFBQSxBQUFJLE1BQU0sS0FBQSxBQUFLLE9BQWYsQUFBc0IsQUFFdEI7O1VBQUEsQUFBSSxTQUFTLFlBQU0sQUFDakI7QUFDQTtjQUFBLEFBQUssa0JBQWtCLFNBQUEsQUFBUyxjQUFoQyxBQUF1QixBQUF1QixBQUM5QztjQUFBLEFBQUssZ0JBQUwsQUFBcUIsUUFBUSxNQUFBLEFBQUssT0FBbEMsQUFBeUMsQUFDekM7Y0FBQSxBQUFLLGdCQUFMLEFBQXFCLFNBQVMsTUFBQSxBQUFLLE9BQW5DLEFBQTBDLEFBQzFDO2NBQUEsQUFBSyxnQkFBTCxBQUNHLFdBREgsQUFDYyxNQURkLEFBRUcsVUFGSCxBQUVhLEtBRmIsQUFFa0IsR0FGbEIsQUFFcUIsR0FBRyxNQUFBLEFBQUssT0FGN0IsQUFFb0MsT0FBTyxNQUFBLEFBQUssT0FGaEQsQUFFdUQsQUFFdkQ7O0FBQ0E7Y0FBQSxBQUFLLE9BQUwsQUFBWSxhQUFhLEtBQUEsQUFBSyxNQUM1QixNQUFBLEFBQUssT0FBTCxBQUFZLFFBQVEsTUFBQSxBQUFLLE9BRDNCLEFBQXlCLEFBQ1MsQUFFbEM7Y0FBQSxBQUFLLE9BQUwsQUFBWSxjQUFjLEtBQUEsQUFBSyxNQUFNLE1BQUEsQUFBSyxPQUExQyxBQUEwQixBQUF1QixBQUNsRDtBQWRELEFBZUQ7Ozs7a0NBRWMsQUFDYjthQUFPLEtBQUEsQUFBSyxPQUFaLEFBQW1CLEFBQ3BCO0FBRUQ7Ozs7OztpQ0FDYyxBLFNBQVMsQUFDckI7O1dBQ0ssVUFBVSxLQUFBLEFBQUssT0FEYixBQUNvQixBQUN6QjtXQUZLLEFBRUYsQUFDSDtlQUFPLEtBQUEsQUFBSyxPQUhQLEFBR2MsQUFDbkI7Z0JBQVEsS0FBQSxBQUFLLE9BSmYsQUFBTyxBQUllLEFBRXZCO0FBTlEsQUFDTDs7OztzQyxBQU9lLGlCQUFpQixBLGVBQWUsQUFDakQ7QUFDQTtVQUFNLGFBQWEsS0FBQSxBQUFLLGFBQWEsY0FBckMsQUFBbUIsQUFBZ0MsQUFDbkQ7c0JBQUEsQUFBZ0IsVUFDZCxLQURGLEFBQ08saUJBQ0wsV0FGRixBQUVhLEdBQ1gsV0FIRixBQUdhLEdBQ1gsV0FKRixBQUlhLE9BQ1gsV0FMRixBQUthLFFBQ1gsY0FORixBQU1nQixHQUNkLGNBUEYsQUFPZ0IsR0FDZCxjQVJGLEFBUWdCLEdBQ2QsY0FURixBQVNnQixBQUVqQjs7Ozs7OztBQUdILElBQU0sK0JBQStCLElBQXJDLEFBQXFDLEFBQUksQUFFekM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUHVmZkFuaW1hdGlvbnNFbmdpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==