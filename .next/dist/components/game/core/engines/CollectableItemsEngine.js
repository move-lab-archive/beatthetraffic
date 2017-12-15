'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLLECTABLE_TYPES = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Image */

var PATH_TO_ASSETS = '/static/assets/sprites';

function getSrc(collectableType) {
  return PATH_TO_ASSETS + '/' + collectableType + '.png';
}

var COLLECTABLE_TYPES = exports.COLLECTABLE_TYPES = {
  BANANA: 'banana',
  TREE: 'tree'
};

var CollectableItemsEngine = function () {
  function CollectableItemsEngine() {
    (0, _classCallCheck3.default)(this, CollectableItemsEngine);

    this.offscreenCanvas = {};
    this.sprites = {};

    this.sprites[COLLECTABLE_TYPES.BANANA] = {
      width: 920,
      height: 347,
      src: getSrc(COLLECTABLE_TYPES.BANANA),
      nbFramePerRow: 8,
      nbRow: 3,
      nbTotalFrame: 18
    };

    this.sprites[COLLECTABLE_TYPES.TREE] = {
      width: 920,
      height: 347,
      src: getSrc(COLLECTABLE_TYPES.TREE),
      nbFramePerRow: 8,
      nbRow: 3,
      nbTotalFrame: 18
    };
  }

  (0, _createClass3.default)(CollectableItemsEngine, [{
    key: 'init',
    value: function init() {
      var _this = this;

      (0, _values2.default)(COLLECTABLE_TYPES).forEach(function (collectableType) {
        var sprite = _this.sprites[collectableType];

        // Create image element and load sprite data
        var img = new Image();
        img.src = sprite.src;

        img.onload = function () {
          // Render sprites on offscreen canvas
          _this.offscreenCanvas[collectableType] = document.createElement('canvas');
          _this.offscreenCanvas[collectableType].width = sprite.width;
          _this.offscreenCanvas[collectableType].height = sprite.height;
          // this.offscreenCanvas[collectableType].img = img
          _this.offscreenCanvas[collectableType].getContext('2d').drawImage(img, 0, 0, sprite.width, sprite.height);

          // Compute frame data for sprite
          sprite.frameWidth = Math.floor(sprite.width / sprite.nbFramePerRow);
          sprite.frameHeight = Math.floor(sprite.height / sprite.nbRow);
        };
      });
    }
  }, {
    key: 'getNbFrames',
    value: function getNbFrames(collectableType) {
      return this.sprites[collectableType].nbTotalFrame - 1;
    }

    /* frame needs to start at 0 */

  }, {
    key: 'getFrameData',
    value: function getFrameData(frameNb, collectableType) {
      var sprite = this.sprites[collectableType];
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
    key: 'drawFrameOnCanvas',
    value: function drawFrameOnCanvas(contextToDrawOn, item) {
      // Compute offscreenCanvas position of frame
      var sourceData = this.getFrameData(item.currentFrame, item.type);
      contextToDrawOn.drawImage(this.offscreenCanvas[item.type], sourceData.x, sourceData.y, sourceData.width, sourceData.height, item.x, item.y, item.w, item.h);
    }

    // TODO DELETE IF UNUSED
    // TODO RENAME drawExplosionAnimationFrameOnCanvas

  }, {
    key: 'drawStarsAnimationsFrameOnCanvas',
    value: function drawStarsAnimationsFrameOnCanvas(contextToDrawOn, starsAnimation) {
      var _this2 = this;

      var sourceData = this.getFrameData(starsAnimation.currentFrame, 'banana');
      starsAnimation.dots.map(function (dot) {
        contextToDrawOn.globalAlpha = dot.opacity;
        contextToDrawOn.drawImage(_this2.offscreenCanvas['banana'], sourceData.x, sourceData.y, sourceData.width, sourceData.height, dot.x, dot.y, dot.width, dot.height);
        contextToDrawOn.globalAlpha = 1;
      });
    }
  }]);

  return CollectableItemsEngine;
}();

var CollectableItemsEngineInstance = new CollectableItemsEngine();

exports.default = CollectableItemsEngineInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL2VuZ2luZXMvQ29sbGVjdGFibGVJdGVtc0VuZ2luZS5qcyJdLCJuYW1lcyI6WyJQQVRIX1RPX0FTU0VUUyIsImdldFNyYyIsImNvbGxlY3RhYmxlVHlwZSIsIkNPTExFQ1RBQkxFX1RZUEVTIiwiQkFOQU5BIiwiVFJFRSIsIkNvbGxlY3RhYmxlSXRlbXNFbmdpbmUiLCJvZmZzY3JlZW5DYW52YXMiLCJzcHJpdGVzIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJuYkZyYW1lUGVyUm93IiwibmJSb3ciLCJuYlRvdGFsRnJhbWUiLCJmb3JFYWNoIiwic3ByaXRlIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZnJhbWVXaWR0aCIsIk1hdGgiLCJmbG9vciIsImZyYW1lSGVpZ2h0IiwiZnJhbWVOYiIsInJvd05iIiwiY29sdW1uTmIiLCJ4IiwieSIsImNvbnRleHRUb0RyYXdPbiIsIml0ZW0iLCJzb3VyY2VEYXRhIiwiZ2V0RnJhbWVEYXRhIiwiY3VycmVudEZyYW1lIiwidHlwZSIsInciLCJoIiwic3RhcnNBbmltYXRpb24iLCJkb3RzIiwibWFwIiwiZ2xvYmFsQWxwaGEiLCJkb3QiLCJvcGFjaXR5IiwiQ29sbGVjdGFibGVJdGVtc0VuZ2luZUluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNLGlCQUFOLEFBQXVCOztBQUV2QixTQUFBLEFBQVMsT0FBVCxBQUFpQixpQkFBaUIsQUFDaEM7U0FBQSxBQUFVLHVCQUFWLEFBQTRCLGtCQUM3QjtBQUVEOztBQUFPLElBQU07VUFBb0IsQUFDdkIsQUFDUjtRQUZLLEFBQTBCLEFBRXpCO0FBRnlCLEFBQy9COztJQUlJLEEscUNBQ0o7b0NBQWU7d0NBQ2I7O1NBQUEsQUFBSyxrQkFBTCxBQUF1QixBQUN2QjtTQUFBLEFBQUssVUFBTCxBQUFlLEFBRWY7O1NBQUEsQUFBSyxRQUFRLGtCQUFiLEFBQStCO2FBQVUsQUFDaEMsQUFDUDtjQUZ1QyxBQUUvQixBQUNSO1dBQUssT0FBTyxrQkFIMkIsQUFHbEMsQUFBeUIsQUFDOUI7cUJBSnVDLEFBSXhCLEFBQ2Y7YUFMdUMsQUFLaEMsQUFDUDtvQkFORixBQUF5QyxBQU16QixBQUdoQjtBQVR5QyxBQUN2Qzs7U0FRRixBQUFLLFFBQVEsa0JBQWIsQUFBK0I7YUFBUSxBQUM5QixBQUNQO2NBRnFDLEFBRTdCLEFBQ1I7V0FBSyxPQUFPLGtCQUh5QixBQUdoQyxBQUF5QixBQUM5QjtxQkFKcUMsQUFJdEIsQUFDZjthQUxxQyxBQUs5QixBQUNQO29CQU5GLEFBQXVDLEFBTXZCLEFBRWpCO0FBUndDLEFBQ3JDOzs7OzsyQkFTSTtrQkFDTjs7NEJBQUEsQUFBYyxtQkFBZCxBQUFpQyxRQUFRLDJCQUFtQixBQUMxRDtZQUFJLFNBQVMsTUFBQSxBQUFLLFFBQWxCLEFBQWEsQUFBYSxBQUUxQjs7QUFDQTtZQUFJLE1BQU0sSUFBVixBQUFVLEFBQUksQUFDZDtZQUFBLEFBQUksTUFBTSxPQUFWLEFBQWlCLEFBRWpCOztZQUFBLEFBQUksU0FBUyxZQUFNLEFBQ2pCO0FBQ0E7Z0JBQUEsQUFBSyxnQkFBTCxBQUFxQixtQkFBbUIsU0FBQSxBQUFTLGNBQWpELEFBQXdDLEFBQXVCLEFBQy9EO2dCQUFBLEFBQUssZ0JBQUwsQUFBcUIsaUJBQXJCLEFBQXNDLFFBQVEsT0FBOUMsQUFBcUQsQUFDckQ7Z0JBQUEsQUFBSyxnQkFBTCxBQUFxQixpQkFBckIsQUFBc0MsU0FBUyxPQUEvQyxBQUFzRCxBQUN0RDtBQUNBO2dCQUFBLEFBQUssZ0JBQUwsQUFBcUIsaUJBQXJCLEFBQ0csV0FESCxBQUNjLE1BRGQsQUFFRyxVQUZILEFBRWEsS0FGYixBQUVrQixHQUZsQixBQUVxQixHQUFHLE9BRnhCLEFBRStCLE9BQU8sT0FGdEMsQUFFNkMsQUFFN0M7O0FBQ0E7aUJBQUEsQUFBTyxhQUFhLEtBQUEsQUFBSyxNQUFNLE9BQUEsQUFBTyxRQUFRLE9BQTlDLEFBQW9CLEFBQWlDLEFBQ3JEO2lCQUFBLEFBQU8sY0FBYyxLQUFBLEFBQUssTUFBTSxPQUFBLEFBQU8sU0FBUyxPQUFoRCxBQUFxQixBQUFrQyxBQUN4RDtBQWJELEFBY0Q7QUFyQkQsQUFzQkQ7Ozs7Z0MsQUFFWSxpQkFBaUIsQUFDNUI7YUFBTyxLQUFBLEFBQUssUUFBTCxBQUFhLGlCQUFiLEFBQThCLGVBQXJDLEFBQW9ELEFBQ3JEO0FBRUQ7Ozs7OztpQ0FDYyxBLFMsQUFBUyxpQkFBaUIsQUFDdEM7VUFBSSxTQUFTLEtBQUEsQUFBSyxRQUFsQixBQUFhLEFBQWEsQUFDMUI7VUFBTSxRQUFRLEtBQUEsQUFBSyxNQUFNLFVBQVUsT0FBbkMsQUFBYyxBQUE0QixBQUMxQztVQUFNLFdBQVcsVUFBVSxPQUEzQixBQUFrQyxBQUNsQzs7V0FDSyxXQUFXLE9BRFQsQUFDZ0IsQUFDckI7V0FBRyxRQUFRLE9BRk4sQUFFYSxBQUNsQjtlQUFPLE9BSEYsQUFHUyxBQUNkO2dCQUFRLE9BSlYsQUFBTyxBQUlVLEFBRWxCO0FBTlEsQUFDTDs7OztzQ0FPZSxBLGlCQUFpQixBLE1BQU0sQUFDeEM7QUFDQTtVQUFNLGFBQWEsS0FBQSxBQUFLLGFBQWEsS0FBbEIsQUFBdUIsY0FBYyxLQUF4RCxBQUFtQixBQUEwQyxBQUM3RDtzQkFBQSxBQUFnQixVQUNkLEtBQUEsQUFBSyxnQkFBZ0IsS0FEdkIsQUFDRSxBQUEwQixPQUMxQixXQUZGLEFBRWEsR0FDWCxXQUhGLEFBR2EsR0FDWCxXQUpGLEFBSWEsT0FDWCxXQUxGLEFBS2EsUUFDWCxLQU5GLEFBTU8sR0FDTCxLQVBGLEFBT08sR0FDTCxLQVJGLEFBUU8sR0FDTCxLQVRGLEFBU08sQUFFUjtBQUVEOztBQUNBOzs7OztxREFDa0MsQSxpQkFBaUIsQSxnQkFBZ0I7bUJBQ2pFOztVQUFNLGFBQWEsS0FBQSxBQUFLLGFBQWEsZUFBbEIsQUFBaUMsY0FBcEQsQUFBbUIsQUFBK0MsQUFDbEU7cUJBQUEsQUFBZSxLQUFmLEFBQW9CLElBQUksZUFBTyxBQUM3Qjt3QkFBQSxBQUFnQixjQUFjLElBQTlCLEFBQWtDLEFBQ2xDO3dCQUFBLEFBQWdCLFVBQ2QsT0FBQSxBQUFLLGdCQURQLEFBQ0UsQUFBcUIsV0FDckIsV0FGRixBQUVhLEdBQ1gsV0FIRixBQUdhLEdBQ1gsV0FKRixBQUlhLE9BQ1gsV0FMRixBQUthLFFBQ1gsSUFORixBQU1NLEdBQ0osSUFQRixBQU9NLEdBQ0osSUFSRixBQVFNLE9BQ0osSUFURixBQVNNLEFBRU47d0JBQUEsQUFBZ0IsY0FBaEIsQUFBOEIsQUFDL0I7QUFkRCxBQWVEOzs7Ozs7O0FBR0gsSUFBTSxpQ0FBaUMsSUFBdkMsQUFBdUMsQUFBSSxBQUUzQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb2xsZWN0YWJsZUl0ZW1zRW5naW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=