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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/shared/Layout.js';


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'recordFirstPaint',
    value: function recordFirstPaint() {
      return {
        __html: '<script>window.firstPaint = new Date().getTime()</script>'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-3145713353',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('title', {
        className: 'jsx-3145713353',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'Beat the traffic - The Game'), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-3145713353',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1,user-scalable=0,initial-scale=1',
        className: 'jsx-3145713353',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Geo|Quantico:400,700',
        rel: 'stylesheet',
        className: 'jsx-3145713353',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), this.props.children, _react2.default.createElement('div', { dangerouslySetInnerHTML: this.recordFirstPaint(), className: 'jsx-3145713353',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3145713353',
        css: 'html,body{height:100%;width:100%;margin:0;padding:0;left:0;top:0;font-family:\'Quantico\',sans-serif;font-weight:700;background-color:white;cursor:cell;overflow:hidden;}h1{font-family:\'Quantico\',sans-serif;font-weight:700;font-size:5rem;line-height:3rem;text-transform:uppercase;}h2{font-family:\'Quantico\',sans-serif;font-weight:700;font-size:4rem;line-height:4.9rem;text-transform:uppercase;}h3{font-family:\'Quantico\',sans-serif;font-weight:700;font-size:2.5rem;line-height:3.4rem;text-transform:uppercase;}h4{font-family:\'Geo\',sans-serif;font-weight:400;font-size:1.6rem;}p{font-family:\'Geo\',sans-serif;font-weight:400;font-family:\'Quantico\',sans-serif;font-weight:700;font-size:2rem;line-height:2.9rem;}html{font-size:60%;}@media (max-width:600px){html{font-size:50%;}}@media (max-height:400px){html{font-size:50%;}}body > div:first-of-type{height:100%;}#__next{height:100%;}#__next > div{height:100%;}#__next > div > div{height:100%;}.main-page{height:100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm9CLEFBR3lCLEFBY3VCLEFBT0EsQUFPQSxBQU9MLEFBS0EsQUFTaEIsQUFLRSxBQU1BLEFBUUosQUFJQSxBQUlBLEFBSUEsQUFJQSxZQW5GRCxBQW9FYixBQUlBLEFBSUEsQUFJQSxBQUlBLEVBbkNBLEFBS0UsQUFNQSxTQTNEUyxNQWtDTyxBQUtBLEdBdENOLEVBWU0sQUFPQSxBQU9BLFFBekJULEdBaUNVLEFBS2tCLElBckM3QixDQVdTLEFBT0EsQUFPRSxLQXhCa0IsT0FnQ3JDLEdBckJtQixBQU9FLEVBT0EsWUFZSCxHQXpCUyxFQU9BLEVBT0EsR0F6QlQsTUFxQ0QsVUFwQ1EsRUFXekIsRUFPQSxDQW1CcUIsQ0FackIsaUJBeEJjLENBcUNkLFdBcENrQixnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9zaGFyZWQvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZWNvcmRGaXJzdFBhaW50ICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19odG1sOiAnPHNjcmlwdD53aW5kb3cuZmlyc3RQYWludCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpPC9zY3JpcHQ+J1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5CZWF0IHRoZSB0cmFmZmljIC0gVGhlIEdhbWU8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPSd2aWV3cG9ydCdcbiAgICAgICAgICAgIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEuMCxtYXhpbXVtLXNjYWxlPTEuMCxtaW5pbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT0wLGluaXRpYWwtc2NhbGU9MSdcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R2VvfFF1YW50aWNvOjQwMCw3MDAnXG4gICAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5yZWNvcmRGaXJzdFBhaW50KCl9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICA6Z2xvYmFsKGh0bWwsIGJvZHkpIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogY2VsbDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOmdsb2JhbChoMSkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWFudGljbycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Z2xvYmFsKGgyKSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNC45cmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmdsb2JhbChoMykge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWFudGljbycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMy40cmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmdsb2JhbChoNCkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHZW8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Z2xvYmFsKHApIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi45cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDpnbG9iYWwoaHRtbCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICA6Z2xvYmFsKGh0bWwpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA0MDBweCkge1xuICAgICAgICAgICAgOmdsb2JhbChodG1sKSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDpnbG9iYWwoYm9keSA+IGRpdjpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOmdsb2JhbCgjX19uZXh0KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOmdsb2JhbCgjX19uZXh0ID4gZGl2KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOmdsb2JhbCgjX19uZXh0ID4gZGl2ID4gZGl2KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOmdsb2JhbCgubWFpbi1wYWdlKSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=components/shared/Layout.js */'
      }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0xheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWQiLCJMYXlvdXQiLCJfX2h0bWwiLCJwcm9wcyIsImNoaWxkcmVuIiwicmVjb3JkRmlyc3RQYWludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7Ozs7OztJQUVELEE7Ozs7Ozs7Ozs7O3VDQUNnQixBQUNsQjs7Z0JBQUEsQUFBTyxBQUNHLEFBRVg7QUFIUSxBQUNMOzs7OzZCQUlNLEFBQ1I7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esd0VBQU0sU0FBTixBQUFjLG9CQUFkOztvQkFBQTtzQkFGRixBQUVFLEFBQ0E7QUFEQTs7Y0FDQSxBQUNPLEFBQ0w7aUJBRkYsQUFFVTttQkFGVjs7b0JBQUE7c0JBSEYsQUFHRSxBQUlBO0FBSkE7QUFDRTtjQUdGLEFBQ08sQUFDTDthQUZGLEFBRU07bUJBRk47O29CQUFBO3NCQVJKLEFBQ0UsQUFPRSxBQUtEO0FBTEM7QUFDRSxnQkFJSCxBQUFLLE1BYlIsQUFhYyxBQUNaLGlEQUFLLHlCQUF5QixLQUE5QixBQUE4QixBQUFLLCtCQUFuQzs7b0JBQUE7c0JBZEYsQUFjRTtBQUFBOztpQkFkRjthQURGLEFBQ0UsQUEwR0g7QUExR0c7Ozs7O0FBVGUsQSxBQXNIckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=