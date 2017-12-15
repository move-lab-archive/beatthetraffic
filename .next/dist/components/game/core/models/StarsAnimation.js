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

var _StarsAnimationsEngine = require('../engines/StarsAnimationsEngine');

var _StarsAnimationsEngine2 = _interopRequireDefault(_StarsAnimationsEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO rename to explosion animation

var StarsAnimation = function () {
  function StarsAnimation(x, y, id) {
    var _this = this;

    (0, _classCallCheck3.default)(this, StarsAnimation);

    this.x = x;
    this.y = y;
    this.id = id;

    this.emitterSize = 50;
    this.dotQuantity = 10;
    this.dotSizeMax = 30;
    this.dotSizeMin = 10;

    this.maxAnimDuration = 0;

    this.dots = [];

    this.timeline = new _gsap.TimelineLite({ onComplete: function onComplete() {
        return _this.destroy();
      } });
    this.create();
    this.animate();
  }

  (0, _createClass3.default)(StarsAnimation, [{
    key: 'create',
    value: function create() {
      // create all the dots
      for (var i = 0; i < this.dotQuantity; i++) {
        var dot = {};
        dot.currentFrame = 0;
        dot.size = this.getRandomSize(this.dotSizeMin, this.dotSizeMax);
        dot.angle = Math.random() * Math.PI * 2; // random angle
        // figure out the maximum distance from the center,
        // factoring in the size of the dot (it must never go outside the circle),
        // and then pick a random spot along that length where we'll plot the point.
        dot.length = Math.random() * (this.emitterSize / 2 - dot.size / 2);
        // place the dot at a random spot within the emitter, and set its size.
        _gsap.TweenLite.set(dot, {
          x: this.x + Math.cos(dot.angle) * dot.length,
          y: this.y + Math.sin(dot.angle) * dot.length,
          width: dot.size,
          height: dot.size,
          opacity: 1
        });

        var animationDuration = 0.3 + Math.random();

        this.timeline.to(dot, animationDuration, {
          x: this.x + Math.cos(dot.angle) * dot.length * 6,
          y: this.y + Math.sin(dot.angle) * dot.length * 6
        }, 0).to(dot, animationDuration, { opacity: 0, ease: Power4.easeIn }, 0).to(dot, animationDuration / 2, {
          currentFrame: _StarsAnimationsEngine2.default.getNbFrames(),
          ease: SteppedEase.config(_StarsAnimationsEngine2.default.getNbFrames()),
          repeat: 2
        }, 0);
        this.dots.push(dot);
      }
    }
  }, {
    key: 'getRandomSize',
    value: function getRandomSize(min, max) {
      return min + Math.random() * (max - min);
    }
  }, {
    key: 'animate',
    value: function animate() {
      this.timeline.play();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.timeline.kill();
      _GameEngineStateManager2.default.removeStarsAnimation(this.id);
    }
  }]);

  return StarsAnimation;
}();

exports.default = StarsAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL21vZGVscy9TdGFyc0FuaW1hdGlvbi5qcyJdLCJuYW1lcyI6WyJUd2Vlbk1heCIsIlR3ZWVuTGl0ZSIsIlRpbWVsaW5lTGl0ZSIsIkdhbWVFbmdpbmVTdGF0ZU1hbmFnZXIiLCJTdGFyc0FuaW1hdGlvbnNFbmdpbmUiLCJTdGFyc0FuaW1hdGlvbiIsIngiLCJ5IiwiaWQiLCJlbWl0dGVyU2l6ZSIsImRvdFF1YW50aXR5IiwiZG90U2l6ZU1heCIsImRvdFNpemVNaW4iLCJtYXhBbmltRHVyYXRpb24iLCJkb3RzIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwiZGVzdHJveSIsImNyZWF0ZSIsImFuaW1hdGUiLCJpIiwiZG90IiwiY3VycmVudEZyYW1lIiwic2l6ZSIsImdldFJhbmRvbVNpemUiLCJhbmdsZSIsIk1hdGgiLCJyYW5kb20iLCJQSSIsImxlbmd0aCIsInNldCIsImNvcyIsInNpbiIsIndpZHRoIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImFuaW1hdGlvbkR1cmF0aW9uIiwidG8iLCJlYXNlIiwiUG93ZXI0IiwiZWFzZUluIiwiZ2V0TmJGcmFtZXMiLCJTdGVwcGVkRWFzZSIsImNvbmZpZyIsInJlcGVhdCIsInB1c2giLCJtaW4iLCJtYXgiLCJwbGF5Iiwia2lsbCIsInJlbW92ZVN0YXJzQW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBVSxBQUFXOztBQUM5QixBQUFPLEFBQTRCOzs7O0FBQ25DLEFBQU8sQUFBMkI7Ozs7OztBQUVsQzs7SUFDTSxBLDZCQUNKOzBCQUFBLEFBQWEsR0FBYixBQUFnQixHQUFoQixBQUFtQixJQUFJO2dCQUFBOzt3Q0FDckI7O1NBQUEsQUFBSyxJQUFMLEFBQVMsQUFDVDtTQUFBLEFBQUssSUFBTCxBQUFTLEFBQ1Q7U0FBQSxBQUFLLEtBQUwsQUFBVSxBQUVWOztTQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjtTQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjtTQUFBLEFBQUssYUFBTCxBQUFrQixBQUNsQjtTQUFBLEFBQUssYUFBTCxBQUFrQixBQUVsQjs7U0FBQSxBQUFLLGtCQUFMLEFBQXVCLEFBRXZCOztTQUFBLEFBQUssT0FBTCxBQUFZLEFBRVo7O1NBQUEsQUFBSyxvQ0FBOEIsWUFBWSxzQkFBQTtlQUFNLE1BQU4sQUFBTSxBQUFLO0FBQTFELEFBQWdCLEFBQWlCLEFBQ2pDLE9BRGlDLEVBQWpCLEFBQUk7U0FDcEIsQUFBSyxBQUNMO1NBQUEsQUFBSyxBQUNOOzs7Ozs2QkFFUyxBQUNSO0FBQ0E7V0FBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksS0FBcEIsQUFBeUIsYUFBekIsQUFBc0M7WUFDaEMsTUFBSixBQUFVLEFBQ1Y7WUFBQSxBQUFJLGVBQUosQUFBbUIsQUFDbkI7WUFBQSxBQUFJLE9BQU8sS0FBQSxBQUFLLGNBQWMsS0FBbkIsQUFBd0IsWUFBWSxLQUEvQyxBQUFXLEFBQXlDLEFBQ3BEO1lBQUEsQUFBSSxRQUFRLEtBQUEsQUFBSyxXQUFXLEtBQWhCLEFBQXFCLEtBSlEsQUFJekMsQUFBc0MsRUFKRyxBQUN6QyxDQUd3QyxBQUN4QztBQUNBO0FBQ0E7QUFDQTtZQUFBLEFBQUksU0FBUyxLQUFBLEFBQUssWUFBWSxLQUFBLEFBQUssY0FBTCxBQUFtQixJQUFJLElBQUEsQUFBSSxPQUF6RCxBQUFhLEFBQW1ELEFBQ2hFO0FBQ0E7d0JBQUEsQUFBVSxJQUFWLEFBQWM7YUFDVCxLQUFBLEFBQUssSUFBSSxLQUFBLEFBQUssSUFBSSxJQUFULEFBQWEsU0FBUyxJQURqQixBQUNxQixBQUN0QzthQUFHLEtBQUEsQUFBSyxJQUFJLEtBQUEsQUFBSyxJQUFJLElBQVQsQUFBYSxTQUFTLElBRmpCLEFBRXFCLEFBQ3RDO2lCQUFPLElBSFUsQUFHTixBQUNYO2tCQUFRLElBSlMsQUFJTCxBQUNaO21CQUxGLEFBQW1CLEFBS1IsQUFHWDtBQVJtQixBQUNqQjs7WUFPSSxvQkFBb0IsTUFBTSxLQUFoQyxBQUFnQyxBQUFLLEFBRXJDOzthQUFBLEFBQUssU0FBTCxBQUNHLEdBREgsQUFFSSxLQUZKLEFBR0k7YUFFSyxLQUFBLEFBQUssSUFBSSxLQUFBLEFBQUssSUFBSSxJQUFULEFBQWEsU0FBUyxJQUF0QixBQUEwQixTQUR4QyxBQUNpRCxBQUMvQzthQUFHLEtBQUEsQUFBSyxJQUFJLEtBQUEsQUFBSyxJQUFJLElBQVQsQUFBYSxTQUFTLElBQXRCLEFBQTBCLFNBTjVDLEFBSUksQUFFaUQ7QUFGakQsQUFDRSxXQUxOLEFBUUksR0FSSixBQVVHLEdBVkgsQUFVTSxLQVZOLEFBVVcsbUJBQW1CLEVBQUUsU0FBRixBQUFXLEdBQUcsTUFBTSxPQVZsRCxBQVU4QixBQUEyQixVQVZ6RCxBQVVtRSxHQVZuRSxBQVdHLEdBWEgsQUFZSSxLQUNBLG9CQWJKLEFBYXdCO3dCQUVKLGdDQURoQixBQUNnQixBQUFzQixBQUNwQztnQkFBTSxZQUFBLEFBQVksT0FBTyxnQ0FGM0IsQUFFUSxBQUFtQixBQUFzQixBQUMvQztrQkFqQk4sQUFjSSxBQUdVO0FBSFYsQUFDRSxXQWZOLEFBbUJJLEFBRUo7YUFBQSxBQUFLLEtBQUwsQUFBVSxLQUFWLEFBQWUsQUFDaEI7QUFDRjs7OztrQ0FFYyxBLEtBQUssQSxLQUFLLEFBQ3ZCO2FBQU8sTUFBTSxLQUFBLEFBQUssWUFBWSxNQUE5QixBQUFhLEFBQXVCLEFBQ3JDOzs7OzhCQUVVLEFBQ1Q7V0FBQSxBQUFLLFNBQUwsQUFBYyxBQUNmOzs7OzhCQUVVLEFBQ1Q7V0FBQSxBQUFLLFNBQUwsQUFBYyxBQUNkO3VDQUFBLEFBQXVCLHFCQUFxQixLQUE1QyxBQUFpRCxBQUNsRDs7Ozs7QUFHSDs7a0JBQUEsQUFBZSIsImZpbGUiOiJTdGFyc0FuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9