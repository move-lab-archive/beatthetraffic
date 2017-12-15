"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scaleDetection = scaleDetection;
exports.scaleArea = scaleArea;
exports.scalePoint = scalePoint;
exports.enlargeBbox = enlargeBbox;
exports.isInsideArea = isInsideArea;
exports.areAreasOverlapping = areAreasOverlapping;
exports.isInsideSomeAreas = isInsideSomeAreas;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scaleDetection(detection, canvasResolution, originalResolution) {
  return (0, _extends3.default)({}, detection, {
    x: detection.x * canvasResolution.w / originalResolution.w,
    y: detection.y * canvasResolution.h / originalResolution.h,
    w: detection.w * canvasResolution.w / originalResolution.w,
    h: detection.h * canvasResolution.h / originalResolution.h
  });
}

function scaleArea(area, finalResolution, originalResolution) {
  return {
    x: area.x * finalResolution.w / originalResolution.w,
    y: area.y * finalResolution.h / originalResolution.h,
    w: area.w * finalResolution.w / originalResolution.w,
    h: area.h * finalResolution.h / originalResolution.h
  };
}

function scalePoint(point, finalResolution, originalResolution) {
  return {
    x: point.x * finalResolution.w / originalResolution.w,
    y: point.y * finalResolution.h / originalResolution.h
  };
}

function enlargeBbox(bbox, enlargeSize) {
  return {
    x: bbox.x - enlargeSize,
    y: bbox.y - enlargeSize,
    w: bbox.w + enlargeSize * 2,
    h: bbox.h + enlargeSize * 2
  };
}

function isInsideArea(area, point) {
  var xMin = area.x;
  var xMax = area.x + area.w;
  var yMin = area.y;
  var yMax = area.y + area.h;

  if (point.x >= xMin && point.x <= xMax && point.y >= yMin && point.y <= yMax) {
    return true;
  } else {
    return false;
  }
}

function areAreasOverlapping(area1, area2) {
  if (area1.x + area1.w < area2.x || area2.x + area2.w < area1.x || area1.y + area1.h < area2.y || area2.y + area2.h < area1.h) {
    return false;
  } else {
    return true;
  }
}

