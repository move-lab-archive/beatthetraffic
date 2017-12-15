'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _resolution = require('../../../../utils/resolution');

var _GameEngineStateManager = require('../../../../statemanagement/app/GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrackerUIEngine = function () {
  function TrackerUIEngine() {
    (0, _classCallCheck3.default)(this, TrackerUIEngine);
  }

  (0, _createClass3.default)(TrackerUIEngine, [{
    key: 'computeCircleRadius',
    value: function computeCircleRadius(bboxArea) {
      return Math.sqrt(bboxArea / 100);
    }
  }, {
    key: 'computeCornerLength',
    value: function computeCornerLength(bboxArea) {
      return Math.sqrt(bboxArea / 50);
    }
  }, {
    key: 'drawTrackerUIData',
    value: function drawTrackerUIData(context, objectTrackerDataForThisFrame, canvasResolution, originalResolution) {
      var _this = this;

      objectTrackerDataForThisFrame.filter(function (objectTracked) {
        return !_GameEngineStateManager2.default.getItemsMasked().find(function (itemMasked) {
          return itemMasked.id === objectTracked.id;
        }) && objectTracked.isZombie !== true;
      }).map(function (objectTracked) {
        var objectTrackedScaled = (0, _resolution.scaleDetection)(objectTracked, canvasResolution, originalResolution);

        // Set params
        context.strokeStyle = '#4EFFFF';
        context.fillStyle = '#4EFFFF';
        context.lineWidth = 2;
        context.globalAlpha = 1;

        var bboxArea = objectTrackedScaled.w * objectTrackedScaled.h;
        var canvasArea = canvasResolution.w * canvasResolution.h;
        var bboxAreaPercentageOfCanvas = bboxArea * 100 / canvasArea;

        // Draw circle with dynamic radius depending on Bbox size
        var bboxCenter = {
          x: objectTrackedScaled.x,
          y: objectTrackedScaled.y

          // Clear react if there is a carrot of stuff
          // Maybe better to check when drawing
        };context.clearRect(objectTrackedScaled.x - objectTrackedScaled.w / 2, objectTrackedScaled.y - objectTrackedScaled.h / 2, objectTrackedScaled.w, objectTrackedScaled.h);

        context.beginPath();
        context.arc(bboxCenter.x, bboxCenter.y, _this.computeCircleRadius(bboxArea), 0, 2 * Math.PI, false);
        context.fill();

        // If bbox area is more than 0.8% of canvas area, display the target
        if (bboxAreaPercentageOfCanvas > 0.8) {
          // Shortcut to objectTrackedScaled to avoid writing 1000 lines of code
          var obj = objectTrackedScaled;

          // Compute target corner relative size
          var cornerLength = _this.computeCornerLength(bboxArea);
          var cornerTickness = cornerLength / 3;

          // Draw target
          // Top right
          context.fillRect(obj.x + obj.w / 2, obj.y - obj.h / 2, cornerTickness, cornerLength);
          context.fillRect(obj.x + obj.w / 2 - cornerLength + cornerTickness, obj.y - obj.h / 2, cornerLength, cornerTickness);
          // Top left
          context.fillRect(obj.x - obj.w / 2, obj.y - obj.h / 2, cornerTickness, cornerLength);
          context.fillRect(obj.x - obj.w / 2, obj.y - obj.h / 2, cornerLength, cornerTickness);
          // Bottom left
          context.fillRect(obj.x - obj.w / 2, obj.y + obj.h / 2 - cornerLength + cornerTickness, cornerTickness, cornerLength);
          context.fillRect(obj.x - obj.w / 2, obj.y + obj.h / 2, cornerLength, cornerTickness);
          // Bottom right
          context.fillRect(obj.x + obj.w / 2, obj.y + obj.h / 2 - cornerLength + cornerTickness, cornerTickness, cornerLength);
          context.fillRect(obj.x + obj.w / 2 - cornerLength + cornerTickness, obj.y + obj.h / 2, cornerLength, cornerTickness);
        }
      });
    }
  }]);

  return TrackerUIEngine;
}();

