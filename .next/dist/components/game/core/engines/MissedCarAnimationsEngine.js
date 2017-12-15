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

var MissedCarAnimationsEngine = function () {
  function MissedCarAnimationsEngine() {
    (0, _classCallCheck3.default)(this, MissedCarAnimationsEngine);

    this.offscreenCanvas = null;
    this.sprite = {
      width: 800,
      height: 200,
      src: '/static/assets/sprites/missedcar.png',
      nbFrames: 4
    };
  }

  (0, _createClass3.default)(MissedCarAnimationsEngine, [{
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
    value: function drawFrameOnCanvas(contextToDrawOn, missedCarAnimation) {
      // Compute offscreenCanvas position of frame
      var sourceData = this.getFrameData(missedCarAnimation.currentFrame);
      contextToDrawOn.drawImage(this.offscreenCanvas, sourceData.x, sourceData.y, sourceData.width, sourceData.height, missedCarAnimation.x, missedCarAnimation.y, missedCarAnimation.w, missedCarAnimation.h);
    }
  }]);

  return MissedCarAnimationsEngine;
}();

var MissedCarAnimationsEngineInstance = new MissedCarAnimationsEngine();

exports.default = MissedCarAnimationsEngineInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL2VuZ2luZXMvTWlzc2VkQ2FyQW5pbWF0aW9uc0VuZ2luZS5qcyJdLCJuYW1lcyI6WyJNaXNzZWRDYXJBbmltYXRpb25zRW5naW5lIiwib2Zmc2NyZWVuQ2FudmFzIiwic3ByaXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJuYkZyYW1lcyIsImltZyIsIkltYWdlIiwib25sb2FkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImZyYW1lV2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJmcmFtZUhlaWdodCIsImZyYW1lTmIiLCJ4IiwieSIsImNvbnRleHRUb0RyYXdPbiIsIm1pc3NlZENhckFuaW1hdGlvbiIsInNvdXJjZURhdGEiLCJnZXRGcmFtZURhdGEiLCJjdXJyZW50RnJhbWUiLCJ3IiwiaCIsIk1pc3NlZENhckFuaW1hdGlvbnNFbmdpbmVJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNLEEsd0NBQ0o7dUNBQWU7d0NBQ2I7O1NBQUEsQUFBSyxrQkFBTCxBQUF1QixBQUN2QjtTQUFBLEFBQUs7YUFBUyxBQUNMLEFBQ1A7Y0FGWSxBQUVKLEFBQ1I7V0FIWSxBQUdQLEFBQ0w7Z0JBSkYsQUFBYyxBQUlGLEFBRWI7QUFOZSxBQUNaOzs7OzsyQkFPSTtrQkFDTjs7QUFDQTtVQUFJLE1BQU0sSUFBVixBQUFVLEFBQUksQUFDZDtVQUFBLEFBQUksTUFBTSxLQUFBLEFBQUssT0FBZixBQUFzQixBQUV0Qjs7VUFBQSxBQUFJLFNBQVMsWUFBTSxBQUNqQjtBQUNBO2NBQUEsQUFBSyxrQkFBa0IsU0FBQSxBQUFTLGNBQWhDLEFBQXVCLEFBQXVCLEFBQzlDO2NBQUEsQUFBSyxnQkFBTCxBQUFxQixRQUFRLE1BQUEsQUFBSyxPQUFsQyxBQUF5QyxBQUN6QztjQUFBLEFBQUssZ0JBQUwsQUFBcUIsU0FBUyxNQUFBLEFBQUssT0FBbkMsQUFBMEMsQUFDMUM7Y0FBQSxBQUFLLGdCQUFMLEFBQ0csV0FESCxBQUNjLE1BRGQsQUFFRyxVQUZILEFBRWEsS0FGYixBQUVrQixHQUZsQixBQUVxQixHQUFHLE1BQUEsQUFBSyxPQUY3QixBQUVvQyxPQUFPLE1BQUEsQUFBSyxPQUZoRCxBQUV1RCxBQUV2RDs7QUFDQTtjQUFBLEFBQUssT0FBTCxBQUFZLGFBQWEsS0FBQSxBQUFLLE1BQzVCLE1BQUEsQUFBSyxPQUFMLEFBQVksUUFBUSxNQUFBLEFBQUssT0FEM0IsQUFBeUIsQUFDUyxBQUVsQztjQUFBLEFBQUssT0FBTCxBQUFZLGNBQWMsS0FBQSxBQUFLLE1BQU0sTUFBQSxBQUFLLE9BQTFDLEFBQTBCLEFBQXVCLEFBQ2xEO0FBZEQsQUFlRDs7OztrQ0FFYyxBQUNiO2FBQU8sS0FBQSxBQUFLLE9BQVosQUFBbUIsQUFDcEI7QUFFRDs7Ozs7O2lDQUNjLEEsU0FBUyxBQUNyQjs7V0FDSyxVQUFVLEtBQUEsQUFBSyxPQURiLEFBQ29CLEFBQ3pCO1dBRkssQUFFRixBQUNIO2VBQU8sS0FBQSxBQUFLLE9BSFAsQUFHYyxBQUNuQjtnQkFBUSxLQUFBLEFBQUssT0FKZixBQUFPLEFBSWUsQUFFdkI7QUFOUSxBQUNMOzs7O3NDLEFBT2UsaUJBQWlCLEEsb0JBQW9CLEFBQ3REO0FBQ0E7VUFBTSxhQUFhLEtBQUEsQUFBSyxhQUFhLG1CQUFyQyxBQUFtQixBQUFxQyxBQUN4RDtzQkFBQSxBQUFnQixVQUNkLEtBREYsQUFDTyxpQkFDTCxXQUZGLEFBRWEsR0FDWCxXQUhGLEFBR2EsR0FDWCxXQUpGLEFBSWEsT0FDWCxXQUxGLEFBS2EsUUFDWCxtQkFORixBQU1xQixHQUNuQixtQkFQRixBQU9xQixHQUNuQixtQkFSRixBQVFxQixHQUNuQixtQkFURixBQVNxQixBQUV0Qjs7Ozs7OztBQUdILElBQU0sb0NBQW9DLElBQTFDLEFBQTBDLEFBQUksQUFFOUM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTWlzc2VkQ2FyQW5pbWF0aW9uc0VuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9