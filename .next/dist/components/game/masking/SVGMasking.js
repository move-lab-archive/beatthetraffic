'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Clippath = require('./svgmasking/Clippath');

var _Clippath2 = _interopRequireDefault(_Clippath);

var _SmokeSVGOverlay = require('./svgmasking/SmokeSVGOverlay');

var _SmokeSVGOverlay2 = _interopRequireDefault(_SmokeSVGOverlay);

var _resolution = require('../../../utils/resolution');

var _AppStateManagement = require('../../../statemanagement/app/AppStateManagement');

var _GameEngineStateManager = require('../../../statemanagement/app/GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/masking/SVGMasking.js';


var ENLARGE_SIZE = 25;

var initialState = {
  masks: []
};

var SVGMasking = function (_Component) {
  (0, _inherits3.default)(SVGMasking, _Component);

  function SVGMasking(props) {
    (0, _classCallCheck3.default)(this, SVGMasking);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SVGMasking.__proto__ || (0, _getPrototypeOf2.default)(SVGMasking)).call(this, props));

    _this.state = initialState;

    _this.isUpdatingMasks = false;
    _this.lastFrameDrawn = -1;
    _this.loopUpdateMasks = _this.loopUpdateMasks.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SVGMasking, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isPlaying === true && nextProps.isObjectTrackerDataFetched === true) {
        if (!this.isUpdatingMasks) {
          // console.log('Start loop update masks')
          this.isUpdatingMasks = true;
          this.loopUpdateMasks();
        }
      }

      if (nextProps.selectedVideoName !== this.props.selectedVideoName) {
        // console.log('Changed level, need to clear up masking canvas')
        this.setState(initialState);
      }

      if (nextProps.isAtBeggining !== this.props.isAtBeggining) {
        // console.log('Level reset, need to clear up masking canvas')
        this.setState(initialState);
      }
    }
  }, {
    key: 'loopUpdateMasks',
    value: function loopUpdateMasks() {
      if (this.lastFrameDrawn !== _GameEngineStateManager2.default.getCurrentFrame()) {
        this.lastFrameDrawn = _GameEngineStateManager2.default.getCurrentFrame();
        var maskedItemsThisFrame = _GameEngineStateManager2.default.getItemsMasked().map(function (mask) {
          return (0, _extends3.default)({}, mask, (0, _resolution.enlargeBbox)(mask, ENLARGE_SIZE));
        });
        this.setState({ masks: maskedItemsThisFrame });
      }
      (0, _raf2.default)(this.loopUpdateMasks.bind(this));
    }
  }, {
    key: 'getPollutionOverlayStyle',
    value: function getPollutionOverlayStyle() {
      var pollutionPercentage = this.props.nbMissed * 100 / this.props.maxMissed;
      var pollutionFillColor = void 0;
      var pollutionOpacity = 0;

      if (pollutionPercentage < 80) {
        pollutionFillColor = '#262626';
        pollutionOpacity = pollutionPercentage / 100;
      } else {
        pollutionFillColor = '#FF0000';
        pollutionOpacity = 0.4;
      }

      return {
        pollutionFillColor: pollutionFillColor,
        pollutionOpacity: pollutionOpacity
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-2952430373' + ' ' + 'mask-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('svg', {
        id: 'average-img',
        preserveAspectRatio: 'xMinYMax meet',
        viewBox: '0 0 1280 720',
        className: 'jsx-2952430373' + ' ' + 'average-img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('image', {
        xlinkHref: this.props.averageImgSrc,
        x: '0',
        y: '0',
        width: '1280px',
        height: '720px',
        clipPath: 'url(#svgPath)',
        className: 'jsx-2952430373',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_SmokeSVGOverlay2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement('defs', {
        className: 'jsx-2952430373',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_Clippath2.default, { masks: this.state.masks, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: '2952430373',
        css: '.mask-container.jsx-2952430373{width:100%;height:100%;position:absolute;top:0;left:0;will-change:auto;}.average-img.jsx-2952430373{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;overflow:hidden;}@media (min-aspect-ratio:16/9){.average-img.jsx-2952430373{width:100%;height:auto;}}@media (max-aspect-ratio:16/9){.average-img.jsx-2952430373{width:auto;height:100%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9tYXNraW5nL1NWR01hc2tpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0hvQixBQUd3QixBQVFPLEFBV0wsQUFPQSxXQXpCRCxBQW1CRSxBQU9BLE9BbEJILEtBUE8sQUFtQmxCLEFBT0EsTUFsQlksWUFQTixBQVFBLE1BUEMsQUFRQSxPQVBVLEFBUVAsVUFDTSxPQVJsQixTQVNBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FtZS9tYXNraW5nL1NWR01hc2tpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcblxuaW1wb3J0IENsaXBwYXRoIGZyb20gJy4vc3ZnbWFza2luZy9DbGlwcGF0aCdcbmltcG9ydCBTbW9rZVNWR092ZXJsYXkgZnJvbSAnLi9zdmdtYXNraW5nL1Ntb2tlU1ZHT3ZlcmxheSdcblxuaW1wb3J0IHsgZW5sYXJnZUJib3ggfSBmcm9tICcuLi8uLi8uLi91dGlscy9yZXNvbHV0aW9uJ1xuXG5pbXBvcnQgeyBnZXRBdmVyYWdlSW1nUGF0aCB9IGZyb20gJy4uLy4uLy4uL3N0YXRlbWFuYWdlbWVudC9hcHAvQXBwU3RhdGVNYW5hZ2VtZW50J1xuXG5pbXBvcnQgR2FtZUVuZ2luZVN0YXRlTWFuYWdlciBmcm9tICcuLi8uLi8uLi9zdGF0ZW1hbmFnZW1lbnQvYXBwL0dhbWVFbmdpbmVTdGF0ZU1hbmFnZXInXG5cbmNvbnN0IEVOTEFSR0VfU0laRSA9IDI1XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFza3M6IFtdXG59XG5cbmNsYXNzIFNWR01hc2tpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGVcblxuICAgIHRoaXMuaXNVcGRhdGluZ01hc2tzID0gZmFsc2VcbiAgICB0aGlzLmxhc3RGcmFtZURyYXduID0gLTFcbiAgICB0aGlzLmxvb3BVcGRhdGVNYXNrcyA9IHRoaXMubG9vcFVwZGF0ZU1hc2tzLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIGlmIChcbiAgICAgIG5leHRQcm9wcy5pc1BsYXlpbmcgPT09IHRydWUgJiZcbiAgICAgIG5leHRQcm9wcy5pc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hlZCA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgaWYgKCF0aGlzLmlzVXBkYXRpbmdNYXNrcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnU3RhcnQgbG9vcCB1cGRhdGUgbWFza3MnKVxuICAgICAgICB0aGlzLmlzVXBkYXRpbmdNYXNrcyA9IHRydWVcbiAgICAgICAgdGhpcy5sb29wVXBkYXRlTWFza3MoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuc2VsZWN0ZWRWaWRlb05hbWUgIT09IHRoaXMucHJvcHMuc2VsZWN0ZWRWaWRlb05hbWUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDaGFuZ2VkIGxldmVsLCBuZWVkIHRvIGNsZWFyIHVwIG1hc2tpbmcgY2FudmFzJylcbiAgICAgIHRoaXMuc2V0U3RhdGUoaW5pdGlhbFN0YXRlKVxuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuaXNBdEJlZ2dpbmluZyAhPT0gdGhpcy5wcm9wcy5pc0F0QmVnZ2luaW5nKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnTGV2ZWwgcmVzZXQsIG5lZWQgdG8gY2xlYXIgdXAgbWFza2luZyBjYW52YXMnKVxuICAgICAgdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgbG9vcFVwZGF0ZU1hc2tzICgpIHtcbiAgICBpZiAodGhpcy5sYXN0RnJhbWVEcmF3biAhPT0gR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5nZXRDdXJyZW50RnJhbWUoKSkge1xuICAgICAgdGhpcy5sYXN0RnJhbWVEcmF3biA9IEdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIuZ2V0Q3VycmVudEZyYW1lKClcbiAgICAgIGNvbnN0IG1hc2tlZEl0ZW1zVGhpc0ZyYW1lID0gR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5nZXRJdGVtc01hc2tlZCgpLm1hcChcbiAgICAgICAgbWFzayA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLm1hc2ssXG4gICAgICAgICAgICAuLi5lbmxhcmdlQmJveChtYXNrLCBFTkxBUkdFX1NJWkUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWFza3M6IG1hc2tlZEl0ZW1zVGhpc0ZyYW1lIH0pXG4gICAgfVxuICAgIHJhZih0aGlzLmxvb3BVcGRhdGVNYXNrcy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgZ2V0UG9sbHV0aW9uT3ZlcmxheVN0eWxlICgpIHtcbiAgICBjb25zdCBwb2xsdXRpb25QZXJjZW50YWdlID0gdGhpcy5wcm9wcy5uYk1pc3NlZCAqIDEwMCAvIHRoaXMucHJvcHMubWF4TWlzc2VkXG4gICAgbGV0IHBvbGx1dGlvbkZpbGxDb2xvclxuICAgIGxldCBwb2xsdXRpb25PcGFjaXR5ID0gMFxuXG4gICAgaWYgKHBvbGx1dGlvblBlcmNlbnRhZ2UgPCA4MCkge1xuICAgICAgcG9sbHV0aW9uRmlsbENvbG9yID0gJyMyNjI2MjYnXG4gICAgICBwb2xsdXRpb25PcGFjaXR5ID0gcG9sbHV0aW9uUGVyY2VudGFnZSAvIDEwMFxuICAgIH0gZWxzZSB7XG4gICAgICBwb2xsdXRpb25GaWxsQ29sb3IgPSAnI0ZGMDAwMCdcbiAgICAgIHBvbGx1dGlvbk9wYWNpdHkgPSAwLjRcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9sbHV0aW9uRmlsbENvbG9yLFxuICAgICAgcG9sbHV0aW9uT3BhY2l0eVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXNrLWNvbnRhaW5lcic+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBpZD0nYXZlcmFnZS1pbWcnXG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pbllNYXggbWVldCdcbiAgICAgICAgICB2aWV3Qm94PScwIDAgMTI4MCA3MjAnXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYXZlcmFnZS1pbWdgfVxuICAgICAgICA+XG4gICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICB4bGlua0hyZWY9e3RoaXMucHJvcHMuYXZlcmFnZUltZ1NyY31cbiAgICAgICAgICAgIHg9JzAnXG4gICAgICAgICAgICB5PScwJ1xuICAgICAgICAgICAgd2lkdGg9JzEyODBweCdcbiAgICAgICAgICAgIGhlaWdodD0nNzIwcHgnXG4gICAgICAgICAgICBjbGlwUGF0aD0ndXJsKCNzdmdQYXRoKSdcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTbW9rZVNWR092ZXJsYXkgLz5cbiAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUubWFza3MubWFwKG1hc2sgPT4gKFxuICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgIGtleT17YCR7bWFzay5pZH0tdW5pY29ybmB9XG4gICAgICAgICAgICAgIHg9e21hc2sueCArIG1hc2sudyAvIDIgLSB0aGlzLmdldFVuaWNvcm5TaXplKG1hc2spIC8gMn1cbiAgICAgICAgICAgICAgeT17bWFzay55ICsgbWFzay5oIC8gMiAtIHRoaXMuZ2V0VW5pY29yblNpemUobWFzaykgLyAyfVxuICAgICAgICAgICAgICB3aWR0aD17dGhpcy5nZXRVbmljb3JuU2l6ZShtYXNrKX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLmdldFVuaWNvcm5TaXplKG1hc2spfVxuICAgICAgICAgICAgICB4bGlua0hyZWY9Jy9zdGF0aWMvYXNzZXRzL2ljb25zL2ljb24tdW5pY29ybi5zdmcnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfSAqL31cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxDbGlwcGF0aCBtYXNrcz17dGhpcy5zdGF0ZS5tYXNrc30gLz5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1hc2stY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXZlcmFnZS1pbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4tYXNwZWN0LXJhdGlvOiAxNi85KSB7XG4gICAgICAgICAgICAuYXZlcmFnZS1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LWFzcGVjdC1yYXRpbzogMTYvOSkge1xuICAgICAgICAgICAgLmF2ZXJhZ2UtaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRWaWRlbyA9IHN0YXRlLmFwcC5nZXQoJ2F2YWlsYWJsZVZpZGVvcycpLmZpbmQodmlkZW8gPT4ge1xuICAgIHJldHVybiB2aWRlby5nZXQoJ25hbWUnKSA9PT0gc3RhdGUuYXBwLmdldCgnc2VsZWN0ZWRWaWRlbycpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hlZDogc3RhdGUub2JqZWN0VHJhY2tlci5nZXQoJ2ZldGNoZWQnKSxcbiAgICBpc1BsYXlpbmc6IHN0YXRlLnZpZGVvLmdldCgnaXNQbGF5aW5nJyksXG4gICAgaXNBdEJlZ2dpbmluZzogc3RhdGUudmlkZW8uZ2V0KCdpc0F0QmVnZ2luaW5nJyksXG4gICAgYXZlcmFnZUltZ1NyYzogZ2V0QXZlcmFnZUltZ1BhdGgoc2VsZWN0ZWRWaWRlby5nZXQoJ25hbWUnKSlcbiAgfVxufSkoU1ZHTWFza2luZylcbiJdfQ== */\n/*@ sourceURL=components/game/masking/SVGMasking.js */'
      }));
    }
  }]);

  return SVGMasking;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  var selectedVideo = state.app.get('availableVideos').find(function (video) {
    return video.get('name') === state.app.get('selectedVideo');
  });

  return {
    isObjectTrackerDataFetched: state.objectTracker.get('fetched'),
    isPlaying: state.video.get('isPlaying'),
    isAtBeggining: state.video.get('isAtBeggining'),
    averageImgSrc: (0, _AppStateManagement.getAverageImgPath)(selectedVideo.get('name'))
  };
})(SVGMasking);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9tYXNraW5nL1NWR01hc2tpbmcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwicmFmIiwiQ2xpcHBhdGgiLCJTbW9rZVNWR092ZXJsYXkiLCJlbmxhcmdlQmJveCIsImdldEF2ZXJhZ2VJbWdQYXRoIiwiR2FtZUVuZ2luZVN0YXRlTWFuYWdlciIsIkVOTEFSR0VfU0laRSIsImluaXRpYWxTdGF0ZSIsIm1hc2tzIiwiU1ZHTWFza2luZyIsInByb3BzIiwic3RhdGUiLCJpc1VwZGF0aW5nTWFza3MiLCJsYXN0RnJhbWVEcmF3biIsImxvb3BVcGRhdGVNYXNrcyIsImJpbmQiLCJuZXh0UHJvcHMiLCJpc1BsYXlpbmciLCJpc09iamVjdFRyYWNrZXJEYXRhRmV0Y2hlZCIsInNlbGVjdGVkVmlkZW9OYW1lIiwic2V0U3RhdGUiLCJpc0F0QmVnZ2luaW5nIiwiZ2V0Q3VycmVudEZyYW1lIiwibWFza2VkSXRlbXNUaGlzRnJhbWUiLCJnZXRJdGVtc01hc2tlZCIsIm1hcCIsIm1hc2siLCJwb2xsdXRpb25QZXJjZW50YWdlIiwibmJNaXNzZWQiLCJtYXhNaXNzZWQiLCJwb2xsdXRpb25GaWxsQ29sb3IiLCJwb2xsdXRpb25PcGFjaXR5IiwiYXZlcmFnZUltZ1NyYyIsInNlbGVjdGVkVmlkZW8iLCJhcHAiLCJnZXQiLCJmaW5kIiwidmlkZW8iLCJvYmplY3RUcmFja2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUVQLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQXFCOzs7O0FBRTVCLEFBQVMsQUFBbUI7O0FBRTVCLEFBQVMsQUFBeUI7O0FBRWxDLEFBQU8sQUFBNEI7Ozs7Ozs7OztBQUVuQyxJQUFNLGVBQU4sQUFBcUI7O0FBRXJCLElBQU07U0FBTixBQUFxQixBQUNaO0FBRFksQUFDbkI7O0lBR0ksQTtzQ0FDSjs7c0JBQUEsQUFBYSxPQUFPO3dDQUFBOzs4SUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSyxRQUFMLEFBQWEsQUFFYjs7VUFBQSxBQUFLLGtCQUFMLEFBQXVCLEFBQ3ZCO1VBQUEsQUFBSyxpQkFBaUIsQ0FBdEIsQUFBdUIsQUFDdkI7VUFBQSxBQUFLLGtCQUFrQixNQUFBLEFBQUssZ0JBQUwsQUFBcUIsS0FQMUIsQUFPbEI7V0FDRDs7Ozs7OENBRTBCLEEsV0FBVyxBQUNwQztVQUNFLFVBQUEsQUFBVSxjQUFWLEFBQXdCLFFBQ3hCLFVBQUEsQUFBVSwrQkFGWixBQUUyQyxNQUN6QyxBQUNBO1lBQUksQ0FBQyxLQUFMLEFBQVUsaUJBQWlCLEFBQ3pCO0FBQ0E7ZUFBQSxBQUFLLGtCQUFMLEFBQXVCLEFBQ3ZCO2VBQUEsQUFBSyxBQUNOO0FBQ0Y7QUFFRDs7VUFBSSxVQUFBLEFBQVUsc0JBQXNCLEtBQUEsQUFBSyxNQUF6QyxBQUErQyxtQkFBbUIsQUFDaEU7QUFDQTthQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Y7QUFFRDs7VUFBSSxVQUFBLEFBQVUsa0JBQWtCLEtBQUEsQUFBSyxNQUFyQyxBQUEyQyxlQUFlLEFBQ3hEO0FBQ0E7YUFBQSxBQUFLLFNBQUwsQUFBYyxBQUNmO0FBQ0Y7Ozs7c0NBRWtCLEFBQ2pCO1VBQUksS0FBQSxBQUFLLG1CQUFtQixpQ0FBNUIsQUFBNEIsQUFBdUIsbUJBQW1CLEFBQ3BFO2FBQUEsQUFBSyxpQkFBaUIsaUNBQXRCLEFBQXNCLEFBQXVCLEFBQzdDO1lBQU0sd0RBQXVCLEFBQXVCLGlCQUF2QixBQUF3QyxJQUNuRSxnQkFBUSxBQUNOOzRDQUFBLEFBQ0ssTUFDQSw2QkFBQSxBQUFZLE1BRmpCLEFBRUssQUFBa0IsQUFFeEI7QUFOSCxBQUE2QixBQVE3QixTQVI2QjthQVE3QixBQUFLLFNBQVMsRUFBRSxPQUFoQixBQUFjLEFBQVMsQUFDeEI7QUFDRDt5QkFBSSxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsS0FBekIsQUFBSSxBQUEwQixBQUMvQjs7OzsrQ0FFMkIsQUFDMUI7VUFBTSxzQkFBc0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLE1BQU0sS0FBQSxBQUFLLE1BQTdELEFBQW1FLEFBQ25FO1VBQUksMEJBQUosQUFDQTtVQUFJLG1CQUFKLEFBQXVCLEFBRXZCOztVQUFJLHNCQUFKLEFBQTBCLElBQUksQUFDNUI7NkJBQUEsQUFBcUIsQUFDckI7MkJBQW1CLHNCQUFuQixBQUF5QyxBQUMxQztBQUhELGFBR08sQUFDTDs2QkFBQSxBQUFxQixBQUNyQjsyQkFBQSxBQUFtQixBQUNwQjtBQUVEOzs7NEJBQU8sQUFFTDswQkFGRixBQUFPLEFBSVI7QUFKUSxBQUNMOzs7OzZCQUtNLEFBQ1I7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7WUFBQSxBQUNLLEFBQ0g7NkJBRkYsQUFFc0IsQUFDcEI7aUJBSEYsQUFHVTs0Q0FIVjs7b0JBQUE7c0JBQUEsQUFNRTtBQU5GO0FBQ0U7bUJBTWEsS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3RCO1dBRkYsQUFFSSxBQUNGO1dBSEYsQUFHSSxBQUNGO2VBSkYsQUFJUSxBQUNOO2dCQUxGLEFBS1MsQUFDUDtrQkFORixBQU1XO21CQU5YOztvQkFBQTtzQkFORixBQU1FLEFBUUE7QUFSQTtBQUNFLDBCQU9GLEFBQUM7O29CQUFEO3NCQWRGLEFBY0UsQUFXQTtBQVhBO0FBQUEsMEJBV0EsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxvQ0FBUyxPQUFPLEtBQUEsQUFBSyxNQUF0QixBQUE0QjtvQkFBNUI7c0JBM0JOLEFBQ0UsQUF5QkUsQUFDRTtBQUFBOztpQkEzQk47YUFERixBQUNFLEFBaUVIO0FBakVHOzs7OztBLEFBdkVtQixBQTJJekI7OzJDQUF1QixpQkFBUyxBQUM5QjtNQUFNLHNCQUFnQixBQUFNLElBQU4sQUFBVSxJQUFWLEFBQWMsbUJBQWQsQUFBaUMsS0FBSyxpQkFBUyxBQUNuRTtXQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsWUFBWSxNQUFBLEFBQU0sSUFBTixBQUFVLElBQXZDLEFBQTZCLEFBQWMsQUFDNUM7QUFGRCxBQUFzQixBQUl0QixHQUpzQjs7O2dDQUtRLE1BQUEsQUFBTSxjQUFOLEFBQW9CLElBRDNDLEFBQ3VCLEFBQXdCLEFBQ3BEO2VBQVcsTUFBQSxBQUFNLE1BQU4sQUFBWSxJQUZsQixBQUVNLEFBQWdCLEFBQzNCO21CQUFlLE1BQUEsQUFBTSxNQUFOLEFBQVksSUFIdEIsQUFHVSxBQUFnQixBQUMvQjttQkFBZSwyQ0FBa0IsY0FBQSxBQUFjLElBSmpELEFBQU8sQUFJVSxBQUFrQixBQUFrQixBQUV0RDtBQU5RLEFBQ0w7QUFOVyxDQUFBLEVBQWYsQUFBZSxBQVdaIiwiZmlsZSI6IlNWR01hc2tpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==