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

var _gsap = require('gsap');

var _SoundsManager = require('../../../statemanagement/app/SoundsManager');

var _SoundsManager2 = _interopRequireDefault(_SoundsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/Intro.js';


var Intro = function (_Component) {
  (0, _inherits3.default)(Intro, _Component);

  function Intro() {
    (0, _classCallCheck3.default)(this, Intro);

    return (0, _possibleConstructorReturn3.default)(this, (Intro.__proto__ || (0, _getPrototypeOf2.default)(Intro)).apply(this, arguments));
  }

  (0, _createClass3.default)(Intro, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _SoundsManager2.default.playSound('intro');

      var timeline = new _gsap.TimelineLite({
        onComplete: function onComplete() {
          // Here we can specify a delay before the Intro Div is removed from the dom
          // trick because it takes also 1 sec for the video to start once we dispatch the action
          var delayOnAnimateOut = 1;
          _this2.props.onFinish(delayOnAnimateOut);
        }
      });

      timeline.to('.beat', 0, { opacity: 1 }, '+=0.5').to('.beat', 0, { opacity: 0 }, '+=1').to('.the', 0, { opacity: 1 }).to('.the', 0, { opacity: 0 }, '+=1').to('.traffic', 0, { opacity: 1 }).to('.traffic', 0, { opacity: 0 }, '+=1').to('.location', 0, { opacity: 1 }).to('.location', 0, { opacity: 0 }, '+=1').to('.logo', 0, { opacity: 1 }).to('.logo', 0, { opacity: 0 }, '+=1').to('.catch', 0, { opacity: 1 }, '+=0.85').to('.catch', 0, { opacity: 0 }, '+=2');

      timeline.play();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-821496138' + ' ' + 'game-landing',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-821496138' + ' ' + 'title beat',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Beat'), _react2.default.createElement('div', {
        className: 'jsx-821496138' + ' ' + 'title the',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'The'), _react2.default.createElement('div', {
        className: 'jsx-821496138' + ' ' + 'title traffic',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Traffic'), _react2.default.createElement('div', {
        className: 'jsx-821496138' + ' ' + 'title location',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Stutt', _react2.default.createElement('br', {
        className: 'jsx-821496138',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), 'gart'), _react2.default.createElement('div', {
        className: 'jsx-821496138' + ' ' + 'title logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('img', { src: '/static/assets/logo/logo-moovel-white.svg', className: 'jsx-821496138',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-821496138' + ' ' + 'title catch',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Click the cars'), _react2.default.createElement(_style2.default, {
        styleId: '821496138',
        css: '.game-landing.jsx-821496138{position:fixed;top:0;right:0;left:0;bottom:0;z-index:10;background:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-user-drag:none;}.title.jsx-821496138{position:fixed;top:48%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:9rem;line-height:8rem;color:yellow;max-width:95%;word-wrap:break-word;text-align:center;opacity:0;text-transform:uppercase;}.beat.jsx-821496138{font-size:15rem;}.the.jsx-821496138{font-size:19rem;}.traffic.jsx-821496138{font-size:9rem;}.location.jsx-821496138{font-size:12rem;line-height:12rem;}.catch.jsx-821496138{font-size:8rem;line-height:8.3rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9JbnRyby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG9CLEFBRzRCLEFBYUEsQUFlQyxBQUdBLEFBR0QsQUFHQyxBQUlELGVBeENULEFBYUUsQUFxQlYsQUFPcUIsQ0FickIsQUFHQSxBQU1vQixLQXBDVixFQWFDLE1BWkYsR0FheUIsRUF1QmxDLEFBSUEsRUF2Q1csU0FDRSxXQUNZLHVCQUNOLDBEQVVGLGVBQ0UsWUFWVSxLQVdkLGFBQ0MsU0FYUyxLQVlGLGtCQVh2QixHQVlvQixrQkFDUixVQUNlLHlCQUMzQiIsImZpbGUiOiJjb21wb25lbnRzL2dhbWUvdWkvSW50cm8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFRpbWVsaW5lTGl0ZSB9IGZyb20gJ2dzYXAnXG5pbXBvcnQgU291bmRzTWFuYWdlciBmcm9tICcuLi8uLi8uLi9zdGF0ZW1hbmFnZW1lbnQvYXBwL1NvdW5kc01hbmFnZXInXG5cbmNsYXNzIEludHJvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIFNvdW5kc01hbmFnZXIucGxheVNvdW5kKCdpbnRybycpXG5cbiAgICBjb25zdCB0aW1lbGluZSA9IG5ldyBUaW1lbGluZUxpdGUoe1xuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAvLyBIZXJlIHdlIGNhbiBzcGVjaWZ5IGEgZGVsYXkgYmVmb3JlIHRoZSBJbnRybyBEaXYgaXMgcmVtb3ZlZCBmcm9tIHRoZSBkb21cbiAgICAgICAgLy8gdHJpY2sgYmVjYXVzZSBpdCB0YWtlcyBhbHNvIDEgc2VjIGZvciB0aGUgdmlkZW8gdG8gc3RhcnQgb25jZSB3ZSBkaXNwYXRjaCB0aGUgYWN0aW9uXG4gICAgICAgIGNvbnN0IGRlbGF5T25BbmltYXRlT3V0ID0gMVxuICAgICAgICB0aGlzLnByb3BzLm9uRmluaXNoKGRlbGF5T25BbmltYXRlT3V0KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aW1lbGluZVxuICAgICAgLnRvKCcuYmVhdCcsIDAsIHsgb3BhY2l0eTogMSB9LCAnKz0wLjUnKVxuICAgICAgLnRvKCcuYmVhdCcsIDAsIHsgb3BhY2l0eTogMCB9LCAnKz0xJylcbiAgICAgIC50bygnLnRoZScsIDAsIHsgb3BhY2l0eTogMSB9KVxuICAgICAgLnRvKCcudGhlJywgMCwgeyBvcGFjaXR5OiAwIH0sICcrPTEnKVxuICAgICAgLnRvKCcudHJhZmZpYycsIDAsIHsgb3BhY2l0eTogMSB9KVxuICAgICAgLnRvKCcudHJhZmZpYycsIDAsIHsgb3BhY2l0eTogMCB9LCAnKz0xJylcbiAgICAgIC50bygnLmxvY2F0aW9uJywgMCwgeyBvcGFjaXR5OiAxIH0pXG4gICAgICAudG8oJy5sb2NhdGlvbicsIDAsIHsgb3BhY2l0eTogMCB9LCAnKz0xJylcbiAgICAgIC50bygnLmxvZ28nLCAwLCB7IG9wYWNpdHk6IDEgfSlcbiAgICAgIC50bygnLmxvZ28nLCAwLCB7IG9wYWNpdHk6IDAgfSwgJys9MScpXG4gICAgICAudG8oJy5jYXRjaCcsIDAsIHsgb3BhY2l0eTogMSB9LCAnKz0wLjg1JylcbiAgICAgIC50bygnLmNhdGNoJywgMCwgeyBvcGFjaXR5OiAwIH0sICcrPTInKVxuXG4gICAgdGltZWxpbmUucGxheSgpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FtZS1sYW5kaW5nJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlIGJlYXQnPkJlYXQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlIHRoZSc+VGhlPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSB0cmFmZmljJz5UcmFmZmljPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSBsb2NhdGlvbic+XG4gICAgICAgICAgU3R1dHQ8YnIgLz5nYXJ0XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgbG9nbyc+XG4gICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvYXNzZXRzL2xvZ28vbG9nby1tb292ZWwtd2hpdGUuc3ZnJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlIGNhdGNoJz5DbGljayB0aGUgY2Fyc1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5nYW1lLWxhbmRpbmcge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogNDglO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDlyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogOHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iZWF0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRyYWZmaWMge1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhdGNoIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4LjNyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm9cbiJdfQ== */\n/*@ sourceURL=components/game/ui/Intro.js */'
      }));
    }
  }]);

  return Intro;
}(_react.Component);

