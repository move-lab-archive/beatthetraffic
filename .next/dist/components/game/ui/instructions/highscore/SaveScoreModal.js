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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonClose = require('../../../../shared/ButtonClose');

var _ButtonClose2 = _interopRequireDefault(_ButtonClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/instructions/highscore/SaveScoreModal.js';


// TODO handle logic of saving score in database ..., for now style everything static

var SaveScoreModal = function (_Component) {
  (0, _inherits3.default)(SaveScoreModal, _Component);

  function SaveScoreModal() {
    (0, _classCallCheck3.default)(this, SaveScoreModal);

    return (0, _possibleConstructorReturn3.default)(this, (SaveScoreModal.__proto__ || (0, _getPrototypeOf2.default)(SaveScoreModal)).apply(this, arguments));
  }

  (0, _createClass3.default)(SaveScoreModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-3860012546' + ' ' + 'modal-overlay',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3860012546' + ' ' + 'modal-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'blabablablbal', _react2.default.createElement(_ButtonClose2.default, { onClick: function onClick() {
          return _this2.props.onClose();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '3860012546',
        css: '.modal-overlay.jsx-3860012546{position:absolute;top:0;right:0;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(255,254,74,0.9);}.modal-content.jsx-3860012546{position:relative;width:80%;min-height:300px;background-color:white;border:3px solid black;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvaGlnaHNjb3JlL1NhdmVTY29yZU1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cb0IsQUFHK0IsQUFjQSxrQkFiWixBQWNJLE1BYkYsSUFjUyxJQWJWLE9BQ0UsTUFhYyxHQVpWLG9CQWFVLHVCQUN6QiwrQkFiUyxpQ0FDZSw4RUFDSCw2RkFDSSxtR0FDa0Isc0NBQzNDIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvaGlnaHNjb3JlL1NhdmVTY29yZU1vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgQnV0dG9uQ2xvc2UgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL0J1dHRvbkNsb3NlJ1xuXG4vLyBUT0RPIGhhbmRsZSBsb2dpYyBvZiBzYXZpbmcgc2NvcmUgaW4gZGF0YWJhc2UgLi4uLCBmb3Igbm93IHN0eWxlIGV2ZXJ5dGhpbmcgc3RhdGljXG5cbmNsYXNzIFNhdmVTY29yZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgYmxhYmFibGFibGJhbFxuICAgICAgICAgIDxCdXR0b25DbG9zZSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xvc2UoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU0LCA3NCwgMC45KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVTY29yZU1vZGFsXG4iXX0= */\n/*@ sourceURL=components/game/ui/instructions/highscore/SaveScoreModal.js */'
      }));
    }
  }]);

  return SaveScoreModal;
}(_react.Component);

SaveScoreModal.propTypes = {
  onClose: _propTypes2.default.func
};

exports.default = SaveScoreModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvaGlnaHNjb3JlL1NhdmVTY29yZU1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQnV0dG9uQ2xvc2UiLCJTYXZlU2NvcmVNb2RhbCIsInByb3BzIiwib25DbG9zZSIsInByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBRVAsQUFBTyxBQUFpQjs7Ozs7Ozs7O0FBRXhCOztJLEFBRU07Ozs7Ozs7Ozs7OzZCQUtLO21CQUNQOzs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQTtBQUFBO0FBQUEsU0FFRSxpQ0FBQSxBQUFDLHVDQUFZLFNBQVMsbUJBQUE7aUJBQU0sT0FBQSxBQUFLLE1BQVgsQUFBTSxBQUFXO0FBQXZDO29CQUFBO3NCQUhKLEFBQ0UsQUFFRTtBQUFBOztpQkFISjthQURGLEFBQ0UsQUE4Qkg7QUE5Qkc7Ozs7O0FBUHVCLEE7O0EsQUFBdkIsZUFDRyxBO1dBQ0ksb0JBRFEsQUFDRSxBLEFBc0N2QjtBQXZDcUIsQUFDakI7O2tCQXNDSixBQUFlIiwiZmlsZSI6IlNhdmVTY29yZU1vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=