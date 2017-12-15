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

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/shared/Button.js';


var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);

    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('a', {
        onClick: this.props.onClick,
        className: 'jsx-3001268409' + ' ' + ('btn \n          ' + (this.props.large ? 'btn-large' : '') + '\n          ' + (this.props.transparent ? 'btn-transparent' : '') + '\n        '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, this.props.title, _react2.default.createElement(_style2.default, {
        styleId: '3001268409',
        css: '.btn.jsx-3001268409{background-color:white;border:1px solid white;color:#262626;cursor:pointer;padding:1rem;text-decoration:none;margin-bottom:1rem;display:inline-block;font-family:\'Geo\',sans-serif;font-size:2.5rem;}.btn.jsx-3001268409:hover,.btn.jsx-3001268409:focus{background-color:#e6e6e6;}.btn-transparent.jsx-3001268409{background-color:transparent;border:1px solid white;color:white;}.btn-transparent.jsx-3001268409:hover,.btn-transparent.jsx-3001268409:focus{background-color:white;color:#262626;}.btn-large.jsx-3001268409{font-size:5rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQm9CLEFBR29DLEFBZUUsQUFJSSxBQU9OLEFBS1IsZUFDakIsUUEvQnlCLEFBMEJULEVBWGhCLElBSXlCLFFBUXpCLFNBMUJnQixNQW1CRixRQWxCRyxJQW1CakIsV0FsQmUsYUFDUSxxQkFDRixtQkFDRSxxQkFFUyw2QkFDYixpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9zaGFyZWQvQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0cmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIFxuICAgICAgICAgICR7dGhpcy5wcm9wcy5sYXJnZSA/ICdidG4tbGFyZ2UnIDogJyd9XG4gICAgICAgICAgJHt0aGlzLnByb3BzLnRyYW5zcGFyZW50ID8gJ2J0bi10cmFuc3BhcmVudCcgOiAnJ31cbiAgICAgICAgYH1cbiAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG46aG92ZXIsXG4gICAgICAgICAgLmJ0bjpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG4tdHJhbnNwYXJlbnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnRuLXRyYW5zcGFyZW50OmhvdmVyLFxuICAgICAgICAgIC5idG4tdHJhbnNwYXJlbnQ6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnRuLWxhcmdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0= */\n/*@ sourceURL=components/shared/Button.js */'
      }));
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  title: _propTypes2.default.string,
  large: _propTypes2.default.bool,
  transparent: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImxhcmdlIiwidHJhbnNwYXJlbnQiLCJ0aXRsZSIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7Ozs7Ozs7O0ksQUFFRDs7Ozs7Ozs7Ozs7NkJBUUssQUFDUDs2QkFDRSxjQUFBO2lCQUtXLEtBQUEsQUFBSyxNQUxoQixBQUtzQjttRUFIaEIsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLGNBRnpCLEFBRXVDLHdCQUNqQyxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsb0JBSC9CLEFBR21ELE1BSG5EOztvQkFBQTtzQkFBQSxBQU9HO0FBUEg7QUFLRSxPQUxGLE9BT0csQUFBSyxNQVBSLEFBT2M7aUJBUGQ7YUFERixBQUNFLEFBOENIO0FBOUNHOzs7OztBQVZlLEE7O0FBQWYsQSxPQUNHLEE7U0FDRSxvQkFEVSxBQUNBLEFBQ2pCO1NBQU8sb0JBRlUsQUFFQSxBQUNqQjtlQUFhLG9CQUhJLEFBR00sQUFDdkI7V0FBUyxvQkFKUSxBQUlFLEFBc0R2QixBO0FBMURxQixBQUNqQjs7a0JBeURKLEFBQWUiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=