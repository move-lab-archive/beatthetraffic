'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _GameStateManagement = require('../../../../statemanagement/app/GameStateManagement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/landing/LocationMenu.js';


// TODO IMPROVE IT TO BE ABLE TO REUSE EASIER IN GAMEOVER AND WIN PAGE

var LocationMenu = function (_Component) {
  (0, _inherits3.default)(LocationMenu, _Component);

  function LocationMenu() {
    (0, _classCallCheck3.default)(this, LocationMenu);

    return (0, _possibleConstructorReturn3.default)(this, (LocationMenu.__proto__ || (0, _getPrototypeOf2.default)(LocationMenu)).apply(this, arguments));
  }

  (0, _createClass3.default)(LocationMenu, [{
    key: 'changeCity',
    value: function changeCity(cityId) {
      this.props.dispatch((0, _GameStateManagement.loadCity)(cityId));
      this.props.handleClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-460746119',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-460746119' + ' ' + ('LocationsContainer ' + (this.props.isVisible ? 'visible' : 'hidden')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-460746119' + ' ' + 'Locations',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, (0, _keys2.default)(this.props.availableCities).filter(function (cityId) {
        return cityId !== _this2.props.selectedCity;
      }).map(function (cityId) {
        return _react2.default.createElement('h3', { onClick: function onClick() {
            return _this2.changeCity(cityId);
          }, key: cityId, className: 'jsx-460746119',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _this2.props.availableCities[cityId].label);
      })), _react2.default.createElement('img', {
        onClick: function onClick() {
          return _this2.props.handleClose();
        },

        src: '/static/assets/icons/icon-close-LocationMenu.svg',
        className: 'jsx-460746119' + ' ' + 'closeLocationMenu',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-460746119' + ' ' + ('coverLandingPage ' + (this.props.isVisible ? 'visibleCoverLandingPage' : 'hiddenCoverLandingPage')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '460746119',
        css: '.LocationsContainer.jsx-460746119{background-color:white;max-width:300px;width:90%;left:3.1rem;bottom:7rem;height:17rem;z-index:10;position:fixed;border:4px solid #262626;-webkit-transition:all 500ms cubic-bezier(0.19,1,0.22,1);transition:all 500ms cubic-bezier(0.19,1,0.22,1);-webkit-transition-delay:150ms;transition-delay:150ms;z-index:15;}.coverLandingPage.jsx-460746119{position:fixed;background:#FFFE4A;width:100%;height:100%;top:0%;left:0;z-index:10;opacity:0.93;-webkit-transition:all 150ms;transition:all 150ms;}.Locations.jsx-460746119{padding:1.9rem;}.Locations.jsx-460746119 h3.jsx-460746119{text-transform:uppercase;margin:0;cursor:pointer;}.Locations.jsx-460746119 h3.jsx-460746119:hover{color:#FF3BFF;}.closeLocationMenu.jsx-460746119{position:absolute;top:1.9rem;right:1.9rem;cursor:pointer;box-shadow:4px 4px 0px black;background-color:#4EFFFF;padding:5px;}.closeLocationMenu.jsx-460746119:hover{background-color:#FF3BFF;}.closeLocationMenu.jsx-460746119:active{box-shadow:2.5px 2.5px 0px black;margin-right:-1.5px;margin-top:1.5px;}.hidden.jsx-460746119{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);bottom:0rem;}.visible.jsx-460746119{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);bottom:7rem;}.hiddenCoverLandingPage.jsx-460746119{opacity:0;z-index:0;}.visibleCoverLandingPage.jsx-460746119{opacity:0.93;z-index:10;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL0xvY2F0aW9uTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG9CLEFBR29DLEFBZVIsQUFZQSxBQUlVLEFBS1gsQUFJSSxBQVNPLEFBR1EsQUFNTixBQUtGLEFBS2YsQUFLRyxVQUpILEdBS0MsQ0FyQ2IsQ0FyQnFCLEFBWXJCLEdBYWEsRUE2QmIsR0FyRWtCLENBMEVsQixDQTNDVyxBQWtCWCxJQVJlLElBV08sQ0FwQ1QsQUFnQkksS0EvQkwsR0F5Q0ssR0F6QkgsSUFmQSxBQStCZCxJQW9CbUIsSUFuQ1YsQUF5QnNCLElBeENqQixHQWdCTCxNQW1DVCxDQWxDYSxFQWhCRSxTQWlCQSxJQWhCRixBQXVDYyxDQW1CYixNQUxBLEVBcENTLEVBaEJOLEVBMERqQixNQUxBLE1BZGMsQ0F0Q2EsV0F1QzNCLGNBdENzRCxRQWV0RCxrR0FkeUIsc0RBQ1osV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL2dhbWUvdWkvbGFuZGluZy9Mb2NhdGlvbk1lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgbG9hZENpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZW1hbmFnZW1lbnQvYXBwL0dhbWVTdGF0ZU1hbmFnZW1lbnQnXG5cbi8vIFRPRE8gSU1QUk9WRSBJVCBUTyBCRSBBQkxFIFRPIFJFVVNFIEVBU0lFUiBJTiBHQU1FT1ZFUiBBTkQgV0lOIFBBR0VcblxuY2xhc3MgTG9jYXRpb25NZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpc1Zpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhbmRsZUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhdmFpbGFibGVDaXRpZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIGNoYW5nZUNpdHkoY2l0eUlkKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChsb2FkQ2l0eShjaXR5SWQpKVxuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xvc2UoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgTG9jYXRpb25zQ29udGFpbmVyICR7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YExvY2F0aW9uc2B9PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuYXZhaWxhYmxlQ2l0aWVzKVxuICAgICAgICAgICAgICAuZmlsdGVyKGNpdHlJZCA9PiBjaXR5SWQgIT09IHRoaXMucHJvcHMuc2VsZWN0ZWRDaXR5KVxuICAgICAgICAgICAgICAubWFwKGNpdHlJZCA9PiAoXG4gICAgICAgICAgICAgICAgPGgzIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlQ2l0eShjaXR5SWQpfSBrZXk9e2NpdHlJZH0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hdmFpbGFibGVDaXRpZXNbY2l0eUlkXS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUNsb3NlKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjbG9zZUxvY2F0aW9uTWVudWB9XG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL2Fzc2V0cy9pY29ucy9pY29uLWNsb3NlLUxvY2F0aW9uTWVudS5zdmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgY292ZXJMYW5kaW5nUGFnZSAke1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5pc1Zpc2libGUgPyAndmlzaWJsZUNvdmVyTGFuZGluZ1BhZ2UnIDogJ2hpZGRlbkNvdmVyTGFuZGluZ1BhZ2UnXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuTG9jYXRpb25zQ29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBsZWZ0OiAzLjFyZW07XG4gICAgICAgICAgICBib3R0b206IDdyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDE3cmVtO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMjYyNjI2O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDE1MG1zO1xuICAgICAgICAgICAgei1pbmRleDogMTU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvdmVyTGFuZGluZ1BhZ2V7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRTRBO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgb3BhY2l0eTogMC45MztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuTG9jYXRpb25zIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuOXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuTG9jYXRpb25zIGgzIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5Mb2NhdGlvbnMgaDM6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogI0ZGM0JGRjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xvc2VMb2NhdGlvbk1lbnUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxLjlyZW07XG4gICAgICAgICAgICByaWdodDogMS45cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAwcHggYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEVGRkZGO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xvc2VMb2NhdGlvbk1lbnU6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzQkZGO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xvc2VMb2NhdGlvbk1lbnU6YWN0aXZle1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMi41cHggMi41cHggMHB4IGJsYWNrO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMS41cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICAgICAgICAgIGJvdHRvbTogMHJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmlzaWJsZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAgICAgYm90dG9tOiA3cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW5Db3ZlckxhbmRpbmdQYWdlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52aXNpYmxlQ292ZXJMYW5kaW5nUGFnZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjkzO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgYXZhaWxhYmxlQ2l0aWVzOiBzdGF0ZS5hcHAuZ2V0KCdhdmFpbGFibGVDaXRpZXMnKS50b0pTKCksXG4gICAgc2VsZWN0ZWRDaXR5OiBzdGF0ZS5hcHAuZ2V0KCdzZWxlY3RlZENpdHknKVxuICB9XG59KShMb2NhdGlvbk1lbnUpXG4iXX0= */\n/*@ sourceURL=components/game/ui/landing/LocationMenu.js */'
      }));
    }
  }]);

  return LocationMenu;
}(_react.Component);

