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

var _MaskItem = require('./MaskItem');

var _MaskItem2 = _interopRequireDefault(_MaskItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/markuskreutzer/Documents/Github/lab-beat-the-traffic/components/game/masking/svgmasking/Clippath.js';


var Clippath = function (_Component) {
  (0, _inherits3.default)(Clippath, _Component);

  function Clippath() {
    (0, _classCallCheck3.default)(this, Clippath);

    return (0, _possibleConstructorReturn3.default)(this, (Clippath.__proto__ || (0, _getPrototypeOf2.default)(Clippath)).apply(this, arguments));
  }

  (0, _createClass3.default)(Clippath, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('clipPath', { id: 'svgPath', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, this.props.masks.map(function (mask) {
        return _react2.default.createElement(_MaskItem2.default, { key: mask.id, mask: mask, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        });
      }));
    }
  }]);

  return Clippath;
}(_react.Component);

exports.default = Clippath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9tYXNraW5nL3N2Z21hc2tpbmcvQ2xpcHBhdGguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJNYXNrSXRlbSIsIkNsaXBwYXRoIiwicHJvcHMiLCJtYXNrcyIsIm1hcCIsIm1hc2siLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFFaEIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs2QkFDTSxBQUNSOzZCQUNFLGNBQUEsY0FBVSxJQUFWLEFBQWE7b0JBQWI7c0JBQUEsQUFDRztBQURIO09BQUEsT0FDRyxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksZ0JBQUE7K0JBQVEsQUFBQyxvQ0FBUyxLQUFLLEtBQWYsQUFBb0IsSUFBSSxNQUF4QixBQUE4QjtzQkFBOUI7d0JBQVIsQUFBUTtBQUFBO1NBQUE7QUFGbEMsQUFDRSxBQUNHLEFBR047Ozs7O0FBUG9CLEEsQUFVdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ2xpcHBhdGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==