function isInsideSomeAreas(areas, point, idDisplay) {
  var isInside = areas.some(function (area) {
    return isInsideArea(area, point);
  });
  // console.log(`Run isInsideSomeAreas for ${idDisplay}, returned: ${isInside}`)
  return isInside;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3Jlc29sdXRpb24uanMiXSwibmFtZXMiOlsic2NhbGVEZXRlY3Rpb24iLCJkZXRlY3Rpb24iLCJjYW52YXNSZXNvbHV0aW9uIiwib3JpZ2luYWxSZXNvbHV0aW9uIiwieCIsInciLCJ5IiwiaCIsInNjYWxlQXJlYSIsImFyZWEiLCJmaW5hbFJlc29sdXRpb24iLCJzY2FsZVBvaW50IiwicG9pbnQiLCJlbmxhcmdlQmJveCIsImJib3giLCJlbmxhcmdlU2l6ZSIsImlzSW5zaWRlQXJlYSIsInhNaW4iLCJ4TWF4IiwieU1pbiIsInlNYXgiLCJhcmVBcmVhc092ZXJsYXBwaW5nIiwiYXJlYTEiLCJhcmVhMiIsImlzSW5zaWRlU29tZUFyZWFzIiwiYXJlYXMiLCJpZERpc3BsYXkiLCJpc0luc2lkZSIsInNvbWUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQU8sQUFBUztRQWNULEFBQVM7UUFTVCxBQUFTO1FBT1QsQUFBUztRQVNULEFBQVM7UUFrQlQsQUFBUztRQWFULEFBQVM7O0FBdEVoQjs7Ozs7O0FBQU8sd0JBQUEsQUFDTCxXQURLLEFBRUwsa0JBRkssQUFHTCxvQkFDQSxBQUNBO29DQUFBLEFBQ0s7T0FDQSxVQUFBLEFBQVUsSUFBSSxpQkFBZCxBQUErQixJQUFJLG1CQUZ4QyxBQUUyRCxBQUN6RDtPQUFHLFVBQUEsQUFBVSxJQUFJLGlCQUFkLEFBQStCLElBQUksbUJBSHhDLEFBRzJELEFBQ3pEO09BQUcsVUFBQSxBQUFVLElBQUksaUJBQWQsQUFBK0IsSUFBSSxtQkFKeEMsQUFJMkQsQUFDekQ7T0FBRyxVQUFBLEFBQVUsSUFBSSxpQkFBZCxBQUErQixJQUFJLG1CQUx4QyxBQUsyRCxBQUU1RDtBQUxHO0FBT0o7O0FBQU8sbUJBQUEsQUFBb0IsTUFBcEIsQUFBMEIsaUJBQTFCLEFBQTJDLG9CQUFvQixBQUNwRTs7T0FDSyxLQUFBLEFBQUssSUFBSSxnQkFBVCxBQUF5QixJQUFJLG1CQUQzQixBQUM4QyxBQUNuRDtPQUFHLEtBQUEsQUFBSyxJQUFJLGdCQUFULEFBQXlCLElBQUksbUJBRjNCLEFBRThDLEFBQ25EO09BQUcsS0FBQSxBQUFLLElBQUksZ0JBQVQsQUFBeUIsSUFBSSxtQkFIM0IsQUFHOEMsQUFDbkQ7T0FBRyxLQUFBLEFBQUssSUFBSSxnQkFBVCxBQUF5QixJQUFJLG1CQUpsQyxBQUFPLEFBSThDLEFBRXREO0FBTlEsQUFDTDtBQU9KOztBQUFPLG9CQUFBLEFBQXFCLE9BQXJCLEFBQTRCLGlCQUE1QixBQUE2QyxvQkFBb0IsQUFDdEU7O09BQ0ssTUFBQSxBQUFNLElBQUksZ0JBQVYsQUFBMEIsSUFBSSxtQkFENUIsQUFDK0MsQUFDcEQ7T0FBRyxNQUFBLEFBQU0sSUFBSSxnQkFBVixBQUEwQixJQUFJLG1CQUZuQyxBQUFPLEFBRStDLEFBRXZEO0FBSlEsQUFDTDtBQUtKOztBQUFPLHFCQUFBLEFBQXNCLE1BQXRCLEFBQTRCLGFBQWEsQUFDOUM7O09BQ0ssS0FBQSxBQUFLLElBREgsQUFDTyxBQUNaO09BQUcsS0FBQSxBQUFLLElBRkgsQUFFTyxBQUNaO09BQUcsS0FBQSxBQUFLLElBQUksY0FIUCxBQUdxQixBQUMxQjtPQUFHLEtBQUEsQUFBSyxJQUFJLGNBSmQsQUFBTyxBQUlxQixBQUU3QjtBQU5RLEFBQ0w7QUFPSjs7QUFBTyxzQkFBQSxBQUF1QixNQUF2QixBQUE2QixPQUFPLEFBQ3pDO01BQU0sT0FBTyxLQUFiLEFBQWtCLEFBQ2xCO01BQU0sT0FBTyxLQUFBLEFBQUssSUFBSSxLQUF0QixBQUEyQixBQUMzQjtNQUFNLE9BQU8sS0FBYixBQUFrQixBQUNsQjtNQUFNLE9BQU8sS0FBQSxBQUFLLElBQUksS0FBdEIsQUFBMkIsQUFFM0I7O01BQ0UsTUFBQSxBQUFNLEtBQU4sQUFBVyxRQUNYLE1BQUEsQUFBTSxLQUROLEFBQ1csUUFDWCxNQUFBLEFBQU0sS0FGTixBQUVXLFFBQ1gsTUFBQSxBQUFNLEtBSlIsQUFJYSxNQUNYLEFBQ0E7V0FBQSxBQUFPLEFBQ1I7QUFQRCxTQU9PLEFBQ0w7V0FBQSxBQUFPLEFBQ1I7QUFDRjtBQUVEOztBQUFPLDZCQUFBLEFBQThCLE9BQTlCLEFBQXFDLE9BQU8sQUFDakQ7TUFDRSxNQUFBLEFBQU0sSUFBSSxNQUFWLEFBQWdCLElBQUksTUFBcEIsQUFBMEIsS0FDMUIsTUFBQSxBQUFNLElBQUksTUFBVixBQUFnQixJQUFJLE1BRHBCLEFBQzBCLEtBQzFCLE1BQUEsQUFBTSxJQUFJLE1BQVYsQUFBZ0IsSUFBSSxNQUZwQixBQUUwQixLQUMxQixNQUFBLEFBQU0sSUFBSSxNQUFWLEFBQWdCLElBQUksTUFKdEIsQUFJNEIsR0FDMUIsQUFDQTtXQUFBLEFBQU8sQUFDUjtBQVBELFNBT08sQUFDTDtXQUFBLEFBQU8sQUFDUjtBQUNGO0FBRUQ7O0FBQU8sMkJBQUEsQUFBNEIsT0FBNUIsQUFBbUMsT0FBbkMsQUFBMEMsV0FBVyxBQUMxRDtNQUFNLGlCQUFXLEFBQU0sS0FBSyxnQkFBQTtXQUFRLGFBQUEsQUFBYSxNQUFyQixBQUFRLEFBQW1CO0FBQXZELEFBQWlCLEFBQ2pCLEdBRGlCO0FBRWpCO1NBQUEsQUFBTyxBQUNSIiwiZmlsZSI6InJlc29sdXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==