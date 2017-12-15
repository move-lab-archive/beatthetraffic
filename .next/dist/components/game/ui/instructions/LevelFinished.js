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

var _reactRedux = require('react-redux');

var _SoundsManager = require('../../../../statemanagement/app/SoundsManager');

var _SoundsManager2 = _interopRequireDefault(_SoundsManager);

var _GameStateManagement = require('../../../../statemanagement/app/GameStateManagement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/instructions/LevelFinished.js';


var LevelFinished = function (_Component) {
  (0, _inherits3.default)(LevelFinished, _Component);

  function LevelFinished() {
    (0, _classCallCheck3.default)(this, LevelFinished);

    return (0, _possibleConstructorReturn3.default)(this, (LevelFinished.__proto__ || (0, _getPrototypeOf2.default)(LevelFinished)).apply(this, arguments));
  }

  (0, _createClass3.default)(LevelFinished, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _SoundsManager2.default.playSound('nextlevel');
      // The youloseloop is for now the quiet loop
      _SoundsManager2.default.playSound('youloseloop');
      this.props.dispatch((0, _GameStateManagement.loadLevel)(this.props.currentLevel + 1));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'instructions-level-finished', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      });
    }
  }]);

  return LevelFinished;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    currentLevel: state.game.get('currentLevel')
  };
})(LevelFinished);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvTGV2ZWxGaW5pc2hlZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJTb3VuZHNNYW5hZ2VyIiwibG9hZExldmVsIiwiTGV2ZWxGaW5pc2hlZCIsInBsYXlTb3VuZCIsInByb3BzIiwiZGlzcGF0Y2giLCJjdXJyZW50TGV2ZWwiLCJzdGF0ZSIsImdhbWUiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBRVQsQUFBTyxBQUFtQjs7OztBQUUxQixBQUFTLEFBQWlCOzs7Ozs7O0lBRXBCLEE7Ozs7Ozs7Ozs7O3dDQUNpQixBQUNuQjs4QkFBQSxBQUFjLFVBQWQsQUFBd0IsQUFDeEI7QUFDQTs4QkFBQSxBQUFjLFVBQWQsQUFBd0IsQUFDeEI7V0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLG9DQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBekMsQUFBb0IsQUFBb0MsQUFDekQ7Ozs7NkJBRVMsQUFDUjtvREFBWSxXQUFMLEFBQWU7b0JBQWY7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs7QUFUaUIsQSxBQWE1Qjs7MkNBQXVCLGlCQUFTLEFBQzlCOztrQkFDZ0IsTUFBQSxBQUFNLEtBQU4sQUFBVyxJQUQzQixBQUFPLEFBQ1MsQUFBZSxBQUVoQztBQUhRLEFBQ0w7QUFGVyxDQUFBLEVBQWYsQUFBZSxBQUlaIiwiZmlsZSI6IkxldmVsRmluaXNoZWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==