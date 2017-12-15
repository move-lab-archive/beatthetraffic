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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../statemanagement/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Layout = require('../components/shared/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _GamePage = require('../components/game/GamePage');

var _GamePage2 = _interopRequireDefault(_GamePage);

var _GameStateManagement = require('../statemanagement/app/GameStateManagement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_GamePage2.default, { url: this.props.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          query = _ref.query,
          isServer = _ref.isServer;

      var city = query.city || store.getState().app.get('selectedCity');
      var level = query.level || 1;
      // console.log(`Setting city ${city}, level ${level}`)
      store.dispatch((0, _GameStateManagement.loadCity)(city, level));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiaW5pdFN0b3JlIiwid2l0aFJlZHV4IiwiTGF5b3V0IiwiR2FtZVBhZ2UiLCJsb2FkQ2l0eSIsIkluZGV4IiwicHJvcHMiLCJ1cmwiLCJzdG9yZSIsInF1ZXJ5IiwiaXNTZXJ2ZXIiLCJjaXR5IiwiZ2V0U3RhdGUiLCJhcHAiLCJnZXQiLCJsZXZlbCIsImRpc3BhdGNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWlCOztBQUMxQixBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUVyQixBQUFTLEFBQWdCOzs7Ozs7O0lBRW5CLEE7Ozs7Ozs7Ozs7OzZCQVFNLEFBQ1I7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLG9DQUFTLEtBQUssS0FBQSxBQUFLLE1BQXBCLEFBQTBCO29CQUExQjtzQkFGSixBQUNFLEFBQ0UsQUFHTDtBQUhLOzs7OzswQ0FWOEM7VUFBMUIsQUFBMEIsYUFBMUIsQUFBMEI7VUFBbkIsQUFBbUIsYUFBbkIsQUFBbUI7VUFBWixBQUFZLGdCQUFaLEFBQVksQUFDbEQ7O1VBQU0sT0FBTyxNQUFBLEFBQU0sUUFBUSxNQUFBLEFBQU0sV0FBTixBQUFpQixJQUFqQixBQUFxQixJQUFoRCxBQUEyQixBQUF5QixBQUNwRDtVQUFNLFFBQVEsTUFBQSxBQUFNLFNBQXBCLEFBQTZCLEFBQzdCO0FBQ0E7WUFBQSxBQUFNLFNBQVMsbUNBQUEsQUFBUyxNQUF4QixBQUFlLEFBQWUsQUFDL0I7Ozs7O0VBTmlCLGdCQUFNLEEsQUFpQjFCOztrQkFBZSxBQUFVLGtEQUF6QixBQUFlLEFBQXFCIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=