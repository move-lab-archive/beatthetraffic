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

var _SmokeLevel = require('./indicators/SmokeLevel');

var _SmokeLevel2 = _interopRequireDefault(_SmokeLevel);

var _Score = require('./indicators/Score');

var _Score2 = _interopRequireDefault(_Score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/ui/GameIndicators.js';


var GameIndicators = function (_Component) {
  (0, _inherits3.default)(GameIndicators, _Component);

  function GameIndicators() {
    (0, _classCallCheck3.default)(this, GameIndicators);

    return (0, _possibleConstructorReturn3.default)(this, (GameIndicators.__proto__ || (0, _getPrototypeOf2.default)(GameIndicators)).apply(this, arguments));
  }

  (0, _createClass3.default)(GameIndicators, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-1243120132' + ' ' + ('game-indicators\n        ' + (this.props.introAnimPlayed ? '' : 'hidden')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_Score2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(_SmokeLevel2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1243120132',
        css: '.game-indicators.jsx-1243120132{position:fixed;top:1.4rem;left:2.8rem;z-index:5;-webkit-transform:will-change;-ms-transform:will-change;transform:will-change;opacity:1;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}.hidden.jsx-1243120132{opacity:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9HYW1lSW5kaWNhdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlb0IsQUFHNEIsQUFVTCxVQUNaLEtBVmEsV0FDQyxZQUNGLFVBQ1ksOEVBQ1osVUFDYyx3REFDMUIiLCJmaWxlIjoiY29tcG9uZW50cy9nYW1lL3VpL0dhbWVJbmRpY2F0b3JzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgU21va2VMZXZlbCBmcm9tICcuL2luZGljYXRvcnMvU21va2VMZXZlbCdcbmltcG9ydCBTY29yZSBmcm9tICcuL2luZGljYXRvcnMvU2NvcmUnXG5cbmNsYXNzIEdhbWVJbmRpY2F0b3JzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BnYW1lLWluZGljYXRvcnNcbiAgICAgICAgJHt0aGlzLnByb3BzLmludHJvQW5pbVBsYXllZCA/ICcnIDogJ2hpZGRlbid9YH1cbiAgICAgID5cbiAgICAgICAgPFNjb3JlIC8+XG4gICAgICAgIDxTbW9rZUxldmVsIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZ2FtZS1pbmRpY2F0b3JzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMS40cmVtO1xuICAgICAgICAgICAgbGVmdDogMi44cmVtO1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogd2lsbC1jaGFuZ2U7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbnRyb0FuaW1QbGF5ZWQ6IHN0YXRlLmFwcC5nZXQoJ2ludHJvQW5pbVBsYXllZCcpXG4gIH1cbn0pKEdhbWVJbmRpY2F0b3JzKVxuIl19 */\n/*@ sourceURL=components/game/ui/GameIndicators.js */'
      }));
    }
  }]);

  return GameIndicators;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    introAnimPlayed: state.app.get('introAnimPlayed')
  };
})(GameIndicators);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS91aS9HYW1lSW5kaWNhdG9ycy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJTbW9rZUxldmVsIiwiU2NvcmUiLCJHYW1lSW5kaWNhdG9ycyIsInByb3BzIiwiaW50cm9BbmltUGxheWVkIiwic3RhdGUiLCJhcHAiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUVULEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFXOzs7Ozs7Ozs7SUFFWixBOzs7Ozs7Ozs7Ozs2QkFDTSxBQUNSOzZCQUNFLGNBQUE7NEVBRUksS0FBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWCxBQUE2QixLQUZqQyxBQUVzQzs7b0JBRnRDO3NCQUFBLEFBSUU7QUFKRjtBQUFBLE9BQUEsa0JBSUUsQUFBQzs7b0JBQUQ7c0JBSkYsQUFJRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFMRixBQUtFO0FBQUE7QUFBQTtpQkFMRjthQURGLEFBQ0UsQUF1Qkg7QUF2Qkc7Ozs7O0FBSHVCLEEsQUE2QjdCOzsyQ0FBdUIsaUJBQVMsQUFDOUI7O3FCQUNtQixNQUFBLEFBQU0sSUFBTixBQUFVLElBRDdCLEFBQU8sQUFDWSxBQUFjLEFBRWxDO0FBSFEsQUFDTDtBQUZXLENBQUEsRUFBZixBQUFlLEFBSVoiLCJmaWxlIjoiR2FtZUluZGljYXRvcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==