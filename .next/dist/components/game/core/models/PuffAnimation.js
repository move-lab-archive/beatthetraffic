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

var _PuffAnimationsEngine = require('../engines/PuffAnimationsEngine');

var _PuffAnimationsEngine2 = _interopRequireDefault(_PuffAnimationsEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PuffAnimation = function () {
  function PuffAnimation(x, y, size, id) {
    (0, _classCallCheck3.default)(this, PuffAnimation);

    this.x = x - size / 2;
    this.y = y - size / 2;
    this.w = size;
    this.h = size;
    this.id = id;
    this.currentFrame = 0;

    this.animate();
  }

  (0, _createClass3.default)(PuffAnimation, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      this.anim = _gsap.TweenLite.to(this, 0.5, {
        currentFrame: _PuffAnimationsEngine2.default.getNbFrames(),
        ease: SteppedEase.config(_PuffAnimationsEngine2.default.getNbFrames()),
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
      _GameEngineStateManager2.default.removePuffAnimation(this.id);
    }
  }]);

  return PuffAnimation;
}();

exports.default = PuffAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL21vZGVscy9QdWZmQW5pbWF0aW9uLmpzIl0sIm5hbWVzIjpbIlR3ZWVuTGl0ZSIsIkdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIiLCJQdWZmQW5pbWF0aW9uc0VuZ2luZSIsIlB1ZmZBbmltYXRpb24iLCJ4IiwieSIsInNpemUiLCJpZCIsInciLCJoIiwiY3VycmVudEZyYW1lIiwiYW5pbWF0ZSIsImFuaW0iLCJ0byIsImdldE5iRnJhbWVzIiwiZWFzZSIsIlN0ZXBwZWRFYXNlIiwiY29uZmlnIiwib25Db21wbGV0ZSIsImRlc3Ryb3kiLCJwbGF5Iiwia2lsbCIsInJlbW92ZVB1ZmZBbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPLEFBQTRCOzs7O0FBQ25DLEFBQU8sQUFBMEI7Ozs7OztJQUUzQixBLDRCQUNKO3lCQUFBLEFBQWEsR0FBYixBQUFnQixHQUFoQixBQUFtQixNQUFuQixBQUF5QixJQUFJO3dDQUMzQjs7U0FBQSxBQUFLLElBQUksSUFBSSxPQUFiLEFBQW9CLEFBQ3BCO1NBQUEsQUFBSyxJQUFJLElBQUksT0FBYixBQUFvQixBQUNwQjtTQUFBLEFBQUssSUFBTCxBQUFTLEFBQ1Q7U0FBQSxBQUFLLElBQUwsQUFBUyxBQUNUO1NBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjtTQUFBLEFBQUssZUFBTCxBQUFvQixBQUVwQjs7U0FBQSxBQUFLLEFBQ047Ozs7OzhCQUVVO2tCQUNUOztXQUFBLEFBQUssdUJBQU8sQUFBVSxHQUFWLEFBQWEsTUFBYixBQUFtQjtzQkFDZiwrQkFEb0IsQUFDcEIsQUFBcUIsQUFDbkM7Y0FBTSxZQUFBLEFBQVksT0FBTywrQkFGUyxBQUU1QixBQUFtQixBQUFxQixBQUM5QztvQkFBWSxzQkFBTSxBQUNoQjtnQkFBQSxBQUFLLEFBQ047QUFMSCxBQUFZLEFBQXdCLEFBT3BDO0FBUG9DLEFBQ2xDLE9BRFU7V0FPWixBQUFLLEtBQUwsQUFBVSxBQUNYOzs7OzhCQUVVLEFBQ1Q7V0FBQSxBQUFLLEtBQUwsQUFBVSxBQUNWO3VDQUFBLEFBQXVCLG9CQUFvQixLQUEzQyxBQUFnRCxBQUNqRDs7Ozs7QUFHSDs7a0JBQUEsQUFBZSIsImZpbGUiOiJQdWZmQW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrdXNrcmV1dHplci9Eb2N1bWVudHMvR2l0aHViL2xhYi1iZWF0LXRoZS10cmFmZmljIn0=