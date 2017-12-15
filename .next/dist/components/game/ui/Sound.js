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

var _SettingsStateManagement = require('../../../statemanagement/app/SettingsStateManagement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/Sound.js';


var Sound = function (_Component) {
  (0, _inherits3.default)(Sound, _Component);

  function Sound(props) {
    (0, _classCallCheck3.default)(this, Sound);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Sound.__proto__ || (0, _getPrototypeOf2.default)(Sound)).call(this, props));

    _this.toggleSound = _this.toggleSound.bind(_this);

    // Init
    if (props.soundEnabled) {
      props.dispatch((0, _SettingsStateManagement.turnSoundOn)());
    } else {
      props.dispatch((0, _SettingsStateManagement.turnSoundOff)());
    }
    return _this;
  }

  (0, _createClass3.default)(Sound, [{
    key: 'toggleSound',
    value: function toggleSound() {
      if (this.props.soundEnabled) {
        this.props.dispatch((0, _SettingsStateManagement.turnSoundOff)());
      } else {
        this.props.dispatch((0, _SettingsStateManagement.turnSoundOn)());
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Prefetch sound on / off image depending on enabled / disabled
      var soundOn = new Image();
      soundOn.src = '/static/assets/icons/icon-sound-' + (this.props.soundEnabled ? 'off' : 'on') + '.svg';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        onClick: this.toggleSound,
        className: 'jsx-1928592920' + ' ' + ('audio-button ' + (this.props.soundEnabled ? 'on' : 'off')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '1928592920',
        css: '.audio-button.jsx-1928592920{position:fixed;bottom:2.7rem;right:1.9rem;z-index:5;width:4.4rem;height:4.4rem;cursor:pointer;border-radius:0.2rem;background-repeat:no-repeat;background-size:3rem 3rem;background-position:center;}.audio-button.on.jsx-1928592920{background-image:url(/static/assets/icons/icon-sound-on.svg);}.audio-button.off.jsx-1928592920{background-image:url(/static/assets/icons/icon-sound-off.svg);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9Tb3VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBRzRCLEFBYzhDLEFBSUMsZUFqQmhELGNBQ0QsYUFDSCxVQUNHLFNBV2YsQ0FJQSxHQWRnQixjQUNDLGVBQ00scUJBQ08sNEJBQ0YsMEJBQ0MsMkJBQzdCIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FtZS91aS9Tb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtcbiAgdHVyblNvdW5kT24sXG4gIHR1cm5Tb3VuZE9mZlxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZW1hbmFnZW1lbnQvYXBwL1NldHRpbmdzU3RhdGVNYW5hZ2VtZW50J1xuXG5jbGFzcyBTb3VuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy50b2dnbGVTb3VuZCA9IHRoaXMudG9nZ2xlU291bmQuYmluZCh0aGlzKVxuXG4gICAgLy8gSW5pdFxuICAgIGlmIChwcm9wcy5zb3VuZEVuYWJsZWQpIHtcbiAgICAgIHByb3BzLmRpc3BhdGNoKHR1cm5Tb3VuZE9uKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLmRpc3BhdGNoKHR1cm5Tb3VuZE9mZigpKVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNvdW5kICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zb3VuZEVuYWJsZWQpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godHVyblNvdW5kT2ZmKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godHVyblNvdW5kT24oKSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gUHJlZmV0Y2ggc291bmQgb24gLyBvZmYgaW1hZ2UgZGVwZW5kaW5nIG9uIGVuYWJsZWQgLyBkaXNhYmxlZFxuICAgIGNvbnN0IHNvdW5kT24gPSBuZXcgSW1hZ2UoKVxuICAgIHNvdW5kT24uc3JjID0gYC9zdGF0aWMvYXNzZXRzL2ljb25zL2ljb24tc291bmQtJHtcbiAgICAgIHRoaXMucHJvcHMuc291bmRFbmFibGVkID8gJ29mZicgOiAnb24nXG4gICAgfS5zdmdgXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGF1ZGlvLWJ1dHRvbiAke3RoaXMucHJvcHMuc291bmRFbmFibGVkID8gJ29uJyA6ICdvZmYnfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU291bmR9XG4gICAgICA+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXVkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMi43cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDEuOXJlbTtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICB3aWR0aDogNC40cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA0LjRyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzcmVtIDNyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmF1ZGlvLWJ1dHRvbi5vbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9hc3NldHMvaWNvbnMvaWNvbi1zb3VuZC1vbi5zdmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdWRpby1idXR0b24ub2ZmIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2Fzc2V0cy9pY29ucy9pY29uLXNvdW5kLW9mZi5zdmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHNvdW5kRW5hYmxlZDogc3RhdGUuc2V0dGluZ3MuZ2V0KCdzb3VuZEVuYWJsZWQnKVxuICB9XG59KShTb3VuZClcbiJdfQ== */\n/*@ sourceURL=components/game/ui/Sound.js */'
      }));
    }
  }]);

  return Sound;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    soundEnabled: state.settings.get('soundEnabled')
  };
})(Sound);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9Tb3VuZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJ0dXJuU291bmRPbiIsInR1cm5Tb3VuZE9mZiIsIlNvdW5kIiwicHJvcHMiLCJ0b2dnbGVTb3VuZCIsImJpbmQiLCJzb3VuZEVuYWJsZWQiLCJkaXNwYXRjaCIsInNvdW5kT24iLCJJbWFnZSIsInNyYyIsInN0YXRlIiwic2V0dGluZ3MiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUVULEFBQ0UsQUFDQSxBQUNLOzs7Ozs7O0lBRUQsQTtpQ0FDSjs7aUJBQUEsQUFBYSxPQUFPO3dDQUFBOztvSUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXBDLEFBRUE7O0FBQ0E7UUFBSSxNQUFKLEFBQVUsY0FBYyxBQUN0QjtZQUFBLEFBQU0sU0FBTixBQUFlLEFBQ2hCO0FBRkQsV0FFTyxBQUNMO1lBQUEsQUFBTSxTQUFOLEFBQWUsQUFDaEI7QUFWaUI7V0FXbkI7Ozs7O2tDQUVjLEFBQ2I7VUFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLGNBQWMsQUFDM0I7YUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLEFBQ3JCO0FBRkQsYUFFTyxBQUNMO2FBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNyQjtBQUNGOzs7O3dDQUVvQixBQUNuQjtBQUNBO1VBQU0sVUFBVSxJQUFoQixBQUFnQixBQUFJLEFBQ3BCO2NBQUEsQUFBUSw0Q0FDTixLQUFBLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsUUFENUIsQUFDb0MsUUFFckM7Ozs7NkJBRVMsQUFDUjs2QkFDRSxjQUFBO2lCQUVXLEtBRlgsQUFFZ0I7Z0VBRGEsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLE9BRHZELEFBQzhEOztvQkFEOUQ7c0JBQUE7QUFBQTtBQUVFLE9BRkY7aUJBQUE7YUFERixBQUNFLEFBNkJIO0FBN0JHOzs7OztBQWhDYyxBLEFBZ0VwQjs7MkNBQXVCLGlCQUFTLEFBQzlCOztrQkFDZ0IsTUFBQSxBQUFNLFNBQU4sQUFBZSxJQUQvQixBQUFPLEFBQ1MsQUFBbUIsQUFFcEM7QUFIUSxBQUNMO0FBRlcsQ0FBQSxFQUFmLEFBQWUsQUFJWiIsImZpbGUiOiJTb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9