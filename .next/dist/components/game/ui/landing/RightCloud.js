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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/landing/RightCloud.js';


var RightCloud = function (_Component) {
  (0, _inherits3.default)(RightCloud, _Component);

  function RightCloud() {
    (0, _classCallCheck3.default)(this, RightCloud);

    return (0, _possibleConstructorReturn3.default)(this, (RightCloud.__proto__ || (0, _getPrototypeOf2.default)(RightCloud)).apply(this, arguments));
  }

  (0, _createClass3.default)(RightCloud, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-2182953181' + ' ' + 'rightcloud',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement('img', {
        src: '/static/assets/landing/rightcloud-1.svg',
        className: 'jsx-2182953181' + ' ' + ('rightcloud-1 ' + (this.props.animateOut ? 'animate-out' : '')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }), _react2.default.createElement('img', {
        src: '/static/assets/landing/rightcloud-2.svg',
        className: 'jsx-2182953181' + ' ' + ('rightcloud-2 ' + (this.props.animateOut ? 'animate-out' : '')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2182953181',
        css: '.rightcloud-1.jsx-2182953181{position:absolute;top:0%;width:30%;right:0%;-webkit-animation:fadeIn-jsx-2182953181 20s linear infinite;animation:fadeIn-jsx-2182953181 20s linear infinite;opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.rightcloud-2.jsx-2182953181{position:absolute;bottom:10%;width:50%;right:0%;-webkit-animation:fadeIn-jsx-2182953181 20s linear infinite;animation:fadeIn-jsx-2182953181 20s linear infinite;opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}@-webkit-keyframes fadeIn-jsx-2182953181{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}5%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}10%{opacity:0.7;}30%{opacity:0.7;}100%{-webkit-transform:scale(3);-ms-transform:scale(3);transform:scale(3);opacity:0;}}@keyframes fadeIn-jsx-2182953181{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}5%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}10%{opacity:0.7;}30%{opacity:0.7;}100%{-webkit-transform:scale(3);-ms-transform:scale(3);transform:scale(3);opacity:0;}}@media (min-width:450px){.rightcloud-1.jsx-2182953181{width:15%;}.rightcloud-2.jsx-2182953181{width:35%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL1JpZ2h0Q2xvdWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQixBQUcrQixBQVNBLEFBV04sQUFJQSxBQUlFLEFBR0EsQUFHTyxBQU9ULEFBR0EsVUF2QlMsQUFJQSxBQWlCckIsQUFHQSxFQWhCQSxBQUdBLE1BL0JPLEFBU0ksT0FSRCxJQVNBLE1BUkQsSUFTQSxLQVI0QixJQVNBLHFCQXNCekIsVUFiWixBQUlBLEFBVUEsNkVBL0JVLElBU0EsTUFSUyxJQVNBLGlFQVJyQixJQVNBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL1JpZ2h0Q2xvdWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFJpZ2h0Q2xvdWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0Y2xvdWRcIj5cbiAgICAgICAgey8qIE9wdGltaXplZCB3aXRoIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5naXRodWIuaW8vc3Znb21nLyAqL31cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YHJpZ2h0Y2xvdWQtMSAke3RoaXMucHJvcHMuYW5pbWF0ZU91dCA/ICdhbmltYXRlLW91dCcgOiAnJ31gfVxuICAgICAgICAgIHNyYz0nL3N0YXRpYy9hc3NldHMvbGFuZGluZy9yaWdodGNsb3VkLTEuc3ZnJ1xuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmlnaHRjbG91ZC0yICR7dGhpcy5wcm9wcy5hbmltYXRlT3V0ID8gJ2FuaW1hdGUtb3V0JyA6ICcnfWB9XG4gICAgICAgICAgc3JjPScvc3RhdGljL2Fzc2V0cy9sYW5kaW5nL3JpZ2h0Y2xvdWQtMi5zdmcnXG4gICAgICAgIC8+XG4gICAgICAgIHsvKiBOT1RFIFdlIGNhbid0IGFuaW1hdGUgaW4gYXQgZmlyc3QgbG9hZCwgYnJvd3NlclxuICAgICAgICAgICAgaXMgYnVzeSBkb2luZyBsb2FkaW5nICYgcGFyc2luZyBvZiBqYXZhc2NyaXB0IGFuZCBpdCBpcyBzbG93IG9uIHN2Z1xuICAgICAgICAqL31cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnJpZ2h0Y2xvdWQtMSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDAlO1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDIwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0Y2xvdWQtMiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDEwJTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAyMHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNSUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMzAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgICAgICAucmlnaHRjbG91ZC0xIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodGNsb3VkLTIge1xuICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0Q2xvdWRcbiJdfQ== */\n/*@ sourceURL=components/game/ui/landing/RightCloud.js */'
      }));
    }
  }]);

  return RightCloud;
}(_react.Component);

exports.default = RightCloud;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL1JpZ2h0Q2xvdWQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJSaWdodENsb3VkIiwicHJvcHMiLCJhbmltYXRlT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRVY7Ozs7Ozs7Ozs7OzZCQUNNLEFBQ1I7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUVFO0FBRkY7QUFBQSxPQUFBO2FBRUUsQUFFTTtnRUFEdUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLGdCQURyRCxBQUNxRTs7b0JBRHJFO3NCQUZGLEFBRUUsQUFJQTtBQUpBO0FBRUU7YUFFRixBQUVNO2dFQUR1QixLQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsZ0JBRHJELEFBQ3FFOztvQkFEckU7c0JBTkYsQUFNRTtBQUFBO0FBRUU7aUJBUko7YUFERixBQUNFLEFBa0VIO0FBbEVHOzs7OztBQUhtQixBLEFBd0V6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSaWdodENsb3VkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=