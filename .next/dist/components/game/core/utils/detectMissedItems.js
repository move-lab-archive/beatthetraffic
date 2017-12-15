'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectMissedItemsThisFrame;

var _resolution = require('../../../../utils/resolution');

var MIN_ACTIVE_FRAMES = 60;

// TODO Maybe some of that intel will be handled by the tracker
function detectMissedItemsThisFrame(currentFrame, objectTrackerData, allowedDisappearAreas, alreadyKilledItems, visibleCanvasAreaScaledToVideoResolution) {
  if (objectTrackerData['general']) {
    var itemsMissedThisFrame = objectTrackerData['general'].filter(function (objectTracked) {
      return objectTracked.disappearFrame === currentFrame && // Disapear this frame
      objectTracked.nbActiveFrame > MIN_ACTIVE_FRAMES && // Have been tracked more than MIN_ACTIVE_FRAMES
      !alreadyKilledItems.includes(objectTracked.id) && // Not already killed
      (0, _resolution.areAreasOverlapping)(visibleCanvasAreaScaledToVideoResolution, objectTracked.disappearArea) && // Is inside the current visible part of the canvas
      (0, _resolution.isInsideSomeAreas)(allowedDisappearAreas, objectTracked.disappearArea, objectTracked.idDisplay);
    } // Is dissapearing inside an allowed area
    );

    return itemsMissedThisFrame;
  } else {
    return [];
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL3V0aWxzL2RldGVjdE1pc3NlZEl0ZW1zLmpzIl0sIm5hbWVzIjpbImlzSW5zaWRlU29tZUFyZWFzIiwiYXJlQXJlYXNPdmVybGFwcGluZyIsIk1JTl9BQ1RJVkVfRlJBTUVTIiwiZGV0ZWN0TWlzc2VkSXRlbXNUaGlzRnJhbWUiLCJjdXJyZW50RnJhbWUiLCJvYmplY3RUcmFja2VyRGF0YSIsImFsbG93ZWREaXNhcHBlYXJBcmVhcyIsImFscmVhZHlLaWxsZWRJdGVtcyIsInZpc2libGVDYW52YXNBcmVhU2NhbGVkVG9WaWRlb1Jlc29sdXRpb24iLCJpdGVtc01pc3NlZFRoaXNGcmFtZSIsImZpbHRlciIsIm9iamVjdFRyYWNrZWQiLCJkaXNhcHBlYXJGcmFtZSIsIm5iQWN0aXZlRnJhbWUiLCJpbmNsdWRlcyIsImlkIiwiZGlzYXBwZWFyQXJlYSIsImlkRGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQ0UsQUFDQSxBQUNLOztBQUVQLElBQU0sb0JBQU4sQUFBMEI7O0FBRTFCLEFBQ0E7QUFBZSxTQUFBLEFBQVMsMkJBQVQsQUFDYixjQURhLEFBRWIsbUJBRmEsQUFHYix1QkFIYSxBQUliLG9CQUphLEFBS2IsMENBQ0EsQUFDQTtNQUFJLGtCQUFKLEFBQUksQUFBa0IsWUFBWSxBQUNoQztRQUFNLHlDQUF1QixBQUFrQixXQUFsQixBQUE2QixPQUN4RCx5QkFBQTthQUNFLGNBQUEsQUFBYyxtQkFBZCxBQUFpQyxnQkFBZ0IsQUFDakQ7b0JBQUEsQUFBYyxnQkFEZCxBQUM4QixxQkFBcUIsQUFDbkQ7T0FBQyxtQkFBQSxBQUFtQixTQUFTLGNBRjdCLEFBRUMsQUFBMEMsT0FBTyxBQUNsRDsyQ0FBQSxBQUNFLDBDQUNBLGNBTEYsQUFHQSxBQUVnQixrQkFDWCxBQUNMO3lDQUFBLEFBQ0UsdUJBQ0EsY0FGRixBQUVnQixlQUNkLGNBWEosQUFRRSxBQUdnQjtBQVpTLE1BQTdCLEFBQTZCLEFBYXZCLEFBR047QUFoQjZCOztXQWdCN0IsQUFBTyxBQUNSO0FBbEJELFNBa0JPLEFBQ0w7V0FBQSxBQUFPLEFBQ1I7QUFDRiIsImZpbGUiOiJkZXRlY3RNaXNzZWRJdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9