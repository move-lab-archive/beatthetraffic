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

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _VideoStateManagement = require('../../../statemanagement/app/VideoStateManagement');

var _AppStateManagement = require('../../../statemanagement/app/AppStateManagement');

var _GameEngineStateManager = require('../../../statemanagement/app/GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/video/Video.js';


var Video = function (_Component) {
  (0, _inherits3.default)(Video, _Component);

  function Video(props) {
    (0, _classCallCheck3.default)(this, Video);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).call(this, props));

    _this.monitorFrames = _this.monitorFrames.bind(_this);
    _this.registerListeners = _this.registerListeners.bind(_this);
    _this.cleanListeners = _this.cleanListeners.bind(_this);
    _this.handleCanPlay = _this.handleCanPlay.bind(_this);
    _this.handlePlay = _this.handlePlay.bind(_this);
    _this.handlePause = _this.handlePause.bind(_this);
    _this.handleEnded = _this.handleEnded.bind(_this);
    _this.handleFirstFrameLoaded = _this.handleFirstFrameLoaded.bind(_this);
    _this.isMonitoring = false;
    _this.lastCurrentTime = 0;

    _this.state = {
      canRenderVideo: false
    };
    return _this;
  }

  (0, _createClass3.default)(Video, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      // We want to re-render the video item if the firstFrameLoaded has loaded
      // to mask the first frame image trick
      if (nextProps.firstFrameLoaded !== this.props.firstFrameLoaded) {
        // console.log('firstFrameLoaded, re-render')
        return true;
      } else if (nextProps.src !== this.props.src || nextState.canRenderVideo !== this.state.canRenderVideo) {
        // We want to re-render the video item if the src has changed
        // console.log('Render video')
        setTimeout(function () {
          window.scroll({
            top: _this2.props.videoMobileOffset.y,
            left: _this2.props.videoMobileOffset.x,
            behavior: 'smooth'
          });
        }, 500);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (!this.videoEl) {
        // console.log('Video element ref not defined')
        return;
      }
      // Pilot videoEl from the props changes
      if (this.props.isPlaying !== newProps.isPlaying && newProps.isPlaying === true) {
        // console.log('play item')
        this.videoEl.play();
      }

      if (this.props.isPlaying !== newProps.isPlaying && newProps.isPlaying === false) {
        this.videoEl.pause();
      }

      if (this.props.isAtBeggining !== newProps.isAtBeggining) {
        this.videoEl.currentTime = 0;
        this.nextLevelFirstFramePrefetched = false;
      }
    }
  }, {
    key: 'handleCanPlay',
    value: function handleCanPlay() {
      // console.log('video can play')
      this.props.dispatch((0, _VideoStateManagement.setVideoReady)({
        duration: this.videoEl.duration
      }));
      // Cancel autoplay
      // we set autoplay as a hack because safari mobile doesn't allow
      // to play without user even if not (so we autoplay-pause, then play)
      if (!this.props.isPlaying) {
        this.videoEl.pause();
      }
    }
  }, {
    key: 'handlePlay',
    value: function handlePlay() {
      // console.log('playing')
      // If not already monitoring
      if (!this.isMonitoring) {
        // console.log('Start monitoring frames')
        this.isMonitoring = true;
        this.monitorFrames();
      }
    }
  }, {
    key: 'handlePause',
    value: function handlePause() {
      // console.log('video paused')
    }
  }, {
    key: 'handleEnded',
    value: function handleEnded() {
      // console.log('video ended')
      this.props.dispatch((0, _VideoStateManagement.setVideoEnded)());
    }
  }, {
    key: 'handleFirstFrameLoaded',
    value: function handleFirstFrameLoaded() {
      // console.log('first frame loaded')
      this.props.dispatch((0, _VideoStateManagement.firstFrameLoaded)());
    }
  }, {
    key: 'cleanListeners',
    value: function cleanListeners(el) {
      // console.log('Clean previous listeners')
      el.removeEventListener('canplay', this.handleCanPlay);
      el.removeEventListener('play', this.handlePlay);
      el.removeEventListener('pause', this.handlePause);
      el.removeEventListener('ended', this.handleEnded);
      el.removeEventListener('loadeddata', this.handleFirstFrameLoaded);
    }
  }, {
    key: 'registerListeners',
    value: function registerListeners(el) {
      if (this.videoEl) {
        // Clean previous listeners
        this.cleanListeners(this.videoEl);
      }
      this.videoEl = el;
      if (this.videoEl) {
        // console.log('registerListeners')
        this.videoEl.addEventListener('canplay', this.handleCanPlay);
        this.videoEl.addEventListener('play', this.handlePlay);
        this.videoEl.addEventListener('pause', this.handlePause);
        this.videoEl.addEventListener('ended', this.handleEnded);
        this.videoEl.addEventListener('loadeddata', this.handleFirstFrameLoaded);
      }
    }
  }, {
    key: 'monitorFrames',
    value: function monitorFrames() {
      if (!this.props.isPlaying || this.isMonitoring === false) {
        // console.log('cancel monitoring')
        this.isMonitoring = false;
        return;
      }
      var newCurrentFrame = Math.round(this.videoEl.currentTime * this.props.videoFPS);
      if (_GameEngineStateManager2.default.getCurrentFrame() !== newCurrentFrame) {
        _GameEngineStateManager2.default.setCurrentFrame(newCurrentFrame);
        _GameEngineStateManager2.default.setCurrentTime(this.videoEl.currentTime);

        // Debug method to end the level 1 sooner to work on the level 1 -> level 2 transition
        // OR to work on YOU WON, you can load http://localhost:3000/stuttgart1/level/3
        // ex: end the level 50s before it finishes
        // if (this.props.duration - this.videoEl.currentTime < 50) {
        //   this.handleEnded()
        // }

        // If currentTime is 10s before end of video, prefetch next level first frame
        if (!this.nextLevelFirstFramePrefetched && this.props.duration - this.videoEl.currentTime < 10) {
          this.nextLevelFirstFramePrefetched = true;
          this.props.dispatch((0, _VideoStateManagement.prefetchNextLevelFirstFrame)());
        }
      }
      (0, _raf2.default)(this.monitorFrames);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.videoEl) {
        this.cleanListeners(this.videoEl);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        canRenderVideo: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-1492360905' + ' ' + 'video-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, !this.props.firstFrameLoaded && _react2.default.createElement('img', { src: this.props.srcFirstFrame, className: 'jsx-1492360905' + ' ' + 'img-firstframe',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), this.props.src && this.state.canRenderVideo && _react2.default.createElement('video', {
        key: this.props.src,
        ref: function ref(el) {
          _this3.registerListeners(el);
        },

        muted: true,
        playsInline: true,
        autoPlay: true,
        className: 'jsx-1492360905' + ' ' + 'video',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, _react2.default.createElement('source', { src: this.props.src, type: 'video/mp4', className: 'jsx-1492360905',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }), 'Your browser does not support the video tag.'), _react2.default.createElement(_style2.default, {
        styleId: '1492360905',
        css: '.img-firstframe.jsx-1492360905{position:absolute;top:0;left:0;z-index:2;}.video.jsx-1492360905{display:block;position:absolute;top:0;left:0;}.video-container.jsx-1492360905{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (min-aspect-ratio:16/9){.video.jsx-1492360905,.img-firstframe.jsx-1492360905{width:100%;height:auto;}}@media (max-aspect-ratio:16/9){.video.jsx-1492360905,.img-firstframe.jsx-1492360905{width:auto;height:100%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS92aWRlby9WaWRlby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Tm9CLEFBRytCLEFBT0osQUFPRCxBQVVBLEFBUUEsV0FQQyxBQVFBLEdBekJJLElBUFosS0F5Qk4sQUFRQSxDQWhDTyxPQUNHLENBTUosTUFDQyxHQU5ULElBT0EsNkJBSWMsWUFDRCxXQUNZLG1HQUNKLDZGQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL2dhbWUvdmlkZW8vVmlkZW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcblxuaW1wb3J0IHtcbiAgc2V0VmlkZW9SZWFkeSxcbiAgc2V0VmlkZW9FbmRlZCxcbiAgZmlyc3RGcmFtZUxvYWRlZCxcbiAgcHJlZmV0Y2hOZXh0TGV2ZWxGaXJzdEZyYW1lXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlbWFuYWdlbWVudC9hcHAvVmlkZW9TdGF0ZU1hbmFnZW1lbnQnXG5cbmltcG9ydCB7IGdldEZpcnN0RnJhbWVJbWdQYXRoIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGVtYW5hZ2VtZW50L2FwcC9BcHBTdGF0ZU1hbmFnZW1lbnQnXG5cbmltcG9ydCBHYW1lRW5naW5lU3RhdGVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL3N0YXRlbWFuYWdlbWVudC9hcHAvR2FtZUVuZ2luZVN0YXRlTWFuYWdlcidcblxuY2xhc3MgVmlkZW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm1vbml0b3JGcmFtZXMgPSB0aGlzLm1vbml0b3JGcmFtZXMuYmluZCh0aGlzKVxuICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMgPSB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzLmJpbmQodGhpcylcbiAgICB0aGlzLmNsZWFuTGlzdGVuZXJzID0gdGhpcy5jbGVhbkxpc3RlbmVycy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDYW5QbGF5ID0gdGhpcy5oYW5kbGVDYW5QbGF5LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVBsYXkgPSB0aGlzLmhhbmRsZVBsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUGF1c2UgPSB0aGlzLmhhbmRsZVBhdXNlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUVuZGVkID0gdGhpcy5oYW5kbGVFbmRlZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVGaXJzdEZyYW1lTG9hZGVkID0gdGhpcy5oYW5kbGVGaXJzdEZyYW1lTG9hZGVkLmJpbmQodGhpcylcbiAgICB0aGlzLmlzTW9uaXRvcmluZyA9IGZhbHNlXG4gICAgdGhpcy5sYXN0Q3VycmVudFRpbWUgPSAwXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2FuUmVuZGVyVmlkZW86IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcmUtcmVuZGVyIHRoZSB2aWRlbyBpdGVtIGlmIHRoZSBmaXJzdEZyYW1lTG9hZGVkIGhhcyBsb2FkZWRcbiAgICAvLyB0byBtYXNrIHRoZSBmaXJzdCBmcmFtZSBpbWFnZSB0cmlja1xuICAgIGlmIChuZXh0UHJvcHMuZmlyc3RGcmFtZUxvYWRlZCAhPT0gdGhpcy5wcm9wcy5maXJzdEZyYW1lTG9hZGVkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZmlyc3RGcmFtZUxvYWRlZCwgcmUtcmVuZGVyJylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG5leHRQcm9wcy5zcmMgIT09IHRoaXMucHJvcHMuc3JjIHx8XG4gICAgICBuZXh0U3RhdGUuY2FuUmVuZGVyVmlkZW8gIT09IHRoaXMuc3RhdGUuY2FuUmVuZGVyVmlkZW9cbiAgICApIHtcbiAgICAgIC8vIFdlIHdhbnQgdG8gcmUtcmVuZGVyIHRoZSB2aWRlbyBpdGVtIGlmIHRoZSBzcmMgaGFzIGNoYW5nZWRcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdSZW5kZXIgdmlkZW8nKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoe1xuICAgICAgICAgIHRvcDogdGhpcy5wcm9wcy52aWRlb01vYmlsZU9mZnNldC55LFxuICAgICAgICAgIGxlZnQ6IHRoaXMucHJvcHMudmlkZW9Nb2JpbGVPZmZzZXQueCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSlcbiAgICAgIH0sIDUwMClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgaWYgKCF0aGlzLnZpZGVvRWwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdWaWRlbyBlbGVtZW50IHJlZiBub3QgZGVmaW5lZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gUGlsb3QgdmlkZW9FbCBmcm9tIHRoZSBwcm9wcyBjaGFuZ2VzXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5pc1BsYXlpbmcgIT09IG5ld1Byb3BzLmlzUGxheWluZyAmJlxuICAgICAgbmV3UHJvcHMuaXNQbGF5aW5nID09PSB0cnVlXG4gICAgKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygncGxheSBpdGVtJylcbiAgICAgIHRoaXMudmlkZW9FbC5wbGF5KClcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLmlzUGxheWluZyAhPT0gbmV3UHJvcHMuaXNQbGF5aW5nICYmXG4gICAgICBuZXdQcm9wcy5pc1BsYXlpbmcgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICB0aGlzLnZpZGVvRWwucGF1c2UoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmlzQXRCZWdnaW5pbmcgIT09IG5ld1Byb3BzLmlzQXRCZWdnaW5pbmcpIHtcbiAgICAgIHRoaXMudmlkZW9FbC5jdXJyZW50VGltZSA9IDBcbiAgICAgIHRoaXMubmV4dExldmVsRmlyc3RGcmFtZVByZWZldGNoZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNhblBsYXkgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlbyBjYW4gcGxheScpXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIHNldFZpZGVvUmVhZHkoe1xuICAgICAgICBkdXJhdGlvbjogdGhpcy52aWRlb0VsLmR1cmF0aW9uXG4gICAgICB9KVxuICAgIClcbiAgICAvLyBDYW5jZWwgYXV0b3BsYXlcbiAgICAvLyB3ZSBzZXQgYXV0b3BsYXkgYXMgYSBoYWNrIGJlY2F1c2Ugc2FmYXJpIG1vYmlsZSBkb2Vzbid0IGFsbG93XG4gICAgLy8gdG8gcGxheSB3aXRob3V0IHVzZXIgZXZlbiBpZiBub3QgKHNvIHdlIGF1dG9wbGF5LXBhdXNlLCB0aGVuIHBsYXkpXG4gICAgaWYgKCF0aGlzLnByb3BzLmlzUGxheWluZykge1xuICAgICAgdGhpcy52aWRlb0VsLnBhdXNlKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQbGF5ICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncGxheWluZycpXG4gICAgLy8gSWYgbm90IGFscmVhZHkgbW9uaXRvcmluZ1xuICAgIGlmICghdGhpcy5pc01vbml0b3JpbmcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdTdGFydCBtb25pdG9yaW5nIGZyYW1lcycpXG4gICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IHRydWVcbiAgICAgIHRoaXMubW9uaXRvckZyYW1lcygpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGF1c2UgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlbyBwYXVzZWQnKVxuICB9XG5cbiAgaGFuZGxlRW5kZWQgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlbyBlbmRlZCcpXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRWaWRlb0VuZGVkKCkpXG4gIH1cblxuICBoYW5kbGVGaXJzdEZyYW1lTG9hZGVkICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZmlyc3QgZnJhbWUgbG9hZGVkJylcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZpcnN0RnJhbWVMb2FkZWQoKSlcbiAgfVxuXG4gIGNsZWFuTGlzdGVuZXJzIChlbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdDbGVhbiBwcmV2aW91cyBsaXN0ZW5lcnMnKVxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCB0aGlzLmhhbmRsZUNhblBsYXkpXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGxheScsIHRoaXMuaGFuZGxlUGxheSlcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMuaGFuZGxlUGF1c2UpXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCB0aGlzLmhhbmRsZUVuZGVkKVxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCB0aGlzLmhhbmRsZUZpcnN0RnJhbWVMb2FkZWQpXG4gIH1cblxuICByZWdpc3Rlckxpc3RlbmVycyAoZWwpIHtcbiAgICBpZiAodGhpcy52aWRlb0VsKSB7XG4gICAgICAvLyBDbGVhbiBwcmV2aW91cyBsaXN0ZW5lcnNcbiAgICAgIHRoaXMuY2xlYW5MaXN0ZW5lcnModGhpcy52aWRlb0VsKVxuICAgIH1cbiAgICB0aGlzLnZpZGVvRWwgPSBlbFxuICAgIGlmICh0aGlzLnZpZGVvRWwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWdpc3Rlckxpc3RlbmVycycpXG4gICAgICB0aGlzLnZpZGVvRWwuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMuaGFuZGxlQ2FuUGxheSlcbiAgICAgIHRoaXMudmlkZW9FbC5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgdGhpcy5oYW5kbGVQbGF5KVxuICAgICAgdGhpcy52aWRlb0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdGhpcy5oYW5kbGVQYXVzZSlcbiAgICAgIHRoaXMudmlkZW9FbC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHRoaXMuaGFuZGxlRW5kZWQpXG4gICAgICB0aGlzLnZpZGVvRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIHRoaXMuaGFuZGxlRmlyc3RGcmFtZUxvYWRlZClcbiAgICB9XG4gIH1cblxuICBtb25pdG9yRnJhbWVzICgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNQbGF5aW5nIHx8IHRoaXMuaXNNb25pdG9yaW5nID09PSBmYWxzZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NhbmNlbCBtb25pdG9yaW5nJylcbiAgICAgIHRoaXMuaXNNb25pdG9yaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgbmV3Q3VycmVudEZyYW1lID0gTWF0aC5yb3VuZChcbiAgICAgIHRoaXMudmlkZW9FbC5jdXJyZW50VGltZSAqIHRoaXMucHJvcHMudmlkZW9GUFNcbiAgICApXG4gICAgaWYgKEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuZ2V0Q3VycmVudEZyYW1lKCkgIT09IG5ld0N1cnJlbnRGcmFtZSkge1xuICAgICAgR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5zZXRDdXJyZW50RnJhbWUobmV3Q3VycmVudEZyYW1lKVxuICAgICAgR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5zZXRDdXJyZW50VGltZSh0aGlzLnZpZGVvRWwuY3VycmVudFRpbWUpXG5cbiAgICAgIC8vIERlYnVnIG1ldGhvZCB0byBlbmQgdGhlIGxldmVsIDEgc29vbmVyIHRvIHdvcmsgb24gdGhlIGxldmVsIDEgLT4gbGV2ZWwgMiB0cmFuc2l0aW9uXG4gICAgICAvLyBPUiB0byB3b3JrIG9uIFlPVSBXT04sIHlvdSBjYW4gbG9hZCBodHRwOi8vbG9jYWxob3N0OjMwMDAvc3R1dHRnYXJ0MS9sZXZlbC8zXG4gICAgICAvLyBleDogZW5kIHRoZSBsZXZlbCA1MHMgYmVmb3JlIGl0IGZpbmlzaGVzXG4gICAgICAvLyBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbiAtIHRoaXMudmlkZW9FbC5jdXJyZW50VGltZSA8IDUwKSB7XG4gICAgICAvLyAgIHRoaXMuaGFuZGxlRW5kZWQoKVxuICAgICAgLy8gfVxuXG4gICAgICAvLyBJZiBjdXJyZW50VGltZSBpcyAxMHMgYmVmb3JlIGVuZCBvZiB2aWRlbywgcHJlZmV0Y2ggbmV4dCBsZXZlbCBmaXJzdCBmcmFtZVxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5uZXh0TGV2ZWxGaXJzdEZyYW1lUHJlZmV0Y2hlZCAmJlxuICAgICAgICB0aGlzLnByb3BzLmR1cmF0aW9uIC0gdGhpcy52aWRlb0VsLmN1cnJlbnRUaW1lIDwgMTBcbiAgICAgICkge1xuICAgICAgICB0aGlzLm5leHRMZXZlbEZpcnN0RnJhbWVQcmVmZXRjaGVkID0gdHJ1ZVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHByZWZldGNoTmV4dExldmVsRmlyc3RGcmFtZSgpKVxuICAgICAgfVxuICAgIH1cbiAgICByYWYodGhpcy5tb25pdG9yRnJhbWVzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGlmICh0aGlzLnZpZGVvRWwpIHtcbiAgICAgIHRoaXMuY2xlYW5MaXN0ZW5lcnModGhpcy52aWRlb0VsKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhblJlbmRlclZpZGVvOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWRlby1jb250YWluZXInPlxuICAgICAgICB7IXRoaXMucHJvcHMuZmlyc3RGcmFtZUxvYWRlZCAmJiAoXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZy1maXJzdGZyYW1lJyBzcmM9e3RoaXMucHJvcHMuc3JjRmlyc3RGcmFtZX0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMucHJvcHMuc3JjICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jYW5SZW5kZXJWaWRlbyAmJiAoXG4gICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLnNyY31cbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycyhlbClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd2aWRlbydcbiAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e3RoaXMucHJvcHMuc3JjfSB0eXBlPSd2aWRlby9tcDQnIC8+XG4gICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXG4gICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW1nLWZpcnN0ZnJhbWUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZpZGVvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi1hc3BlY3QtcmF0aW86IDE2LzkpIHtcbiAgICAgICAgICAgIC52aWRlbyxcbiAgICAgICAgICAgIC5pbWctZmlyc3RmcmFtZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtYXNwZWN0LXJhdGlvOiAxNi85KSB7XG4gICAgICAgICAgICAudmlkZW8sXG4gICAgICAgICAgICAuaW1nLWZpcnN0ZnJhbWUge1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4ge1xuICBjb25zdCBzZWxlY3RlZFZpZGVvID0gc3RhdGUuYXBwLmdldCgnYXZhaWxhYmxlVmlkZW9zJykuZmluZCh2aWRlbyA9PiB7XG4gICAgcmV0dXJuIHZpZGVvLmdldCgnbmFtZScpID09PSBzdGF0ZS5hcHAuZ2V0KCdzZWxlY3RlZFZpZGVvJylcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGlzUGxheWluZzogc3RhdGUudmlkZW8uZ2V0KCdpc1BsYXlpbmcnKSxcbiAgICBpc0F0QmVnZ2luaW5nOiBzdGF0ZS52aWRlby5nZXQoJ2lzQXRCZWdnaW5pbmcnKSxcbiAgICBzcmM6IHN0YXRlLnZpZGVvLmdldCgnc3JjJyksXG4gICAgY3VycmVudFRpbWU6IHN0YXRlLnZpZGVvLmdldCgnY3VycmVudFRpbWUnKSxcbiAgICBkdXJhdGlvbjogc3RhdGUudmlkZW8uZ2V0KCdkdXJhdGlvbicpLFxuICAgIHZpZGVvRlBTOiBzZWxlY3RlZFZpZGVvLmdldCgndmlkZW9GUFMnKSxcbiAgICBmaXJzdEZyYW1lTG9hZGVkOiBzdGF0ZS52aWRlby5nZXQoJ2ZpcnN0RnJhbWVMb2FkZWQnKSxcbiAgICBzcmNGaXJzdEZyYW1lOiBnZXRGaXJzdEZyYW1lSW1nUGF0aChzZWxlY3RlZFZpZGVvLmdldCgnbmFtZScpKSxcbiAgICB2aWRlb01vYmlsZU9mZnNldDogc2VsZWN0ZWRWaWRlby5nZXQoJ3ZpZGVvTW9iaWxlT2Zmc2V0JykudG9KUygpXG4gIH1cbn0pKFZpZGVvKVxuIl19 */\n/*@ sourceURL=components/game/video/Video.js */'
      }));
    }
  }]);

  return Video;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  var selectedVideo = state.app.get('availableVideos').find(function (video) {
    return video.get('name') === state.app.get('selectedVideo');
  });

  return {
    isPlaying: state.video.get('isPlaying'),
    isAtBeggining: state.video.get('isAtBeggining'),
    src: state.video.get('src'),
    currentTime: state.video.get('currentTime'),
    duration: state.video.get('duration'),
    videoFPS: selectedVideo.get('videoFPS'),
    firstFrameLoaded: state.video.get('firstFrameLoaded'),
    srcFirstFrame: (0, _AppStateManagement.getFirstFrameImgPath)(selectedVideo.get('name')),
    videoMobileOffset: selectedVideo.get('videoMobileOffset').toJS()
  };
})(Video);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS92aWRlby9WaWRlby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJyYWYiLCJzZXRWaWRlb1JlYWR5Iiwic2V0VmlkZW9FbmRlZCIsImZpcnN0RnJhbWVMb2FkZWQiLCJwcmVmZXRjaE5leHRMZXZlbEZpcnN0RnJhbWUiLCJnZXRGaXJzdEZyYW1lSW1nUGF0aCIsIkdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIiLCJWaWRlbyIsInByb3BzIiwibW9uaXRvckZyYW1lcyIsImJpbmQiLCJyZWdpc3Rlckxpc3RlbmVycyIsImNsZWFuTGlzdGVuZXJzIiwiaGFuZGxlQ2FuUGxheSIsImhhbmRsZVBsYXkiLCJoYW5kbGVQYXVzZSIsImhhbmRsZUVuZGVkIiwiaGFuZGxlRmlyc3RGcmFtZUxvYWRlZCIsImlzTW9uaXRvcmluZyIsImxhc3RDdXJyZW50VGltZSIsInN0YXRlIiwiY2FuUmVuZGVyVmlkZW8iLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzcmMiLCJzZXRUaW1lb3V0Iiwid2luZG93Iiwic2Nyb2xsIiwidG9wIiwidmlkZW9Nb2JpbGVPZmZzZXQiLCJ5IiwibGVmdCIsIngiLCJiZWhhdmlvciIsIm5ld1Byb3BzIiwidmlkZW9FbCIsImlzUGxheWluZyIsInBsYXkiLCJwYXVzZSIsImlzQXRCZWdnaW5pbmciLCJjdXJyZW50VGltZSIsIm5leHRMZXZlbEZpcnN0RnJhbWVQcmVmZXRjaGVkIiwiZGlzcGF0Y2giLCJkdXJhdGlvbiIsImVsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdDdXJyZW50RnJhbWUiLCJNYXRoIiwicm91bmQiLCJ2aWRlb0ZQUyIsImdldEN1cnJlbnRGcmFtZSIsInNldEN1cnJlbnRGcmFtZSIsInNldEN1cnJlbnRUaW1lIiwic2V0U3RhdGUiLCJzcmNGaXJzdEZyYW1lIiwic2VsZWN0ZWRWaWRlbyIsImFwcCIsImdldCIsImZpbmQiLCJ2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T0FDVixLQUFBLEFBQUssTUFETixBQUNZLGtDQUNULGNBQUE7YUFDTyxLQUFBLEFBQUssTUFEWixBQUNrQixBQUNoQjthQUFLLGlCQUFNLEFBQ1Q7aUJBQUEsQUFBSyxrQkFBTCxBQUF1QixBQUN4QjtBQUpILEFBTUU7O2VBTkYsQUFPRTtxQkFQRixBQVFFO2tCQVJGOzRDQUFBLEFBS1k7O29CQUxaO3NCQUFBLEFBVUU7QUFWRjtBQUNFLE9BREYsNENBVVUsS0FBSyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsS0FBSyxNQUE3QixBQUFrQyx3QkFBbEM7O29CQUFBO3NCQVZGLEFBVUU7QUFBQTtVQWhCUixBQU1NO2lCQU5OO2FBREYsQUFDRSxBQTZESDtBQTdERzs7Ozs7QUFyTGMsQSxBQXFQcEI7OzJDQUF1QixpQkFBUyxBQUM5QjtNQUFNLHNCQUFnQixBQUFNLElBQU4sQUFBVSxJQUFWLEFBQWMsbUJBQWQsQUFBaUMsS0FBSyxpQkFBUyxBQUNuRTtXQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsWUFBWSxNQUFBLEFBQU0sSUFBTixBQUFVLElBQXZDLEFBQTZCLEFBQWMsQUFDNUM7QUFGRCxBQUFzQixBQUl0QixHQUpzQjs7O2VBS1QsTUFBQSxBQUFNLE1BQU4sQUFBWSxJQURsQixBQUNNLEFBQWdCLEFBQzNCO21CQUFlLE1BQUEsQUFBTSxNQUFOLEFBQVksSUFGdEIsQUFFVSxBQUFnQixBQUMvQjtTQUFLLE1BQUEsQUFBTSxNQUFOLEFBQVksSUFIWixBQUdBLEFBQWdCLEFBQ3JCO2lCQUFhLE1BQUEsQUFBTSxNQUFOLEFBQVksSUFKcEIsQUFJUSxBQUFnQixBQUM3QjtjQUFVLE1BQUEsQUFBTSxNQUFOLEFBQVksSUFMakIsQUFLSyxBQUFnQixBQUMxQjtjQUFVLGNBQUEsQUFBYyxJQU5uQixBQU1LLEFBQWtCLEFBQzVCO3NCQUFrQixNQUFBLEFBQU0sTUFBTixBQUFZLElBUHpCLEFBT2EsQUFBZ0IsQUFDbEM7bUJBQWUsOENBQXFCLGNBQUEsQUFBYyxJQVI3QyxBQVFVLEFBQXFCLEFBQWtCLEFBQ3REO3VCQUFtQixjQUFBLEFBQWMsSUFBZCxBQUFrQixxQkFUdkMsQUFBTyxBQVNjLEFBQXVDLEFBRTdEO0FBWFEsQUFDTDtBQU5XLENBQUEsRUFBZixBQUFlLEFBZ0JaIiwiZmlsZSI6IlZpZGVvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=