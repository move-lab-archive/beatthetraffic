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

var _LevelBeginning = require('./instructions/LevelBeginning');

var _LevelBeginning2 = _interopRequireDefault(_LevelBeginning);

var _LevelFinished = require('./instructions/LevelFinished');

var _LevelFinished2 = _interopRequireDefault(_LevelFinished);

var _Gameover = require('./instructions/Gameover');

var _Gameover2 = _interopRequireDefault(_Gameover);

var _Win = require('./instructions/Win');

var _Win2 = _interopRequireDefault(_Win);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/GameInstructions.js';


var GameInstructions = function (_PureComponent) {
  (0, _inherits3.default)(GameInstructions, _PureComponent);

  function GameInstructions() {
    (0, _classCallCheck3.default)(this, GameInstructions);

    return (0, _possibleConstructorReturn3.default)(this, (GameInstructions.__proto__ || (0, _getPrototypeOf2.default)(GameInstructions)).apply(this, arguments));
  }

  (0, _createClass3.default)(GameInstructions, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-953348502' + ' ' + ('game-instructions\n        ' + (this.props.introAnimPlayed ? '' : 'hidden')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, !this.props.isPlaying && !this.props.failed && !this.props.finished && _react2.default.createElement(_LevelBeginning2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), !this.props.isPlaying && !this.props.failed && this.props.finished && this.props.currentLevel < this.props.nbTotalLevel && _react2.default.createElement(_LevelFinished2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), !this.props.isPlaying && !this.props.failed && this.props.finished && this.props.currentLevel === this.props.nbTotalLevel && _react2.default.createElement(_Win2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), !this.props.isPlaying && this.props.failed && _react2.default.createElement(_Gameover2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '953348502',
        css: '.game-instructions.jsx-953348502{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:0;left:0;bottom:0;right:0;z-index:6;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-user-drag:none;opacity:1;}.hidden.jsx-953348502{opacity:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9HYW1lSW5zdHJ1Y3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCb0IsQUFHNEIsQUFjTCxVQUNaLEtBZGUsMEVBQ1AsTUFDQyxPQUNFLFNBQ0QsUUFDRSxVQUNPLHFGQUNVLDJCQUNKLHVCQUNiLFVBQ1oiLCJmaWxlIjoiY29tcG9uZW50cy9nYW1lL3VpL0dhbWVJbnN0cnVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgTGV2ZWxCZWdpbm5pbmcgZnJvbSAnLi9pbnN0cnVjdGlvbnMvTGV2ZWxCZWdpbm5pbmcnXG5pbXBvcnQgTGV2ZWxGaW5pc2hlZCBmcm9tICcuL2luc3RydWN0aW9ucy9MZXZlbEZpbmlzaGVkJ1xuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vaW5zdHJ1Y3Rpb25zL0dhbWVvdmVyJ1xuaW1wb3J0IFdpbiBmcm9tICcuL2luc3RydWN0aW9ucy9XaW4nXG5cbmNsYXNzIEdhbWVJbnN0cnVjdGlvbnMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BnYW1lLWluc3RydWN0aW9uc1xuICAgICAgICAke3RoaXMucHJvcHMuaW50cm9BbmltUGxheWVkID8gJycgOiAnaGlkZGVuJ31gfVxuICAgICAgPlxuICAgICAgICB7IXRoaXMucHJvcHMuaXNQbGF5aW5nICYmXG4gICAgICAgICAgIXRoaXMucHJvcHMuZmFpbGVkICYmXG4gICAgICAgICAgIXRoaXMucHJvcHMuZmluaXNoZWQgJiYgPExldmVsQmVnaW5uaW5nIC8+fVxuICAgICAgICB7IXRoaXMucHJvcHMuaXNQbGF5aW5nICYmXG4gICAgICAgICAgIXRoaXMucHJvcHMuZmFpbGVkICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy5maW5pc2hlZCAmJlxuICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudExldmVsIDwgdGhpcy5wcm9wcy5uYlRvdGFsTGV2ZWwgJiYgKFxuICAgICAgICAgICAgPExldmVsRmluaXNoZWQgLz5cbiAgICAgICAgICApfVxuICAgICAgICB7IXRoaXMucHJvcHMuaXNQbGF5aW5nICYmXG4gICAgICAgICAgIXRoaXMucHJvcHMuZmFpbGVkICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy5maW5pc2hlZCAmJlxuICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudExldmVsID09PSB0aGlzLnByb3BzLm5iVG90YWxMZXZlbCAmJiA8V2luIC8+fVxuICAgICAgICB7IXRoaXMucHJvcHMuaXNQbGF5aW5nICYmIHRoaXMucHJvcHMuZmFpbGVkICYmIDxHYW1lb3ZlciAvPn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5nYW1lLWluc3RydWN0aW9ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgei1pbmRleDogNjtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpc1BsYXlpbmc6IHN0YXRlLmdhbWUuZ2V0KCdpc1BsYXlpbmcnKSxcbiAgICBmYWlsZWQ6IHN0YXRlLmdhbWUuZ2V0KCdmYWlsZWQnKSxcbiAgICBmaW5pc2hlZDogc3RhdGUuZ2FtZS5nZXQoJ2ZpbmlzaGVkJyksXG4gICAgY3VycmVudExldmVsOiBzdGF0ZS5nYW1lLmdldCgnY3VycmVudExldmVsJyksXG4gICAgbmJUb3RhbExldmVsOiBzdGF0ZS5nYW1lLmdldCgnbmJUb3RhbExldmVsJyksXG4gICAgaW50cm9BbmltUGxheWVkOiBzdGF0ZS5hcHAuZ2V0KCdpbnRyb0FuaW1QbGF5ZWQnKVxuICB9XG59KShHYW1lSW5zdHJ1Y3Rpb25zKVxuIl19 */\n/*@ sourceURL=components/game/ui/GameInstructions.js */'
      }));
    }
  }]);

  return GameInstructions;
}(_react.PureComponent);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isPlaying: state.game.get('isPlaying'),
    failed: state.game.get('failed'),
    finished: state.game.get('finished'),
    currentLevel: state.game.get('currentLevel'),
    nbTotalLevel: state.game.get('nbTotalLevel'),
    introAnimPlayed: state.app.get('introAnimPlayed')
  };
})(GameInstructions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9HYW1lSW5zdHJ1Y3Rpb25zLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJMZXZlbEJlZ2lubmluZyIsIkxldmVsRmluaXNoZWQiLCJHYW1lb3ZlciIsIldpbiIsIkdhbWVJbnN0cnVjdGlvbnMiLCJwcm9wcyIsImludHJvQW5pbVBsYXllZCIsImlzUGxheWluZyIsImZhaWxlZCIsImZpbmlzaGVkIiwiY3VycmVudExldmVsIiwibmJUb3RhbExldmVsIiwic3RhdGUiLCJnYW1lIiwiZ2V0IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFFVCxBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7NkJBQ00sQUFDUjs2QkFDRSxjQUFBOzZFQUVJLEtBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsS0FGakMsQUFFc0M7O29CQUZ0QztzQkFBQSxBQUlHO0FBSkg7QUFBQSxPQUFBLEdBSUksS0FBQSxBQUFLLE1BQU4sQUFBWSxhQUNYLENBQUMsS0FBQSxBQUFLLE1BRFAsQUFDYSxVQUNaLENBQUMsS0FBQSxBQUFLLE1BRlAsQUFFYSw0QkFBWSxBQUFDOztvQkFBRDtzQkFONUIsQUFNNEIsQUFDekI7QUFEeUI7QUFBQSxPQUFBLElBQ3hCLEtBQUEsQUFBSyxNQUFOLEFBQVksYUFDWCxDQUFDLEtBQUEsQUFBSyxNQURQLEFBQ2EsVUFDWixLQUFBLEFBQUssTUFGTixBQUVZLFlBQ1gsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUFlLEtBQUEsQUFBSyxNQUhoQyxBQUdzQyxnQ0FDbkMsQUFBQzs7b0JBQUQ7c0JBWE4sQUFXTSxBQUVIO0FBRkc7QUFBQSxPQUFBLElBRUYsS0FBQSxBQUFLLE1BQU4sQUFBWSxhQUNYLENBQUMsS0FBQSxBQUFLLE1BRFAsQUFDYSxVQUNaLEtBQUEsQUFBSyxNQUZOLEFBRVksWUFDWCxLQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFpQixLQUFBLEFBQUssTUFIbEMsQUFHd0MsZ0NBQWdCLEFBQUM7O29CQUFEO3NCQWhCM0QsQUFnQjJELEFBQ3hEO0FBRHdEO0FBQUEsT0FBQSxJQUN2RCxLQUFBLEFBQUssTUFBTixBQUFZLGFBQWEsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLDBCQUFVLEFBQUM7O29CQUFEO3NCQWpCakQsQUFpQmlEO0FBQUE7QUFBQSxPQUFBO2lCQWpCakQ7YUFERixBQUNFLEFBdUNIO0FBdkNHOzs7OztBQUh5QixBLEFBNkMvQjs7MkNBQXVCLGlCQUFTLEFBQzlCOztlQUNhLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFEakIsQUFDTSxBQUFlLEFBQzFCO1lBQVEsTUFBQSxBQUFNLEtBQU4sQUFBVyxJQUZkLEFBRUcsQUFBZSxBQUN2QjtjQUFVLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFIaEIsQUFHSyxBQUFlLEFBQ3pCO2tCQUFjLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFKcEIsQUFJUyxBQUFlLEFBQzdCO2tCQUFjLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFMcEIsQUFLUyxBQUFlLEFBQzdCO3FCQUFpQixNQUFBLEFBQU0sSUFBTixBQUFVLElBTjdCLEFBQU8sQUFNWSxBQUFjLEFBRWxDO0FBUlEsQUFDTDtBQUZXLENBQUEsRUFBZixBQUFlLEFBU1oiLCJmaWxlIjoiR2FtZUluc3RydWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9