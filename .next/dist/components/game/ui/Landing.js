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

var _gsap = require('gsap');

var _BtnLanding = require('./landing/BtnLanding');

var _BtnLanding2 = _interopRequireDefault(_BtnLanding);

var _RightCloud = require('./landing/RightCloud');

var _RightCloud2 = _interopRequireDefault(_RightCloud);

var _LeftCloud = require('./landing/LeftCloud');

var _LeftCloud2 = _interopRequireDefault(_LeftCloud);

var _Unicorn = require('./landing/Unicorn');

var _Unicorn2 = _interopRequireDefault(_Unicorn);

var _LocationMenu = require('./landing/LocationMenu');

var _LocationMenu2 = _interopRequireDefault(_LocationMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/Landing.js';


var Landing = function (_Component) {
  (0, _inherits3.default)(Landing, _Component);

  function Landing(props) {
    (0, _classCallCheck3.default)(this, Landing);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Landing.__proto__ || (0, _getPrototypeOf2.default)(Landing)).call(this, props));

    _this.handleStartGame = _this.handleStartGame.bind(_this);
    _this.handleChangeCityClick = _this.handleChangeCityClick.bind(_this);

    _this.state = {
      citySelectorVisible: false, // NOTE tdurand, this logic could be pushed into the locationMenu component to reuse it easier in Game over and win page
      javascriptLoaded: false
    };
    return _this;
  }

  (0, _createClass3.default)(Landing, [{
    key: 'handleStartGame',
    value: function handleStartGame() {
      var _this2 = this;

      _gsap.TweenLite.to('.game-landing', 0.3, {
        backgroundColor: 'transparent',
        delay: 0.5
      });
      _gsap.TweenLite.to('.change-city,.landing-headline,.btn-landing,.about,.IconTriangle', 0.3, {
        opacity: 0,
        delay: 0.5
      });

      var backgroundOpacityAnimationDuration = 0.5;

      _gsap.TweenLite.to('.leftcloud, .rightcloud', 0.3, {
        opacity: 0,
        delay: 0.5,
        onStart: function onStart() {
          return _this2.props.handleStart(backgroundOpacityAnimationDuration);
        }
      });

      /*  TweenLite.to('.game-landing', backgroundOpacityAnimationDuration, {
        //opacity: 0, // NOTE: changed to general opacity, background color animation is slower
        delay: 1.5,
      }) */
    }

    // NOTE tdurand, this logic could be pushed into the locationMenu component to be absolute
    // to reuse it easier in Game over and win page

  }, {
    key: 'handleChangeCityClick',
    value: function handleChangeCityClick() {
      if (this.state.citySelectorVisible) {
        this.setState({
          citySelectorVisible: false
        });
      } else {
        this.setState({
          citySelectorVisible: true
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        javascriptLoaded: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-1781646009' + ' ' + 'game-landing',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-1781646009' + ' ' + 'landing-headline',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'STUTTGART IS JAM-PACKED WITH HEAVY TRAFFIC!'), _react2.default.createElement(_LocationMenu2.default, {
        isVisible: this.state.citySelectorVisible,
        handleClose: this.handleChangeCityClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement(_Unicorn2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_LeftCloud2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(_RightCloud2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_BtnLanding2.default, {
        loaded: this.props.isGameReadyToPlay,
        onClick: this.handleStartGame,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), this.state.javascriptLoaded &&
      // NOTE tdurand, this logic could be pushed into the locationMenu component to be absolute
      // to reuse it easier in Game over and win page
      _react2.default.createElement('div', { onClick: this.handleChangeCityClick, className: 'jsx-1781646009' + ' ' + ((this.state.citySelectorVisible ? 'activeLocationMenu' : '') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1781646009' + ' ' + 'change-city-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('h4', {
        className: 'jsx-1781646009' + ' ' + 'change-city',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Change city'), _react2.default.createElement('img', {
        src: '/static/assets/icons/icon-triangle.svg',
        className: 'jsx-1781646009' + ' ' + 'IconTriangle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-1781646009' + ' ' + 'about',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('h4', {
        className: 'jsx-1781646009',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'About')), _react2.default.createElement(_style2.default, {
        styleId: '1781646009',
        css: '.game-landing.jsx-1781646009{position:fixed;top:0;right:0;left:0;bottom:0;z-index:10;background-color:white;will-change:transform;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-user-drag:none;cursor:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.landing-headline.jsx-1781646009{position:absolute;margin-top:-80px;width:220px;color:black;will-change:transform;z-index:5;-webkit-animation:fadeIn-jsx-1781646009 1.3s;animation:fadeIn-jsx-1781646009 1.3s;color:#262626;}.change-city-container.jsx-1781646009{position:fixed;z-index:14;bottom:1.5rem;left:3rem;}.change-city.jsx-1781646009{-webkit-animation:fadeIn-jsx-1781646009 0.5s;animation:fadeIn-jsx-1781646009 0.5s;cursor:pointer;z-index:14;display:inline-block;padding-right:0.7rem;}.IconTriangle.jsx-1781646009{z-index:14;-webkit-animation:fadeIn-jsx-1781646009 0.5s;animation:fadeIn-jsx-1781646009 0.5s;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-delay:0.3;transition-delay:0.3;display:inline-block;padding-bottom:1px;}.activeLocationMenu.jsx-1781646009{color:#FF3BFF;}.activeLocationMenu.jsx-1781646009 .IconTriangle.jsx-1781646009{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.about.jsx-1781646009{position:fixed;bottom:1.5rem;right:3rem;cursor:pointer;-webkit-animation:fadeIn-jsx-1781646009 1.3s;animation:fadeIn-jsx-1781646009 1.3s;}@media (min-width:600px){.landing-headline.jsx-1781646009{width:525px;text-align:center;}}@-webkit-keyframes fadeIn-jsx-1781646009{0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-1781646009{0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9MYW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHb0IsQUFHNEIsQUFrQkcsQUFXSCxBQU1PLEFBT1gsQUFRRyxBQUdXLEFBSVYsQUFZRCxBQU9GLEFBR0EsQUFHQSxVQUxaLEFBR0EsQUFHQSxDQXhDc0IsQ0EyQkYsRUFuQnRCLENBbERRLEFBNkJLLEFBNEJHLEdBdkNHLEdBakJULEtBNkJNLEdBNUJQLEFBd0RJLENBWVgsS0FuRFksQ0FoQkgsSUE0QkMsQUE0QkssS0F2REosRUFnQkMsR0FZZCxLQTRCd0IsQ0F2REMsR0FnQkQsb0JBZkEsRUFnQlosQ0FhSyxLQWtCakIsSUE5QndCLEVBb0JHLElBUGQsSUE3Qk0sT0E4QkcscUJBQ0MsUUF1QnZCLGFBdEJBLENBS3VCLHNCQXBCUCxhQWhCYSxDQWlCN0IsY0FvQnNCLFlBcENHLFNBcUNKLGNBcENQLEtBcUNkLE9BcENjLDBFQUNVLG1HQUNKLDZGQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL2dhbWUvdWkvTGFuZGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgVHdlZW5MaXRlIH0gZnJvbSAnZ3NhcCdcblxuaW1wb3J0IEJ0bkxhbmRpbmcgZnJvbSAnLi9sYW5kaW5nL0J0bkxhbmRpbmcnXG5pbXBvcnQgUmlnaHRDbG91ZCBmcm9tICcuL2xhbmRpbmcvUmlnaHRDbG91ZCdcbmltcG9ydCBMZWZ0Q2xvdWQgZnJvbSAnLi9sYW5kaW5nL0xlZnRDbG91ZCdcbmltcG9ydCBVbmljb3JuIGZyb20gJy4vbGFuZGluZy9Vbmljb3JuJ1xuaW1wb3J0IExvY2F0aW9uTWVudSBmcm9tICcuL2xhbmRpbmcvTG9jYXRpb25NZW51J1xuXG5jbGFzcyBMYW5kaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmhhbmRsZVN0YXJ0R2FtZSA9IHRoaXMuaGFuZGxlU3RhcnRHYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZUNpdHlDbGljayA9IHRoaXMuaGFuZGxlQ2hhbmdlQ2l0eUNsaWNrLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaXR5U2VsZWN0b3JWaXNpYmxlOiBmYWxzZSwgLy8gTk9URSB0ZHVyYW5kLCB0aGlzIGxvZ2ljIGNvdWxkIGJlIHB1c2hlZCBpbnRvIHRoZSBsb2NhdGlvbk1lbnUgY29tcG9uZW50IHRvIHJldXNlIGl0IGVhc2llciBpbiBHYW1lIG92ZXIgYW5kIHdpbiBwYWdlXG4gICAgICBqYXZhc2NyaXB0TG9hZGVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN0YXJ0R2FtZSAoKSB7XG4gICAgVHdlZW5MaXRlLnRvKCcuZ2FtZS1sYW5kaW5nJywgMC4zLCB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkZWxheTogMC41XG4gICAgfSlcbiAgICBUd2VlbkxpdGUudG8oJy5jaGFuZ2UtY2l0eSwubGFuZGluZy1oZWFkbGluZSwuYnRuLWxhbmRpbmcsLmFib3V0LC5JY29uVHJpYW5nbGUnLCAwLjMsIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkZWxheTogMC41XG4gICAgfSlcblxuICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5QW5pbWF0aW9uRHVyYXRpb24gPSAwLjVcblxuICAgIFR3ZWVuTGl0ZS50bygnLmxlZnRjbG91ZCwgLnJpZ2h0Y2xvdWQnLCAwLjMsIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkZWxheTogMC41LFxuICAgICAgb25TdGFydDogKCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVTdGFydChiYWNrZ3JvdW5kT3BhY2l0eUFuaW1hdGlvbkR1cmF0aW9uKVxuICAgIH0pXG5cbiAgICAvKiAgVHdlZW5MaXRlLnRvKCcuZ2FtZS1sYW5kaW5nJywgYmFja2dyb3VuZE9wYWNpdHlBbmltYXRpb25EdXJhdGlvbiwge1xuICAgICAgLy9vcGFjaXR5OiAwLCAvLyBOT1RFOiBjaGFuZ2VkIHRvIGdlbmVyYWwgb3BhY2l0eSwgYmFja2dyb3VuZCBjb2xvciBhbmltYXRpb24gaXMgc2xvd2VyXG4gICAgICBkZWxheTogMS41LFxuICAgIH0pICovXG4gIH1cblxuICAvLyBOT1RFIHRkdXJhbmQsIHRoaXMgbG9naWMgY291bGQgYmUgcHVzaGVkIGludG8gdGhlIGxvY2F0aW9uTWVudSBjb21wb25lbnQgdG8gYmUgYWJzb2x1dGVcbiAgLy8gdG8gcmV1c2UgaXQgZWFzaWVyIGluIEdhbWUgb3ZlciBhbmQgd2luIHBhZ2VcbiAgaGFuZGxlQ2hhbmdlQ2l0eUNsaWNrICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jaXR5U2VsZWN0b3JWaXNpYmxlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2l0eVNlbGVjdG9yVmlzaWJsZTogZmFsc2VcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjaXR5U2VsZWN0b3JWaXNpYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGphdmFzY3JpcHRMb2FkZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbWUtbGFuZGluZyc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J2xhbmRpbmctaGVhZGxpbmUnPlxuICAgICAgICAgIFNUVVRUR0FSVCBJUyBKQU0tUEFDS0VEIFdJVEggSEVBVlkgVFJBRkZJQyFcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPExvY2F0aW9uTWVudVxuICAgICAgICAgIGlzVmlzaWJsZT17dGhpcy5zdGF0ZS5jaXR5U2VsZWN0b3JWaXNpYmxlfVxuICAgICAgICAgIGhhbmRsZUNsb3NlPXt0aGlzLmhhbmRsZUNoYW5nZUNpdHlDbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPFVuaWNvcm4gLz5cbiAgICAgICAgPExlZnRDbG91ZCAvPlxuICAgICAgICA8UmlnaHRDbG91ZCAvPlxuICAgICAgICA8QnRuTGFuZGluZ1xuICAgICAgICAgIGxvYWRlZD17dGhpcy5wcm9wcy5pc0dhbWVSZWFkeVRvUGxheX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0R2FtZX1cbiAgICAgICAgLz5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5qYXZhc2NyaXB0TG9hZGVkICYmIChcbiAgICAgICAgICAvLyBOT1RFIHRkdXJhbmQsIHRoaXMgbG9naWMgY291bGQgYmUgcHVzaGVkIGludG8gdGhlIGxvY2F0aW9uTWVudSBjb21wb25lbnQgdG8gYmUgYWJzb2x1dGVcbiAgICAgICAgICAvLyB0byByZXVzZSBpdCBlYXNpZXIgaW4gR2FtZSBvdmVyIGFuZCB3aW4gcGFnZVxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2VDaXR5Q2xpY2t9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jaXR5U2VsZWN0b3JWaXNpYmxlPyAnYWN0aXZlTG9jYXRpb25NZW51JzonJ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhbmdlLWNpdHktY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nY2hhbmdlLWNpdHknPkNoYW5nZSBjaXR5PC9oND5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nSWNvblRyaWFuZ2xlJ1xuICAgICAgICAgICAgICAgIHNyYz0nL3N0YXRpYy9hc3NldHMvaWNvbnMvaWNvbi10cmlhbmdsZS5zdmcnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fib3V0Jz5cbiAgICAgICAgICA8aDQ+QWJvdXQ8L2g0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmdhbWUtbGFuZGluZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sYW5kaW5nLWhlYWRsaW5lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC04MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxLjNzO1xuICAgICAgICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNoYW5nZS1jaXR5LWNvbnRhaW5lcntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE0O1xuICAgICAgICAgICAgYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgICBsZWZ0OiAzcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhbmdlLWNpdHkge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDE0O1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjdyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5JY29uVHJpYW5nbGV7XG4gICAgICAgICAgICB6LWluZGV4OiAxNDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zO1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlTG9jYXRpb25NZW51e1xuICAgICAgICAgICAgY29sb3I6ICNGRjNCRkY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmVMb2NhdGlvbk1lbnUgLkljb25UcmlhbmdsZXtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFib3V0e1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgICByaWdodDogM3JlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDEuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hYm91dDpob3ZlciwgLmNoYW5nZS1jaXR5OmhvdmVye1xuICAgICAgICAgICAgLy9jb2xvcjogI0ZGM0JGRjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIC5sYW5kaW5nLWhlYWRsaW5lIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUyNXB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4ge1xuICBjb25zdCBpc0dhbWVSZWFkeVRvUGxheSA9XG4gICAgc3RhdGUub2JqZWN0VHJhY2tlci5nZXQoJ2ZldGNoZWQnKSAmJiBzdGF0ZS52aWRlby5nZXQoJ2lzUmVhZHlUb1BsYXknKVxuXG4gIHJldHVybiB7XG4gICAgaXNHYW1lUmVhZHlUb1BsYXlcbiAgfVxufSkoTGFuZGluZylcbiJdfQ== */\n/*@ sourceURL=components/game/ui/Landing.js */'
      }));
    }
  }]);

  return Landing;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  var isGameReadyToPlay = state.objectTracker.get('fetched') && state.video.get('isReadyToPlay');

  return {
    isGameReadyToPlay: isGameReadyToPlay
  };
})(Landing);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9MYW5kaW5nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIlR3ZWVuTGl0ZSIsIkJ0bkxhbmRpbmciLCJSaWdodENsb3VkIiwiTGVmdENsb3VkIiwiVW5pY29ybiIsIkxvY2F0aW9uTWVudSIsIkxhbmRpbmciLCJwcm9wcyIsImhhbmRsZVN0YXJ0R2FtZSIsImJpbmQiLCJoYW5kbGVDaGFuZ2VDaXR5Q2xpY2siLCJzdGF0ZSIsImNpdHlTZWxlY3RvclZpc2libGUiLCJqYXZhc2NyaXB0TG9hZGVkIiwidG8iLCJiYWNrZ3JvdW5kQ29sb3IiLCJkZWxheSIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kT3BhY2l0eUFuaW1hdGlvbkR1cmF0aW9uIiwib25TdGFydCIsImhhbmRsZVN0YXJ0Iiwic2V0U3RhdGUiLCJpc0dhbWVSZWFkeVRvUGxheSIsIm9iamVjdFRyYWNrZXIiLCJnZXQiLCJ2aWRlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBRVQsQUFBUzs7QUFFVCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWtCOzs7Ozs7Ozs7SSxBQUVuQjttQ0FDSjs7bUJBQUEsQUFBYSxPQUFPO3dDQUFBOzt3SUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSyxrQkFBa0IsTUFBQSxBQUFLLGdCQUFMLEFBQXFCLEtBQTVDLEFBQ0E7VUFBQSxBQUFLLHdCQUF3QixNQUFBLEFBQUssc0JBQUwsQUFBMkIsS0FBeEQsQUFFQTs7VUFBQSxBQUFLOzJCQUFRLEFBQ1UsT0FBTyxBQUM1Qjt3QkFSZ0IsQUFNbEIsQUFBYSxBQUVPO0FBRlAsQUFDWDtXQUdIOzs7OztzQ0FFa0I7bUJBQ2pCOztzQkFBQSxBQUFVLEdBQVYsQUFBYSxpQkFBYixBQUE4Qjt5QkFBSyxBQUNoQixBQUNqQjtlQUZGLEFBQW1DLEFBRTFCLEFBRVQ7QUFKbUMsQUFDakM7c0JBR0YsQUFBVSxHQUFWLEFBQWEsb0VBQWIsQUFBaUY7aUJBQUssQUFDM0UsQUFDVDtlQUZGLEFBQXNGLEFBRTdFLEFBR1Q7QUFMc0YsQUFDcEY7O1VBSUkscUNBQU4sQUFBMkMsQUFFM0M7O3NCQUFBLEFBQVUsR0FBVixBQUFhLDJCQUFiLEFBQXdDO2lCQUFLLEFBQ2xDLEFBQ1Q7ZUFGMkMsQUFFcEMsQUFDUDtpQkFBUyxtQkFBQTtpQkFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLFlBQWpCLEFBQU0sQUFBdUI7QUFIeEMsQUFBNkMsQUFNN0M7QUFONkMsQUFDM0M7O0FBU0g7Ozs7QUFFRDs7QUFDQTs7Ozs7NENBQ3lCLEFBQ3ZCO1VBQUksS0FBQSxBQUFLLE1BQVQsQUFBZSxxQkFBcUIsQUFDbEM7YUFBQSxBQUFLOytCQUFMLEFBQWMsQUFDUyxBQUV4QjtBQUhlLEFBQ1o7QUFGSixhQUlPLEFBQ0w7YUFBQSxBQUFLOytCQUFMLEFBQWMsQUFDUyxBQUV4QjtBQUhlLEFBQ1o7QUFHTDs7Ozt3Q0FFb0IsQUFDbkI7V0FBQSxBQUFLOzBCQUFMLEFBQWMsQUFDTSxBQUVyQjtBQUhlLEFBQ1o7Ozs7NkJBSU0sQUFDUjs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBR0EsZ0VBQUEsQUFBQzttQkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDdEI7cUJBQWEsS0FGZixBQUVvQjs7b0JBRnBCO3NCQUpGLEFBSUUsQUFJQTtBQUpBO0FBQ0UsMEJBR0YsQUFBQzs7b0JBQUQ7c0JBUkYsQUFRRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFURixBQVNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQVZGLEFBVUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQztnQkFDUyxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtpQkFBUyxLQUZYLEFBRWdCOztvQkFGaEI7c0JBWEYsQUFXRSxBQUtDO0FBTEQ7QUFDRSxlQUlELEFBQUssTUFBTCxBQUFXLEFBQ1Y7QUFDQTtBQUNBO3NCQUFBLGNBQUEsU0FBSyxTQUFTLEtBQWQsQUFBbUIsNkRBQWtDLEtBQUEsQUFBSyxNQUFMLEFBQVcsc0JBQVgsQUFBZ0MsdUJBQXJGLEFBQTBHLE9BQTFHOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTthQUFBLEFBRU07NENBRk4sQUFDWTs7b0JBRFo7c0JBdEJSLEFBbUJJLEFBQ0UsQUFFRSxBQU9OO0FBUE07QUFFRSw0QkFLUixjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQTlCSixBQTZCRSxBQUNFO2lCQTlCSjthQURGLEFBQ0UsQUEySEg7QUEzSEc7Ozs7O0FBM0RnQixBLEFBeUx0Qjs7MkNBQXVCLGlCQUFTLEFBQzlCO01BQU0sb0JBQ0osTUFBQSxBQUFNLGNBQU4sQUFBb0IsSUFBcEIsQUFBd0IsY0FBYyxNQUFBLEFBQU0sTUFBTixBQUFZLElBRHBELEFBQ3dDLEFBQWdCLEFBRXhEOzs7dUJBQUEsQUFBTyxBQUdSO0FBSFEsQUFDTDtBQUxXLENBQUEsRUFBZixBQUFlLEFBT1oiLCJmaWxlIjoiTGFuZGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9