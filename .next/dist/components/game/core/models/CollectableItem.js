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

var _CollectableItemsEngine = require('../engines/CollectableItemsEngine');

var _CollectableItemsEngine2 = _interopRequireDefault(_CollectableItemsEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollectableItem = function () {
  function CollectableItem(type, x, y, w, h) {
    var _this = this;

    var opacity = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var id = arguments[6];

    (0, _classCallCheck3.default)(this, CollectableItem);

    this.type = type;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.opacity = opacity;
    this.id = id;
    this.isCollectable = false;
    this.currentFrame = 0;

    // Wait a bit before making it collectable
    // if not people can just double click when
    // making the car disappear
    setTimeout(function () {
      _this.isCollectable = true;
    }, 500);

    this.animate();
  }

  (0, _createClass3.default)(CollectableItem, [{
    key: 'collect',
    value: function collect() {
      var _this2 = this;

      TweenLite.to(this, 1, {
        x: 0,
        y: 0,
        opacity: 0.1,
        onComplete: function onComplete() {
          _this2.destroy();
        }
      });
    }
  }, {
    key: 'animate',
    value: function animate() {
      var _this3 = this;

      this.anim = new _gsap.TimelineMax({ onComplete: function onComplete() {
          return _this3.destroy();
        } });

      // Todo make that configurable
      var durationBeforeDisapearing = 10;
      var blinkingDuration = 0.5;
      var timeStartBlinking = durationBeforeDisapearing / 2;
      var repeatBlinking = (durationBeforeDisapearing - timeStartBlinking) / blinkingDuration;

      this.anim
      // first part of timeline is the rotation of the collectable item
      .to(this, 1, {
        currentFrame: _CollectableItemsEngine2.default.getNbFrames(this.type),
        ease: SteppedEase.config(_CollectableItemsEngine2.default.getNbFrames(this.type)),
        repeat: durationBeforeDisapearing - 0.5 //  little hack because we don't want this anim to finish after the blinking one
      }, 0)
      // second part is the blinking that happen
      // TODO would be great to have the blinking accelerate
      .to(this, blinkingDuration / 2, {
        opacity: 0,
        yoyo: true,
        repeat: repeatBlinking,
        ease: Power0.easeNone
      }, timeStartBlinking);
      this.anim.play();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.anim.kill();
      _GameEngineStateManager2.default.removeItemToCollect(this.id);
    }
  }]);

  return CollectableItem;
}();

exports.default = CollectableItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FtZS9jb3JlL21vZGVscy9Db2xsZWN0YWJsZUl0ZW0uanMiXSwibmFtZXMiOlsiVGltZWxpbmVNYXgiLCJMaW5lYXIiLCJHYW1lRW5naW5lU3RhdGVNYW5hZ2VyIiwiQ29sbGVjdGFibGVJdGVtc0VuZ2luZSIsIkNvbGxlY3RhYmxlSXRlbSIsInR5cGUiLCJ4IiwieSIsInciLCJoIiwib3BhY2l0eSIsImlkIiwiaXNDb2xsZWN0YWJsZSIsImN1cnJlbnRGcmFtZSIsInNldFRpbWVvdXQiLCJhbmltYXRlIiwiVHdlZW5MaXRlIiwidG8iLCJvbkNvbXBsZXRlIiwiZGVzdHJveSIsImFuaW0iLCJkdXJhdGlvbkJlZm9yZURpc2FwZWFyaW5nIiwiYmxpbmtpbmdEdXJhdGlvbiIsInRpbWVTdGFydEJsaW5raW5nIiwicmVwZWF0QmxpbmtpbmciLCJnZXROYkZyYW1lcyIsImVhc2UiLCJTdGVwcGVkRWFzZSIsImNvbmZpZyIsInJlcGVhdCIsInlveW8iLCJQb3dlcjAiLCJlYXNlTm9uZSIsInBsYXkiLCJraWxsIiwicmVtb3ZlSXRlbVRvQ29sbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQU8sQUFBNEI7Ozs7QUFDbkMsQUFBTyxBQUE0Qjs7Ozs7O0ksQUFFN0IsOEJBQ0o7MkJBQUEsQUFBYSxNQUFiLEFBQW1CLEdBQW5CLEFBQXNCLEdBQXRCLEFBQXlCLEdBQXpCLEFBQTRCLEdBQW9CO2dCQUFBOztRQUFqQixBQUFpQiw4RUFBUCxBQUFPO1FBQUosQUFBSSxlQUFBOzt3Q0FDOUM7O1NBQUEsQUFBSyxPQUFMLEFBQVksQUFDWjtTQUFBLEFBQUssSUFBTCxBQUFTLEFBQ1Q7U0FBQSxBQUFLLElBQUwsQUFBUyxBQUNUO1NBQUEsQUFBSyxJQUFMLEFBQVMsQUFDVDtTQUFBLEFBQUssSUFBTCxBQUFTLEFBQ1Q7U0FBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO1NBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjtTQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFDckI7U0FBQSxBQUFLLGVBQUwsQUFBb0IsQUFFcEI7O0FBQ0E7QUFDQTtBQUNBO2VBQVcsWUFBTSxBQUNmO1lBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUN0QjtBQUZELE9BQUEsQUFFRyxBQUVIOztTQUFBLEFBQUssQUFDTjs7Ozs7OEJBRVU7bUJBQ1Q7O2dCQUFBLEFBQVUsR0FBVixBQUFhLE1BQWIsQUFBbUI7V0FBRyxBQUNqQixBQUNIO1dBRm9CLEFBRWpCLEFBQ0g7aUJBSG9CLEFBR1gsQUFDVDtvQkFBWSxzQkFBTSxBQUNoQjtpQkFBQSxBQUFLLEFBQ047QUFOSCxBQUFzQixBQVF2QjtBQVJ1QixBQUNwQjs7Ozs4QkFTTzttQkFDVDs7V0FBQSxBQUFLLCtCQUF5QixZQUFZLHNCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBQXJELEFBQVksQUFBZ0IsQUFFNUIsU0FGNEIsRUFBaEIsQUFBSTs7QUFHaEI7VUFBTSw0QkFBTixBQUFrQyxBQUNsQztVQUFNLG1CQUFOLEFBQXlCLEFBQ3pCO1VBQU0sb0JBQW9CLDRCQUExQixBQUFzRCxBQUN0RDtVQUFNLGlCQUNKLENBQUMsNEJBQUQsQUFBNkIscUJBRC9CLEFBQ29ELEFBRXBEOztXQUFLLEFBQ0g7QUFERjtPQUFBLEFBRUcsR0FGSCxBQUdJLE1BSEosQUFJSTtzQkFFZ0IsaUNBQUEsQUFBdUIsWUFBWSxLQURuRCxBQUNnQixBQUF3QyxBQUN0RDtjQUFNLFlBQUEsQUFBWSxPQUNoQixpQ0FBQSxBQUF1QixZQUFZLEtBSHZDLEFBRVEsQUFDSixBQUF3QyxBQUUxQztnQkFBUSw0QkFMVixBQUtzQyxJQVYxQyxBQUtJLEFBSzBDO0FBTDFDLEFBQ0UsU0FOTixBQVlJLEFBRUY7QUFDQTtBQWZGO09BQUEsQUFnQkcsR0FoQkgsQUFpQkksTUFDQSxtQkFsQkosQUFrQnVCO2lCQUNuQixBQUNXLEFBQ1Q7Y0FGRixBQUVRLEFBQ047Z0JBSEYsQUFHVSxBQUNSO2NBQU0sT0F2QlosQUFtQkksQUFJZTtBQUpmLEFBQ0UsU0FwQk4sQUF5QkksQUFFSjtXQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1g7Ozs7OEJBRVUsQUFDVDtXQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7dUNBQUEsQUFBdUIsb0JBQW9CLEtBQTNDLEFBQWdELEFBQ2pEOzs7OztBQUdIOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbGxlY3RhYmxlSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9