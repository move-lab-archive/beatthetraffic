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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _ButtonClose = require('../../../shared/ButtonClose');

var _ButtonClose2 = _interopRequireDefault(_ButtonClose);

var _SocialShareButtons = require('../../../shared/SocialShareButtons');

var _SocialShareButtons2 = _interopRequireDefault(_SocialShareButtons);

var _AboutPage = require('../../../about/AboutPage');

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _ScorePage = require('../../../score/ScorePage');

var _ScorePage2 = _interopRequireDefault(_ScorePage);

var _AppStateManagement = require('../../../../statemanagement/app/AppStateManagement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/menu/Menu.js';


var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu(props) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));

    _this.urlWhenEnteringMenuToRestore = '/';

    _this.state = {
      showAbout: false,
      showScore: false
    };
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.showMenu !== this.props.showMenu) {
        if (newProps.showMenu) {
          // Push
          this.urlWhenEnteringMenuToRestore = _index2.default.asPath;

          // Doing the ?show=menu trick because of a bug of next.js
          // https://github.com/zeit/next.js/issues/2668
          _index2.default.push('/?show=menu', this.urlWhenEnteringMenuToRestore + '?show=menu', {
            shallow: true
          });
        } else {
          // Restore url
          _index2.default.replace('/', '' + this.urlWhenEnteringMenuToRestore, {
            shallow: true
          });
        }
      }

      if (this.props.url.query.show === 'menu' && newProps.url.query.page === 'about') {
        // console.log('show about page from menu')
        this.setState({
          showAbout: true
        });
      }

      if (this.props.url.query.show === 'menu' && newProps.url.query.page === 'score') {
        // console.log('show score page from menu')
        this.setState({
          showScore: true
        });
      }

      if ((this.props.url.query.page === 'about' || this.props.url.query.page === 'score') && newProps.url.query.page === undefined) {
        // console.log('hide about or score page from menu')
        this.setState({
          showAbout: false,
          showScore: false
        });
      }

      if (this.props.url.query.show === 'menu' && newProps.url.query.show === undefined) {
        // We exited the menu via backbutton
        // console.log('Exit menu via backbutton')
        this.props.dispatch((0, _AppStateManagement.hideMenu)());
      }
    }
  }, {
    key: 'showAbout',
    value: function showAbout() {
      _index2.default.push('/?show=menu&page=about', '/about', {
        shallow: true
      });
    }
  }, {
    key: 'showScore',
    value: function showScore() {
      _index2.default.push('/?show=menu&page=score', '/highscore', {
        shallow: true
      });
    }
  }, {
    key: 'hideAbout',
    value: function hideAbout() {
      window.history.back();
    }
  }, {
    key: 'hideScore',
    value: function hideScore() {
      window.history.back();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-2645630039' + ' ' + ('menu-page ' + (this.props.showMenu ? 'visible' : 'hidden')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_ButtonClose2.default, { onClick: function onClick() {
          return _this2.props.dispatch((0, _AppStateManagement.hideMenu)());
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-2645630039' + ' ' + 'menu-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2645630039' + ' ' + 'menu-items',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.showAbout();
        }, className: 'jsx-2645630039' + ' ' + 'link',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2645630039',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, 'ABOUT')), _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.showScore();
        }, className: 'jsx-2645630039' + ' ' + 'link',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2645630039',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, 'HIGH SCORES')), _react2.default.createElement('div', {
        className: 'jsx-2645630039' + ' ' + 'link',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2645630039',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, 'SHARE')), _react2.default.createElement(_SocialShareButtons2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), this.state.showAbout && _react2.default.createElement(_AboutPage2.default, { onClose: function onClose() {
          return _this2.hideAbout();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), this.state.showScore && _react2.default.createElement(_ScorePage2.default, { onClose: function onClose() {
          return _this2.hideScore();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-2645630039' + ' ' + 'city-selector-items',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('h4', {
        className: 'jsx-2645630039',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, 'Beat the traffic in'), _react2.default.createElement('h2', {
        className: 'jsx-2645630039' + ' ' + 'link',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, 'Stuttgart'), _react2.default.createElement('h2', {
        className: 'jsx-2645630039' + ' ' + 'link',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, 'Berlin'), _react2.default.createElement('h2', {
        className: 'jsx-2645630039' + ' ' + 'link',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, 'Portland'), _react2.default.createElement('h2', {
        className: 'jsx-2645630039' + ' ' + 'link',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, 'Los Angeles'))), _react2.default.createElement('img', {
        src: '/static/assets/menu/menu-rightcloud.svg',
        className: 'jsx-2645630039' + ' ' + ('menu-rightcloud ' + (this.props.showMenu ? 'visiblecloud' : 'hiddencloud')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), _react2.default.createElement('img', {
        src: '/static/assets/menu/menu-leftcloud.svg',
        className: 'jsx-2645630039' + ' ' + ('menu-leftcloud ' + (this.props.showMenu ? 'visiblecloud' : 'hiddencloud')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2645630039',
        css: '.menu-page.jsx-2645630039{position:fixed;top:0;right:0;left:0;bottom:0;z-index:10;color:#262626;background-color:#ECECEC;will-change:transform;-webkit-transition:0.6s cubic-bezier(0.19,1,0.22,1);transition:0.6s cubic-bezier(0.19,1,0.22,1);}.menu-container.jsx-2645630039{max-width:700px;width:100%;height:100%;position:absolute;top:0%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.menu-items.jsx-2645630039{position:absolute;top:5rem;}.city-selector-items.jsx-2645630039{position:absolute;bottom:5rem;}.hidden.jsx-2645630039{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}.visible.jsx-2645630039{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}.link.jsx-2645630039{cursor:pointer;position:relative;left:2.9rem;}.link.jsx-2645630039:hover{color:#FF3BFF;}h2.link.jsx-2645630039{line-height:1.6rem;}.city-selector-items.jsx-2645630039 h4.jsx-2645630039{left:2.9rem;position:relative;line-height:0.2rem;}.menu-rightcloud.jsx-2645630039{position:fixed;top:0%;width:60%;right:0%;z-index:-1;-webkit-transition:1.2s cubic-bezier(0.19,1,0.22,1);transition:1.2s cubic-bezier(0.19,1,0.22,1);}.hiddencloud.jsx-2645630039{-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);}.visiblecloud.jsx-2645630039{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}.menu-leftcloud.jsx-2645630039{position:fixed;bottom:0%;width:110%;left:5%;z-index:-1;-webkit-transition:1.2s cubic-bezier(0.19,1,0.22,1);transition:1.2s cubic-bezier(0.19,1,0.22,1);}@media (min-width:600px){.menu-rightcloud.jsx-2645630039{width:40%;}.menu-leftcloud.jsx-2645630039{width:60%;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9tZW51L01lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUpvQixBQUc0QixBQWFDLEFBVUUsQUFLQSxBQUtTLEFBSUYsQUFJVixBQU1ELEFBSUssQUFJUCxBQU1HLEFBU1csQUFJRCxBQUlWLEFBVUgsQUFHQSxVQUZaLEFBR0EsRUFwQ2tCLEVBUnBCLENBL0NRLEFBeUNZLEFBb0JYLEFBaUJHLENBakVDLEVBVUYsQUFLRyxDQXVCZCxFQWxEVSxDQTZERSxHQWlCQyxFQWpFQyxBQVVkLEVBdEJTLENBMkJULEFBMkJxQixFQU9WLENBckJHLEdBdkNILEFBNkVELEdBakVTLEVBaUROLEdBaUJBLENBN0VBLEFBdUNiLElBY0EsR0FRaUQsR0FpQkEsQ0E3RWpDLENBV1AsT0FDRSxNQVhnQixHQVlFLGNBbUI3QixBQXFDQSxHQUpBLEdBckNBLEVBMUJ3QixzQkFDeUIsK0JBMERqRCxHQWlCQSxlQWhFQSwrQ0FWQSIsImZpbGUiOiJjb21wb25lbnRzL2dhbWUvdWkvbWVudS9NZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IEJ1dHRvbkNsb3NlIGZyb20gJy4uLy4uLy4uL3NoYXJlZC9CdXR0b25DbG9zZSdcbmltcG9ydCBTb2NpYWxTaGFyZUJ1dHRvbnMgZnJvbSAnLi4vLi4vLi4vc2hhcmVkL1NvY2lhbFNoYXJlQnV0dG9ucydcblxuaW1wb3J0IEFib3V0UGFnZSBmcm9tICcuLi8uLi8uLi9hYm91dC9BYm91dFBhZ2UnXG5pbXBvcnQgU2NvcmVQYWdlIGZyb20gJy4uLy4uLy4uL3Njb3JlL1Njb3JlUGFnZSdcblxuaW1wb3J0IHsgaGlkZU1lbnUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZW1hbmFnZW1lbnQvYXBwL0FwcFN0YXRlTWFuYWdlbWVudCdcblxuY2xhc3MgTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy51cmxXaGVuRW50ZXJpbmdNZW51VG9SZXN0b3JlID0gJy8nXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0Fib3V0OiBmYWxzZSxcbiAgICAgIHNob3dTY29yZTogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGlmIChuZXdQcm9wcy5zaG93TWVudSAhPT0gdGhpcy5wcm9wcy5zaG93TWVudSkge1xuICAgICAgaWYgKG5ld1Byb3BzLnNob3dNZW51KSB7XG4gICAgICAgIC8vIFB1c2hcbiAgICAgICAgdGhpcy51cmxXaGVuRW50ZXJpbmdNZW51VG9SZXN0b3JlID0gUm91dGVyLmFzUGF0aFxuXG4gICAgICAgIC8vIERvaW5nIHRoZSA/c2hvdz1tZW51IHRyaWNrIGJlY2F1c2Ugb2YgYSBidWcgb2YgbmV4dC5qc1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL2lzc3Vlcy8yNjY4XG4gICAgICAgIFJvdXRlci5wdXNoKFxuICAgICAgICAgICcvP3Nob3c9bWVudScsXG4gICAgICAgICAgYCR7dGhpcy51cmxXaGVuRW50ZXJpbmdNZW51VG9SZXN0b3JlfT9zaG93PW1lbnVgLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJlc3RvcmUgdXJsXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJywgYCR7dGhpcy51cmxXaGVuRW50ZXJpbmdNZW51VG9SZXN0b3JlfWAsIHtcbiAgICAgICAgICBzaGFsbG93OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy51cmwucXVlcnkuc2hvdyA9PT0gJ21lbnUnICYmXG4gICAgICBuZXdQcm9wcy51cmwucXVlcnkucGFnZSA9PT0gJ2Fib3V0J1xuICAgICkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3Nob3cgYWJvdXQgcGFnZSBmcm9tIG1lbnUnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dBYm91dDogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnVybC5xdWVyeS5zaG93ID09PSAnbWVudScgJiZcbiAgICAgIG5ld1Byb3BzLnVybC5xdWVyeS5wYWdlID09PSAnc2NvcmUnXG4gICAgKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2hvdyBzY29yZSBwYWdlIGZyb20gbWVudScpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1Njb3JlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICh0aGlzLnByb3BzLnVybC5xdWVyeS5wYWdlID09PSAnYWJvdXQnIHx8XG4gICAgICAgIHRoaXMucHJvcHMudXJsLnF1ZXJ5LnBhZ2UgPT09ICdzY29yZScpICYmXG4gICAgICBuZXdQcm9wcy51cmwucXVlcnkucGFnZSA9PT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaGlkZSBhYm91dCBvciBzY29yZSBwYWdlIGZyb20gbWVudScpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd0Fib3V0OiBmYWxzZSxcbiAgICAgICAgc2hvd1Njb3JlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnVybC5xdWVyeS5zaG93ID09PSAnbWVudScgJiZcbiAgICAgIG5ld1Byb3BzLnVybC5xdWVyeS5zaG93ID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIC8vIFdlIGV4aXRlZCB0aGUgbWVudSB2aWEgYmFja2J1dHRvblxuICAgICAgLy8gY29uc29sZS5sb2coJ0V4aXQgbWVudSB2aWEgYmFja2J1dHRvbicpXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVNZW51KCkpXG4gICAgfVxuICB9XG5cbiAgc2hvd0Fib3V0ICgpIHtcbiAgICBSb3V0ZXIucHVzaCgnLz9zaG93PW1lbnUmcGFnZT1hYm91dCcsIGAvYWJvdXRgLCB7XG4gICAgICBzaGFsbG93OiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHNob3dTY29yZSAoKSB7XG4gICAgUm91dGVyLnB1c2goJy8/c2hvdz1tZW51JnBhZ2U9c2NvcmUnLCBgL2hpZ2hzY29yZWAsIHtcbiAgICAgIHNoYWxsb3c6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGlkZUFib3V0ICgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIGhpZGVTY29yZSAoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1lbnUtcGFnZSAke3RoaXMucHJvcHMuc2hvd01lbnUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ31gfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ2xvc2Ugb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kaXNwYXRjaChoaWRlTWVudSgpKX0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS1jb250YWluZXInPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUtaXRlbXMnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmsnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd0Fib3V0KCl9PlxuICAgICAgICAgICAgICA8aDE+QUJPVVQ8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluaycgb25DbGljaz17KCkgPT4gdGhpcy5zaG93U2NvcmUoKX0+XG4gICAgICAgICAgICAgIDxoMT5ISUdIIFNDT1JFUzwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rJz48aDE+U0hBUkU8L2gxPjwvZGl2PlxuICAgICAgICAgICAgPFNvY2lhbFNoYXJlQnV0dG9ucyAvPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Fib3V0ICYmIDxBYm91dFBhZ2Ugb25DbG9zZT17KCkgPT4gdGhpcy5oaWRlQWJvdXQoKX0gLz59XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93U2NvcmUgJiYgPFNjb3JlUGFnZSBvbkNsb3NlPXsoKSA9PiB0aGlzLmhpZGVTY29yZSgpfSAvPn1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXR5LXNlbGVjdG9yLWl0ZW1zJz5cbiAgICAgICAgICAgIDxoND5CZWF0IHRoZSB0cmFmZmljIGluPC9oND5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2xpbmsnPlN0dXR0Z2FydDwvaDI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdsaW5rJz5CZXJsaW48L2gyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbGluayc+UG9ydGxhbmQ8L2gyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbGluayc+TG9zIEFuZ2VsZXM8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e2BtZW51LXJpZ2h0Y2xvdWQgJHt0aGlzLnByb3BzLnNob3dNZW51ID8gJ3Zpc2libGVjbG91ZCcgOiAnaGlkZGVuY2xvdWQnfWB9XG4gICAgICAgICAgc3JjPScvc3RhdGljL2Fzc2V0cy9tZW51L21lbnUtcmlnaHRjbG91ZC5zdmcnXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YG1lbnUtbGVmdGNsb3VkICR7dGhpcy5wcm9wcy5zaG93TWVudSA/ICd2aXNpYmxlY2xvdWQnIDogJ2hpZGRlbmNsb3VkJ31gfVxuICAgICAgICAgIHNyYz0nL3N0YXRpYy9hc3NldHMvbWVudS9tZW51LWxlZnRjbG91ZC5zdmcnXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tZW51LXBhZ2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC42cyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtY29udGFpbmVye1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWl0ZW1ze1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jaXR5LXNlbGVjdG9yLWl0ZW1ze1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52aXNpYmxlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogMi45cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5rOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6ICNGRjNCRkY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIubGlua3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNpdHktc2VsZWN0b3ItaXRlbXMgaDR7XG4gICAgICAgICAgICBsZWZ0OiAyLjlyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC4ycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LXJpZ2h0Y2xvdWR7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDAlO1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMS4ycyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW5jbG91ZCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmlzaWJsZWNsb3VkIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtbGVmdGNsb3Vke1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMTAlO1xuICAgICAgICAgICAgbGVmdDogNSU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDEuMnMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpOztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIC5tZW51LXJpZ2h0Y2xvdWR7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1sZWZ0Y2xvdWR7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaG93TWVudTogc3RhdGUuYXBwLmdldCgnc2hvd01lbnUnKVxuICB9XG59KShNZW51KVxuIl19 */\n/*@ sourceURL=components/game/ui/menu/Menu.js */'
      }));
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    showMenu: state.app.get('showMenu')
  };
})(Menu);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9tZW51L01lbnUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiUm91dGVyIiwiQnV0dG9uQ2xvc2UiLCJTb2NpYWxTaGFyZUJ1dHRvbnMiLCJBYm91dFBhZ2UiLCJTY29yZVBhZ2UiLCJoaWRlTWVudSIsIk1lbnUiLCJwcm9wcyIsInVybFdoZW5FbnRlcmluZ01lbnVUb1Jlc3RvcmUiLCJzdGF0ZSIsInNob3dBYm91dCIsInNob3dTY29yZSIsIm5ld1Byb3BzIiwic2hvd01lbnUiLCJhc1BhdGgiLCJwdXNoIiwic2hhbGxvdyIsInJlcGxhY2UiLCJ1cmwiLCJxdWVyeSIsInNob3ciLCJwYWdlIiwic2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJkaXNwYXRjaCIsIndpbmRvdyIsImhpc3RvcnkiLCJiYWNrIiwiaGlkZUFib3V0IiwiaGlkZVNjb3JlIiwiYXBwIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQXdCOzs7O0FBRS9CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWU7Ozs7QUFFdEIsQUFBUyxBQUFnQjs7Ozs7OztJLEFBRW5CO2dDQUNKOztnQkFBQSxBQUFhLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1osQUFFTjs7VUFBQSxBQUFLLCtCQUFMLEFBQW9DLEFBRXBDOztVQUFBLEFBQUs7aUJBQVEsQUFDQSxBQUNYO2lCQVBnQixBQUtsQixBQUFhLEFBRUE7QUFGQSxBQUNYO1dBR0g7Ozs7OzhDLEFBRTBCLFVBQVUsQUFDbkM7VUFBSSxTQUFBLEFBQVMsYUFBYSxLQUFBLEFBQUssTUFBL0IsQUFBcUMsVUFBVSxBQUM3QztZQUFJLFNBQUosQUFBYSxVQUFVLEFBQ3JCO0FBQ0E7ZUFBQSxBQUFLLCtCQUErQixnQkFB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QTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUFzQjtBQUF0QjtBQUFBLHlCQUFzQixjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FQeEIsQUFPRSxBQUFzQixBQUN0QiwyQkFBQSxBQUFDOztvQkFBRDtzQkFSRixBQVFFLEFBQ0M7QUFERDtBQUFBLGVBQ0MsQUFBSyxNQUFMLEFBQVcsNkJBQWEsQUFBQyxxQ0FBVSxTQUFTLG1CQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBQS9CO29CQUFBO3NCQVQzQixBQVMyQixBQUN4QjtBQUR3QjtPQUFBLFFBQ3hCLEFBQUssTUFBTCxBQUFXLDZCQUFhLEFBQUMscUNBQVUsU0FBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUEvQjtvQkFBQTtzQkFaN0IsQUFFRSxBQVUyQixBQUczQjtBQUgyQjtPQUFBLG9CQUczQixjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx3Q0FBQSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSw4QkFBQSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSwyQkFBQSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSw2QkFBQSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQXpCTixBQUtFLEFBZUUsQUFLRSxBQUtKO2FBQUEsQUFFTTttRUFEMEIsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLGlCQUR0RCxBQUN1RTs7b0JBRHZFO3NCQTlCRixBQThCRSxBQUtBO0FBTEE7QUFFRTthQUdGLEFBRU07a0VBRHlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixpQkFEckQsQUFDc0U7O29CQUR0RTtzQkFuQ0YsQUFtQ0U7QUFBQTtBQUVFO2lCQXJDSjthQURGLEFBQ0UsQUE0SUg7QUE1SUc7Ozs7O0FBbkdhLEEsQUFrUG5COzsyQ0FBdUIsaUJBQVMsQUFDOUI7O2NBQ1ksTUFBQSxBQUFNLElBQU4sQUFBVSxJQUR0QixBQUFPLEFBQ0ssQUFBYyxBQUUzQjtBQUhRLEFBQ0w7QUFGVyxDQUFBLEVBQWYsQUFBZSxBQUlaIiwiZmlsZSI6Ik1lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==