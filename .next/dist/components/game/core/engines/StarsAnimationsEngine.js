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

// Overkill if we render only one frame
var StarsAnimationsEngine = function () {
  function StarsAnimationsEngine() {
    (0, _classCallCheck3.default)(this, StarsAnimationsEngine);

    this.offscreenCanvas = null;
    this.sprite = {
      width: 1380,
      height: 76,
      src: '/static/assets/sprites/stars.png',
      nbFrames: 18
    };
  }

  (0, _createClass3.default)(StarsAnimationsEngine, [{
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
      return this.sprite.nbFrames - 1;
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
    value: function drawFrameOnCanvas(contextToDrawOn, starsAnimation) {
      var _this2 = this;

      // Compute offscreenCanvas position of frame
      starsAnimation.dots.map(function (dot) {
        var sourceData = _this2.getFrameData(dot.currentFrame);
        contextToDrawOn.globalAlpha = dot.opacity;
        contextToDrawOn.drawImage(_this2.offscreenCanvas, sourceData.x, sourceData.y, sourceData.width, sourceData.height, dot.x, dot.y, dot.width, dot.height);
      });
      contextToDrawOn.globalAlpha = 1;
    }
  }]);

  return StarsAnimationsEngine;
}();

var StarsAnimationsEngineInstance = new StarsAnimationsEngine();

exports.default = StarsAnimationsEngineInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL2VuZ2luZXMvU3RhcnNBbmltYXRpb25zRW5naW5lLmpzIl0sIm5hbWVzIjpbIlN0YXJzQW5pbWF0aW9uc0VuZ2luZSIsIm9mZnNjcmVlbkNhbnZhcyIsInNwcml0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwibmJGcmFtZXMiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJmcmFtZVdpZHRoIiwiTWF0aCIsImZsb29yIiwiZnJhbWVIZWlnaHQiLCJmcmFtZU5iIiwieCIsInkiLCJjb250ZXh0VG9EcmF3T24iLCJzdGFyc0FuaW1hdGlvbiIsImRvdHMiLCJtYXAiLCJzb3VyY2VEYXRhIiwiZ2V0RnJhbWVEYXRhIiwiZG90IiwiY3VycmVudEZyYW1lIiwiZ2xvYmFsQWxwaGEiLCJvcGFjaXR5IiwiU3RhcnNBbmltYXRpb25zRW5naW5lSW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtJLEFBQ00sb0NBQ0o7bUNBQWU7d0NBQ2I7O1NBQUEsQUFBSyxrQkFBTCxBQUF1QixBQUN2QjtTQUFBLEFBQUs7YUFBUyxBQUNMLEFBQ1A7Y0FGWSxBQUVKLEFBQ1I7V0FIWSxBQUdQLEFBQ0w7Z0JBSkYsQUFBYyxBQUlGLEFBRWI7QUFOZSxBQUNaOzs7OzsyQkFPSTtrQkFDTjs7QUFDQTtVQUFJLE1BQU0sSUFBVixBQUFVLEFBQUksQUFDZDtVQUFBLEFBQUksTUFBTSxLQUFBLEFBQUssT0FBZixBQUFzQixBQUV0Qjs7VUFBQSxBQUFJLFNBQVMsWUFBTSxBQUNqQjtBQUNBO2NBQUEsQUFBSyxrQkFBa0IsU0FBQSxBQUFTLGNBQWhDLEFBQXVCLEFBQXVCLEFBQzlDO2NBQUEsQUFBSyxnQkFBTCxBQUFxQixRQUFRLE1BQUEsQUFBSyxPQUFsQyxBQUF5QyxBQUN6QztjQUFBLEFBQUssZ0JBQUwsQUFBcUIsU0FBUyxNQUFBLEFBQUssT0FBbkMsQUFBMEMsQUFDMUM7Y0FBQSxBQUFLLGdCQUFMLEFBQ0csV0FESCxBQUNjLE1BRGQsQUFFRyxVQUZILEFBRWEsS0FGYixBQUVrQixHQUZsQixBQUVxQixHQUFHLE1BQUEsQUFBSyxPQUY3QixBQUVvQyxPQUFPLE1BQUEsQUFBSyxPQUZoRCxBQUV1RCxBQUV2RDs7QUFDQTtjQUFBLEFBQUssT0FBTCxBQUFZLGFBQWEsS0FBQSxBQUFLLE1BQzVCLE1BQUEsQUFBSyxPQUFMLEFBQVksUUFBUSxNQUFBLEFBQUssT0FEM0IsQUFBeUIsQUFDUyxBQUVsQztjQUFBLEFBQUssT0FBTCxBQUFZLGNBQWMsS0FBQSxBQUFLLE1BQU0sTUFBQSxBQUFLLE9BQTFDLEFBQTBCLEFBQXVCLEFBQ2xEO0FBZEQsQUFlRDs7OztrQ0FFYyxBQUNiO2FBQU8sS0FBQSxBQUFLLE9BQUwsQUFBWSxXQUFuQixBQUE4QixBQUMvQjtBQUVEOzs7Ozs7aUNBQ2MsQSxTQUFTLEFBQ3JCOztXQUNLLFVBQVUsS0FBQSxBQUFLLE9BRGIsQUFDb0IsQUFDekI7V0FGSyxBQUVGLEFBQ0g7ZUFBTyxLQUFBLEFBQUssT0FIUCxBQUdjLEFBQ25CO2dCQUFRLEtBQUEsQUFBSyxPQUpmLEFBQU8sQUFJZSxBQUV2QjtBQU5RLEFBQ0w7Ozs7c0MsQUFPZSxpQixBQUFpQixnQkFBZ0I7bUJBQ2xEOztBQUNBO3FCQUFBLEFBQWUsS0FBZixBQUFvQixJQUFJLGVBQU8sQUFDN0I7WUFBSSxhQUFhLE9BQUEsQUFBSyxhQUFhLElBQW5DLEFBQWlCLEFBQXNCLEFBQ3ZDO3dCQUFBLEFBQWdCLGNBQWMsSUFBOUIsQUFBa0MsQUFDbEM7d0JBQUEsQUFBZ0IsVUFDZCxPQURGLEFBQ08saUJBQ0wsV0FGRixBQUVhLEdBQ1gsV0FIRixBQUdhLEdBQ1gsV0FKRixBQUlhLE9BQ1gsV0FMRixBQUthLFFBQ1gsSUFORixBQU1NLEdBQ0osSUFQRixBQU9NLEdBQ0osSUFSRixBQVFNLE9BQ0osSUFURixBQVNNLEFBRVA7QUFkRCxBQWVBO3NCQUFBLEFBQWdCLGNBQWhCLEFBQThCLEFBQy9COzs7Ozs7O0FBR0gsSUFBTSxnQ0FBZ0MsSUFBdEMsQUFBc0MsQUFBSSxBQUUxQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJTdGFyc0FuaW1hdGlvbnNFbmdpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==