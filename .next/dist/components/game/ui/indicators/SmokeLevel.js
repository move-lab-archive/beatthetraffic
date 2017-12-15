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

var _GameStateManagement = require('../../../../statemanagement/app/GameStateManagement');

var _SoundsManager = require('../../../../statemanagement/app/SoundsManager');

var _SoundsManager2 = _interopRequireDefault(_SoundsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/indicators/SmokeLevel.js';


var SmokeLevel = function (_PureComponent) {
  (0, _inherits3.default)(SmokeLevel, _PureComponent);

  function SmokeLevel() {
    (0, _classCallCheck3.default)(this, SmokeLevel);

    return (0, _possibleConstructorReturn3.default)(this, (SmokeLevel.__proto__ || (0, _getPrototypeOf2.default)(SmokeLevel)).apply(this, arguments));
  }

  (0, _createClass3.default)(SmokeLevel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextSmokePercentage = (0, _GameStateManagement.getSmokeLevel)(nextProps.nbMissed, nextProps.maxMissed);
      var currentSmokePercentage = this.props.currentSmokeLevel;

      // Only tweak sounds if game is playing
      if (!this.props.isGamePlaying) {
        // console.log("Game not playing, don't tweak sounds")
        return;
      }

      /* =======
        Speed up sound logic (when smoke comes up)
      ======= */

      if (nextSmokePercentage >= 50 && currentSmokePercentage < 50) {
        // Speed up sound when smoke is superior to 50% for the first time
        // console.log('Speed up sound')
        // todo transition ?
        _SoundsManager2.default.changePlaybackRate('main_level' + this.props.currentLevel, 1.2);
      }

      if (nextSmokePercentage >= 80 && currentSmokePercentage < 80) {
        // Trigger alert playing when smoke is superior to 80% for the first time
        // console.log('Play alert sound')
        _SoundsManager2.default.playSound('transition-normal-alert');
        _SoundsManager2.default.playSound('alert');
      }

      /* =======
        Slow down sound logic (when lowering the smoke bar)
      ======= */

      if (nextSmokePercentage < 50 && currentSmokePercentage >= 50) {
        // Slow down sound
        // console.log('Slow down sound')
        _SoundsManager2.default.changePlaybackRate('main_level' + this.props.currentLevel, 1);
      }

      if (nextSmokePercentage < 80 && currentSmokePercentage >= 80) {
        // Recovering from alert
        // console.log('Recovering from alert sound')
        _SoundsManager2.default.playSound('transition-alert-normal');
        _SoundsManager2.default.playSound('main_level' + this.props.currentLevel, 1.2);
      }
    }
  }, {
    key: 'getFillColor',
    value: function getFillColor() {
      var smokePercentage = this.props.currentSmokeLevel;
      var smokeFillColor = void 0;

      if (smokePercentage < 50) {
        smokeFillColor = '#FFFF3B';
      } else if (smokePercentage < 80) {
        smokeFillColor = '#FF9E00';
      } else {
        smokeFillColor = '#FF0000';
      }

      return smokeFillColor;
    }
  }, {
    key: 'render',
    value: function render() {
      var smokePercentage = this.props.currentSmokeLevel;

      return _react2.default.createElement('svg', {
        viewBox: '0 0 72 25',
        xmlns: 'http://www.w3.org/2000/svg',
        className: 'jsx-821280800' + ' ' + ('smoke-bar ' + (smokePercentage >= 80 ? 'smoke-bar-alarm-anim' : '')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('g', { id: 'Page-1', fill: 'none', fillRule: 'evenodd', className: 'jsx-821280800',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('path', {
        d: 'M62 0v8.6L72 0v25H31V9.2l10.3-9V9l10.3-9-.3 9L62 0zM20.6 9L31 0v25H0V9.2l10.3-9V9l10.3-9v9z',
        id: 'bg',
        fill: '#262626',
        className: 'jsx-821280800',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement('path', {
        d: 'M62 0v8.6L72 0v25H31V9.2l10.3-9V9l10.3-9-.3 9L62 0zM20.6 9L31 0v25H0V9.2l10.3-9V9l10.3-9v9z',
        id: 'progress',
        fill: this.getFillColor(),
        clipPath: 'url(#progressClip)',
        className: 'jsx-821280800',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement('defs', {
        className: 'jsx-821280800',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('clipPath', { id: 'progressClip', className: 'jsx-821280800',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('rect', {
        x: '0',
        y: '0',
        width: this.props.nbMissed * 72 / this.props.maxMissed,
        height: '25',
        className: 'jsx-821280800',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })))), _react2.default.createElement(_style2.default, {
        styleId: '821280800',
        css: '.smoke-bar.jsx-821280800{margin-top:0.1rem;width:8.5rem;height:auto;}.smoke-bar-alarm-anim.jsx-821280800{-webkit-animation-name:bounce-jsx-821280800;animation-name:bounce-jsx-821280800;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}@-webkit-keyframes bounce-jsx-821280800{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}20%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}80%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes bounce-jsx-821280800{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}20%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}80%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbmRpY2F0b3JzL1Ntb2tlTGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0hvQixBQUcrQixBQU1JLEFBT0QsQUFJRyxBQUlBLEFBSUgsa0JBeEJSLGFBQ0QsWUFDZCwwQkFXRSxBQVlBLFNBUkEsQUFJQSxFQWZ3Qix3REFDVyw4RUFDckMiLCJmaWxlIjoiY29tcG9uZW50cy9nYW1lL3VpL2luZGljYXRvcnMvU21va2VMZXZlbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IGdldFNtb2tlTGV2ZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZW1hbmFnZW1lbnQvYXBwL0dhbWVTdGF0ZU1hbmFnZW1lbnQnXG5cbmltcG9ydCBTb3VuZHNNYW5hZ2VyIGZyb20gJy4uLy4uLy4uLy4uL3N0YXRlbWFuYWdlbWVudC9hcHAvU291bmRzTWFuYWdlcidcblxuY2xhc3MgU21va2VMZXZlbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBuZXh0U21va2VQZXJjZW50YWdlID0gZ2V0U21va2VMZXZlbChcbiAgICAgIG5leHRQcm9wcy5uYk1pc3NlZCxcbiAgICAgIG5leHRQcm9wcy5tYXhNaXNzZWRcbiAgICApXG4gICAgY29uc3QgY3VycmVudFNtb2tlUGVyY2VudGFnZSA9IHRoaXMucHJvcHMuY3VycmVudFNtb2tlTGV2ZWxcblxuICAgIC8vIE9ubHkgdHdlYWsgc291bmRzIGlmIGdhbWUgaXMgcGxheWluZ1xuICAgIGlmICghdGhpcy5wcm9wcy5pc0dhbWVQbGF5aW5nKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkdhbWUgbm90IHBsYXlpbmcsIGRvbid0IHR3ZWFrIHNvdW5kc1wiKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLyogPT09PT09PVxuICAgICAgU3BlZWQgdXAgc291bmQgbG9naWMgKHdoZW4gc21va2UgY29tZXMgdXApXG4gICAgPT09PT09PSAqL1xuXG4gICAgaWYgKG5leHRTbW9rZVBlcmNlbnRhZ2UgPj0gNTAgJiYgY3VycmVudFNtb2tlUGVyY2VudGFnZSA8IDUwKSB7XG4gICAgICAvLyBTcGVlZCB1cCBzb3VuZCB3aGVuIHNtb2tlIGlzIHN1cGVyaW9yIHRvIDUwJSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdTcGVlZCB1cCBzb3VuZCcpXG4gICAgICAvLyB0b2RvIHRyYW5zaXRpb24gP1xuICAgICAgU291bmRzTWFuYWdlci5jaGFuZ2VQbGF5YmFja1JhdGUoXG4gICAgICAgIGBtYWluX2xldmVsJHt0aGlzLnByb3BzLmN1cnJlbnRMZXZlbH1gLFxuICAgICAgICAxLjJcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAobmV4dFNtb2tlUGVyY2VudGFnZSA+PSA4MCAmJiBjdXJyZW50U21va2VQZXJjZW50YWdlIDwgODApIHtcbiAgICAgIC8vIFRyaWdnZXIgYWxlcnQgcGxheWluZyB3aGVuIHNtb2tlIGlzIHN1cGVyaW9yIHRvIDgwJSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdQbGF5IGFsZXJ0IHNvdW5kJylcbiAgICAgIFNvdW5kc01hbmFnZXIucGxheVNvdW5kKCd0cmFuc2l0aW9uLW5vcm1hbC1hbGVydCcpXG4gICAgICBTb3VuZHNNYW5hZ2VyLnBsYXlTb3VuZCgnYWxlcnQnKVxuICAgIH1cblxuICAgIC8qID09PT09PT1cbiAgICAgIFNsb3cgZG93biBzb3VuZCBsb2dpYyAod2hlbiBsb3dlcmluZyB0aGUgc21va2UgYmFyKVxuICAgID09PT09PT0gKi9cblxuICAgIGlmIChuZXh0U21va2VQZXJjZW50YWdlIDwgNTAgJiYgY3VycmVudFNtb2tlUGVyY2VudGFnZSA+PSA1MCkge1xuICAgICAgLy8gU2xvdyBkb3duIHNvdW5kXG4gICAgICAvLyBjb25zb2xlLmxvZygnU2xvdyBkb3duIHNvdW5kJylcbiAgICAgIFNvdW5kc01hbmFnZXIuY2hhbmdlUGxheWJhY2tSYXRlKFxuICAgICAgICBgbWFpbl9sZXZlbCR7dGhpcy5wcm9wcy5jdXJyZW50TGV2ZWx9YCxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChuZXh0U21va2VQZXJjZW50YWdlIDwgODAgJiYgY3VycmVudFNtb2tlUGVyY2VudGFnZSA+PSA4MCkge1xuICAgICAgLy8gUmVjb3ZlcmluZyBmcm9tIGFsZXJ0XG4gICAgICAvLyBjb25zb2xlLmxvZygnUmVjb3ZlcmluZyBmcm9tIGFsZXJ0IHNvdW5kJylcbiAgICAgIFNvdW5kc01hbmFnZXIucGxheVNvdW5kKCd0cmFuc2l0aW9uLWFsZXJ0LW5vcm1hbCcpXG4gICAgICBTb3VuZHNNYW5hZ2VyLnBsYXlTb3VuZChgbWFpbl9sZXZlbCR7dGhpcy5wcm9wcy5jdXJyZW50TGV2ZWx9YCwgMS4yKVxuICAgIH1cbiAgfVxuXG4gIGdldEZpbGxDb2xvciAoKSB7XG4gICAgY29uc3Qgc21va2VQZXJjZW50YWdlID0gdGhpcy5wcm9wcy5jdXJyZW50U21va2VMZXZlbFxuICAgIGxldCBzbW9rZUZpbGxDb2xvclxuXG4gICAgaWYgKHNtb2tlUGVyY2VudGFnZSA8IDUwKSB7XG4gICAgICBzbW9rZUZpbGxDb2xvciA9ICcjRkZGRjNCJ1xuICAgIH0gZWxzZSBpZiAoc21va2VQZXJjZW50YWdlIDwgODApIHtcbiAgICAgIHNtb2tlRmlsbENvbG9yID0gJyNGRjlFMDAnXG4gICAgfSBlbHNlIHtcbiAgICAgIHNtb2tlRmlsbENvbG9yID0gJyNGRjAwMDAnXG4gICAgfVxuXG4gICAgcmV0dXJuIHNtb2tlRmlsbENvbG9yXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHNtb2tlUGVyY2VudGFnZSA9IHRoaXMucHJvcHMuY3VycmVudFNtb2tlTGV2ZWxcblxuICAgIHJldHVybiAoXG4gICAgICA8c3ZnXG4gICAgICAgIHZpZXdCb3g9JzAgMCA3MiAyNSdcbiAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICBjbGFzc05hbWU9e2BzbW9rZS1iYXIgJHtcbiAgICAgICAgICBzbW9rZVBlcmNlbnRhZ2UgPj0gODAgPyAnc21va2UtYmFyLWFsYXJtLWFuaW0nIDogJydcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxnIGlkPSdQYWdlLTEnIGZpbGw9J25vbmUnIGZpbGxSdWxlPSdldmVub2RkJz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD0nTTYyIDB2OC42TDcyIDB2MjVIMzFWOS4ybDEwLjMtOVY5bDEwLjMtOS0uMyA5TDYyIDB6TTIwLjYgOUwzMSAwdjI1SDBWOS4ybDEwLjMtOVY5bDEwLjMtOXY5eidcbiAgICAgICAgICAgIGlkPSdiZydcbiAgICAgICAgICAgIGZpbGw9JyMyNjI2MjYnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD0nTTYyIDB2OC42TDcyIDB2MjVIMzFWOS4ybDEwLjMtOVY5bDEwLjMtOS0uMyA5TDYyIDB6TTIwLjYgOUwzMSAwdjI1SDBWOS4ybDEwLjMtOVY5bDEwLjMtOXY5eidcbiAgICAgICAgICAgIGlkPSdwcm9ncmVzcydcbiAgICAgICAgICAgIGZpbGw9e3RoaXMuZ2V0RmlsbENvbG9yKCl9XG4gICAgICAgICAgICBjbGlwUGF0aD0ndXJsKCNwcm9ncmVzc0NsaXApJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9J3Byb2dyZXNzQ2xpcCc+XG4gICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgeD0nMCdcbiAgICAgICAgICAgICAgICB5PScwJ1xuICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLm5iTWlzc2VkICogNzIgLyB0aGlzLnByb3BzLm1heE1pc3NlZH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzI1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zbW9rZS1iYXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4xcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDguNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc21va2UtYmFyLWFsYXJtLWFuaW0ge1xuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgODAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3N2Zz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2NvcmU6IHN0YXRlLmdhbWUuZ2V0KCdzY29yZScpLFxuICAgIG5iTWlzc2VkOiBzdGF0ZS5nYW1lLmdldCgnbmJJdGVtc01pc3NlZCcpLFxuICAgIG1heE1pc3NlZDogc3RhdGUuZ2FtZS5nZXQoJ21heE1pc3NlZCcpLFxuICAgIGN1cnJlbnRMZXZlbDogc3RhdGUuZ2FtZS5nZXQoJ2N1cnJlbnRMZXZlbCcpLFxuICAgIGN1cnJlbnRTbW9rZUxldmVsOiBnZXRTbW9rZUxldmVsKFxuICAgICAgc3RhdGUuZ2FtZS5nZXQoJ25iSXRlbXNNaXNzZWQnKSxcbiAgICAgIHN0YXRlLmdhbWUuZ2V0KCdtYXhNaXNzZWQnKVxuICAgICksXG4gICAgaXNHYW1lUGxheWluZzogc3RhdGUuZ2FtZS5nZXQoJ2lzUGxheWluZycpXG4gIH1cbn0pKFNtb2tlTGV2ZWwpXG4iXX0= */\n/*@ sourceURL=components/game/ui/indicators/SmokeLevel.js */'
      }));
    }
  }]);

  return SmokeLevel;
}(_react.PureComponent);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    score: state.game.get('score'),
    nbMissed: state.game.get('nbItemsMissed'),
    maxMissed: state.game.get('maxMissed'),
    currentLevel: state.game.get('currentLevel'),
    currentSmokeLevel: (0, _GameStateManagement.getSmokeLevel)(state.game.get('nbItemsMissed'), state.game.get('maxMissed')),
    isGamePlaying: state.game.get('isPlaying')
  };
})(SmokeLevel);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbmRpY2F0b3JzL1Ntb2tlTGV2ZWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsImdldFNtb2tlTGV2ZWwiLCJTb3VuZHNNYW5hZ2VyIiwiU21va2VMZXZlbCIsIm5leHRQcm9wcyIsIm5leHRTbW9rZVBlcmNlbnRhZ2UiLCJuYk1pc3NlZCIsIm1heE1pc3NlZCIsImN1cnJlbnRTbW9rZVBlcmNlbnRhZ2UiLCJwcm9wcyIsImN1cnJlbnRTbW9rZUxldmVsIiwiaXNHYW1lUGxheWluZyIsImNoYW5nZVBsYXliYWNrUmF0ZSIsImN1cnJlbnRMZXZlbCIsInBsYXlTb3VuZCIsInNtb2tlUGVyY2VudGFnZSIsInNtb2tlRmlsbENvbG9yIiwiZ2V0RmlsbENvbG9yIiwic2NvcmUiLCJzdGF0ZSIsImdhbWUiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUVULEFBQVMsQUFBcUI7O0FBRTlCLEFBQU8sQUFBbUI7Ozs7Ozs7OztJLEFBRXBCOzs7Ozs7Ozs7Ozs4QyxBQUN1QixXQUFXLEFBQ3BDO1VBQU0sc0JBQXNCLHdDQUMxQixVQUQwQixBQUNoQixVQUNWLFVBRkYsQUFBNEIsQUFFaEIsQUFFWjtVQUFNLHlCQUF5QixLQUFBLEFBQUssTUFBcEMsQUFBMEMsQUFFMUM7O0FBQ0E7VUFBSSxDQUFDLEtBQUEsQUFBSyxNQUFWLEFBQWdCLGVBQWUsQUFDN0I7QUFDQTtBQUNEO0FBRUQ7O0FBSUE7Ozs7VUFBSSx1QkFBQSxBQUF1QixNQUFNLHlCQUFqQyxBQUEwRCxJQUFJLEFBQzVEO0FBQ0E7QUFDQTtBQUNBO2dDQUFBLEFBQWMsa0NBQ0MsS0FBQSxBQUFLLE1BRHBCLEFBQzBCLGNBRDFCLEFBRUUsQUFFSDtBQUVEOztVQUFJLHVCQUFBLEFBQXVCLE1BQU0seUJBQWpDLEFBQTBELElBQUksQUFDNUQ7QUFDQTtBQUNBO2dDQUFBLEFBQWMsVUFBZCxBQUF3QixBQUN4QjtnQ0FBQSxBQUFjLFVBQWQsQUFBd0IsQUFDekI7QUFFRDs7QUFJQTs7OztVQUFJLHNCQUFBLEFBQXNCLE1BQU0sMEJBQWhDLEFBQTBELElBQUksQUFDNUQ7QUFDQTtBQUNBO2dDQUFBLEFBQWMsa0NBQ0MsS0FBQSxBQUFLLE1BRHBCLEFBQzBCLGNBRDFCLEFBRUUsQUFFSDtBQUVEOztVQUFJLHNCQUFBLEFBQXNCLE1BQU0sMEJBQWhDLEFBQTBELElBQUksQUFDNUQ7QUFDQTtBQUNBO2dDQUFBLEFBQWMsVUFBZCxBQUF3QixBQUN4QjtnQ0FBQSxBQUFjLHlCQUF1QixLQUFBLEFBQUssTUFBMUMsQUFBZ0QsY0FBaEQsQUFBZ0UsQUFDakU7QUFDRjs7OzttQ0FFZSxBQUNkO1VBQU0sa0JBQWtCLEtBQUEsQUFBSyxNQUE3QixBQUFtQyxBQUNuQztVQUFJLHNCQUFKLEFBRUE7O1VBQUksa0JBQUosQUFBc0IsSUFBSSxBQUN4Qjt5QkFBQSxBQUFpQixBQUNsQjtBQUZELGlCQUVXLGtCQUFKLEFBQXNCLElBQUksQUFDL0I7eUJBQUEsQUFBaUIsQUFDbEI7QUFGTSxPQUFBLE1BRUEsQUFDTDt5QkFBQSxBQUFpQixBQUNsQjtBQUVEOzthQUFBLEFBQU8sQUFDUjs7Ozs2QkFFUyxBQUNSO1VBQU0sa0JBQWtCLEtBQUEsQUFBSyxNQUE3QixBQUFtQyxBQUVuQzs7NkJBQ0UsY0FBQTtpQkFBQSxBQUNVLEFBQ1I7ZUFGRixBQUVROzREQUVKLG1CQUFBLEFBQW1CLEtBQW5CLEFBQXdCLHlCQUo1QixBQUlxRDs7b0JBSnJEO3NCQUFBLEFBT0U7QUFQRjtBQUNFLE9BREYsa0JBT0UsY0FBQSxPQUFHLElBQUgsQUFBTSxVQUFTLE1BQWYsQUFBb0IsUUFBTyxVQUEzQixBQUFvQyxzQkFBcEM7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjs7V0FDRSxBQUNJLEFBQ0Y7WUFGRixBQUVLLEFBQ0g7Y0FIRixBQUdPO21CQUhQOztvQkFBQTtzQkFERixBQUNFLEFBS0E7QUFMQTtBQUNFO1dBSUYsQUFDSSxBQUNGO1lBRkYsQUFFSyxBQUNIO2NBQU0sS0FIUixBQUdRLEFBQUssQUFDWDtrQkFKRixBQUlXO21CQUpYOztvQkFBQTtzQkFORixBQU1FLEFBTUE7QUFOQTtBQUNFLDBCQUtGLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsY0FBVSxJQUFWLEFBQWEsMkJBQWI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjs7V0FDRSxBQUNJLEFBQ0Y7V0FGRixBQUVJLEFBQ0Y7ZUFBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsS0FBSyxLQUFBLEFBQUssTUFIekMsQUFHK0MsQUFDN0M7Z0JBSkYsQUFJUzttQkFKVDs7b0JBQUE7c0JBckJSLEFBT0UsQUFZRSxBQUNFLEFBQ0U7QUFBQTtBQUNFO2lCQXRCVjthQURGLEFBQ0UsQUErREg7QUEvREc7Ozs7O0EsQUEzRW1CLEFBNkl6Qjs7MkNBQXVCLGlCQUFTLEFBQzlCOztXQUNTLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFEYixBQUNFLEFBQWUsQUFDdEI7Y0FBVSxNQUFBLEFBQU0sS0FBTixBQUFXLElBRmhCLEFBRUssQUFBZSxBQUN6QjtlQUFXLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFIakIsQUFHTSxBQUFlLEFBQzFCO2tCQUFjLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFKcEIsQUFJUyxBQUFlLEFBQzdCO3VCQUFtQix3Q0FDakIsTUFBQSxBQUFNLEtBQU4sQUFBVyxJQURNLEFBQ2pCLEFBQWUsa0JBQ2YsTUFBQSxBQUFNLEtBQU4sQUFBVyxJQVBSLEFBS2MsQUFFakIsQUFBZSxBQUVqQjttQkFBZSxNQUFBLEFBQU0sS0FBTixBQUFXLElBVDVCLEFBQU8sQUFTVSxBQUFlLEFBRWpDO0FBWFEsQUFDTDtBQUZXLENBQUEsRUFBZixBQUFlLEFBWVoiLCJmaWxlIjoiU21va2VMZXZlbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9