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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/landing/BtnLanding.js';


var BtnLanding = function (_Component) {
  (0, _inherits3.default)(BtnLanding, _Component);

  function BtnLanding(props) {
    (0, _classCallCheck3.default)(this, BtnLanding);

    /* Put a long animation duration because
      We don't know how long it will take
      When the game is loaded, it will stop the animation
      And show the button in loaded state
    */
    var _this = (0, _possibleConstructorReturn3.default)(this, (BtnLanding.__proto__ || (0, _getPrototypeOf2.default)(BtnLanding)).call(this, props));

    _this.animationDelay = 2;
    _this.animationDuration = 8;

    _this.handleClick = _this.handleClick.bind(_this);

    _this.state = {
      keepLoading: false
    };
    return _this;
  }

  (0, _createClass3.default)(BtnLanding, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var timeSinceAnimationStarted = new Date().getTime() - window.firstPaint;
      // If game isn't ready restart progress bar in time
      this.timeoutRestartAnimation = setTimeout(function () {
        if (!_this2.props.loaded) {
          _this2.setState({
            keepLoading: true
          });
        }
      }, this.animationDuration * 1000 - timeSinceAnimationStarted);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      if (this.props.loaded) {
        clearTimeout(this.timeoutRestartAnimation);
        this.props.onClick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutRestartAnimation);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        onClick: this.handleClick,
        className: 'jsx-1351261826' + ' ' + ('btn-landing ' + (this.props.loaded ? '' : 'loading') + ' ' + (this.state.keepLoading && !this.props.loaded ? 'keep-loading' : '')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1351261826' + ' ' + 'inner',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-1351261826' + ' ' + 'outer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1351261826',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Defend ', this.props.selectedCityLabel, '!')), _react2.default.createElement(_style2.default, {
        styleId: '1351261826',
        css: '.btn-landing.jsx-1351261826{left:50%;top:50%;margin-top:100px;position:absolute;width:260px;height:60px;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);will-change:transform;-webkit-animation:1.3s fadeIn-jsx-1351261826;animation:1.3s fadeIn-jsx-1351261826;}.loading.jsx-1351261826 .outer.jsx-1351261826{-webkit-animation:progressBarAnimation-jsx-1351261826 ' + this.animationDuration + 's linear;animation:progressBarAnimation-jsx-1351261826 ' + this.animationDuration + 's linear;}.loading.jsx-1351261826 .outer.jsx-1351261826 h4.jsx-1351261826{opacity:0;}.keep-loading.jsx-1351261826 .outer.jsx-1351261826{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.btn-landing.jsx-1351261826 .inner.jsx-1351261826{width:100%;height:100%;left:5px;top:5px;background-color:#262626;position:absolute;}.btn-landing.jsx-1351261826 .outer.jsx-1351261826{width:100%;height:100%;background-color:#4effff;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-animation:alarm-jsx-1351261826 0.8s infinite;animation:alarm-jsx-1351261826 0.8s infinite;-webkit-animation-delay:30s;animation-delay:30s;}.btn-landing.jsx-1351261826 .outer.jsx-1351261826 h3.jsx-1351261826{-webkit-transition:opacity 0.5s;transition:opacity 0.5s;}.btn-landing.jsx-1351261826 .outer.jsx-1351261826:hover{background-color:#ff3bff;cursor:pointer;}.btn-landing.jsx-1351261826 .outer.jsx-1351261826:active{background-color:#ff3bff;left:2px;top:2px;}@media (min-width:600px){.btn-landing.jsx-1351261826{margin-top:50px;width:300px;}}@-webkit-keyframes progressBarAnimation-jsx-1351261826{0%{-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);}25%{-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);}100%{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}}@keyframes progressBarAnimation-jsx-1351261826{0%{-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);}25%{-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);}100%{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}}@-webkit-keyframes fadeIn-jsx-1351261826{0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-1351261826{0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes alarm-jsx-1351261826{0%{background-color:#4effff;}50%{background-color:#ff3bff;}100%{background-color:#4effff;}}@keyframes alarm-jsx-1351261826{0%{background-color:#4effff;}50%{background-color:#ff3bff;}100%{background-color:#4effff;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL0J0bkxhbmRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RvQixBQUdzQixBQWEyRCxBQUkxRCxBQUl5QixBQUl4QixBQVFBLEFBYWEsQUFJQyxBQUtBLEFBT1AsQUFPSSxBQUdBLEFBR0EsQUFNVixBQUdBLEFBR0EsQUFNZSxBQUdBLEFBR0EsU0FsR25CLENBaUJWLEFBZ0VFLEFBR0EsQUFHQSxDQTlEWSxBQVFBLEtBNkJFLENBN0RHLE1BeUJSLEFBUWdCLEVBZ0JWLEFBS04sQUFzQ1QsQUFHQSxBQUdBLEdBcENBLElBcENRLEVBekJVLEFBc0RWLE1BNUJpQixBQXVCM0IsRUFNQSxNQXRCb0IsSUFoQ04sSUEyQ2QsUUExQ2MsQ0F5Qk0sQ0FPTCxNQWlDYixBQUdBLEFBR0EsSUF0RTRDLEVBZ0I5QyxLQVNBLHlEQU95QixrQ0F4QnpCLDhDQU53QixtQkErQkgsR0E5Qkcsa0ZBQ3hCLFFBOEJ1QiwyRUFDUyxrR0FDVixnREFDdEIiLCJmaWxlIjoiY29tcG9uZW50cy9nYW1lL3VpL2xhbmRpbmcvQnRuTGFuZGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY2xhc3MgQnRuTGFuZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbG9hZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIC8qIFB1dCBhIGxvbmcgYW5pbWF0aW9uIGR1cmF0aW9uIGJlY2F1c2VcbiAgICAgIFdlIGRvbid0IGtub3cgaG93IGxvbmcgaXQgd2lsbCB0YWtlXG4gICAgICBXaGVuIHRoZSBnYW1lIGlzIGxvYWRlZCwgaXQgd2lsbCBzdG9wIHRoZSBhbmltYXRpb25cbiAgICAgIEFuZCBzaG93IHRoZSBidXR0b24gaW4gbG9hZGVkIHN0YXRlXG4gICAgKi9cbiAgICB0aGlzLmFuaW1hdGlvbkRlbGF5ID0gMlxuICAgIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gPSA4XG5cbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAga2VlcExvYWRpbmc6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdGltZVNpbmNlQW5pbWF0aW9uU3RhcnRlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gd2luZG93LmZpcnN0UGFpbnRcbiAgICAvLyBJZiBnYW1lIGlzbid0IHJlYWR5IHJlc3RhcnQgcHJvZ3Jlc3MgYmFyIGluIHRpbWVcbiAgICB0aGlzLnRpbWVvdXRSZXN0YXJ0QW5pbWF0aW9uID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMubG9hZGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGtlZXBMb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSwgdGhpcy5hbmltYXRpb25EdXJhdGlvbiAqIDEwMDAgLSB0aW1lU2luY2VBbmltYXRpb25TdGFydGVkKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubG9hZGVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0UmVzdGFydEFuaW1hdGlvbilcbiAgICAgIHRoaXMucHJvcHMub25DbGljaygpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFJlc3RhcnRBbmltYXRpb24pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuLWxhbmRpbmcgJHt0aGlzLnByb3BzLmxvYWRlZCA/ICcnIDogJ2xvYWRpbmcnfSAke1xuICAgICAgICAgIHRoaXMuc3RhdGUua2VlcExvYWRpbmcgJiYgIXRoaXMucHJvcHMubG9hZGVkID8gJ2tlZXAtbG9hZGluZycgOiAnJ1xuICAgICAgICB9YH1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXJcIj5cbiAgICAgICAgICA8aDM+RGVmZW5kIHt0aGlzLnByb3BzLnNlbGVjdGVkQ2l0eUxhYmVsfSE8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5idG4tbGFuZGluZyB7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAvL0dQVSBhY2NlbGVyYXRlXG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxLjNzIGZhZGVJbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGluZyAub3V0ZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzc0JhckFuaW1hdGlvbiAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb259cyBsaW5lYXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvYWRpbmcgLm91dGVyIGg0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmtlZXAtbG9hZGluZyAub3V0ZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ0bi1sYW5kaW5nIC5pbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1sYW5kaW5nIC5vdXRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWZmZmY7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBhbGFybSAwLjhzIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzMHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ0bi1sYW5kaW5nIC5vdXRlciBoMyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ0bi1sYW5kaW5nIC5vdXRlcjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzYmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG4tbGFuZGluZyAub3V0ZXI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNiZmY7XG4gICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIC5idG4tbGFuZGluZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIHByb2dyZXNzQmFyQW5pbWF0aW9uIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAyNSUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBhbGFybSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzYmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZENpdHlMYWJlbDogc3RhdGUuYXBwXG4gICAgICAuZ2V0KCdhdmFpbGFibGVDaXRpZXMnKVxuICAgICAgLmdldChzdGF0ZS5hcHAuZ2V0KCdzZWxlY3RlZENpdHknKSlcbiAgICAgIC5nZXQoJ2xhYmVsJylcbiAgfVxufSkoQnRuTGFuZGluZylcbiJdfQ== */\n/*@ sourceURL=components/game/ui/landing/BtnLanding.js */'
      }));
    }
  }]);

  return BtnLanding;
}(_react.Component);

