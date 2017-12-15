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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/shared/Loading.js';


var Loading = function (_Component) {
  (0, _inherits3.default)(Loading, _Component);

  function Loading() {
    (0, _classCallCheck3.default)(this, Loading);

    return (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loading, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-3833962055' + ' ' + 'loader',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3833962055' + ' ' + 'spinner',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3833962055',
        css: '.loader.jsx-3833962055{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:2rem;}.message.jsx-3833962055{margin-top:1rem;font-style:italic;}.spinner.jsx-3833962055{width:7rem;height:7rem;border-style:solid;border-color:rgba(0,0,0,0);border-top-color:#fffe4a;border-width:0.3rem 0rem 0rem 0rem;-webkit-transform:will-change;-ms-transform:will-change;transform:will-change;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:spin 0.5s infinite linear;-moz-animation:spin 0.5s infinite linear;-o-animation:spin 0.5s infinite linear;-webkit-animation:spin-jsx-3833962055 0.5s infinite linear;animation:spin-jsx-3833962055 0.5s infinite linear;}@-webkit-keyframes spinfrom.jsx-3833962055{-webkit-transform:rotate(0deg);}to.jsx-3833962055{-webkit-transform:rotate(359deg);}/*|*/@-moz-keyframes spinfrom.jsx-3833962055{-moz-transform:rotate(0deg);}to.jsx-3833962055{-moz-transform:rotate(359deg);}/*|*/@-o-keyframes spinfrom.jsx-3833962055{-o-transform:rotate(0deg);}to.jsx-3833962055{-o-transform:rotate(359deg);}/*|*/@-webkit-keyframes spin-jsx-3833962055{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@keyframes spin-jsx-3833962055{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT29CLEFBRzBCLEFBT0csQUFJTCxBQW9Cc0IsQUFHRSxBQU1MLEFBR0UsQUFNSixBQUdFLEFBTUwsQUFHRSxXQWpEZixLQUpNLE9BS0MsR0FxQ25CLEVBVEEsQUFZQSxFQVRBLENBWkEsRUFHQSxDQTFCRixRQUtnQywyQkFDTCxLQWROLE9BMERuQixNQUdBLE9BOUNtQyxtQ0FDYixzQ0FmQyx3Q0FpQkcsMEJBQ0gsdUJBQ0wsVUFsQkksUUFvQnNCLDRDQUNILDBCQXBCdEIsZUFxQm9CLElBcEJ6QyxtQ0FxQnNDLDhHQUN0QyIsImZpbGUiOiJjb21wb25lbnRzL3NoYXJlZC9Mb2FkaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGlubmVyJyAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmxvYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmZlNGE7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDAuM3JlbSAwcmVtIDByZW0gMHJlbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogd2lsbC1jaGFuZ2U7XG5cbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDAuNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gMC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICAtby1hbmltYXRpb246IHNwaW4gMC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICBhbmltYXRpb246IHNwaW4gMC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEAtby1rZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG4iXX0= */\n/*@ sourceURL=components/shared/Loading.js */'
      }));
    }
  }]);

  return Loading;
}(_react.Component);

exports.default = Loading;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVWLEE7Ozs7Ozs7Ozs7OzZCQUNNLEFBQ1I7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBOzRDQUNFLEFBQWU7O29CQUFmO3NCQURGLEFBQ0U7QUFBQTtBQUFBO2lCQURGO2FBREYsQUFDRSxBQXVFSDtBQXZFRzs7Ozs7QUFIZ0IsQSxBQTZFdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9