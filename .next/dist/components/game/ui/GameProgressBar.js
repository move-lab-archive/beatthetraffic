'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trunc = require('babel-runtime/core-js/math/trunc');

var _trunc2 = _interopRequireDefault(_trunc);

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

var _gsap = require('gsap');

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _GameEngineStateManager = require('../../../statemanagement/app/GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/GameProgressBar.js';


var GameProgressBar = function (_PureComponent) {
  (0, _inherits3.default)(GameProgressBar, _PureComponent);

  function GameProgressBar(props) {
    (0, _classCallCheck3.default)(this, GameProgressBar);

    // TODO adapt if all level are not the same time
    var _this = (0, _possibleConstructorReturn3.default)(this, (GameProgressBar.__proto__ || (0, _getPrototypeOf2.default)(GameProgressBar)).call(this, props));

    _this.currentTime = 0;
    _this.progressByLevel = 1 / props.nbTotalLevel;

    _this.monitorProgress = _this.monitorProgress.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(GameProgressBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.monitorProgress();
      _gsap.TweenLite.set(this.el, { scaleX: 0 });
    }
  }, {
    key: 'monitorProgress',
    value: function monitorProgress() {
      if (_GameEngineStateManager2.default.getCurrentTime() !== this.currentTime) {
        var progressInLevel = _GameEngineStateManager2.default.getCurrentTime() / this.props.totalDuration || 0;
        var progressOffset = this.progressByLevel * (this.props.currentLevel - 1);
        var progress = progressOffset + progressInLevel * this.progressByLevel;
        _gsap.TweenLite.set(this.el, { scaleX: progress });
        this.currentTime = _GameEngineStateManager2.default.getCurrentTime();
      }
      (0, _raf2.default)(this.monitorProgress);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-3004115075' + ' ' + ('progress-bar\n      ' + (this.props.introAnimPlayed ? '' : 'hidden')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('div', {
        ref: function ref(el) {
          return _this2.el = el;
        },
        className: 'jsx-3004115075' + ' ' + ('progress-bar-content\n          ' + (this.props.introAnimPlayed ? '' : 'hidden')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-3004115075' + ' ' + 'level-2 step',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-3004115075' + ' ' + 'level-3 step',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3004115075',
        css: '.progress-bar.jsx-3004115075{position:fixed;bottom:0;left:0;right:0;height:1rem;background-color:#262626;z-index:1;will-change:transform;opacity:1;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}.level-2.jsx-3004115075{left:33.3%;}.level-3.jsx-3004115075{left:66.6%;}.step.jsx-3004115075{height:15px;width:4px;bottom:0px;position:fixed;background-color:#4EFFFF;}.hidden.jsx-3004115075{opacity:0;}.progress-bar-content.jsx-3004115075{content:\'\';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fffe4a;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9HYW1lUHJvZ3Jlc3NCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RvQixBQUc0QixBQWFKLEFBR0EsQUFHQyxBQVFGLEFBSUMsVUFIYixDQWRBLEFBR0EsQUFlb0IsQ0FaUixHQW5CRCxPQW9CRSxFQW5CSixLQStCRCxFQTlCRSxFQW1CTyxFQVlSLElBOUJLLEdBK0JELE1BWmMsR0FsQkEsRUErQmIsWUFDYSxRQWIzQixHQWxCWSxVQUNZLElBK0JELGtCQTlCWCxVQUNjLCtDQThCMUIsU0E3QkEiLCJmaWxlIjoiY29tcG9uZW50cy9nYW1lL3VpL0dhbWVQcm9ncmVzc0Jhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBUd2VlbkxpdGUgfSBmcm9tICdnc2FwJ1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnXG5cbmltcG9ydCBHYW1lRW5naW5lU3RhdGVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL3N0YXRlbWFuYWdlbWVudC9hcHAvR2FtZUVuZ2luZVN0YXRlTWFuYWdlcidcblxuY2xhc3MgR2FtZVByb2dyZXNzQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgLy8gVE9ETyBhZGFwdCBpZiBhbGwgbGV2ZWwgYXJlIG5vdCB0aGUgc2FtZSB0aW1lXG4gICAgdGhpcy5jdXJyZW50VGltZSA9IDBcbiAgICB0aGlzLnByb2dyZXNzQnlMZXZlbCA9IDEgLyBwcm9wcy5uYlRvdGFsTGV2ZWxcblxuICAgIHRoaXMubW9uaXRvclByb2dyZXNzID0gdGhpcy5tb25pdG9yUHJvZ3Jlc3MuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMubW9uaXRvclByb2dyZXNzKClcbiAgICBUd2VlbkxpdGUuc2V0KHRoaXMuZWwsIHsgc2NhbGVYOiAwIH0pXG4gIH1cblxuICBtb25pdG9yUHJvZ3Jlc3MgKCkge1xuICAgIGlmIChHYW1lRW5naW5lU3RhdGVNYW5hZ2VyLmdldEN1cnJlbnRUaW1lKCkgIT09IHRoaXMuY3VycmVudFRpbWUpIHtcbiAgICAgIGNvbnN0IHByb2dyZXNzSW5MZXZlbCA9XG4gICAgICAgIEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuZ2V0Q3VycmVudFRpbWUoKSAvIHRoaXMucHJvcHMudG90YWxEdXJhdGlvbiB8fCAwXG4gICAgICBjb25zdCBwcm9ncmVzc09mZnNldCA9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCeUxldmVsICogKHRoaXMucHJvcHMuY3VycmVudExldmVsIC0gMSlcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gcHJvZ3Jlc3NPZmZzZXQgKyBwcm9ncmVzc0luTGV2ZWwgKiB0aGlzLnByb2dyZXNzQnlMZXZlbFxuICAgICAgVHdlZW5MaXRlLnNldCh0aGlzLmVsLCB7IHNjYWxlWDogcHJvZ3Jlc3MgfSlcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBHYW1lRW5naW5lU3RhdGVNYW5hZ2VyLmdldEN1cnJlbnRUaW1lKClcbiAgICB9XG4gICAgcmFmKHRoaXMubW9uaXRvclByb2dyZXNzKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9ncmVzcy1iYXJcbiAgICAgICR7dGhpcy5wcm9wcy5pbnRyb0FuaW1QbGF5ZWQgPyAnJyA6ICdoaWRkZW4nfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9ncmVzcy1iYXItY29udGVudFxuICAgICAgICAgICR7dGhpcy5wcm9wcy5pbnRyb0FuaW1QbGF5ZWQgPyAnJyA6ICdoaWRkZW4nfWB9XG4gICAgICAgICAgcmVmPXtlbCA9PiAodGhpcy5lbCA9IGVsKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsZXZlbC0yIHN0ZXBgfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsZXZlbC0zIHN0ZXBgfT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGV2ZWwtMntcbiAgICAgICAgICAgIGxlZnQ6IDMzLjMlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGV2ZWwtM3tcbiAgICAgICAgICAgIGxlZnQ6IDY2LjYlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RlcHtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RUZGRkY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcm9ncmVzcy1iYXItY29udGVudCB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZlNGE7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG90YWxEdXJhdGlvbjogTWF0aC50cnVuYyhzdGF0ZS52aWRlby5nZXQoJ2R1cmF0aW9uJykpLFxuICAgIGN1cnJlbnRMZXZlbDogc3RhdGUuZ2FtZS5nZXQoJ2N1cnJlbnRMZXZlbCcpLFxuICAgIG5iVG90YWxMZXZlbDogc3RhdGUuZ2FtZS5nZXQoJ25iVG90YWxMZXZlbCcpLFxuICAgIGludHJvQW5pbVBsYXllZDogc3RhdGUuYXBwLmdldCgnaW50cm9BbmltUGxheWVkJylcbiAgfVxufSkoR2FtZVByb2dyZXNzQmFyKVxuIl19 */\n/*@ sourceURL=components/game/ui/GameProgressBar.js */'
      }));
    }
  }]);

  return GameProgressBar;
}(_react.PureComponent);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    totalDuration: (0, _trunc2.default)(state.video.get('duration')),
    currentLevel: state.game.get('currentLevel'),
    nbTotalLevel: state.game.get('nbTotalLevel'),
    introAnimPlayed: state.app.get('introAnimPlayed')
  };
})(GameProgressBar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9HYW1lUHJvZ3Jlc3NCYXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsIlR3ZWVuTGl0ZSIsInJhZiIsIkdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIiLCJHYW1lUHJvZ3Jlc3NCYXIiLCJwcm9wcyIsImN1cnJlbnRUaW1lIiwicHJvZ3Jlc3NCeUxldmVsIiwibmJUb3RhbExldmVsIiwibW9uaXRvclByb2dyZXNzIiwiYmluZCIsInNldCIsImVsIiwic2NhbGVYIiwiZ2V0Q3VycmVudFRpbWUiLCJwcm9ncmVzc0luTGV2ZWwiLCJ0b3RhbER1cmF0aW9uIiwicHJvZ3Jlc3NPZmZzZXQiLCJjdXJyZW50TGV2ZWwiLCJwcm9ncmVzcyIsImludHJvQW5pbVBsYXllZCIsInN0YXRlIiwidmlkZW8iLCJnZXQiLCJnYW1lIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUE0Qjs7Ozs7Ozs7O0lBRTdCLEE7MkNBQ0o7OzJCQUFBLEFBQWEsT0FBTzt3Q0FHbEI7O0FBSGtCO3dKQUFBLEFBQ1osQUFHTjs7VUFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7VUFBQSxBQUFLLGtCQUFrQixJQUFJLE1BQTNCLEFBQWlDLEFBRWpDOztVQUFBLEFBQUssa0JBQWtCLE1BQUEsQUFBSyxnQkFBTCxBQUFxQixLQVAxQixBQU9sQjtXQUNEOzs7Ozt3Q0FFb0IsQUFDbkI7V0FBQSxBQUFLLEFBQ0w7c0JBQUEsQUFBVSxJQUFJLEtBQWQsQUFBbUIsSUFBSSxFQUFFLFFBQXpCLEFBQXVCLEFBQVUsQUFDbEM7Ozs7c0NBRWtCLEFBQ2pCO1VBQUksaUNBQUEsQUFBdUIscUJBQXFCLEtBQWhELEFBQXFELGFBQWEsQUFDaEU7WUFBTSxrQkFDSixpQ0FBQSxBQUF1QixtQkFBbUIsS0FBQSxBQUFLLE1BQS9DLEFBQXFELGlCQUR2RCxBQUN3RSxBQUN4RTtZQUFNLGlCQUNKLEtBQUEsQUFBSyxtQkFBbUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQURyQyxBQUNFLEFBQWtELEFBQ3BEO1lBQU0sV0FBVyxpQkFBaUIsa0JBQWtCLEtBQXBELEFBQXlELEFBQ3pEO3dCQUFBLEFBQVUsSUFBSSxLQUFkLEFBQW1CLElBQUksRUFBRSxRQUF6QixBQUF1QixBQUFVLEFBQ2pDO2FBQUEsQUFBSyxjQUFjLGlDQUFuQixBQUFtQixBQUF1QixBQUMzQztBQUNEO3lCQUFJLEtBQUosQUFBUyxBQUNWOzs7OzZCQUVTO21CQUNSOzs2QkFDRSxjQUFBO3VFQUNFLEtBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsS0FEL0IsQUFDb0M7O29CQURwQztzQkFBQSxBQUdFO0FBSEY7QUFBQSxPQUFBO2FBTVMsaUJBQUE7aUJBQU8sT0FBQSxBQUFLLEtBQVosQUFBaUI7QUFIeEI7bUZBRUksS0FBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixLQUZqQyxBQUVzQzs7b0JBRnRDO3NCQUhGLEFBR0UsQUFLQTtBQUxBO0FBR0U7NENBRUY7O29CQUFBO3NCQVJGLEFBUUUsQUFDQTtBQURBO0FBQUE7NENBQ0E7O29CQUFBO3NCQVRGLEFBU0U7QUFBQTtBQUFBO2lCQVRGO2FBREYsQUFDRSxBQXVESDtBQXZERzs7Ozs7QUEvQndCLEFBeUY5QixBOzsyQ0FBdUIsaUJBQVMsQUFDOUI7O21CQUNpQixxQkFBVyxNQUFBLEFBQU0sTUFBTixBQUFZLElBRGpDLEFBQ1UsQUFBVyxBQUFnQixBQUMxQztrQkFBYyxNQUFBLEFBQU0sS0FBTixBQUFXLElBRnBCLEFBRVMsQUFBZSxBQUM3QjtrQkFBYyxNQUFBLEFBQU0sS0FBTixBQUFXLElBSHBCLEFBR1MsQUFBZSxBQUM3QjtxQkFBaUIsTUFBQSxBQUFNLElBQU4sQUFBVSxJQUo3QixBQUFPLEFBSVksQUFBYyxBQUVsQztBQU5RLEFBQ0w7QUFGVyxDQUFBLEVBQWYsQUFBZSxBQU9aIiwiZmlsZSI6IkdhbWVQcm9ncmVzc0Jhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9