BtnLanding.propTypes = {
  loaded: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    selectedCityLabel: state.app.get('availableCities').get(state.app.get('selectedCity')).get('label')
  };
})(BtnLanding);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL0J0bkxhbmRpbmcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiUHJvcFR5cGVzIiwiQnRuTGFuZGluZyIsInByb3BzIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsImhhbmRsZUNsaWNrIiwiYmluZCIsInN0YXRlIiwia2VlcExvYWRpbmciLCJ0aW1lU2luY2VBbmltYXRpb25TdGFydGVkIiwiRGF0ZSIsImdldFRpbWUiLCJ3aW5kb3ciLCJmaXJzdFBhaW50IiwidGltZW91dFJlc3RhcnRBbmltYXRpb24iLCJzZXRUaW1lb3V0IiwibG9hZGVkIiwic2V0U3RhdGUiLCJjbGVhclRpbWVvdXQiLCJvbkNsaWNrIiwic2VsZWN0ZWRDaXR5TGFiZWwiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsImFwcCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0lBRUQsQTtzQ0FNSjs7c0JBQUEsQUFBWSxPQUFPO3dDQUdqQjs7QUFIaUI7Ozs7OzhJQUFBLEFBQ1gsQUFPTjs7VUFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQ3RCO1VBQUEsQUFBSyxvQkFBTCxBQUF5QixBQUV6Qjs7VUFBQSxBQUFLLGNBQWMsTUFBQSxBQUFLLFlBQUwsQUFBaUIsS0FBcEMsQUFFQTs7VUFBQSxBQUFLO21CQWJZLEFBYWpCLEFBQWEsQUFDRTtBQURGLEFBQ1g7V0FFSDs7Ozs7d0NBRW1CO21CQUNsQjs7VUFBTSw0QkFBNEIsSUFBQSxBQUFJLE9BQUosQUFBVyxZQUFZLE9BQXpELEFBQWdFLEFBQ2hFO0FBQ0E7V0FBQSxBQUFLLHFDQUFxQyxZQUFNLEFBQzlDO1lBQUksQ0FBQyxPQUFBLEFBQUssTUFBVixBQUFnQixRQUFRLEFBQ3RCO2lCQUFBLEFBQUs7eUJBQUwsQUFBYyxBQUNDLEFBRWhCO0FBSGUsQUFDWjtBQUdMO0FBTjhCLE9BQUEsRUFNNUIsS0FBQSxBQUFLLG9CQUFMLEFBQXlCLE9BTjVCLEFBQStCLEFBTUksQUFDcEM7Ozs7a0NBRWEsQUFDWjtVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsUUFBUSxBQUNyQjtxQkFBYSxLQUFiLEFBQWtCLEFBQ2xCO2FBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjtBQUNGOzs7OzJDQUVzQixBQUNyQjttQkFBYSxLQUFiLEFBQWtCLEFBQ25COzs7OzZCQUVRLEFBQ1A7NkJBQ0UsY0FBQTtpQkFJVyxLQUpYLEFBSWdCOytEQUhZLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixLQURoRCxBQUNxRCxvQkFDakQsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUFlLENBQUMsS0FBQSxBQUFLLE1BQWhDLEFBQXNDLFNBQXRDLEFBQStDLGlCQUZuRCxBQUVvRTs7b0JBRnBFO3NCQUFBLEFBTUU7QUFORjtBQUlFLE9BSkY7NENBTUUsQUFBZTs7b0JBQWY7c0JBTkYsQUFNRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLGdCQUFBLEFBQUssTUFBakIsQUFBdUIsbUJBUjNCLEFBT0UsQUFDRTtpQkFSSjt1ZEF5QndDLEtBekJ4QyxBQXlCNkMsZ0ZBQUwsS0F6QnhDLEFBeUI2QyxvQkExQi9DLEFBQ0UsQUFzSEg7QUF0SEc7Ozs7O0FBakRtQixBOztBQUFuQixBLFcsQUFDRztVQUNHLG9CQURTLEFBQ0MsQUFDbEI7V0FBUyxvQkFGUSxBQUVFLEEsQUF1S3ZCO0FBektxQixBQUNqQjs7MkNBd0ttQixpQkFBUyxBQUM5Qjs7dUJBQ3FCLE1BQUEsQUFBTSxJQUFOLEFBQ2hCLElBRGdCLEFBQ1osbUJBRFksQUFFaEIsSUFBSSxNQUFBLEFBQU0sSUFBTixBQUFVLElBRkUsQUFFWixBQUFjLGlCQUZGLEFBR2hCLElBSkwsQUFBTyxBQUNjLEFBR1osQUFFVjtBQU5RLEFBQ0w7QUFGVyxDQUFBLEVBQWYsQUFBZSxBQU9aIiwiZmlsZSI6IkJ0bkxhbmRpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==