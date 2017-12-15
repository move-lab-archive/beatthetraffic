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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Video = require('./video/Video');

var _Video2 = _interopRequireDefault(_Video);

var _GameEngine = require('./core/GameEngine');

var _GameEngine2 = _interopRequireDefault(_GameEngine);

var _Sound = require('./ui/Sound');

var _Sound2 = _interopRequireDefault(_Sound);

var _GameIndicators = require('./ui/GameIndicators');

var _GameIndicators2 = _interopRequireDefault(_GameIndicators);

var _GameInstructions = require('./ui/GameInstructions');

var _GameInstructions2 = _interopRequireDefault(_GameInstructions);

var _GameProgressBar = require('./ui/GameProgressBar');

var _GameProgressBar2 = _interopRequireDefault(_GameProgressBar);

var _LevelName = require('./ui/LevelName');

var _LevelName2 = _interopRequireDefault(_LevelName);

var _Landing = require('./ui/Landing');

var _Landing2 = _interopRequireDefault(_Landing);

var _Intro = require('./ui/Intro');

var _Intro2 = _interopRequireDefault(_Intro);

var _Menu = require('./ui/menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuBtn = require('./ui/menu/MenuBtn');

var _MenuBtn2 = _interopRequireDefault(_MenuBtn);

var _SVGMasking = require('./masking/SVGMasking');

var _SVGMasking2 = _interopRequireDefault(_SVGMasking);

var _SettingsControl = require('../shared/SettingsControl');

var _SettingsControl2 = _interopRequireDefault(_SettingsControl);

var _SettingsStateManagement = require('../../statemanagement/app/SettingsStateManagement');

var _AppStateManagement = require('../../statemanagement/app/AppStateManagement');

var _GameStateManagement = require('../../statemanagement/app/GameStateManagement');

var _VideoStateManagement = require('../../statemanagement/app/VideoStateManagement');

var _ViewportStateManagement = require('../../statemanagement/app/ViewportStateManagement');

var _SoundsManager = require('../../statemanagement/app/SoundsManager');

var _SoundsManager2 = _interopRequireDefault(_SoundsManager);

var _GameEngineStateManager = require('../../statemanagement/app/GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/GamePage.js';


var GamePage = function (_React$Component) {
  (0, _inherits3.default)(GamePage, _React$Component);

  function GamePage(props) {
    (0, _classCallCheck3.default)(this, GamePage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GamePage.__proto__ || (0, _getPrototypeOf2.default)(GamePage)).call(this, props));

    _this.recordClick = _this.recordClick.bind(_this);
    _this.handleStart = _this.handleStart.bind(_this);
    _this.handleFinishIntro = _this.handleFinishIntro.bind(_this);

    _this.state = {
      clientSide: false,
      showLanding: true,
      showIntro: false,
      playIntroAnim: !props.introAnimPlayed
    };
    return _this;
  }

  (0, _createClass3.default)(GamePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      require('smoothscroll-polyfill').polyfill();
      this.props.dispatch((0, _SettingsStateManagement.setClientRendering)());
      this.setState({ clientSide: true });
      this.props.dispatch((0, _ViewportStateManagement.initViewportListeners)());
      this.initClickRecorder();

      // Load client side things
      this.props.dispatch((0, _AppStateManagement.fetchRemainingData)());
      this.props.dispatch((0, _GameStateManagement.updateUrlToMatchLevelAndCity)());

      // Preload game sounds
      // TODO IMPROVE ONLY LEVEL 1 SOUNDS
      _SoundsManager2.default.preloadGameSounds();

      if (this.props.introAnimPlayed) {
        this.setState({
          playIntroAnim: false
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cleanClickRecorder();
    }
  }, {
    key: 'initClickRecorder',
    value: function initClickRecorder() {
      window.document.body.addEventListener('click', this.recordClick);
      window.document.body.addEventListener('touchstart', this.recordClick);
    }
  }, {
    key: 'cleanClickRecorder',
    value: function cleanClickRecorder() {
      window.document.body.removeEventListener('click', this.recordClick);
    }
  }, {
    key: 'recordClick',
    value: function recordClick(event) {
      var coordinates = {
        x: event.pageX,
        y: event.pageY
      };

      var canvas = this.props.canvasResolution;

      var innerWidth = window.innerWidth;
      var innerHeight = window.innerHeight;

      // A bit hacky
      // Ignore Chrome mobile touchstart event
      // we detect touchstart for safari compat
      if (coordinates.x === undefined) {
        return;
      }

      var width = void 0,
          height = void 0;

      // Map coordinates to canvas coordinates
      if (innerWidth / innerHeight < 16 / 9) {
        width = innerHeight * canvas.w / canvas.h;
        height = innerHeight;
      } else {
        width = innerWidth;
        height = innerWidth * canvas.h / canvas.w;
      }

      coordinates = {
        x: coordinates.x * canvas.w / width,
        y: coordinates.y * canvas.h / height
      };

      _GameEngineStateManager2.default.recordClickOrTouch(coordinates);
    }
  }, {
    key: 'handleStart',
    value: function handleStart(delayHideLanding) {
      var _this2 = this;

      if (this.state.playIntroAnim) {
        this.props.dispatch((0, _VideoStateManagement.playVideo)());
        if (delayHideLanding) {
          this.setState({
            showIntro: true
          });
          setTimeout(function () {
            _this2.setState({
              showLanding: false
            });
          }, delayHideLanding * 1000);
        } else {
          this.setState({
            showIntro: true,
            showLanding: false
          });
        }
      } else {
        this.setState({
          showIntro: false,
          showLanding: false
        });
      }
    }
  }, {
    key: 'handleFinishIntro',
    value: function handleFinishIntro(delayHideIntro) {
      var _this3 = this;

      if (delayHideIntro) {
        this.setState({
          showLanding: false,
          playIntroAnim: false
        });

        setTimeout(function () {
          _this3.setState({
            showIntro: false
          });
        }, delayHideIntro * 1000);
      } else {
        this.setState({
          showIntro: false,
          showLanding: false,
          playIntroAnim: false
        });
      }

      this.props.dispatch((0, _GameStateManagement.startLevel)());
      this.props.dispatch((0, _AppStateManagement.setIntroAnimPlayed)());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'main-page', __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, this.state.showLanding && _react2.default.createElement(_Landing2.default, { handleStart: this.handleStart, __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), this.state.showIntro && _react2.default.createElement(_Intro2.default, { onFinish: this.handleFinishIntro, __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), this.state.clientSide && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, !this.props.isGamePlaying && !this.state.showIntro && _react2.default.createElement(_GameInstructions2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), process.env.NODE_ENV !== 'production' && _react2.default.createElement(_SettingsControl2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), _react2.default.createElement(_GameIndicators2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), _react2.default.createElement(_GameEngine2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), _react2.default.createElement(_Sound2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }), _react2.default.createElement(_SVGMasking2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), _react2.default.createElement(_Video2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }), _react2.default.createElement(_LevelName2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), _react2.default.createElement(_GameProgressBar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), _react2.default.createElement(_MenuBtn2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }), _react2.default.createElement(_Menu2.default, { url: this.props.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      })));
    }
  }]);

  return GamePage;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  var selectedVideo = state.app.get('availableVideos').find(function (video) {
    return video.get('name') === state.app.get('selectedVideo');
  });

  return {
    isGamePlaying: state.game.get('isPlaying'),
    levelNb: selectedVideo.get('level'),
    videoMobileOffset: selectedVideo.get('videoMobileOffset').toJS(),
    canvasResolution: state.viewport.get('canvasResolution').toJS(),
    introAnimPlayed: state.app.get('introAnimPlayed')
  };
})(GamePage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9HYW1lUGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJWaWRlbyIsIkdhbWVFbmdpbmUiLCJTb3VuZCIsIkdhbWVJbmRpY2F0b3JzIiwiR2FtZUluc3RydWN0aW9ucyIsIkdhbWVQcm9ncmVzc0JhciIsIkxldmVsTmFtZSIsIkxhbmRpbmciLCJJbnRybyIsIk1lbnUiLCJNZW51QnRuIiwiU1ZHTWFza2luZyIsIlNldHRpbmdzQ29udHJvbCIsInNldENsaWVudFJlbmRlcmluZyIsImZldGNoUmVtYWluaW5nRGF0YSIsInNldEludHJvQW5pbVBsYXllZCIsInVwZGF0ZVVybFRvTWF0Y2hMZXZlbEFuZENpdHkiLCJzdGFydExldmVsIiwicGxheVZpZGVvIiwiaW5pdFZpZXdwb3J0TGlzdGVuZXJzIiwiU291bmRzTWFuYWdlciIsIkdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIiLCJHYW1lUGFnZSIsInByb3BzIiwicmVjb3JkQ2xpY2siLCJiaW5kIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVGaW5pc2hJbnRybyIsInN0YXRlIiwiY2xpZW50U2lkZSIsInNob3dMYW5kaW5nIiwic2hvd0ludHJvIiwicGxheUludHJvQW5pbSIsImludHJvQW5pbVBsYXllZCIsInJlcXVpcmUiLCJwb2x5ZmlsbCIsImRpc3BhdGNoIiwic2V0U3RhdGUiLCJpbml0Q2xpY2tSZWNvcmRlciIsInByZWxvYWRHYW1lU291bmRzIiwiY2xlYW5DbGlja1JlY29yZGVyIiwid2luZG93IiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvb3JkaW5hdGVzIiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiY2FudmFzIiwiY2FudmFzUmVzb2x1dGlvbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVuZGVmaW5lZCIsIndpZHRoIiwiaGVpZ2h0IiwidyIsImgiLCJyZWNvcmRDbGlja09yVG91Y2giLCJkZWxheUhpZGVMYW5kaW5nIiwic2V0VGltZW91dCIsImRlbGF5SGlkZUludHJvIiwiaXNHYW1lUGxheWluZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInVybCIsIkNvbXBvbmVudCIsInNlbGVjdGVkVmlkZW8iLCJhcHAiLCJnZXQiLCJmaW5kIiwidmlkZW8iLCJnYW1lIiwibGV2ZWxOYiIsInZpZGVvTW9iaWxlT2Zmc2V0IiwidG9KUyIsInZpZXdwb3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBZ0I7Ozs7QUFFdkIsQUFBTyxBQUFxQjs7OztBQUU1QixBQUFTLEFBQTBCOztBQUVuQyxBQUNFLEFBQ0EsQUFDSzs7QUFFUCxBQUNFLEFBQ0EsQUFDSzs7QUFFUCxBQUFTLEFBQWlCOztBQUUxQixBQUFTLEFBQTZCOztBQUV0QyxBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBNEI7Ozs7Ozs7OztJLEFBRTdCO29DQUNKOztvQkFBQSxBQUFhLE9BQU87d0NBQUE7OzBJQUFBLEFBQ1osQUFFTjs7VUFBQSxBQUFLLGNBQWMsTUFBQSxBQUFLLFlBQUwsQUFBaUIsS0FBcEMsQUFDQTtVQUFBLEFBQUssY0FBYyxNQUFBLEFBQUssWUFBTCxBQUFpQixLQUFwQyxBQUNBO1VBQUEsQUFBSyxvQkFBb0IsTUFBQSxBQUFLLGtCQUFMLEFBQXVCLEtBQWhELEFBRUE7O1VBQUEsQUFBSztrQkFBUSxBQUNDLEFB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