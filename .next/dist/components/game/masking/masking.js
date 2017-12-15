'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMasking = updateMasking;

var _GameEngineStateManager = require('../../../statemanagement/app/GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

var _resolution = require('../../../utils/resolution');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateMasking(objectTrackerDataForThisFrame, canvasResolution, originalResolution) {
  if (!objectTrackerDataForThisFrame) {
    return [];
  }

  var objectsMaskedToUpdate = _GameEngineStateManager2.default.getItemsMasked();
  var objectsMaskedUpdated = [];
  var objectsAvailableToBeMasked = [];

  // Clean up objects to mask that have dissapeared from video
  objectsMaskedToUpdate = objectsMaskedToUpdate.filter(function (objectMasked) {
    return objectTrackerDataForThisFrame.find(function (objectTracked) {
      return objectTracked.id === objectMasked.id;
    });
  });

  // For each object in the tracker data for this frame
  objectTrackerDataForThisFrame = objectTrackerDataForThisFrame.map(function (objectTracked) {
    // Scale object tracker data to the canvas resolution
    var objectTrackedScaled = (0, _resolution.scaleDetection)(objectTracked, canvasResolution, originalResolution);

    var potentialObjectToMask = {
      idDisplay: objectTrackedScaled.idDisplay,
      id: objectTrackedScaled.id,
      x: objectTrackedScaled.x - objectTrackedScaled.w / 2,
      y: objectTrackedScaled.y - objectTrackedScaled.h / 2,
      w: objectTrackedScaled.w,
      h: objectTrackedScaled.h

      // If this is one of the objects we are already masking
      // we just need to update of its position
    };var objectToUpdate = objectsMaskedToUpdate.find(function (objectMasked) {
      return objectMasked.id === potentialObjectToMask.id;
    });
    if (objectToUpdate) {
      // Add it to the new list
      objectsMaskedUpdated.push(potentialObjectToMask);
    } else {
      // We add it to the list of the object
      // that will potentially be clicked this frame
      objectsAvailableToBeMasked.push(potentialObjectToMask);
    }
  });

  // Update objects masked
  _GameEngineStateManager2.default.setCurrentMaskedItems(objectsMaskedUpdated);

  return objectsAvailableToBeMasked;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9tYXNraW5nL21hc2tpbmcuanMiXSwibmFtZXMiOlsiR2FtZUVuZ2luZVN0YXRlTWFuYWdlciIsInNjYWxlRGV0ZWN0aW9uIiwidXBkYXRlTWFza2luZyIsIm9iamVjdFRyYWNrZXJEYXRhRm9yVGhpc0ZyYW1lIiwiY2FudmFzUmVzb2x1dGlvbiIsIm9yaWdpbmFsUmVzb2x1dGlvbiIsIm9iamVjdHNNYXNrZWRUb1VwZGF0ZSIsImdldEl0ZW1zTWFza2VkIiwib2JqZWN0c01hc2tlZFVwZGF0ZWQiLCJvYmplY3RzQXZhaWxhYmxlVG9CZU1hc2tlZCIsImZpbHRlciIsImZpbmQiLCJvYmplY3RUcmFja2VkIiwiaWQiLCJvYmplY3RNYXNrZWQiLCJtYXAiLCJvYmplY3RUcmFja2VkU2NhbGVkIiwicG90ZW50aWFsT2JqZWN0VG9NYXNrIiwiaWREaXNwbGF5IiwieCIsInciLCJ5IiwiaCIsIm9iamVjdFRvVXBkYXRlIiwicHVzaCIsInNldEN1cnJlbnRNYXNrZWRJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFJTyxBQUFTOztBQUpoQixBQUFPLEFBQTRCOzs7O0FBRW5DLEFBQVMsQUFBc0IsQUFFL0I7Ozs7QUFBTyx1QkFBQSxBQUNMLCtCQURLLEFBRUwsa0JBRkssQUFHTCxvQkFDQSxBQUNBO01BQUksQ0FBSixBQUFLLCtCQUErQixBQUNsQztXQUFBLEFBQU8sQUFDUjtBQUVEOztNQUFJLHdCQUF3QixpQ0FBNUIsQUFBNEIsQUFBdUIsQUFDbkQ7TUFBSSx1QkFBSixBQUEyQixBQUMzQjtNQUFJLDZCQUFKLEFBQWlDLEFBRWpDOztBQUNBO2dEQUF3QixBQUFzQixPQUFPLHdCQUFnQixBQUNuRTt5Q0FBTyxBQUE4QixLQUNuQyx5QkFBQTthQUFpQixjQUFBLEFBQWMsT0FBTyxhQUF0QyxBQUFtRDtBQURyRCxBQUFPLEFBR1IsS0FIUTtBQURULEFBQXdCLEFBTXhCLEdBTndCOztBQU94QjtnRUFBZ0MsQUFBOEIsSUFDNUQseUJBQWlCLEFBQ2Y7QUFDQTtRQUFJLHNCQUFzQixnQ0FBQSxBQUN4QixlQUR3QixBQUV4QixrQkFGRixBQUEwQixBQUd4QixBQUdGOztRQUFJO2lCQUNTLG9CQURlLEFBQ0ssQUFDL0I7VUFBSSxvQkFGc0IsQUFFRixBQUN4QjtTQUFHLG9CQUFBLEFBQW9CLElBQUksb0JBQUEsQUFBb0IsSUFIckIsQUFHeUIsQUFDbkQ7U0FBRyxvQkFBQSxBQUFvQixJQUFJLG9CQUFBLEFBQW9CLElBSnJCLEFBSXlCLEFBQ25EO1NBQUcsb0JBTHVCLEFBS0gsQUFDdkI7U0FBRyxvQkFBb0IsQUFHekI7O0FBQ0E7QUFWQSxBQUE0QjtBQUFBLEFBQzFCLE1BVUYsSUFBTSx1Q0FBaUIsQUFBc0IsS0FDM0Msd0JBQUE7YUFBZ0IsYUFBQSxBQUFhLE9BQU8sc0JBQXBDLEFBQTBEO0FBRDVELEFBQXVCLEFBR3ZCLEtBSHVCO1FBR3ZCLEFBQUksZ0JBQWdCLEFBQ2xCO0FBQ0E7MkJBQUEsQUFBcUIsS0FBckIsQUFBMEIsQUFDM0I7QUFIRCxXQUdPLEFBQ0w7QUFDQTtBQUNBO2lDQUFBLEFBQTJCLEtBQTNCLEFBQWdDLEFBQ2pDO0FBQ0Y7QUEvQkgsQUFBZ0MsQUFrQ2hDLEdBbENnQzs7QUFtQ2hDO21DQUFBLEFBQXVCLHNCQUF2QixBQUE2QyxBQUU3Qzs7U0FBQSxBQUFPLEFBQ1IiLCJmaWxlIjoibWFza2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9