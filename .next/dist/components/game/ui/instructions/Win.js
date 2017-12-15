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

var _SaveScoreModal = require('./highscore/SaveScoreModal');

var _SaveScoreModal2 = _interopRequireDefault(_SaveScoreModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/instructions/Win.js';


var Win = function (_Component) {
  (0, _inherits3.default)(Win, _Component);

  function Win(props) {
    (0, _classCallCheck3.default)(this, Win);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Win.__proto__ || (0, _getPrototypeOf2.default)(Win)).call(this, props));

    _this.state = {
      displaySaveScoreModal: false
    };

    _this.handleDisplaySaveScoreModal = _this.handleDisplaySaveScoreModal.bind(_this);
    _this.handleHideSaveScoreModal = _this.handleHideSaveScoreModal.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Win, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _SoundsManager2.default.playSound('youwin');
      _SoundsManager2.default.playSound('youwinloop');
    }
  }, {
    key: 'handleDisplaySaveScoreModal',
    value: function handleDisplaySaveScoreModal() {
      this.setState({ displaySaveScoreModal: true });
    }
  }, {
    key: 'handleHideSaveScoreModal',
    value: function handleHideSaveScoreModal() {
      this.setState({ displaySaveScoreModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-4242279467' + ' ' + 'instructions-win',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4242279467' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'YOU WON'), _react2.default.createElement('div', {
        className: 'jsx-4242279467' + ' ' + 'message',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'You scored ', this.props.score, ' \u2B50\uFE0F'), _react2.default.createElement(_Button2.default, {
        title: 'Save your score',
        onClick: this.handleDisplaySaveScoreModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_Button2.default, {
        title: 'Play again',
        onClick: function onClick() {
          return _this2.props.dispatch((0, _GameStateManagement.retry)());
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), this.state.displaySaveScoreModal && _react2.default.createElement(_SaveScoreModal2.default, { onClose: this.handleHideSaveScoreModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '4242279467',
        css: '.instructions-win.jsx-4242279467{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:white;padding:5rem;background-color:#262626;}.title.jsx-4242279467{font-size:6rem;color:#5bff86;text-align:center;margin-bottom:3rem;}.message.jsx-4242279467{text-align:center;margin-bottom:2rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvV2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEb0IsQUFHK0IsQUFXSCxBQU9HLGVBTkosR0FYRCxBQWtCTSxXQU5ELFFBT3BCLFVBTnFCLG1CQUNyQiwwQkFiUyxpQ0FDZSw4RUFDSCw2RkFDSSxtR0FDWCxZQUNDLGFBQ1kseUJBQzNCIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvV2luLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NoYXJlZC9CdXR0b24nXG5cbmltcG9ydCB7IHJldHJ5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGVtYW5hZ2VtZW50L2FwcC9HYW1lU3RhdGVNYW5hZ2VtZW50J1xuXG5pbXBvcnQgU291bmRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZW1hbmFnZW1lbnQvYXBwL1NvdW5kc01hbmFnZXInXG5cbmltcG9ydCBTYXZlU2NvcmVNb2RhbCBmcm9tICcuL2hpZ2hzY29yZS9TYXZlU2NvcmVNb2RhbCdcblxuY2xhc3MgV2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheVNhdmVTY29yZU1vZGFsOiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlRGlzcGxheVNhdmVTY29yZU1vZGFsID0gdGhpcy5oYW5kbGVEaXNwbGF5U2F2ZVNjb3JlTW9kYWwuYmluZChcbiAgICAgIHRoaXNcbiAgICApXG4gICAgdGhpcy5oYW5kbGVIaWRlU2F2ZVNjb3JlTW9kYWwgPSB0aGlzLmhhbmRsZUhpZGVTYXZlU2NvcmVNb2RhbC5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgU291bmRzTWFuYWdlci5wbGF5U291bmQoJ3lvdXdpbicpXG4gICAgU291bmRzTWFuYWdlci5wbGF5U291bmQoJ3lvdXdpbmxvb3AnKVxuICB9XG5cbiAgaGFuZGxlRGlzcGxheVNhdmVTY29yZU1vZGFsICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVNhdmVTY29yZU1vZGFsOiB0cnVlIH0pXG4gIH1cblxuICBoYW5kbGVIaWRlU2F2ZVNjb3JlTW9kYWwgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U2F2ZVNjb3JlTW9kYWw6IGZhbHNlIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naW5zdHJ1Y3Rpb25zLXdpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+WU9VIFdPTjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+WW91IHNjb3JlZCB7dGhpcy5wcm9wcy5zY29yZX0g4q2Q77iPPC9kaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0aXRsZT17YFNhdmUgeW91ciBzY29yZWB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVEaXNwbGF5U2F2ZVNjb3JlTW9kYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0aXRsZT17YFBsYXkgYWdhaW5gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGlzcGF0Y2gocmV0cnkoKSl9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXlTYXZlU2NvcmVNb2RhbCAmJiAoXG4gICAgICAgICAgPFNhdmVTY29yZU1vZGFsIG9uQ2xvc2U9e3RoaXMuaGFuZGxlSGlkZVNhdmVTY29yZU1vZGFsfSAvPlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmluc3RydWN0aW9ucy13aW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgICAgICBjb2xvcjogIzViZmY4NjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzY29yZTogc3RhdGUuZ2FtZS5nZXQoJ3Njb3JlJyksXG4gICAgY3VycmVudExldmVsOiBzdGF0ZS5nYW1lLmdldCgnY3VycmVudExldmVsJylcbiAgfVxufSkoV2luKVxuIl19 */\n/*@ sourceURL=components/game/ui/instructions/Win.js */'
      }));
    }
  }]);

  return Win;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    score: state.game.get('score'),
    currentLevel: state.game.get('currentLevel')
  };
})(Win);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvV2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIkJ1dHRvbiIsInJldHJ5IiwiU291bmRzTWFuYWdlciIsIlNhdmVTY29yZU1vZGFsIiwiV2luIiwicHJvcHMiLCJzdGF0ZSIsImRpc3BsYXlTYXZlU2NvcmVNb2RhbCIsImhhbmRsZURpc3BsYXlTYXZlU2NvcmVNb2RhbCIsImJpbmQiLCJoYW5kbGVIaWRlU2F2ZVNjb3JlTW9kYWwiLCJwbGF5U291bmQiLCJzZXRTdGF0ZSIsInNjb3JlIiwiZGlzcGF0Y2giLCJnYW1lIiwiZ2V0IiwiY3VycmVudExldmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFFVCxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBUyxBQUFhOztBQUV0QixBQUFPLEFBQW1COzs7O0FBRTFCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJQUVyQixBOytCQUNKOztlQUFBLEFBQWEsT0FBTzt3Q0FBQTs7Z0lBQUEsQUFDWixBQUVOOztVQUFBLEFBQUs7NkJBQUwsQUFBYSxBQUNZLEFBR3pCO0FBSmEsQUFDWDs7VUFHRixBQUFLLDhCQUE4QixNQUFBLEFBQUssNEJBQUwsQUFBaUMsS0FBcEUsQUFHQTtVQUFBLEFBQUssMkJBQTJCLE1BQUEsQUFBSyx5QkFBTCxBQUE4QixLQVY1QyxBQVVsQjtXQUNEOzs7Ozt3Q0FFb0IsQUFDbkI7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLEFBQ3hCOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixBQUN6Qjs7OztrREFFOEIsQUFDN0I7V0FBQSxBQUFLLFNBQVMsRUFBRSx1QkFBaEIsQUFBYyxBQUF5QixBQUN4Qzs7OzsrQ0FFMkIsQUFDMUI7V0FBQSxBQUFLLFNBQVMsRUFBRSx1QkFBaEIsQUFBYyxBQUF5QixBQUN4Qzs7Ozs2QkFFUzttQkFDUjs7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDRCQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBQXFDLG9CQUFBLEFBQUssTUFBMUMsQUFBZ0QsT0FGbEQsQUFFRSxBQUNBLGtDQUFBLEFBQUM7ZUFBRCxBQUVFO2lCQUFTLEtBRlgsQUFFZ0I7O29CQUZoQjtzQkFIRixBQUdFLEFBSUE7QUFKQTtBQUNFLDBCQUdGLEFBQUM7ZUFBRCxBQUVFO2lCQUFTLG1CQUFBO2lCQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsU0FBakIsQUFBTSxBQUFvQjtBQUZyQzs7b0JBQUE7c0JBUEYsQUFPRSxBQUlDO0FBSkQ7QUFDRSxlQUdELEFBQUssTUFBTCxBQUFXLHlDQUNWLEFBQUMsMENBQWUsU0FBUyxLQUF6QixBQUE4QjtvQkFBOUI7c0JBWkosQUFZSTtBQUFBO09BQUE7aUJBWko7YUFERixBQUNFLEFBd0NIO0FBeENHOzs7OztBQTdCWSxBLEFBd0VsQjs7MkNBQXVCLGlCQUFTLEFBQzlCOztXQUNTLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFEYixBQUNFLEFBQWUsQUFDdEI7a0JBQWMsTUFBQSxBQUFNLEtBQU4sQUFBVyxJQUYzQixBQUFPLEFBRVMsQUFBZSxBQUVoQztBQUpRLEFBQ0w7QUFGVyxDQUFBLEVBQWYsQUFBZSxBQUtaIiwiZmlsZSI6Ildpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9