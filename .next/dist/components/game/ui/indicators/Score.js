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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/indicators/Score.js';


var Score = function (_Component) {
  (0, _inherits3.default)(Score, _Component);

  function Score() {
    (0, _classCallCheck3.default)(this, Score);

    return (0, _possibleConstructorReturn3.default)(this, (Score.__proto__ || (0, _getPrototypeOf2.default)(Score)).apply(this, arguments));
  }

  (0, _createClass3.default)(Score, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (this.iconStar) {
        _gsap.TweenLite.to(this.iconStar, 0.3, { scale: 1.4 });
        _gsap.TweenLite.to(this.iconStar, 0.3, { scale: 1, delay: 0.3 });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-1660259820' + ' ' + 'score-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-1660259820' + ' ' + 'score',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, this.props.score), _react2.default.createElement('img', {
        ref: function ref(el) {
          return _this2.iconStar = el;
        },

        src: '/static/assets/icons/icon-star.svg',
        className: 'jsx-1660259820' + ' ' + 'icon-star',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1660259820',
        css: '.score-container.jsx-1660259820{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:-0.3rem;}.score.jsx-1660259820{color:white;font-family:\'Quantico\',sans-serif;font-weight:700;font-size:4rem;line-height:6rem;text-transform:uppercase;}.icon-star.jsx-1660259820{width:3rem;height:3rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbmRpY2F0b3JzL1Njb3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHMEIsQUFPRCxBQVNELFdBQ0MsQ0FUdUIsV0FVckMsdUJBVGtCLGdCQUNELFlBVFIsR0FVVSxpQkFDUSxhQVZLLFlBV2hDLHVHQVZxQiw2RkFDQyxvQkFDdEIiLCJmaWxlIjoiY29tcG9uZW50cy9nYW1lL3VpL2luZGljYXRvcnMvU2NvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBUd2VlbkxpdGUgfSBmcm9tICdnc2FwJ1xuXG5jbGFzcyBTY29yZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKCkge1xuICAgIGlmICh0aGlzLmljb25TdGFyKSB7XG4gICAgICBUd2VlbkxpdGUudG8odGhpcy5pY29uU3RhciwgMC4zLCB7IHNjYWxlOiAxLjQgfSlcbiAgICAgIFR3ZWVuTGl0ZS50byh0aGlzLmljb25TdGFyLCAwLjMsIHsgc2NhbGU6IDEsIGRlbGF5OiAwLjMgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2NvcmUtY29udGFpbmVyJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzY29yZSc+e3RoaXMucHJvcHMuc2NvcmV9PC9zcGFuPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcmVmPXtlbCA9PiAodGhpcy5pY29uU3RhciA9IGVsKX1cbiAgICAgICAgICBjbGFzc05hbWU9J2ljb24tc3RhcidcbiAgICAgICAgICBzcmM9Jy9zdGF0aWMvYXNzZXRzL2ljb25zL2ljb24tc3Rhci5zdmcnXG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc2NvcmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMC4zcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2NvcmUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWFudGljbycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDZyZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY29uLXN0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2NvcmU6IHN0YXRlLmdhbWUuZ2V0KCdzY29yZScpXG4gIH1cbn0pKFNjb3JlKVxuIl19 */\n/*@ sourceURL=components/game/ui/indicators/Score.js */'
      }));
    }
  }]);

  return Score;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    score: state.game.get('score')
  };
})(Score);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9pbmRpY2F0b3JzL1Njb3JlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIlR3ZWVuTGl0ZSIsIlNjb3JlIiwiaWNvblN0YXIiLCJ0byIsInNjYWxlIiwiZGVsYXkiLCJwcm9wcyIsInNjb3JlIiwiZWwiLCJzdGF0ZSIsImdhbWUiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVM7Ozs7Ozs7SUFFSCxBOzs7Ozs7Ozs7OztnREFDeUIsQUFDM0I7VUFBSSxLQUFKLEFBQVMsVUFBVSxBQUNqQjt3QkFBQSxBQUFVLEdBQUcsS0FBYixBQUFrQixVQUFsQixBQUE0QixLQUFLLEVBQUUsT0FBbkMsQUFBaUMsQUFBUyxBQUMxQzt3QkFBQSxBQUFVLEdBQUcsS0FBYixBQUFrQixVQUFsQixBQUE0QixLQUFLLEVBQUUsT0FBRixBQUFTLEdBQUcsT0FBN0MsQUFBaUMsQUFBbUIsQUFDckQ7QUFDRjs7Ozs2QkFFUzttQkFDUjs7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7NENBQUEsQUFBZ0I7O29CQUFoQjtzQkFBQSxBQUF5QjtBQUF6QjtBQUFBLGNBQXlCLEFBQUssTUFEaEMsQUFDRSxBQUFvQyxBQUNwQzthQUNPLGlCQUFBO2lCQUFPLE9BQUEsQUFBSyxXQUFaLEFBQXVCO0FBRDlCLEFBR0U7O2FBSEYsQUFHTTs0Q0FITixBQUVZOztvQkFGWjtzQkFGRixBQUVFO0FBQUE7QUFDRTtpQkFISjthQURGLEFBQ0UsQUErQkg7QUEvQkc7Ozs7O0FBVmMsQUE0Q3BCLEE7OzJDQUF1QixpQkFBUyxBQUM5Qjs7V0FDUyxNQUFBLEFBQU0sS0FBTixBQUFXLElBRHBCLEFBQU8sQUFDRSxBQUFlLEFBRXpCO0FBSFEsQUFDTDtBQUZXLENBQUEsRUFBZixBQUFlLEFBSVoiLCJmaWxlIjoiU2NvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==