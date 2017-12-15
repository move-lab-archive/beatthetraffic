'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _resolution = require('../../../../utils/resolution');

var _GameEngineStateManager = require('../../../../statemanagement/app/GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Image */
var UnicornEngine = function () {
  function UnicornEngine() {
    (0, _classCallCheck3.default)(this, UnicornEngine);

    this.offscreenCanvas = null;

    this.sprite = {
      width: 600,
      height: 600,
      src: '/static/assets/sprites/unicorn3dNew.png',
      nbFramePerRow: 6,
      nbRow: 6,
      nbTotalFrame: 36,
      frameWidth: null,
      frameHeight: null
    };
  }

  (0, _createClass3.default)(UnicornEngine, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // Create image element and load sprite data
      var img = new Image();
      img.src = this.sprite.src;

      img.onload = function () {
        // Render sprites on offscreen canvas
        _this.offscreenCanvas = document.createElement('canvas');
        _this.offscreenCanvas.width = _this.sprite.width;
        _this.offscreenCanvas.height = _this.sprite.height;
        // this.offscreenCanvas[collectableType].img = img
        _this.offscreenCanvas.getContext('2d').drawImage(img, 0, 0, _this.sprite.width, _this.sprite.height);

        // Compute frame data for sprite
        _this.sprite.frameWidth = Math.floor(_this.sprite.width / _this.sprite.nbFramePerRow);
        _this.sprite.frameHeight = Math.floor(_this.sprite.height / _this.sprite.nbRow);
      };
    }
  }, {
    key: 'getNbFrames',
    value: function getNbFrames() {
      return this.sprites.nbTotalFrame - 1;
    }

    /* Associate bearing of the unicorn to a frame
                           dY
                          ^               XX
                         |             XXX
                         |            XX
                         |           XX
                         |         XX
                         |       XXX
                         |      XX
                         |     XX
                         |    XX    bearing of tracker = this angle in degree
                         |  XX
                         |XX
    +----------------------XX----------------------->  dX
                         |
                         |
                         |     bearing of unicorn sprite = bearing of tracker + 90º
                         |
                         |
                         |
                         |
                         |
                         |
                         |
                         |
                         +
    */

  }, {
    key: 'getFrameData',
    value: function getFrameData(bearing) {
      var sprite = this.sprite;
      var bearingSprite = 0;
      // translate bearing of tracker to bearing of sprite
      if (bearing < 270) {
        bearingSprite = bearing + 90;
      } else {
        bearingSprite = bearing + 90 - 360;
      }
      var frameNb = Math.round(bearingSprite * sprite.nbTotalFrame / 360);
      var rowNb = Math.floor(frameNb / sprite.nbFramePerRow);
      var columnNb = frameNb % sprite.nbFramePerRow;
      return {
        x: columnNb * sprite.frameWidth,
        y: rowNb * sprite.frameHeight,
        width: sprite.frameWidth,
        height: sprite.frameHeight
      };
    }
  }, {
    key: 'getUnicornSize',
    value: function getUnicornSize(bbox) {
      var unicorn = {};
      // Compute size depending on bbox area
      var bboxArea = bbox.w * bbox.h;
      var size = Math.floor(Math.sqrt(bboxArea / 2));
      // TODO have this dynamic depending on canvas size / sprite image
      // between 30 and 50 pixel for  now
      size = Math.min(Math.max(parseInt(size), 90), 120);

      // keep proportions
      if (this.sprite.frameWidth > this.sprite.frameHeight) {
        unicorn.w = size;
        unicorn.h = this.sprite.frameHeight * size / this.sprite.frameWidth;
      } else {
        unicorn.w = this.sprite.frameWidth * size / this.sprite.frameHeight;
        unicorn.h = size;
      }

      return unicorn;
    }
  }, {
    key: 'drawFrameOnCanvas',
    value: function drawFrameOnCanvas(contextToDrawOn, item) {
      // Compute offscreenCanvas position of frame
      var sourceData = this.getFrameData(item.bearing);
      contextToDrawOn.drawImage(this.offscreenCanvas, sourceData.x, sourceData.y, sourceData.width, sourceData.height, item.x - item.w / 2, item.y - item.h / 2, item.w, item.h);
    }
  }, {
    key: 'drawUnicornsFromTrackerData',
    value: function drawUnicornsFromTrackerData(context, objectTrackerDataForThisFrame, canvasResolution, originalResolution) {
      var _this2 = this;

      var unicornsToDrawThisFrame = objectTrackerDataForThisFrame.filter(function (objectTracked) {
        return _GameEngineStateManager2.default.getItemsMasked().find(function (itemMasked) {
          return itemMasked.id === objectTracked.id;
        }) && objectTracked.isZombie !== true;
      }).map(function (objectTracked) {
        // TODO Here getUnicornSize to draw it
        var objectScaled = (0, _resolution.scaleDetection)(objectTracked, canvasResolution, originalResolution);

        objectScaled = (0, _extends3.default)({}, objectScaled, _this2.getUnicornSize(objectScaled));

        return objectScaled;
      });

      unicornsToDrawThisFrame.forEach(function (unicorn) {
        _this2.drawFrameOnCanvas(context, unicorn);
      });
    }
  }]);

  return UnicornEngine;
}();

var UnicornEngineInstance = new UnicornEngine();

