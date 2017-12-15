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

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/landing/LeftCloud.js';


var LeftCloud = function (_Component) {
  (0, _inherits3.default)(LeftCloud, _Component);

  function LeftCloud() {
    (0, _classCallCheck3.default)(this, LeftCloud);

    return (0, _possibleConstructorReturn3.default)(this, (LeftCloud.__proto__ || (0, _getPrototypeOf2.default)(LeftCloud)).apply(this, arguments));
  }

  (0, _createClass3.default)(LeftCloud, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-4137651547' + ' ' + 'leftcloud',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement('img', {
        src: '/static/assets/landing/leftcloud-1.svg',
        className: 'jsx-4137651547' + ' ' + ('leftcloud-1 ' + (this.props.animateOut ? 'animate-out' : '')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }), _react2.default.createElement('img', {
        src: '/static/assets/landing/leftcloud-2.svg',
        className: 'jsx-4137651547' + ' ' + ('leftcloud-2 ' + (this.props.animateOut ? 'animate-out' : '')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('img', {
        src: '/static/assets/landing/leftcloud-3.svg',
        className: 'jsx-4137651547' + ' ' + ('leftcloud-3 ' + (this.props.animateOut ? 'animate-out' : '')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '4137651547',
        css: '.leftcloud-1.jsx-4137651547{position:absolute;top:5%;left:0px;width:20%;will-change:transform;-webkit-animation:fadeIn-jsx-4137651547 20s linear infinite;animation:fadeIn-jsx-4137651547 20s linear infinite;opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.leftcloud-2.jsx-4137651547{position:absolute;top:35%;left:10%;width:55%;will-change:transform;-webkit-animation:fadeIn-jsx-4137651547 20s linear infinite;animation:fadeIn-jsx-4137651547 20s linear infinite;opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.leftcloud-3.jsx-4137651547{position:absolute;bottom:0%;left:0px;width:35%;will-change:transform;-webkit-animation:fadeIn-jsx-4137651547 20s linear infinite;animation:fadeIn-jsx-4137651547 20s linear infinite;opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}@-webkit-keyframes fadeIn-jsx-4137651547{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}5%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}10%{opacity:0.7;}30%{opacity:0.7;}100%{-webkit-transform:scale(3);-ms-transform:scale(3);transform:scale(3);opacity:0;}}@keyframes fadeIn-jsx-4137651547{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}5%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}10%{opacity:0.7;}30%{opacity:0.7;}100%{-webkit-transform:scale(3);-ms-transform:scale(3);transform:scale(3);opacity:0;}}@media (min-width:450px){.leftcloud-1.jsx-4137651547{width:12%;}.leftcloud-2.jsx-4137651547{left:15%;top:20%;width:45%;}.leftcloud-3.jsx-4137651547{width:22%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL0xlZnRDbG91ZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm9CLEFBRytCLEFBVUEsQUFVQSxBQVlOLEFBSUEsQUFJRSxBQUdBLEFBR08sQUFPVCxBQUdELEFBS0MsU0FKRixDQXhCVyxBQUlBLEFBaUJyQixBQVFBLEVBckJBLEFBR0EsS0FjWSxDQXpETCxBQVVDLEFBVUUsT0FuQkQsQ0FVQSxDQStDVCxDQXJDUyxNQW5CQyxDQVVBLEVBVUEsT0FuQlksQ0FVQSxFQVVBLG1CQW5CZSxDQVVBLEVBVUEsQUFzQnpCLFVBYlosQUFJQSxBQVVBLG1HQTFDVSxDQVVBLEVBVUEsT0FuQlMsQ0FVQSxFQVVBLGtFQW5CckIsQ0FVQSxFQVVBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL0xlZnRDbG91ZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgTGVmdENsb3VkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0Y2xvdWRcIj5cbiAgICAgICAgey8qIE9wdGltaXplZCB3aXRoIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5naXRodWIuaW8vc3Znb21nLyAqL31cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YGxlZnRjbG91ZC0xICR7dGhpcy5wcm9wcy5hbmltYXRlT3V0ID8gJ2FuaW1hdGUtb3V0JyA6ICcnfWB9XG4gICAgICAgICAgc3JjPScvc3RhdGljL2Fzc2V0cy9sYW5kaW5nL2xlZnRjbG91ZC0xLnN2ZydcbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YGxlZnRjbG91ZC0yICR7dGhpcy5wcm9wcy5hbmltYXRlT3V0ID8gJ2FuaW1hdGUtb3V0JyA6ICcnfWB9XG4gICAgICAgICAgc3JjPScvc3RhdGljL2Fzc2V0cy9sYW5kaW5nL2xlZnRjbG91ZC0yLnN2ZydcbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YGxlZnRjbG91ZC0zICR7dGhpcy5wcm9wcy5hbmltYXRlT3V0ID8gJ2FuaW1hdGUtb3V0JyA6ICcnfWB9XG4gICAgICAgICAgc3JjPScvc3RhdGljL2Fzc2V0cy9sYW5kaW5nL2xlZnRjbG91ZC0zLnN2ZydcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5sZWZ0Y2xvdWQtMSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAyMHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0Y2xvdWQtMiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDM1JTtcbiAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdGNsb3VkLTMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkge1xuICAgICAgICAgICAgLmxlZnRjbG91ZC0xIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEyJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sZWZ0Y2xvdWQtMiB7XG4gICAgICAgICAgICAgIGxlZnQ6IDE1JTtcbiAgICAgICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdGNsb3VkLTMge1xuICAgICAgICAgICAgICB3aWR0aDogMjIlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZnRDbG91ZFxuIl19 */\n/*@ sourceURL=components/game/ui/landing/LeftCloud.js */'
      }));
    }
  }]);

  return LeftCloud;
}(_react.Component);

exports.default = LeftCloud;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL0xlZnRDbG91ZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxlZnRDbG91ZCIsInByb3BzIiwiYW5pbWF0ZU91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SSxBQUVWOzs7Ozs7Ozs7Ozs2QkFDTSxBQUNSOzZCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFFRTtBQUZGO0FBQUEsT0FBQTthQUVFLEFBRU07K0RBRHNCLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixnQkFEcEQsQUFDb0U7O29CQURwRTtzQkFGRixBQUVFLEFBSUE7QUFKQTtBQUVFO2FBRUYsQUFFTTsrREFEc0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLGdCQURwRCxBQUNvRTs7b0JBRHBFO3NCQU5GLEFBTUUsQUFJQTtBQUpBO0FBRUU7YUFFRixBQUVNOytEQURzQixLQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsZ0JBRHBELEFBQ29FOztvQkFEcEU7c0JBVkYsQUFVRTtBQUFBO0FBRUU7aUJBWko7YUFERixBQUNFLEFBbUZIO0FBbkZHOzs7OztBQUhrQixBLEFBeUZ4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMZWZ0Q2xvdWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==