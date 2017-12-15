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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _bezierEasing = require('bezier-easing');

var _bezierEasing2 = _interopRequireDefault(_bezierEasing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/masking/svgmasking/SmokeSVGOverlay.js';


var SmokeSVGOverlay = function (_PureComponent) {
  (0, _inherits3.default)(SmokeSVGOverlay, _PureComponent);

  function SmokeSVGOverlay(props) {
    (0, _classCallCheck3.default)(this, SmokeSVGOverlay);

    // Can tweak that here easily: http://greweb.me/bezier-easing-editor/example/
    var _this = (0, _possibleConstructorReturn3.default)(this, (SmokeSVGOverlay.__proto__ || (0, _getPrototypeOf2.default)(SmokeSVGOverlay)).call(this, props));

    _this.easing = (0, _bezierEasing2.default)(0.64, 0.12, 0.88, 0.74);
    return _this;
  }

  (0, _createClass3.default)(SmokeSVGOverlay, [{
    key: 'getPollutionOverlayStyle',
    value: function getPollutionOverlayStyle() {
      var pollutionPercentage = this.props.nbMissed * 100 / this.props.maxMissed;
      var pollutionFillColor = void 0;
      var pollutionOpacity = 0;

      if (pollutionPercentage < 80) {
        pollutionFillColor = '#262626';
        pollutionOpacity = this.easing(pollutionPercentage / 100);
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
      var pollutionOverlayStyle = this.getPollutionOverlayStyle();

      return _react2.default.createElement('rect', {
        x: '0',
        y: '0',
        fill: pollutionOverlayStyle.pollutionFillColor,
        fillOpacity: pollutionOverlayStyle.pollutionOpacity,
        width: '1280',
        height: '720',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      });
    }
  }]);

  return SmokeSVGOverlay;
}(_react.PureComponent);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    nbMissed: state.game.get('nbItemsMissed'),
    maxMissed: state.game.get('maxMissed')
  };
})(SmokeSVGOverlay);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9tYXNraW5nL3N2Z21hc2tpbmcvU21va2VTVkdPdmVybGF5LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJCZXppZXJFYXNpbmciLCJTbW9rZVNWR092ZXJsYXkiLCJwcm9wcyIsImVhc2luZyIsInBvbGx1dGlvblBlcmNlbnRhZ2UiLCJuYk1pc3NlZCIsIm1heE1pc3NlZCIsInBvbGx1dGlvbkZpbGxDb2xvciIsInBvbGx1dGlvbk9wYWNpdHkiLCJwb2xsdXRpb25PdmVybGF5U3R5bGUiLCJnZXRQb2xsdXRpb25PdmVybGF5U3R5bGUiLCJzdGF0ZSIsImdhbWUiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0ksQUFFRDsyQ0FDSjs7MkJBQUEsQUFBYSxPQUFPO3dDQUdsQjs7QUFIa0I7d0pBQUEsQUFDWixBQUdOOztVQUFBLEFBQUssU0FBUyw0QkFBQSxBQUFhLE1BQWIsQUFBbUIsTUFBbkIsQUFBeUIsTUFKckIsQUFJbEIsQUFBYyxBQUErQjtXQUM5Qzs7Ozs7K0NBRTJCLEFBQzFCO1VBQU0sc0JBQXNCLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixNQUFNLEtBQUEsQUFBSyxNQUE3RCxBQUFtRSxBQUNuRTtVQUFJLDBCQUFKLEFBQ0E7VUFBSSxtQkFBSixBQUF1QixBQUV2Qjs7VUFBSSxzQkFBSixBQUEwQixJQUFJLEFBQzVCOzZCQUFBLEFBQXFCLEFBQ3JCOzJCQUFtQixLQUFBLEFBQUssT0FBTyxzQkFBL0IsQUFBbUIsQUFBa0MsQUFDdEQ7QUFIRCxhQUdPLEFBQ0w7NkJBQUEsQUFBcUIsQUFDckI7MkJBQUEsQUFBbUIsQUFDcEI7QUFFRDs7OzRCQUFPLEFBRUw7MEJBRkYsQUFBTyxBQUlSO0FBSlEsQUFDTDs7Ozs2QkFLTSxBQUNSO1VBQU0sd0JBQXdCLEtBQTlCLEFBQThCLEFBQUssQUFFbkM7OztXQUNFLEFBQ0ksQUFDRjtXQUZGLEFBRUksQUFDRjtjQUFNLHNCQUhSLEFBRzhCLEFBQzVCO3FCQUFhLHNCQUpmLEFBSXFDLEFBQ25DO2VBTEYsQUFLUSxBQUNOO2dCQU5GLEFBTVM7O29CQU5UO3NCQURGLEFBQ0UsQUFTSDtBQVRHO0FBQ0UsT0FERjs7Ozs7QUEvQndCLEEsQUEyQzlCOzsyQ0FBdUIsaUJBQVMsQUFDOUI7O2NBQ1ksTUFBQSxBQUFNLEtBQU4sQUFBVyxJQURoQixBQUNLLEFBQWUsQUFDekI7ZUFBVyxNQUFBLEFBQU0sS0FBTixBQUFXLElBRnhCLEFBQU8sQUFFTSxBQUFlLEFBRTdCO0FBSlEsQUFDTDtBQUZXLENBQUEsRUFBZixBQUFlLEFBS1oiLCJmaWxlIjoiU21va2VTVkdPdmVybGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=