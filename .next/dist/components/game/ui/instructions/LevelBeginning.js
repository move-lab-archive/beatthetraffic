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

var _screenfull = require('screenfull');

var _screenfull2 = _interopRequireDefault(_screenfull);

var _Button = require('../../../shared/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Loading = require('../../../shared/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _AskLandscapeAnimation = require('../../../shared/AskLandscapeAnimation');

var _AskLandscapeAnimation2 = _interopRequireDefault(_AskLandscapeAnimation);

var _GameStateManagement = require('../../../../statemanagement/app/GameStateManagement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/instructions/LevelBeginning.js';


var LevelBeginning = function (_Component) {
  (0, _inherits3.default)(LevelBeginning, _Component);

  function LevelBeginning(props) {
    (0, _classCallCheck3.default)(this, LevelBeginning);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LevelBeginning.__proto__ || (0, _getPrototypeOf2.default)(LevelBeginning)).call(this, props));

    _this.state = {
      timerAutoStart: 5,
      displayCongratsMsg: props.currentLevel >= 2
    };
    return _this;
  }

  (0, _createClass3.default)(LevelBeginning, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      // Auto play on level loading finished
      if (this.props.isGameReadyToPlay === false && newProps.isGameReadyToPlay === true && this.props.introAnimPlayed === true) {
        // console.log('Start countdown 5s to start level')
        this.startCountDown();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Auto play on reset from gameover
      if (this.props.isGameReadyToPlay === true && this.props.gameFailed === false && this.props.introAnimPlayed === true) {
        // console.log('Start countdown 5s to start level')
        this.startCountDown();
      }

      if (this.state.displayCongratsMsg) {
        // Hide congrats msg after a few seconds
        setTimeout(function () {
          _this2.setState({
            displayCongratsMsg: false
          });
        }, 3000);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.refSetIntervalAutoStart) {
        clearInterval(this.refSetIntervalAutoStart);
      }
    }
  }, {
    key: 'startCountDown',
    value: function startCountDown() {
      var _this3 = this;

      this.refSetIntervalAutoStart = setInterval(function () {
        if (_this3.state.timerAutoStart - 1 === 0) {
          _this3.props.dispatch((0, _GameStateManagement.startLevel)());
          clearInterval(_this3.refSetIntervalAutoStart);
        } else {
          _this3.setState({
            timerAutoStart: _this3.state.timerAutoStart - 1
          });
        }
      }, 1000);
    }
  }, {
    key: 'manualStart',
    value: function manualStart() {
      this.props.dispatch((0, _GameStateManagement.startLevel)());
      clearInterval(this.refSetIntervalAutoStart);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-1198606817' + ' ' + 'instructions-level-beginning',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, this.state.displayCongratsMsg && _react2.default.createElement('div', {
        className: 'jsx-1198606817' + ' ' + 'level-title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'CONGRATS'), !this.state.displayCongratsMsg && _react2.default.createElement('div', {
        className: 'jsx-1198606817' + ' ' + 'level-title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'LEVEL ', this.props.currentLevel), !this.state.displayCongratsMsg && this.props.currentLevel >= 2 && _react2.default.createElement('div', {
        className: 'jsx-1198606817' + ' ' + 'level-help',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, this.props.deviceOrientation === 'portrait' && _react2.default.createElement('div', {
        className: 'jsx-1198606817',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_AskLandscapeAnimation2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement('p', {
        className: 'jsx-1198606817',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'TIP: This level is easier in landscape')), this.props.deviceOrientation !== 'portrait' && this.props.isFullscreenAvailable && !this.props.isFullscreen && _react2.default.createElement('div', {
        className: 'jsx-1198606817',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-1198606817',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'TIP: This level is easier in fullscreen'), _react2.default.createElement(_Button2.default, {
        onClick: function onClick() {
          return _screenfull2.default.request();
        },
        title: 'Enter Fullscreen',
        transparent: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }))), this.props.isGameReadyToPlay && _react2.default.createElement(_Button2.default, {
        onClick: function onClick() {
          return _this4.manualStart();
        },
        title: 'Starting in ' + this.state.timerAutoStart + 's',
        large: true,
        transparent: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), !this.props.isGameReadyToPlay && _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1198606817',
        css: '.instructions-level-beginning.jsx-1198606817{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:white;}.level-title.jsx-1198606817{font-size:8rem;}.level-help.jsx-1198606817{text-align:center;margin-bottom:5px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvTGV2ZWxCZWdpbm5pbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUhvQixBQUcwQixBQVFFLEFBSUcsZUFIcEIsR0FJb0Isa0JBQ3BCLHNDQWJTLGlDQUNnQixtR0FDSiw2RkFDRyw4RUFDVixZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvTGV2ZWxCZWdpbm5pbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc2NyZWVuZnVsbCBmcm9tICdzY3JlZW5mdWxsJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NoYXJlZC9CdXR0b24nXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi8uLi9zaGFyZWQvTG9hZGluZydcbmltcG9ydCBBc2tMYW5kc2NhcGVBbmltYXRpb24gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL0Fza0xhbmRzY2FwZUFuaW1hdGlvbidcblxuaW1wb3J0IHsgc3RhcnRMZXZlbCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0YXRlbWFuYWdlbWVudC9hcHAvR2FtZVN0YXRlTWFuYWdlbWVudCdcblxuY2xhc3MgTGV2ZWxCZWdpbm5pbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZXJBdXRvU3RhcnQ6IDUsXG4gICAgICBkaXNwbGF5Q29uZ3JhdHNNc2c6IHByb3BzLmN1cnJlbnRMZXZlbCA+PSAyXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICAvLyBBdXRvIHBsYXkgb24gbGV2ZWwgbG9hZGluZyBmaW5pc2hlZFxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMuaXNHYW1lUmVhZHlUb1BsYXkgPT09IGZhbHNlICYmXG4gICAgICBuZXdQcm9wcy5pc0dhbWVSZWFkeVRvUGxheSA9PT0gdHJ1ZSAmJlxuICAgICAgdGhpcy5wcm9wcy5pbnRyb0FuaW1QbGF5ZWQgPT09IHRydWVcbiAgICApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGFydCBjb3VudGRvd24gNXMgdG8gc3RhcnQgbGV2ZWwnKVxuICAgICAgdGhpcy5zdGFydENvdW50RG93bigpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIC8vIEF1dG8gcGxheSBvbiByZXNldCBmcm9tIGdhbWVvdmVyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5pc0dhbWVSZWFkeVRvUGxheSA9PT0gdHJ1ZSAmJlxuICAgICAgdGhpcy5wcm9wcy5nYW1lRmFpbGVkID09PSBmYWxzZSAmJlxuICAgICAgdGhpcy5wcm9wcy5pbnRyb0FuaW1QbGF5ZWQgPT09IHRydWVcbiAgICApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGFydCBjb3VudGRvd24gNXMgdG8gc3RhcnQgbGV2ZWwnKVxuICAgICAgdGhpcy5zdGFydENvdW50RG93bigpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzcGxheUNvbmdyYXRzTXNnKSB7XG4gICAgICAvLyBIaWRlIGNvbmdyYXRzIG1zZyBhZnRlciBhIGZldyBzZWNvbmRzXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheUNvbmdyYXRzTXNnOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgaWYgKHRoaXMucmVmU2V0SW50ZXJ2YWxBdXRvU3RhcnQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWZTZXRJbnRlcnZhbEF1dG9TdGFydClcbiAgICB9XG4gIH1cblxuICBzdGFydENvdW50RG93biAoKSB7XG4gICAgdGhpcy5yZWZTZXRJbnRlcnZhbEF1dG9TdGFydCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnRpbWVyQXV0b1N0YXJ0IC0gMSA9PT0gMCkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHN0YXJ0TGV2ZWwoKSlcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJlZlNldEludGVydmFsQXV0b1N0YXJ0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGltZXJBdXRvU3RhcnQ6IHRoaXMuc3RhdGUudGltZXJBdXRvU3RhcnQgLSAxXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIG1hbnVhbFN0YXJ0ICgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHN0YXJ0TGV2ZWwoKSlcbiAgICBjbGVhckludGVydmFsKHRoaXMucmVmU2V0SW50ZXJ2YWxBdXRvU3RhcnQpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naW5zdHJ1Y3Rpb25zLWxldmVsLWJlZ2lubmluZyc+XG4gICAgICAgIHsvKiBTZWUgaW4gY29tcG9uZW50RGlkTW91bnQgdGhlIHRpbWluZyBmb3IgdGhlIG1zZyAqL31cbiAgICAgICAgey8qIE5PVEUgZm9yIEBtbW1tICwgd2hlbiB5b3Ugd2lsbCBzdHlsZSB0aGF0IHBhcnQsIHlvdSBjYW4gaGF2ZSBhIGxvb2sgaW4gVmlkZW8uanMgbGluZSAxNjQg8J+YiSAqL31cbiAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheUNvbmdyYXRzTXNnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGV2ZWwtdGl0bGUnPkNPTkdSQVRTPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHshdGhpcy5zdGF0ZS5kaXNwbGF5Q29uZ3JhdHNNc2cgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZXZlbC10aXRsZSc+TEVWRUwge3RoaXMucHJvcHMuY3VycmVudExldmVsfTwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7IXRoaXMuc3RhdGUuZGlzcGxheUNvbmdyYXRzTXNnICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50TGV2ZWwgPj0gMiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGV2ZWwtaGVscCc+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRldmljZU9yaWVudGF0aW9uID09PSAncG9ydHJhaXQnICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEFza0xhbmRzY2FwZUFuaW1hdGlvbiAvPlxuICAgICAgICAgICAgICAgICAgPHA+VElQOiBUaGlzIGxldmVsIGlzIGVhc2llciBpbiBsYW5kc2NhcGU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRldmljZU9yaWVudGF0aW9uICE9PSAncG9ydHJhaXQnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0Z1bGxzY3JlZW5BdmFpbGFibGUgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5pc0Z1bGxzY3JlZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VElQOiBUaGlzIGxldmVsIGlzIGVhc2llciBpbiBmdWxsc2NyZWVuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2NyZWVuZnVsbC5yZXF1ZXN0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0VudGVyIEZ1bGxzY3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICB7dGhpcy5wcm9wcy5pc0dhbWVSZWFkeVRvUGxheSAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5tYW51YWxTdGFydCgpfVxuICAgICAgICAgICAgdGl0bGU9e2BTdGFydGluZyBpbiAke3RoaXMuc3RhdGUudGltZXJBdXRvU3RhcnR9c2B9XG4gICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgdHJhbnNwYXJlbnRcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IXRoaXMucHJvcHMuaXNHYW1lUmVhZHlUb1BsYXkgJiYgPExvYWRpbmcgLz59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW5zdHJ1Y3Rpb25zLWxldmVsLWJlZ2lubmluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZXZlbC10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxldmVsLWhlbHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4ge1xuICBjb25zdCBpc0dhbWVSZWFkeVRvUGxheSA9XG4gICAgc3RhdGUub2JqZWN0VHJhY2tlci5nZXQoJ2ZldGNoZWQnKSAmJiBzdGF0ZS52aWRlby5nZXQoJ2lzUmVhZHlUb1BsYXknKVxuXG4gIHJldHVybiB7XG4gICAgaXNHYW1lUmVhZHlUb1BsYXksXG4gICAgZGV2aWNlT3JpZW50YXRpb246IHN0YXRlLnZpZXdwb3J0LmdldCgnZGV2aWNlT3JpZW50YXRpb24nKSxcbiAgICBpc0Z1bGxzY3JlZW5BdmFpbGFibGU6IHN0YXRlLnZpZXdwb3J0LmdldCgnaXNGdWxsc2NyZWVuQXZhaWxhYmxlJyksXG4gICAgaXNGdWxsc2NyZWVuOiBzdGF0ZS52aWV3cG9ydC5nZXQoJ2lzRnVsbHNjcmVlbicpLFxuICAgIGN1cnJlbnRMZXZlbDogc3RhdGUuZ2FtZS5nZXQoJ2N1cnJlbnRMZXZlbCcpLFxuICAgIGludHJvQW5pbVBsYXllZDogc3RhdGUuYXBwLmdldCgnaW50cm9BbmltUGxheWVkJyksXG4gICAgZ2FtZUZhaWxlZDogc3RhdGUuZ2FtZS5nZXQoJ2ZhaWxlZCcpXG4gIH1cbn0pKExldmVsQmVnaW5uaW5nKVxuIl19 */\n/*@ sourceURL=components/game/ui/instructions/LevelBeginning.js */'
      }));
    }
  }]);

  return LevelBeginning;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  var isGameReadyToPlay = state.objectTracker.get('fetched') && state.video.get('isReadyToPlay');

  return {
    isGameReadyToPlay: isGameReadyToPlay,
    deviceOrientation: state.viewport.get('deviceOrientation'),
    isFullscreenAvailable: state.viewport.get('isFullscreenAvailable'),
    isFullscreen: state.viewport.get('isFullscreen'),
    currentLevel: state.game.get('currentLevel'),
    introAnimPlayed: state.app.get('introAnimPlayed'),
    gameFailed: state.game.get('failed')
  };
})(LevelBeginning);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbnN0cnVjdGlvbnMvTGV2ZWxCZWdpbm5pbmcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Iiwic2NyZWVuZnVsbCIsIkJ1dHRvbiIsIkxvYWRpbmciLCJBc2tMYW5kc2NhcGVBbmltYXRpb24iLCJzdGFydExldmVsIiwiTGV2ZWxCZWdpbm5pbmciLCJwcm9wcyIsInN0YXRlIiwidGltZXJBdXRvU3RhcnQiLCJkaXNwbGF5Q29uZ3JhdHNNc2ciLCJjdXJyZW50TGV2ZWwiLCJuZXdQcm9wcyIsImlzR2FtZVJlYWR5VG9QbGF5IiwiaW50cm9BbmltUGxheWVkIiwic3RhcnRDb3VudERvd24iLCJnYW1lRmFpbGVkIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwicmVmU2V0SW50ZXJ2YWxBdXRvU3RhcnQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJkaXNwYXRjaCIsImRldmljZU9yaWVudGF0aW9uIiwiaXNGdWxsc2NyZWVuQXZhaWxhYmxlIiwiaXNGdWxsc2NyZWVuIiwicmVxdWVzdCIsIm1hbnVhbFN0YXJ0Iiwib2JqZWN0VHJhY2tlciIsImdldCIsInZpZGVvIiwidmlld3BvcnQiLCJnYW1lIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQTJCOzs7O0FBRWxDLEFBQVMsQUFBa0I7Ozs7Ozs7SSxBQUVyQjswQ0FDSjs7MEJBQUEsQUFBYSxPQUFPO3dDQUFBOztzSkFBQSxBQUNaLEFBQ047O1VBQUEsQUFBSztzQkFBUSxBQUNLLEFBQ2hCOzBCQUFvQixNQUFBLEFBQU0sZ0JBSlYsQUFFbEIsQUFBYSxBQUUrQjtBQUYvQixBQUNYO1dBR0g7Ozs7OzhDQUUwQixBLFVBQVUs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LHFDQUNWLEFBQUM7aUJBQ1UsbUJBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFEdEIsQUFFRTtnQ0FBc0IsS0FBQSxBQUFLLE1BQTNCLEFBQWlDLGlCQUZuQyxBQUdFO2VBSEYsQUFJRTtxQkFKRjs7b0JBQUE7c0JBakNKLEFBaUNJLEFBT0Q7QUFQQztBQUNFLE9BREYsSUFPQSxLQUFBLEFBQUssTUFBTixBQUFZLHFDQUFxQixBQUFDOztvQkFBRDtzQkF4Q3BDLEFBd0NvQztBQUFBO0FBQUEsT0FBQTtpQkF4Q3BDO2FBREYsQUFDRSxBQTZESDtBQTdERzs7Ozs7QUFwRXVCLEFBb0k3QixBOzsyQ0FBdUIsaUJBQVMsQUFDOUI7TUFBTSxvQkFDSixNQUFBLEFBQU0sY0FBTixBQUFvQixJQUFwQixBQUF3QixjQUFjLE1BQUEsQUFBTSxNQUFOLEFBQVksSUFEcEQsQUFDd0MsQUFBZ0IsQUFFeEQ7Ozt1QkFBTyxBQUVMO3VCQUFtQixNQUFBLEFBQU0sU0FBTixBQUFlLElBRjdCLEFBRWMsQUFBbUIsQUFDdEM7MkJBQXVCLE1BQUEsQUFBTSxTQUFOLEFBQWUsSUFIakMsQUFHa0IsQUFBbUIsQUFDMUM7a0JBQWMsTUFBQSxBQUFNLFNBQU4sQUFBZSxJQUp4QixBQUlTLEFBQW1CLEFBQ2pDO2tCQUFjLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFMcEIsQUFLUyxBQUFlLEFBQzdCO3FCQUFpQixNQUFBLEFBQU0sSUFBTixBQUFVLElBTnRCLEFBTVksQUFBYyxBQUMvQjtnQkFBWSxNQUFBLEFBQU0sS0FBTixBQUFXLElBUHpCLEFBQU8sQUFPTyxBQUFlLEFBRTlCO0FBVFEsQUFDTDtBQUxXLENBQUEsRUFBZixBQUFlLEFBYVoiLCJmaWxlIjoiTGV2ZWxCZWdpbm5pbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==