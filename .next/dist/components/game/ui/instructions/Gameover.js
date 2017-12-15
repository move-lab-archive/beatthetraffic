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

var _Button = require('../../../shared/Button');

var _Button2 = _interopRequireDefault(_Button);

var _GameStateManagement = require('../../../../statemanagement/app/GameStateManagement');

var _SoundsManager = require('../../../../statemanagement/app/SoundsManager');

var _SoundsManager2 = _interopRequireDefault(_SoundsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/instructions/Gameover.js';


var Gameover = function (_Component) {
  (0, _inherits3.default)(Gameover, _Component);

  function Gameover() {
    (0, _classCallCheck3.default)(this, Gameover);

    return (0, _possibleConstructorReturn3.default)(this, (Gameover.__proto__ || (0, _getPrototypeOf2.default)(Gameover)).apply(this, arguments));
  }

  (0, _createClass3.default)(Gameover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _SoundsManager2.default.playSound('youlose');
      _SoundsManager2.default.playSound('youloseloop');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-2554005578' + ' ' + 'instructions-gameover',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2554005578' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'GAME OVER'), _react2.default.createElement('div', {
        className: 'jsx-2554005578' + ' ' + 'message',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'You scored ', this.props.score, ' \u2B50\uFE0F'), _react2.default.createElement(_Button2.default, {
        title: 'Play again',
        onClick: function onClick() {
          return _this2.props.dispatch((0, _GameStateManagement.retry)());
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2554005578',
        css: '.instructions-gameover.jsx-2554005578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:white;padding:5rem;background-color:#262626;}.title.jsx-2554005578{font-size:6rem;color:red;text-align:center;margin-bottom:3rem;}.message.jsx-2554005578{text-align:center;margin-bottom:2rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvR2FtZW92ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQixBQUcwQixBQVVFLEFBT0csZUFOUixHQU9TLE9BTkQsWUFPcEIsTUFOcUIsbUJBQ3JCLFlBYlMsaUNBQ2UsOEVBQ0gsNkZBQ0ksbUdBQ1gsWUFDQyxhQUNZLHlCQUMzQiIsImZpbGUiOiJjb21wb25lbnRzL2dhbWUvdWkvaW5zdHJ1Y3Rpb25zL0dhbWVvdmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NoYXJlZC9CdXR0b24nXG5cbmltcG9ydCB7IHJldHJ5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGVtYW5hZ2VtZW50L2FwcC9HYW1lU3RhdGVNYW5hZ2VtZW50J1xuaW1wb3J0IFNvdW5kc01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGVtYW5hZ2VtZW50L2FwcC9Tb3VuZHNNYW5hZ2VyJ1xuXG5jbGFzcyBHYW1lb3ZlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBTb3VuZHNNYW5hZ2VyLnBsYXlTb3VuZCgneW91bG9zZScpXG4gICAgU291bmRzTWFuYWdlci5wbGF5U291bmQoJ3lvdWxvc2Vsb29wJylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnN0cnVjdGlvbnMtZ2FtZW92ZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPkdBTUUgT1ZFUjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+WW91IHNjb3JlZCB7dGhpcy5wcm9wcy5zY29yZX0g4q2Q77iPPC9kaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0aXRsZT17YFBsYXkgYWdhaW5gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGlzcGF0Y2gocmV0cnkoKSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW5zdHJ1Y3Rpb25zLWdhbWVvdmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzY29yZTogc3RhdGUuZ2FtZS5nZXQoJ3Njb3JlJyksXG4gICAgY3VycmVudExldmVsOiBzdGF0ZS5nYW1lLmdldCgnY3VycmVudExldmVsJylcbiAgfVxufSkoR2FtZW92ZXIpXG4iXX0= */\n/*@ sourceURL=components/game/ui/instructions/Gameover.js */'
      }));
    }
  }]);

  return Gameover;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    score: state.game.get('score'),
    currentLevel: state.game.get('currentLevel')
  };
})(Gameover);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvR2FtZW92ZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiQnV0dG9uIiwicmV0cnkiLCJTb3VuZHNNYW5hZ2VyIiwiR2FtZW92ZXIiLCJwbGF5U291bmQiLCJwcm9wcyIsInNjb3JlIiwiZGlzcGF0Y2giLCJzdGF0ZSIsImdhbWUiLCJnZXQiLCJjdXJyZW50TGV2ZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUVULEFBQU8sQUFBWTs7OztBQUVuQixBQUFTLEFBQWE7O0FBQ3RCLEFBQU8sQUFBbUI7Ozs7Ozs7OztJQUVwQixBOzs7Ozs7Ozs7Ozt3Q0FDaUIsQUFDbkI7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLEFBQ3hCOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixBQUN6Qjs7Ozs2QkFFUzttQkFDUjs7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBQXFDLG9CQUFBLEFBQUssTUFBMUMsQUFBZ0QsT0FGbEQsQUFFRSxBQUNBLGtDQUFBLEFBQUM7ZUFBRCxBQUVFO2lCQUFTLG1CQUFBO2lCQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsU0FBakIsQUFBTSxBQUFvQjtBQUZyQzs7b0JBQUE7c0JBSEYsQUFHRTtBQUFBO0FBQ0U7aUJBSko7YUFERixBQUNFLEFBZ0NIO0FBaENHOzs7OztBLEFBUmlCLEFBMkN2Qjs7MkNBQXVCLGlCQUFTLEFBQzlCOztXQUNTLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFEYixBQUNFLEFBQWUsQUFDdEI7a0JBQWMsTUFBQSxBQUFNLEtBQU4sQUFBVyxJQUYzQixBQUFPLEFBRVMsQUFBZSxBQUVoQztBQUpRLEFBQ0w7QUFGVyxDQUFBLEVBQWYsQUFBZSxBQUtaIiwiZmlsZSI6IkdhbWVvdmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=