exports.default = Intro;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9JbnRyby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRpbWVsaW5lTGl0ZSIsIlNvdW5kc01hbmFnZXIiLCJJbnRybyIsInBsYXlTb3VuZCIsInRpbWVsaW5lIiwib25Db21wbGV0ZSIsImRlbGF5T25BbmltYXRlT3V0IiwicHJvcHMiLCJvbkZpbmlzaCIsInRvIiwib3BhY2l0eSIsInBsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUVoQixBQUFTOztBQUNULEFBQU8sQUFBbUI7Ozs7Ozs7OztJQUVwQixBOzs7Ozs7Ozs7Ozt3Q0FDaUI7bUJBQ25COzs4QkFBQSxBQUFjLFVBQWQsQUFBd0IsQUFFeEI7O1VBQU07b0JBQ1Esc0JBQU0sQUFDaEI7QUFDQTtBQUNBO2NBQU0sb0JBQU4sQUFBMEIsQUFDMUI7aUJBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNyQjtBQU5ILEFBQWlCLEFBQWlCLEFBU2xDO0FBVGtDLEFBQ2hDLE9BRGUsQUFBSTs7ZUFTckIsQUFDRyxHQURILEFBQ00sU0FETixBQUNlLEdBQUcsRUFBRSxTQURwQixBQUNrQixBQUFXLEtBRDdCLEFBQ2tDLFNBRGxDLEFBRUcsR0FGSCxBQUVNLFNBRk4sQUFFZSxHQUFHLEVBQUUsU0FGcEIsQUFFa0IsQUFBVyxLQUY3QixBQUVrQyxPQUZsQyxBQUdHLEdBSEgsQUFHTSxRQUhOLEFBR2MsR0FBRyxFQUFFLFNBSG5CLEFBR2lCLEFBQVcsS0FINUIsQUFJRyxHQUpILEFBSU0sUUFKTixBQUljLEdBQUcsRUFBRSxTQUpuQixBQUlpQixBQUFXLEtBSjVCLEFBSWlDLE9BSmpDLEFBS0csR0FMSCxBQUtNLFlBTE4sQUFLa0IsR0FBRyxFQUFFLFNBTHZCLEFBS3FCLEFBQVcsS0FMaEMsQUFNRyxHQU5ILEFBTU0sWUFOTixBQU1rQixHQUFHLEVBQUUsU0FOdkIsQUFNcUIsQUFBVyxLQU5oQyxBQU1xQyxPQU5yQyxBQU9HLEdBUEgsQUFPTSxhQVBOLEFBT21CLEdBQUcsRUFBRSxTQVB4QixBQU9zQixBQUFXLEtBUGpDLEFBUUcsR0FSSCxBQVFNLGFBUk4sQUFRbUIsR0FBRyxFQUFFLFNBUnhCLEFBUXNCLEFBQVcsS0FSakMsQUFRc0MsT0FSdEMsQUFTRyxHQVRILEFBU00sU0FUTixBQVNlLEdBQUcsRUFBRSxTQVRwQixBQVNrQixBQUFXLEtBVDdCLEFBVUcsR0FWSCxBQVVNLFNBVk4sQUFVZSxHQUFHLEVBQUUsU0FWcEIsQUFVa0IsQUFBVyxLQVY3QixBQVVrQyxPQVZsQyxBQVdHLEdBWEgsQUFXTSxVQVhOLEFBV2dCLEdBQUcsRUFBRSxTQVhyQixBQVdtQixBQUFXLEtBWDlCLEFBV21DLFVBWG5DLEFBWUcsR0FaSCxBQVlNLFVBWk4sQUFZZ0IsR0FBRyxFQUFFLFNBWnJCLEFBWW1CLEFBQVcsS0FaOUIsQUFZbUMsQUFFbkM7O2VBQUEsQUFBUyxBQUNWOzs7OzZCQUVTLEFBQ1I7NkJBQ0UsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlCQUFBLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLHdCQUFBLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDRCQUFBLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBQ087bUJBQUE7O29CQUFBO3NCQURQLEFBQ087QUFBQTtBQUFBLFVBTFQsQUFJRSxBQUdBLHlCQUFBLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLHdEQUFUOztvQkFBQTtzQkFSSixBQU9FLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBVkYsQUFVRTtpQkFWRjthQURGLEFBQ0UsQUE2REg7QUE3REc7Ozs7O0FBaENjLEEsQUFnR3BCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkludHJvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=