exports.default = UnicornEngineInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL2VuZ2luZXMvVW5pY29ybkVuZ2luZS5qcyJdLCJuYW1lcyI6WyJzY2FsZURldGVjdGlvbiIsIkdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIiLCJVbmljb3JuRW5naW5lIiwib2Zmc2NyZWVuQ2FudmFzIiwic3ByaXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJuYkZyYW1lUGVyUm93IiwibmJSb3ciLCJuYlRvdGFsRnJhbWUiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJNYXRoIiwiZmxvb3IiLCJzcHJpdGVzIiwiYmVhcmluZyIsImJlYXJpbmdTcHJpdGUiLCJmcmFtZU5iIiwicm91bmQiLCJyb3dOYiIsImNvbHVtbk5iIiwieCIsInkiLCJiYm94IiwidW5pY29ybiIsImJib3hBcmVhIiwidyIsImgiLCJzaXplIiwic3FydCIsIm1pbiIsIm1heCIsInBhcnNlSW50IiwiY29udGV4dFRvRHJhd09uIiwiaXRlbSIsInNvdXJjZURhdGEiLCJnZXRGcmFtZURhdGEiLCJjb250ZXh0Iiwib2JqZWN0VHJhY2tlckRhdGFGb3JUaGlzRnJhbWUiLCJjYW52YXNSZXNvbHV0aW9uIiwib3JpZ2luYWxSZXNvbHV0aW9uIiwidW5pY29ybnNUb0RyYXdUaGlzRnJhbWUiLCJmaWx0ZXIiLCJnZXRJdGVtc01hc2tlZCIsImZpbmQiLCJpdGVtTWFza2VkIiwiaWQiLCJvYmplY3RUcmFja2VkIiwiaXNab21iaWUiLCJtYXAiLCJvYmplY3RTY2FsZWQiLCJnZXRVbmljb3JuU2l6ZSIsImZvckVhY2giLCJkcmF3RnJhbWVPbkNhbnZhcyIsIlVuaWNvcm5FbmdpbmVJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBUyxBQUFzQjs7QUFDL0IsQUFBTyxBQUE0Qjs7Ozs7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QUEsQUFBSyxPQUFsRCxBQUF5RCxBQUMxRDtBQUhELGFBR08sQUFDTDtnQkFBQSxBQUFRLElBQUksS0FBQSxBQUFLLE9BQUwsQUFBWSxhQUFaLEFBQXlCLE9BQU8sS0FBQSxBQUFLLE9BQWpELEFBQXdELEFBQ3hEO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFFRDs7YUFBQSxBQUFPLEFBQ1I7Ozs7c0NBRWtCLEEsaUJBQWlCLEEsTUFBTSxBQUN4QztBQUNBO1VBQU0sYUFBYSxLQUFBLEFBQUssYUFBYSxLQUFyQyxBQUFtQixBQUF1QixBQUMxQztzQkFBQSxBQUFnQixVQUNkLEtBREYsQUFDTyxpQkFDTCxXQUZGLEFBRWEsR0FDWCxXQUhGLEFBR2EsR0FDWCxXQUpGLEFBSWEsT0FDWCxXQUxGLEFBS2EsUUFDWCxLQUFBLEFBQUssSUFBSSxLQUFBLEFBQUssSUFOaEIsQUFNb0IsR0FDbEIsS0FBQSxBQUFLLElBQUksS0FBQSxBQUFLLElBUGhCLEFBT29CLEdBQ2xCLEtBUkYsQUFRTyxHQUNMLEtBVEYsQUFTTyxBQUVSOzs7O2dELEFBR0MsU0FDQSxBLCtCQUNBLEEsa0IsQUFDQSxvQkFDQTttQkFDQTs7VUFBTSx3REFBMEIsQUFDN0IsT0FBTyx5QkFBaUIsQUFDdkI7Z0RBQ0UsQUFBdUIsaUJBQXZCLEFBQXdDLEtBQ3RDLHNCQUFBO2lCQUFjLFdBQUEsQUFBVyxPQUFPLGNBQWhDLEFBQThDO0FBRGhELFNBQUEsS0FFSyxjQUFBLEFBQWMsYUFIckIsQUFHa0MsQUFFbkM7QUFQNkIsT0FBQSxFQUFBLEFBUTdCLElBQUkseUJBQWlCLEFBQ3BCO0FBQ0E7WUFBSSxlQUFlLGdDQUFBLEFBQ2pCLGVBRGlCLEFBRWpCLGtCQUZGLEFBQW1CLEFBR2pCLEFBR0Y7O2tEQUFBLEFBQ0ssY0FDQSxPQUFBLEFBQUssZUFGVixBQUVLLEFBQW9CLEFBR3pCOztlQUFBLEFBQU8sQUFDUjtBQXRCSCxBQUFnQyxBQXdCaEM7OzhCQUFBLEFBQXdCLFFBQVEsbUJBQVcsQUFDekM7ZUFBQSxBQUFLLGtCQUFMLEFBQXVCLFNBQXZCLEFBQWdDLEFBQ2pDO0FBRkQsQUFHRDs7Ozs7OztBQUdILElBQU0sd0JBQXdCLElBQTlCLEFBQThCLEFBQUksQUFFbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVW5pY29ybkVuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9