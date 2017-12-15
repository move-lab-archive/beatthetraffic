'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _resolution = require('../../../../utils/resolution');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DebugTrackerEngine = function () {
  function DebugTrackerEngine() {
    (0, _classCallCheck3.default)(this, DebugTrackerEngine);
  }

  (0, _createClass3.default)(DebugTrackerEngine, [{
    key: 'drawObjectTrackerData',
    value: function drawObjectTrackerData(context, objectTrackerData, canvasResolution, originalResolution) {
      context.globalAlpha = 1;
      context.strokeStyle = 'blue';
      context.lineWidth = 5;
      context.font = '30px Arial';
      context.fillStyle = 'blue';
      objectTrackerData.map(function (objectTracked) {
        var objectTrackedScaled = (0, _resolution.scaleDetection)(objectTracked, canvasResolution, originalResolution);
        if (objectTrackedScaled.isZombie) {
          context.fillStyle = 'rgba(255, 153, 0, ' + objectTrackedScaled.zombieOpacity + ')';
          context.strokeStyle = 'rgba(255, 153, 0, ' + objectTrackedScaled.zombieOpacity + ')';
        } else {
          context.fillStyle = 'blue';
          context.strokeStyle = 'blue';
        }
        var x = objectTrackedScaled.x - objectTrackedScaled.w / 2;
        var y = objectTrackedScaled.y - objectTrackedScaled.h / 2;
        context.strokeRect(x + 5, y + 5, objectTrackedScaled.w - 10, objectTrackedScaled.h - 10);
        context.fillText(objectTrackedScaled.idDisplay, x + objectTrackedScaled.w / 2 - 20, y + objectTrackedScaled.h / 2);
      });
    }
  }, {
    key: 'drawRawDetections',
    value: function drawRawDetections(context, detections, canvasResolution, originalResolution) {
      context.strokeStyle = '#f00';
      context.lineWidth = 5;
      context.font = '15px Arial';
      context.fillStyle = '#f00';
      detections.map(function (detection) {
        var scaledDetection = (0, _resolution.scaleDetection)(detection, canvasResolution, originalResolution);
        var x = scaledDetection.x - scaledDetection.w / 2;
        var y = scaledDetection.y - scaledDetection.h / 2;
        context.strokeRect(x, y, scaledDetection.w, scaledDetection.h);
        context.fillText(scaledDetection.name, x, y - 10);
      });
    }
  }]);

  return DebugTrackerEngine;
}();

var DebugTrackerEngineInstance = new DebugTrackerEngine();

