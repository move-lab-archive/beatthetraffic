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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/shared/ButtonClose.js';


var ButtonClose = function (_Component) {
  (0, _inherits3.default)(ButtonClose, _Component);

  function ButtonClose() {
    (0, _classCallCheck3.default)(this, ButtonClose);

    return (0, _possibleConstructorReturn3.default)(this, (ButtonClose.__proto__ || (0, _getPrototypeOf2.default)(ButtonClose)).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonClose, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { onClick: this.props.onClick, className: 'jsx-3166114232' + ' ' + 'btn-close',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '3166114232',
        css: '.btn-close.jsx-3166114232{position:absolute;top:2rem;right:2rem;width:2.4rem;height:2.4rem;z-index:15;cursor:pointer;background-image:url(\'/static/assets/icons/icon-close.svg\');background-size:contain;background-repeat:no-repeat;background-position:center center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0J1dHRvbkNsb3NlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdvQixBQUcrQixrQkFDVCxTQUNFLFdBQ0UsYUFDQyxjQUNILFdBQ0ksZUFDNkMsNERBQ3BDLHdCQUNJLDRCQUNNLGtDQUNwQyIsImZpbGUiOiJjb21wb25lbnRzL3NoYXJlZC9CdXR0b25DbG9zZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY2xhc3MgQnV0dG9uQ2xvc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNsb3NlXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5idG4tY2xvc2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAycmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDJyZW07XG4gICAgICAgICAgICB3aWR0aDogMi40cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjRyZW07XG4gICAgICAgICAgICB6LWluZGV4OiAxNTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9hc3NldHMvaWNvbnMvaWNvbi1jbG9zZS5zdmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkNsb3NlXG4iXX0= */\n/*@ sourceURL=components/shared/ButtonClose.js */'
      }));
    }
  }]);

  return ButtonClose;
}(_react.Component);

ButtonClose.propTypes = {
  onClick: _propTypes2.default.func
};

exports.default = ButtonClose;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0J1dHRvbkNsb3NlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQnV0dG9uQ2xvc2UiLCJwcm9wcyIsIm9uQ2xpY2siLCJwcm9wVHlwZXMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7Ozs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7NkJBS0ssQUFDUDs2QkFDRSxjQUFBLFNBQTJCLFNBQVMsS0FBQSxBQUFLLE1BQXpDLEFBQStDLDZDQUEvQyxBQUFlOztvQkFBZjtzQkFBQTtBQUFBO09BQUE7aUJBQUE7YUFERixBQUNFLEFBa0JIO0FBbEJHOzs7OztBQVBvQixBOztBLEFBQXBCLFlBQ0csQTtXQUNJLG9CLEFBRFEsQUFDRSxBQTBCdkI7QUEzQnFCLEFBQ2pCOztrQkEwQkosQUFBZSIsImZpbGUiOiJCdXR0b25DbG9zZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9