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

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/shared/SocialShareButtons.js';


var FacebookIcon = '/static/assets/icons/icon-facebook.svg';
var TwitterIcon = '/static/assets/icons/icon-twitter.svg';

var SocialShareButtons = function (_React$Component) {
  (0, _inherits3.default)(SocialShareButtons, _React$Component);

  function SocialShareButtons(props) {
    (0, _classCallCheck3.default)(this, SocialShareButtons);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SocialShareButtons.__proto__ || (0, _getPrototypeOf2.default)(SocialShareButtons)).call(this, props));

    _this.websiteUrl = 'https://beatthetraffic.moovellab.com';
    return _this;
  }

  (0, _createClass3.default)(SocialShareButtons, [{
    key: 'twitterUrl',
    value: function twitterUrl() {
      var text = '';

      text += 'Great game 👌 ! Are you ready to beat the traffic 🚕 ?';

      return 'https://twitter.com/intent/tweet?text=' + encodeURI(text) + '&url=' + encodeURI(this.websiteUrl);
    }
  }, {
    key: 'facebookUrl',
    value: function facebookUrl() {
      return 'https://www.facebook.com/sharer.php?u=' + encodeURI(this.websiteUrl);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-3018779585' + ' ' + 'List',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('a', { href: this.facebookUrl(), target: '_blank', className: 'jsx-3018779585' + ' ' + 'Button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('img', { alt: 'FacebookIcon', src: FacebookIcon, className: 'jsx-3018779585',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement('a', { href: this.twitterUrl(), target: '_blank', className: 'jsx-3018779585' + ' ' + 'Button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('img', { alt: 'TwitterIcon', src: TwitterIcon, className: 'jsx-3018779585',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '3018779585',
        css: '.List.jsx-3018779585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:10px;}.Button.jsx-3018779585{list-style:none;cursor:pointer;padding:0 5px 0 0;}.Button.jsx-3018779585:hover,.Button.jsx-3018779585:focus,.Button.jsx-3018779585:active{opacity:0.8;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL1NvY2lhbFNoYXJlQnV0dG9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ29CLEFBRzBCLEFBS0csQUFRSixZQUNkLElBUmlCLGVBQ0csa0JBQ3BCLHlCQVBxQixtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9zaGFyZWQvU29jaWFsU2hhcmVCdXR0b25zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGYWNlYm9va0ljb24gPSAnL3N0YXRpYy9hc3NldHMvaWNvbnMvaWNvbi1mYWNlYm9vay5zdmcnXG5jb25zdCBUd2l0dGVySWNvbiA9ICcvc3RhdGljL2Fzc2V0cy9pY29ucy9pY29uLXR3aXR0ZXIuc3ZnJ1xuXG5jbGFzcyBTb2NpYWxTaGFyZUJ1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLndlYnNpdGVVcmwgPSAnaHR0cHM6Ly9iZWF0dGhldHJhZmZpYy5tb292ZWxsYWIuY29tJ1xuICB9XG5cbiAgdHdpdHRlclVybCAoKSB7XG4gICAgbGV0IHRleHQgPSAnJ1xuXG4gICAgdGV4dCArPSAnR3JlYXQgZ2FtZSDwn5GMICEgQXJlIHlvdSByZWFkeSB0byBiZWF0IHRoZSB0cmFmZmljIPCfmpUgPydcblxuICAgIHJldHVybiBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke2VuY29kZVVSSShcbiAgICAgIHRleHRcbiAgICApfSZ1cmw9JHtlbmNvZGVVUkkodGhpcy53ZWJzaXRlVXJsKX1gXG4gIH1cblxuICBmYWNlYm9va1VybCAoKSB7XG4gICAgcmV0dXJuIGBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PSR7ZW5jb2RlVVJJKHRoaXMud2Vic2l0ZVVybCl9YFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J0xpc3QnPlxuICAgICAgICA8YSBjbGFzc05hbWU9J0J1dHRvbicgaHJlZj17dGhpcy5mYWNlYm9va1VybCgpfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgPGltZyBhbHQ9J0ZhY2Vib29rSWNvbicgc3JjPXtGYWNlYm9va0ljb259IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdCdXR0b24nIGhyZWY9e3RoaXMudHdpdHRlclVybCgpfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgPGltZyBhbHQ9J1R3aXR0ZXJJY29uJyBzcmM9e1R3aXR0ZXJJY29ufSAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuTGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuQnV0dG9uIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweCAwIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkJ1dHRvbjpob3ZlcixcbiAgICAgICAgICAuQnV0dG9uOmZvY3VzLFxuICAgICAgICAgIC5CdXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxTaGFyZUJ1dHRvbnNcbiJdfQ== */\n/*@ sourceURL=components/shared/SocialShareButtons.js */'
      }));
    }
  }]);

  return SocialShareButtons;
}(_react2.default.Component);

exports.default = SocialShareButtons;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL1NvY2lhbFNoYXJlQnV0dG9ucy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhY2Vib29rSWNvbiIsIlR3aXR0ZXJJY29uIiwiU29jaWFsU2hhcmVCdXR0b25zIiwicHJvcHMiLCJ3ZWJzaXRlVXJsIiwidGV4dCIsImVuY29kZVVSSSIsImZhY2Vib29rVXJsIiwidHdpdHRlclVybCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxlQUFOLEFBQXFCO0FBQ3JCLElBQU0sY0FBTixBQUFvQjs7SUFFZCxBOzhDQUNKOzs4QkFBQSxBQUFhLE9BQU87d0NBQUE7OzhKQUFBLEFBQ1osQUFDTjs7VUFBQSxBQUFLLGFBRmEsQUFFbEIsQUFBa0I7V0FDbkI7Ozs7O2lDQUVhLEFBQ1o7VUFBSSxPQUFKLEFBQVcsQUFFWDs7Y0FBQSxBQUFRLEFBRVI7O3dEQUFnRCxVQUFoRCxBQUFnRCxBQUM5QyxrQkFDTyxVQUFVLEtBRm5CLEFBRVMsQUFBZSxBQUN6Qjs7OztrQ0FFYyxBQUNiO3dEQUFnRCxVQUFVLEtBQTFELEFBQWdELEFBQWUsQUFDaEU7Ozs7NkJBRVMsQUFDUjs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQSxPQUFzQixNQUFNLEtBQTVCLEFBQTRCLEFBQUssZUFBZSxRQUFoRCxBQUF1RCw4Q0FBdkQsQUFBYTs7b0JBQWI7c0JBQUEsQUFDRTtBQURGO2dEQUNPLEtBQUwsQUFBUyxnQkFBZSxLQUF4QixBQUE2Qix5QkFBN0I7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxPQUFzQixNQUFNLEtBQTVCLEFBQTRCLEFBQUssY0FBYyxRQUEvQyxBQUFzRCw4Q0FBdEQsQUFBYTs7b0JBQWI7c0JBQUEsQUFDRTtBQURGO2dEQUNPLEtBQUwsQUFBUyxlQUFjLEtBQXZCLEFBQTRCLHdCQUE1Qjs7b0JBQUE7c0JBTEosQUFJRSxBQUNFO0FBQUE7O2lCQUxKO2FBREYsQUFDRSxBQTJCSDtBQTNCRzs7Ozs7RUF0QjJCLGdCQUFNLEEsQUFvRHZDOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNvY2lhbFNoYXJlQnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9