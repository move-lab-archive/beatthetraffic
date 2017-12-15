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

var _AppStateManagement = require('../../../../statemanagement/app/AppStateManagement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/menu/MenuBtn.js';


var MenuBtn = function (_Component) {
  (0, _inherits3.default)(MenuBtn, _Component);

  function MenuBtn() {
    (0, _classCallCheck3.default)(this, MenuBtn);

    return (0, _possibleConstructorReturn3.default)(this, (MenuBtn.__proto__ || (0, _getPrototypeOf2.default)(MenuBtn)).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuBtn, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        onClick: function onClick() {
          return _this2.props.dispatch((0, _AppStateManagement.showMenu)());
        },
        className: 'jsx-98459087' + ' ' + ('menu-button\n        ' + (this.props.introAnimPlayed ? '' : 'hidden')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '98459087',
        css: '.menu-button.jsx-98459087{position:fixed;top:1.6rem;right:2.1rem;z-index:6;width:4.4rem;height:4.4rem;cursor:pointer;border-radius:0.2rem;background-repeat:no-repeat;background-size:3rem 3rem;background-position:center;background-image:url(/static/assets/icons/icon-menu.svg);opacity:1;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}.hidden.jsx-98459087{opacity:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9tZW51L01lbnVCdG4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBRzRCLEFBaUJMLFVBQ1osS0FqQmEsV0FDRSxhQUNILFVBQ0csYUFDQyxjQUNDLGVBQ00scUJBQ08sNEJBQ0YsMEJBQ0MsMkJBQzhCLHlEQUMvQyxVQUNjLHdEQUMxQiIsImZpbGUiOiJjb21wb25lbnRzL2dhbWUvdWkvbWVudS9NZW51QnRuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBzaG93TWVudSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0YXRlbWFuYWdlbWVudC9hcHAvQXBwU3RhdGVNYW5hZ2VtZW50J1xuXG5jbGFzcyBNZW51QnRuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BtZW51LWJ1dHRvblxuICAgICAgICAke3RoaXMucHJvcHMuaW50cm9BbmltUGxheWVkID8gJycgOiAnaGlkZGVuJ31gfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRpc3BhdGNoKHNob3dNZW51KCkpfVxuICAgICAgPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1lbnUtYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMS42cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDIuMXJlbTtcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XG4gICAgICAgICAgICB3aWR0aDogNC40cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA0LjRyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzcmVtIDNyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9hc3NldHMvaWNvbnMvaWNvbi1tZW51LnN2Zyk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaG93TWVudTogc3RhdGUuYXBwLmdldCgnc2hvd01lbnUnKSxcbiAgICBpbnRyb0FuaW1QbGF5ZWQ6IHN0YXRlLmFwcC5nZXQoJ2ludHJvQW5pbVBsYXllZCcpXG4gIH1cbn0pKE1lbnVCdG4pXG4iXX0= */\n/*@ sourceURL=components/game/ui/menu/MenuBtn.js */'
      }));
    }
  }]);

  return MenuBtn;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    showMenu: state.app.get('showMenu'),
    introAnimPlayed: state.app.get('introAnimPlayed')
  };
})(MenuBtn);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9tZW51L01lbnVCdG4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Iiwic2hvd01lbnUiLCJNZW51QnRuIiwicHJvcHMiLCJkaXNwYXRjaCIsImludHJvQW5pbVBsYXllZCIsInN0YXRlIiwiYXBwIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFFVCxBQUFTLEFBQWdCOzs7Ozs7O0ksQUFFbkI7Ozs7Ozs7Ozs7OzZCQUNNO21CQUNSOzs2QkFDRSxjQUFBO2lCQUdXLG1CQUFBO2lCQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsU0FBakIsQUFBTSxBQUFvQjtBQUhyQztzRUFFSSxLQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFYLEFBQTZCLEtBRmpDLEFBRXNDOztvQkFGdEM7c0JBQUE7QUFBQTtBQUdFLE9BSEY7aUJBQUE7YUFERixBQUNFLEFBNkJIO0FBN0JHOzs7OztBQUhnQixBLEFBbUN0Qjs7MkNBQXVCLGlCQUFTLEFBQzlCOztjQUNZLE1BQUEsQUFBTSxJQUFOLEFBQVUsSUFEZixBQUNLLEFBQWMsQUFDeEI7cUJBQWlCLE1BQUEsQUFBTSxJQUFOLEFBQVUsSUFGN0IsQUFBTyxBQUVZLEFBQWMsQUFFbEM7QUFKUSxBQUNMO0FBRlcsQ0FBQSxFQUFmLEFBQWUsQUFLWiIsImZpbGUiOiJNZW51QnRuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=