'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _gsap = require('gsap');

var _GameEngineStateManager = require('../../../../statemanagement/app/GameEngineStateManager');

var _GameEngineStateManager2 = _interopRequireDefault(_GameEngineStateManager);

var _MissedCarAnimationsEngine = require('../engines/MissedCarAnimationsEngine');

var _MissedCarAnimationsEngine2 = _interopRequireDefault(_MissedCarAnimationsEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MissedCarAnimation = function () {
  function MissedCarAnimation(x, y, size, id) {
    (0, _classCallCheck3.default)(this, MissedCarAnimation);

    this.x = x - size / 2;
    this.y = y - size / 2;
    this.w = size;
    this.h = size;
    this.id = id;
    this.currentFrame = 0;

    this.animate();
  }

  (0, _createClass3.default)(MissedCarAnimation, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      this.anim = _gsap.TweenLite.to(this, 0.5, {
        currentFrame: _MissedCarAnimationsEngine2.default.getNbFrames(),
        ease: SteppedEase.config(_MissedCarAnimationsEngine2.default.getNbFrames()),
        onComplete: function onComplete() {
          _this.destroy();
        }
      });
      this.anim.play();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.anim.kill();
      _GameEngineStateManager2.default.removeMissedCarAnimation(this.id);
    }
  }]);

  return MissedCarAnimation;
}();

exports.default = MissedCarAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL21vZGVscy9NaXNzZWRDYXJBbmltYXRpb24uanMiXSwibmFtZXMiOlsiVHdlZW5MaXRlIiwiR2FtZUVuZ2luZVN0YXRlTWFuYWdlciIsIk1pc3NlZENhckFuaW1hdGlvbnNFbmdpbmUiLCJNaXNzZWRDYXJBbmltYXRpb24iLCJ4IiwieSIsInNpemUiLCJpZCIsInciLCJoIiwiY3VycmVudEZyYW1lIiwiYW5pbWF0ZSIsImFuaW0iLCJ0byIsImdldE5iRnJhbWVzIiwiZWFzZSIsIlN0ZXBwZWRFYXNlIiwiY29uZmlnIiwib25Db21wbGV0ZSIsImRlc3Ryb3kiLCJwbGF5Iiwia2lsbCIsInJlbW92ZU1pc3NlZENhckFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQU8sQUFBNEI7Ozs7QUFDbkMsQUFBTyxBQUErQjs7Ozs7O0lBRWhDLEEsaUNBQ0o7OEJBQUEsQUFBYSxHQUFiLEFBQWdCLEdBQWhCLEFBQW1CLE1BQW5CLEFBQXlCLElBQUk7d0NBQzNCOztTQUFBLEFBQUssSUFBSSxJQUFJLE9BQWIsQUFBb0IsQUFDcEI7U0FBQSxBQUFLLElBQUksSUFBSSxPQUFiLEFBQW9CLEFBQ3BCO1NBQUEsQUFBSyxJQUFMLEFBQVMsQUFDVDtTQUFBLEFBQUssSUFBTCxBQUFTLEFBQ1Q7U0FBQSxBQUFLLEtBQUwsQUFBVSxBQUNWO1NBQUEsQUFBSyxlQUFMLEFBQW9CLEFBRXBCOztTQUFBLEFBQUssQUFDTjs7Ozs7OEJBRVU7a0JBQ1Q7O1dBQUEsQUFBSyx1QkFBTyxBQUFVLEdBQVYsQUFBYSxNQUFiLEFBQW1CO3NCQUNmLG9DQURvQixBQUNwQixBQUEwQixBQUN4QztjQUFNLFlBQUEsQUFBWSxPQUFPLG9DQUZTLEFBRTVCLEFBQW1CLEFBQTBCLEFBQ25EO29CQUFZLHNCQUFNLEFBQ2hCO2dCQUFBLEFBQUssQUFDTjtBQUxILEFBQVksQUFBd0IsQUFPcEM7QUFQb0MsQUFDbEMsT0FEVTtXQU9aLEFBQUssS0FBTCxBQUFVLEFBQ1g7Ozs7OEJBRVUsQUFDVDtXQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7dUNBQUEsQUFBdUIseUJBQXlCLEtBQWhELEFBQXFELEFBQ3REOzs7OztBQUdIOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik1pc3NlZENhckFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9