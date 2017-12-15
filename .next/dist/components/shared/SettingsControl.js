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

var _SettingsStateManagement = require('../../statemanagement/app/SettingsStateManagement');

var _VideoStateManagement = require('../../statemanagement/app/VideoStateManagement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/shared/SettingsControl.js';


var DebugUI = function (_Component) {
  (0, _inherits3.default)(DebugUI, _Component);

  function DebugUI(props) {
    (0, _classCallCheck3.default)(this, DebugUI);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DebugUI.__proto__ || (0, _getPrototypeOf2.default)(DebugUI)).call(this, props));

    _this.updateSettings = _this.updateSettings.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DebugUI, [{
    key: 'updateSettings',
    value: function updateSettings(settings) {
      this.props.dispatch((0, _SettingsStateManagement.updateSettings)(settings));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-3717689475' + ' ' + 'settings-control',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, this.props.isObjectTrackerDataFetching || !this.props.isVideoReadyToPlay && _react2.default.createElement('div', {
        className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, this.props.isObjectTrackerDataFetching && _react2.default.createElement('p', {
        className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Fetching Tracker data...'), this.props.isObjectTrackerDataFetched && _react2.default.createElement('p', {
        className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'Tracking data fetched'), _react2.default.createElement('p', {
        className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Video ready: ', this.props.isVideoReadyToPlay ? 'true' : 'false')), _react2.default.createElement('label', {
        className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Show debug UI', _react2.default.createElement('input', {
        type: 'checkbox',
        defaultChecked: this.props.settings.showDebugUI,
        onChange: function onChange(e) {
          return _this2.updateSettings({ showDebugUI: e.target.checked });
        },
        className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, !this.props.isPlaying && _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.props.dispatch((0, _VideoStateManagement.playVideo)());
        }, className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Play'), this.props.isPlaying && _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.props.dispatch((0, _VideoStateManagement.pauseVideo)());
        }, className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Pause'), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.props.dispatch((0, _VideoStateManagement.resetVideo)());
        }, className: 'jsx-3717689475',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Reset')), _react2.default.createElement(_style2.default, {
        styleId: '3717689475',
        css: '.settings-control.jsx-3717689475{position:fixed;right:1rem;top:10rem;z-index:10;background-color:white;padding:1rem;border-radius:0.5rem;display:none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL1NldHRpbmdzQ29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RW9CLEFBRzRCLGVBQ0osV0FDRCxVQUNDLFdBQ1ksdUJBQ1YsYUFDUSxxQkFDUixhQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvc2hhcmVkL1NldHRpbmdzQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgdXBkYXRlU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9zdGF0ZW1hbmFnZW1lbnQvYXBwL1NldHRpbmdzU3RhdGVNYW5hZ2VtZW50J1xuXG5pbXBvcnQge1xuICBwbGF5VmlkZW8sXG4gIHBhdXNlVmlkZW8sXG4gIHJlc2V0VmlkZW9cbn0gZnJvbSAnLi4vLi4vc3RhdGVtYW5hZ2VtZW50L2FwcC9WaWRlb1N0YXRlTWFuYWdlbWVudCdcblxuY2xhc3MgRGVidWdVSSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMudXBkYXRlU2V0dGluZ3MgPSB0aGlzLnVwZGF0ZVNldHRpbmdzLmJpbmQodGhpcylcbiAgfVxuXG4gIHVwZGF0ZVNldHRpbmdzIChzZXR0aW5ncykge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU2V0dGluZ3Moc2V0dGluZ3MpKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NldHRpbmdzLWNvbnRyb2wnPlxuICAgICAgICB7dGhpcy5wcm9wcy5pc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hpbmcgfHxcbiAgICAgICAgICAoIXRoaXMucHJvcHMuaXNWaWRlb1JlYWR5VG9QbGF5ICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzT2JqZWN0VHJhY2tlckRhdGFGZXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPHA+RmV0Y2hpbmcgVHJhY2tlciBkYXRhLi4uPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hlZCAmJiAoXG4gICAgICAgICAgICAgICAgPHA+VHJhY2tpbmcgZGF0YSBmZXRjaGVkPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBWaWRlbyByZWFkeToge3RoaXMucHJvcHMuaXNWaWRlb1JlYWR5VG9QbGF5ID8gJ3RydWUnIDogJ2ZhbHNlJ31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBTaG93IGRlYnVnIFVJXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0aGlzLnByb3BzLnNldHRpbmdzLnNob3dEZWJ1Z1VJfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5ncyh7IHNob3dEZWJ1Z1VJOiBlLnRhcmdldC5jaGVja2VkIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgey8qIDxsYWJlbD5cbiAgICAgICAgRGFyayBtb2RlXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RoaXMucHJvcHMuc2V0dGluZ3MuZGFya01vZGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZVNldHRpbmdzKHsgZGFya01vZGU6IGUudGFyZ2V0LmNoZWNrZWQgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+ICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHshdGhpcy5wcm9wcy5pc1BsYXlpbmcgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRpc3BhdGNoKHBsYXlWaWRlbygpKX0+XG4gICAgICAgICAgICAgIFBsYXlcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RoaXMucHJvcHMuaXNQbGF5aW5nICYmIChcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kaXNwYXRjaChwYXVzZVZpZGVvKCkpfT5cbiAgICAgICAgICAgICAgUGF1c2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRpc3BhdGNoKHJlc2V0VmlkZW8oKSl9PlxuICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc2V0dGluZ3MtY29udHJvbCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICByaWdodDogMXJlbTtcbiAgICAgICAgICAgIHRvcDogMTByZW07XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0dGluZ3M6IHN0YXRlLnNldHRpbmdzLnRvSlMoKSxcbiAgICBpc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hlZDogc3RhdGUub2JqZWN0VHJhY2tlci5nZXQoJ2ZldGNoZWQnKSxcbiAgICBpc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hpbmc6IHN0YXRlLm9iamVjdFRyYWNrZXIuZ2V0KCdpc0ZldGNoaW5nJyksXG4gICAgaXNWaWRlb1JlYWR5VG9QbGF5OiBzdGF0ZS52aWRlby5nZXQoJ2lzUmVhZHlUb1BsYXknKSxcbiAgICBpc1BsYXlpbmc6IHN0YXRlLnZpZGVvLmdldCgnaXNQbGF5aW5nJylcbiAgfVxufSkoRGVidWdVSSlcbiJdfQ== */\n/*@ sourceURL=components/shared/SettingsControl.js */'
      }));
    }
  }]);

  return DebugUI;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    settings: state.settings.toJS(),
    isObjectTrackerDataFetched: state.objectTracker.get('fetched'),
    isObjectTrackerDataFetching: state.objectTracker.get('isFetching'),
    isVideoReadyToPlay: state.video.get('isReadyToPlay'),
    isPlaying: state.video.get('isPlaying')
  };
})(DebugUI);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL1NldHRpbmdzQ29udHJvbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJ1cGRhdGVTZXR0aW5ncyIsInBsYXlWaWRlbyIsInBhdXNlVmlkZW8iLCJyZXNldFZpZGVvIiwiRGVidWdVSSIsInByb3BzIiwiYmluZCIsInNldHRpbmdzIiwiZGlzcGF0Y2giLCJpc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hpbmciLCJpc1ZpZGVvUmVhZHlUb1BsYXkiLCJpc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hlZCIsInNob3dEZWJ1Z1VJIiwiZSIsInRhcmdldCIsImNoZWNrZWQiLCJpc1BsYXlpbmciLCJzdGF0ZSIsInRvSlMiLCJvYmplY3RUcmFja2VyIiwiZ2V0IiwidmlkZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUVULEFBQVMsQUFBc0I7O0FBRS9CLEFBQ0UsQUFDQSxBQUNBLEFBQ0s7Ozs7Ozs7SUFFRCxBO21DQUNKOzttQkFBQSxBQUFhLE9BQU87d0NBQUE7O3dJQUFBLEFBQ1osQUFDTjs7VUFBQSxBQUFLLGlCQUFpQixNQUFBLEFBQUssZUFBTCxBQUFvQixLQUZ4QixBQUVsQjtXQUNEOzs7OzttQ0FFZSxBLFVBQVUsQUFDeEI7V0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLDZDQUFwQixBQUFvQixBQUFlLEFBQ3BDOzs7OzZCQUVTO21CQUNSOzs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsT0FDRyxBQUFLLE1BQUwsQUFBVywrQkFDVCxDQUFDLEtBQUEsQUFBSyxNQUFOLEFBQVksc0NBQ1gsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxPQUNHLEFBQUssTUFBTCxBQUFXLCtDQUNWLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBRkosQUFFSSxBQUVELGtDQUFBLEFBQUssTUFBTCxBQUFXLDhDQUNWLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBTEosQUFLSSxBQUVGLDBDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNnQixzQkFBQSxBQUFLLE1BQUwsQUFBVyxxQkFBWCxBQUFnQyxTQVh4RCxBQUdNLEFBT0UsQUFDeUQsQUFJL0QsMkJBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRUU7Y0FBQSxBQUNPLEFBQ0w7d0JBQWdCLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FGN0IsQUFFc0MsQUFDcEM7a0JBQVUscUJBQUE7aUJBQ1IsT0FBQSxBQUFLLGVBQWUsRUFBRSxhQUFhLEVBQUEsQUFBRSxPQUQ3QixBQUNSLEFBQW9CLEFBQXdCO0FBSmhEO21CQUFBOztvQkFBQTtzQkFqQkosQUFlRSxBQUVFLEFBZ0JGO0FBaEJFO0FBQ0UsMkJBZUosY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsVUFDSSxLQUFBLEFBQUssTUFBTixBQUFZLDZCQUNYLGNBQUEsWUFBUSxTQUFTLG1CQUFBO2lCQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsU0FBakIsQUFBTSxBQUFvQjtBQUEzQyxzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtPQUFBLEVBRkosQUFFSSxBQUlELGNBQUEsQUFBSyxNQUFMLEFBQVcsNkJBQ1YsY0FBQSxZQUFRLFNBQVMsbUJBQUE7aUJBQU0sT0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFqQixBQUFNLEFBQW9CO0FBQTNDLHNCQUFBOztvQkFBQTtzQkFBQTtBQUFBO09BQUEsRUFQSixBQU9JLEFBSUYsMEJBQUEsY0FBQSxZQUFRLFNBQVMsbUJBQUE7aUJBQU0sT0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFqQixBQUFNLEFBQW9CO0FBQTNDLHNCQUFBOztvQkFBQTtzQkFBQTtBQUFBO1NBNUNKLEFBaUNFLEFBV0U7aUJBNUNKO2FBREYsQUFDRSxBQThESDtBQTlERzs7Ozs7QUFaZ0IsQSxBQTZFdEI7OzJDQUF1QixpQkFBUyxBQUM5Qjs7Y0FDWSxNQUFBLEFBQU0sU0FEWCxBQUNLLEFBQWUsQUFDekI7Z0NBQTRCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLElBRjNDLEFBRXVCLEFBQXdCLEFBQ3BEO2lDQUE2QixNQUFBLEFBQU0sY0FBTixBQUFvQixJQUg1QyxBQUd3QixBQUF3QixBQUNyRDt3QkFBb0IsTUFBQSxBQUFNLE1BQU4sQUFBWSxJQUozQixBQUllLEFBQWdCLEFBQ3BDO2VBQVcsTUFBQSxBQUFNLE1BQU4sQUFBWSxJQUx6QixBQUFPLEFBS00sQUFBZ0IsQUFFOUI7QUFQUSxBQUNMO0FBRlcsQ0FBQSxFQUFmLEFBQWUsQUFRWiIsImZpbGUiOiJTZXR0aW5nc0NvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==