var TrackerUIEngineInstance = new TrackerUIEngine();

exports.default = TrackerUIEngineInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL2VuZ2luZXMvVHJhY2tlclVJRW5naW5lLmpzIl0sIm5hbWVzIjpbInNjYWxlRGV0ZWN0aW9uIiwiR2FtZUVuZ2luZVN0YXRlTWFuYWdlciIsIlRyYWNrZXJVSUVuZ2luZSIsImJib3hBcmVhIiwiTWF0aCIsInNxcnQiLCJjb250ZXh0Iiwib2JqZWN0VHJhY2tlckRhdGFGb3JUaGlzRnJhbWUiLCJjYW52YXNSZXNvbHV0aW9uIiwib3JpZ2luYWxSZXNvbHV0aW9uIiwiZmlsdGVyIiwiZ2V0SXRlbXNNYXNrZWQiLCJmaW5kIiwiaXRlbU1hc2tlZCIsImlkIiwib2JqZWN0VHJhY2tlZCIsImlzWm9tYmllIiwibWFwIiwib2JqZWN0VHJhY2tlZFNjYWxlZCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwibGluZVdpZHRoIiwiZ2xvYmFsQWxwaGEiLCJ3IiwiaCIsImNhbnZhc0FyZWEiLCJiYm94QXJlYVBlcmNlbnRhZ2VPZkNhbnZhcyIsImJib3hDZW50ZXIiLCJ4IiwieSIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsImFyYyIsImNvbXB1dGVDaXJjbGVSYWRpdXMiLCJQSSIsImZpbGwiLCJvYmoiLCJjb3JuZXJMZW5ndGgiLCJjb21wdXRlQ29ybmVyTGVuZ3RoIiwiY29ybmVyVGlja25lc3MiLCJmaWxsUmVjdCIsIlRyYWNrZXJVSUVuZ2luZUluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBc0I7O0FBQy9CLEFBQU8sQUFBNEI7Ozs7OztJLEFBRTdCOzs7Ozs7O3dDQUNpQixBLFVBQVUsQUFDN0I7YUFBTyxLQUFBLEFBQUssS0FBSyxXQUFqQixBQUFPLEFBQXFCLEFBQzdCOzs7O3dDLEFBRW9CLFVBQVUsQUFDN0I7YUFBTyxLQUFBLEFBQUssS0FBSyxXQUFqQixBQUFPLEFBQXFCLEFBQzdCOzs7O3NDLEFBR0MsU0FDQSxBLCtCQUNBLEEsa0IsQUFDQSxvQkFDQTtrQkFDQTs7b0NB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RSxBQUVGO0FBQ0E7a0JBQUEsQUFBUSxTQUNOLElBQUEsQUFBSSxJQUFJLElBQUEsQUFBSSxJQURkLEFBQ2tCLEdBQ2hCLElBQUEsQUFBSSxJQUFJLElBQUEsQUFBSSxJQUFaLEFBQWdCLElBQWhCLEFBQW9CLGVBRnRCLEFBRXFDLGdCQUZyQyxBQUdFLGdCQUhGLEFBSUUsQUFFRjtrQkFBQSxBQUFRLFNBQ04sSUFBQSxBQUFJLElBQUksSUFBQSxBQUFJLElBQVosQUFBZ0IsSUFBaEIsQUFBb0IsZUFEdEIsQUFDcUMsZ0JBQ25DLElBQUEsQUFBSSxJQUFJLElBQUEsQUFBSSxJQUZkLEFBRWtCLEdBRmxCLEFBR0UsY0FIRixBQUlFLEFBRUg7QUFDRjtBQWxISCxBQW1IRDs7Ozs7OztBQUdILElBQU0sMEJBQTBCLElBQWhDLEFBQWdDLEFBQUksQUFFcEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVHJhY2tlclVJRW5naW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=