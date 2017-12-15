'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/LevelName.js';


var LevelName = function (_Component) {
  (0, _inherits3.default)(LevelName, _Component);

  function LevelName() {
    (0, _classCallCheck3.default)(this, LevelName);

    return (0, _possibleConstructorReturn3.default)(this, (LevelName.__proto__ || (0, _getPrototypeOf2.default)(LevelName)).apply(this, arguments));
  }

  (0, _createClass3.default)(LevelName, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-675755394' + ' ' + ('level-name\n        ' + (this.props.introAnimPlayed ? '' : 'hidden')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, ' ', _react2.default.createElement('h4', {
        className: 'jsx-675755394',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, this.props.levelName + ' LEVEL ' + this.props.levelNb), _react2.default.createElement(_style2.default, {
        styleId: '675755394',
        css: '.level-name.jsx-675755394{position:fixed;bottom:1.5rem;left:2.9rem;color:white;z-index:1;opacity:1;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}.hidden.jsx-675755394{opacity:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9MZXZlbE5hbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWW9CLEFBRzRCLEFBVUwsVUFDWixLQVZnQixjQUNGLFlBQ0EsWUFDRixVQUNBLFVBQ2Msd0RBQzFCIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FtZS91aS9MZXZlbE5hbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNsYXNzIExldmVsTmFtZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbGV2ZWwtbmFtZVxuICAgICAgICAke3RoaXMucHJvcHMuaW50cm9BbmltUGxheWVkID8gJycgOiAnaGlkZGVuJ31gfVxuICAgICAgPiA8aDQ+XG4gICAgICAgIHtgJHt0aGlzLnByb3BzLmxldmVsTmFtZX0gTEVWRUwgJHt0aGlzLnByb3BzLmxldmVsTmJ9YH1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5sZXZlbC1uYW1lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgbGVmdDogMi45cmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4ge1xuICBjb25zdCBzZWxlY3RlZFZpZGVvID0gc3RhdGUuYXBwLmdldCgnYXZhaWxhYmxlVmlkZW9zJykuZmluZCh2aWRlbyA9PiB7XG4gICAgcmV0dXJuIHZpZGVvLmdldCgnbmFtZScpID09PSBzdGF0ZS5hcHAuZ2V0KCdzZWxlY3RlZFZpZGVvJylcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGxldmVsTmFtZTogc2VsZWN0ZWRWaWRlby5nZXQoJ2xldmVsTmFtZScpLFxuICAgIGxldmVsTmI6IHNlbGVjdGVkVmlkZW8uZ2V0KCdsZXZlbCcpLFxuICAgIGludHJvQW5pbVBsYXllZDogc3RhdGUuYXBwLmdldCgnaW50cm9BbmltUGxheWVkJylcbiAgfVxufSkoTGV2ZWxOYW1lKVxuIl19 */\n/*@ sourceURL=components/game/ui/LevelName.js */'
      }));
    }
  }]);

  return LevelName;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  var selectedVideo = state.app.get('availableVideos').find(function (video) {
    return video.get('name') === state.app.get('selectedVideo');
  });

  return {
    levelName: selectedVideo.get('levelName'),
    levelNb: selectedVideo.get('level'),
    introAnimPlayed: state.app.get('introAnimPlayed')
  };
})(LevelName);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9MZXZlbE5hbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiTGV2ZWxOYW1lIiwicHJvcHMiLCJpbnRyb0FuaW1QbGF5ZWQiLCJsZXZlbE5hbWUiLCJsZXZlbE5iIiwic2VsZWN0ZWRWaWRlbyIsInN0YXRlIiwiYXBwIiwiZ2V0IiwiZmluZCIsInZpZGVvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7Ozs7OztJQUVILEE7Ozs7Ozs7Ozs7OzZCQUNNLEFBQ1I7NkJBQ0UsY0FBQTtzRUFFSSxLQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFYLEFBQTZCLEtBRmpDLEFBRXNDOztvQkFGdEM7c0JBQUE7QUFBQTtBQUFBLE9BQUEsRUFHRSxxQkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxjQUNJLEFBQUssTUFEVCxBQUNlLHdCQUFtQixLQUFBLEFBQUssTUFKekMsQUFHRSxBQUM2QztpQkFKL0M7YUFERixBQUNFLEFBdUJIO0FBdkJHOzs7OztBQUhrQixBLEFBNkJ4Qjs7MkNBQXVCLGlCQUFTLEFBQzlCO01BQU0sc0JBQWdCLEFBQU0sSUFBTixBQUFVLElBQVYsQUFBYyxtQkFBZCxBQUFpQyxLQUFLLGlCQUFTLEFBQ25FO1dBQU8sTUFBQSxBQUFNLElBQU4sQUFBVSxZQUFZLE1BQUEsQUFBTSxJQUFOLEFBQVUsSUFBdkMsQUFBNkIsQUFBYyxBQUM1QztBQUZELEFBQXNCLEFBSXRCLEdBSnNCOzs7ZUFLVCxjQUFBLEFBQWMsSUFEcEIsQUFDTSxBQUFrQixBQUM3QjthQUFTLGNBQUEsQUFBYyxJQUZsQixBQUVJLEFBQWtCLEFBQzNCO3FCQUFpQixNQUFBLEFBQU0sSUFBTixBQUFVLElBSDdCLEFBQU8sQUFHWSxBQUFjLEFBRWxDO0FBTFEsQUFDTDtBQU5XLENBQUEsRUFBZixBQUFlLEFBVVoiLCJmaWxlIjoiTGV2ZWxOYW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=