exports.default = DebugTrackerEngineInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL2VuZ2luZXMvRGVidWdUcmFja2VyRW5naW5lLmpzIl0sIm5hbWVzIjpbInNjYWxlRGV0ZWN0aW9uIiwiRGVidWdUcmFja2VyRW5naW5lIiwiY29udGV4dCIsIm9iamVjdFRyYWNrZXJEYXRhIiwiY2FudmFzUmVzb2x1dGlvbiIsIm9yaWdpbmFsUmVzb2x1dGlvbiIsImdsb2JhbEFscGhhIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJmb250IiwiZmlsbFN0eWxlIiwibWFwIiwib2JqZWN0VHJhY2tlZFNjYWxlZCIsIm9iamVjdFRyYWNrZWQiLCJpc1pvbWJpZSIsInpvbWJpZU9wYWNpdHkiLCJ4IiwidyIsInkiLCJoIiwic3Ryb2tlUmVjdCIsImZpbGxUZXh0IiwiaWREaXNwbGF5IiwiZGV0ZWN0aW9ucyIsInNjYWxlZERldGVjdGlvbiIsImRldGVjdGlvbiIsIm5hbWUiLCJEZWJ1Z1RyYWNrZXJFbmdpbmVJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBK0IsQUFBL0I7Ozs7SUFFTSxBOzs7Ozs7OzBDQUVGLEEsU0FDQSxBLG1CQUNBLEEsa0JBQ0EsQSxvQkFDQSxBQUNBO2NBQVEsQUFBUixjQUFzQixBQUF0QixBQUNBO2NBQVEsQUFBUixjQUFzQixBQUF0QixBQUNBO2NBQVEsQUFBUixZQUFvQixBQUFwQixBQUNBO2NBQVEsQUFBUixPQUFlLEFBQWYsQUFDQTtjQUFRLEFBQVIsWUFBb0IsQUFBcEIsQUFDQTt3QkFBa0IsQUFBbEIsSUFBc0IseUJBQWlCLEFBQ3JDO1lBQUksc0JBQXNCLGdDQUN4QixBQUR3QixlQUV4QixBQUZ3QixrQkFHeEIsQUFId0IsQUFBMUIsQUFLQTtZQUFJLG9CQUFvQixBQUF4QixVQUFrQyxBQUNoQztrQkFBUSxBQUFSLG1DQUNFLG9CQUFvQixBQUR0QixnQkFHQTtrQkFBUSxBQUFSLHFDQUNFLG9CQUFvQixBQUR0QixnQkFHRDtBQVBELGVBT08sQUFDTDtrQkFBUSxBQUFSLFlBQW9CLEFBQXBCLEFBQ0E7a0JBQVEsQUFBUixjQUFzQixBQUF0QixBQUNEO0FBQ0Q7WUFBSSxJQUFJLG9CQUFvQixBQUFwQixJQUF3QixvQkFBb0IsQUFBcEIsSUFBd0IsQUFBeEQsQUFDQTtZQUFJLElBQUksb0JBQW9CLEFBQXBCLElBQXdCLG9CQUFvQixBQUFwQixJQUF3QixBQUF4RCxBQUNBO2dCQUFRLEFBQVIsV0FDRSxJQUFJLEFBRE4sR0FFRSxJQUFJLEFBRk4sR0FHRSxvQkFBb0IsQUFBcEIsSUFBd0IsQUFIMUIsSUFJRSxvQkFBb0IsQUFBcEIsSUFBd0IsQUFKMUIsQUFNQTtnQkFBUSxBQUFSLFNBQ0Usb0JBQW9CLEFBRHRCLFdBRUUsSUFBSSxvQkFBb0IsQUFBcEIsSUFBd0IsQUFBNUIsSUFBZ0MsQUFGbEMsSUFHRSxJQUFJLG9CQUFvQixBQUFwQixJQUF3QixBQUg5QixBQUtEO0FBOUJELEFBK0JEOzs7O3NDQUVrQixBLFNBQVMsQSxZQUFZLEEsa0JBQWtCLEEsb0JBQW9CLEFBQzVFO2NBQVEsQUFBUixjQUFzQixBQUF0QixBQUNBO2NBQVEsQUFBUixZQUFvQixBQUFwQixBQUNBO2NBQVEsQUFBUixPQUFlLEFBQWYsQUFDQTtjQUFRLEFBQVIsWUFBb0IsQUFBcEIsQUFDQTtpQkFBVyxBQUFYLElBQWUscUJBQWEsQUFDMUI7WUFBSSxrQkFBa0IsZ0NBQ3BCLEFBRG9CLFdBRXBCLEFBRm9CLGtCQUdwQixBQUhvQixBQUF0QixBQUtBO1lBQUksSUFBSSxnQkFBZ0IsQUFBaEIsSUFBb0IsZ0JBQWdCLEFBQWhCLElBQW9CLEFBQWhELEFBQ0E7WUFBSSxJQUFJLGdCQUFnQixBQUFoQixJQUFvQixnQkFBZ0IsQUFBaEIsSUFBb0IsQUFBaEQsQUFDQTtnQkFBUSxBQUFSLFdBQW1CLEFBQW5CLEdBQXNCLEFBQXRCLEdBQXlCLGdCQUFnQixBQUF6QyxHQUE0QyxnQkFBZ0IsQUFBNUQsQUFDQTtnQkFBUSxBQUFSLFNBQWlCLGdCQUFnQixBQUFqQyxNQUF1QyxBQUF2QyxHQUEwQyxJQUFJLEFBQTlDLEFBQ0Q7QUFWRCxBQVdEOzs7Ozs7O0FBR0gsSUFBTSw2QkFBNkIsSUFBSSxBQUFKLEFBQW5DLEFBRUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoiRGVidWdUcmFja2VyRW5naW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=