LocationMenu.propTypes = {
  isVisible: _propTypes2.default.bool,
  handleClose: _propTypes2.default.func,
  availableCities: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    availableCities: state.app.get('availableCities').toJS(),
    selectedCity: state.app.get('selectedCity')
  };
})(LocationMenu);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9sYW5kaW5nL0xvY2F0aW9uTWVudS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJQcm9wVHlwZXMiLCJSb3V0ZXIiLCJsb2FkQ2l0eSIsIkxvY2F0aW9uTWVudSIsImNpdHlJZCIsInByb3BzIiwiZGlzcGF0Y2giLCJoYW5kbGVDbG9zZSIsImlzVmlzaWJsZSIsImF2YWlsYWJsZUNpdGllcyIsImZpbHRlciIsInNlbGVjdGVkQ2l0eSIsIm1hcCIsImNoYW5nZUNpdHkiLCJsYWJlbCIsInByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwib2JqZWN0Iiwic3RhdGUiLCJhcHAiLCJnZXQiLCJ0b0pTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWdCOzs7Ozs7O0FBRXpCOztJLEFBRU07Ozs7Ozs7Ozs7OytCQU9PLEEsUUFBUSxBQUNqQjtXQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsbUNBQXBCLEFBQW9CLEFBQVMsQUFDN0I7V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7OzZCQUVRO21CQUNQOzs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7cUVBRUksS0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLFlBRjNCLEFBRXVDOztvQkFGdkM7c0JBQUEsQUFLRTtBQUxGO0FBQUEseUJBS0UsY0FBQTsyQ0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsNkJBQ2UsS0FBQSxBQUFLLE1BQWpCLEFBQXVCLGlCQUF2QixBQUNFLE9BQU8sa0JBQUE7ZUFBVSxXQUFXLE9BQUEsQUFBSyxNQUExQixBQUFnQztBQUR6QyxTQUFBLEFBRUUsSUFBSSxrQkFBQTsrQkFDSCxjQUFBLFFBQUksU0FBUyxtQkFBQTttQkFBTSxPQUFBLEFBQUssV0FBWCxBQUFNLEFBQWdCO0FBQW5DLGFBQTRDLEtBQTVDLEFBQWlELG1CQUFqRDs7c0JBQUE7d0JBQUEsQUFDRztBQURIO1NBQUEsU0FDRyxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQixRQUYzQixBQUNILEFBQ3NDO0FBVjlDLEFBS0UsQUFDRyxBQVFIO2lCQUNXLG1CQUFBO2lCQUFNLE9BQUEsQUFBSyxNQUFYLEFBQU0sQUFBVztBQUQ1QixBQUdFOzthQUhGLEFBR007MkNBSE47O29CQUFBO3NCQWZKLEFBQ0UsQUFjRSxBQU1GO0FBTkU7QUFDRTttRUFPQSxLQUFBLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsNEJBRjNCLEFBRXVEOztvQkFGdkQ7c0JBckJGLEFBcUJFO0FBQUE7QUFBQTtpQkFyQkY7YUFERixBQUNFLEFBNEdIO0FBNUdHOzs7OztBLEFBZHFCOztBQUFyQixBLGFBQ0csQTthQUNNLG9CQURNLEFBQ0ksQUFDckI7ZUFBYSxvQkFGSSxBQUVNLEFBQ3ZCO21CQUFpQixvQkFIQSxBQUdVLEEsQUF5SC9CO0FBNUhxQixBQUNqQjs7MkNBMkhtQixpQkFBUyxBQUM5Qjs7cUJBQ21CLE1BQUEsQUFBTSxJQUFOLEFBQVUsSUFBVixBQUFjLG1CQUQxQixBQUNZLEFBQWlDLEFBQ2xEO2tCQUFjLE1BQUEsQUFBTSxJQUFOLEFBQVUsSUFGMUIsQUFBTyxBQUVTLEFBQWMsQUFFL0I7QUFKUSxBQUNMO0FBRlcsQ0FBQSxFQUFmLEFBQWUsQUFLWiIsImZpbGUiOiJMb2NhdGlvbk1lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==