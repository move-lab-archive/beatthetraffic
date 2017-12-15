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

var _ButtonClose = require('../shared/ButtonClose');

var _ButtonClose2 = _interopRequireDefault(_ButtonClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/about/AboutPage.js';


var AboutPage = function (_Component) {
  (0, _inherits3.default)(AboutPage, _Component);

  function AboutPage() {
    (0, _classCallCheck3.default)(this, AboutPage);

    return (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(AboutPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-1271398148' + ' ' + 'about-page',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement(_ButtonClose2.default, { onClick: this.props.onClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }), _react2.default.createElement('h2', {
        className: 'jsx-1271398148',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, 'ABOUT BEAT THE TRAFFIC'), _react2.default.createElement('p', {
        className: 'jsx-1271398148',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'), _react2.default.createElement('h2', {
        className: 'jsx-1271398148',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'WANT TO SEE YOUR CITY IN THE GAME?'), _react2.default.createElement('p', {
        className: 'jsx-1271398148',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.'), _react2.default.createElement('h2', {
        className: 'jsx-1271398148',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'CREDITS'), _react2.default.createElement('p', {
        className: 'jsx-1271398148',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.'), _react2.default.createElement(_style2.default, {
        styleId: '1271398148',
        css: '.about-page.jsx-1271398148{position:fixed;top:0;right:0;left:0;bottom:0;z-index:10;color:white;background-color:#262626;padding:2.4rem;padding-top:4.4rem;overflow:scroll;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvQWJvdXRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHNEIsZUFDVCxNQUNFLFFBQ0QsT0FDRSxTQUNFLFdBQ0MsWUFDYSx5QkFDVixlQUNJLG1CQUNILGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL2Fib3V0L0Fib3V0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b25DbG9zZSBmcm9tICcuLi9zaGFyZWQvQnV0dG9uQ2xvc2UnXG5cbmNsYXNzIEFib3V0UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJvdXQtcGFnZWB9PlxuICAgICAgICA8QnV0dG9uQ2xvc2Ugb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSAvPlxuICAgICAgICA8aDI+QUJPVVQgQkVBVCBUSEUgVFJBRkZJQzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtXG4gICAgICAgICAgbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LFxuICAgICAgICAgIHNlZCBkaWFtIHZvbHVwdHVhLiBBdCB2ZXJvIGVvcyBldCBhY2N1c2FtIGV0IGp1c3RvIGR1byBkb2xvcmVzIGV0IGVhXG4gICAgICAgICAgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbVxuICAgICAgICAgIGlwc3VtIGRvbG9yIHNpdCBhbWV0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMj5XQU5UIFRPIFNFRSBZT1VSIENJVFkgSU4gVEhFIEdBTUU/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW1cbiAgICAgICAgICBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQsXG4gICAgICAgICAgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMj5DUkVESVRTPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW1cbiAgICAgICAgICBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQsXG4gICAgICAgICAgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWJvdXQtcGFnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gICAgICAgICAgICBwYWRkaW5nOiAyLjRyZW07XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNC40cmVtO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFBhZ2VcbiJdfQ== */\n/*@ sourceURL=components/about/AboutPage.js */'
      }));
    }
  }]);

  return AboutPage;
}(_react.Component);

exports.default = AboutPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvQWJvdXRQYWdlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uQ2xvc2UiLCJBYm91dFBhZ2UiLCJwcm9wcyIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWlCOzs7Ozs7Ozs7SSxBQUVsQjs7Ozs7Ozs7Ozs7NkJBQ00sQUFDUjs2QkFDRSxjQUFBOzRDQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsdUNBQVksU0FBUyxLQUFBLEFBQUssTUFBM0IsQUFBaUM7b0JBQWpDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSwyQ0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBT0EsNFRBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBVkYsQUFVRSxBQUNBLHVEQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVhGLEFBV0UsQUFLQSw2TEFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FoQkYsQUFnQkUsQUFDQSw0QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FqQkYsQUFpQkU7aUJBakJGO2FBREYsQUFDRSxBQXVDSDtBQXZDRzs7Ozs7QUFIa0IsQSxBQTZDeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQWJvdXRQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=