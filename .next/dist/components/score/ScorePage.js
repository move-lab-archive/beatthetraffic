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

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/score/ScorePage.js';


// TODO handle logic of retriving scores, for now style everything static

var ScorePage = function (_Component) {
  (0, _inherits3.default)(ScorePage, _Component);

  function ScorePage() {
    (0, _classCallCheck3.default)(this, ScorePage);

    return (0, _possibleConstructorReturn3.default)(this, (ScorePage.__proto__ || (0, _getPrototypeOf2.default)(ScorePage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScorePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-2923361290' + ' ' + 'highscore-page',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_ButtonClose2.default, { onClick: this.props.onClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement('h2', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'HIGHSCORES'), _react2.default.createElement('ol', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, '@mmmmm'), _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, '@tdurand'), _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, '@b-g'), _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, '@tdurand'), _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, '@tdurand'), _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, '@tdurand'), _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, '@tdurand'), _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, '@tdurand'), _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, '@tdurand'), _react2.default.createElement('li', {
        className: 'jsx-2923361290',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, '@tdurand')), _react2.default.createElement(_style2.default, {
        styleId: '2923361290',
        css: '.highscore-page.jsx-2923361290{position:fixed;top:0;right:0;left:0;bottom:0;z-index:10;color:white;background-color:#262626;padding:2.4rem;padding-top:4.4rem;overflow:scroll;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2NvcmUvU2NvcmVQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCb0IsQUFHNEIsZUFDVCxNQUNFLFFBQ0QsT0FDRSxTQUNFLFdBQ0MsWUFDYSx5QkFDVixlQUNJLG1CQUNILGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL3Njb3JlL1Njb3JlUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b25DbG9zZSBmcm9tICcuLi9zaGFyZWQvQnV0dG9uQ2xvc2UnXG5cbi8vIFRPRE8gaGFuZGxlIGxvZ2ljIG9mIHJldHJpdmluZyBzY29yZXMsIGZvciBub3cgc3R5bGUgZXZlcnl0aGluZyBzdGF0aWNcblxuY2xhc3MgU2NvcmVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BoaWdoc2NvcmUtcGFnZWB9PlxuICAgICAgICA8QnV0dG9uQ2xvc2Ugb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSAvPlxuICAgICAgICA8aDI+SElHSFNDT1JFUzwvaDI+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8bGk+QG1tbW1tPC9saT5cbiAgICAgICAgICA8bGk+QHRkdXJhbmQ8L2xpPlxuICAgICAgICAgIDxsaT5AYi1nPC9saT5cbiAgICAgICAgICA8bGk+QHRkdXJhbmQ8L2xpPlxuICAgICAgICAgIDxsaT5AdGR1cmFuZDwvbGk+XG4gICAgICAgICAgPGxpPkB0ZHVyYW5kPC9saT5cbiAgICAgICAgICA8bGk+QHRkdXJhbmQ8L2xpPlxuICAgICAgICAgIDxsaT5AdGR1cmFuZDwvbGk+XG4gICAgICAgICAgPGxpPkB0ZHVyYW5kPC9saT5cbiAgICAgICAgICA8bGk+QHRkdXJhbmQ8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhpZ2hzY29yZS1wYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuNHJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0LjRyZW07XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlUGFnZVxuIl19 */\n/*@ sourceURL=components/score/ScorePage.js */'
      }));
    }
  }]);

  return ScorePage;
}(_react.Component);

exports.default = ScorePage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2NvcmUvU2NvcmVQYWdlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uQ2xvc2UiLCJTY29yZVBhZ2UiLCJwcm9wcyIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWlCOzs7Ozs7Ozs7QUFFeEI7O0ksQUFFTTs7Ozs7Ozs7Ozs7NkJBQ00sQUFDUjs2QkFDRSxjQUFBOzRDQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsdUNBQVksU0FBUyxLQUFBLEFBQUssTUFBM0IsQUFBaUM7b0JBQWpDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSwrQkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMkJBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLDZCQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSx5QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsNkJBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLDZCQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSw2QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FQRixBQU9FLEFBQ0EsNkJBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBUkYsQUFRRSxBQUNBLDZCQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVRGLEFBU0UsQUFDQSw2QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FiSixBQUdFLEFBVUU7aUJBYko7YUFERixBQUNFLEFBZ0NIO0FBaENHOzs7OztBQUhrQixBLEFBc0N4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJTY29yZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==