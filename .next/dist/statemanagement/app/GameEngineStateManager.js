"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  STORE outside redux
  Here goes things that change on each requestAnimationFrame ticks
  we do not want to put that in the redux store as it cause an overhead
  that brings performance down, and we don't care of immutability
*/

var GameEngineStateManager = function () {
  function GameEngineStateManager() {
    (0, _classCallCheck3.default)(this, GameEngineStateManager);

    this.state = {
      currentFrame: 0,
      currentTime: 0,
      itemMasked: [],
      itemsToCollect: [],
      clickRecordedBuffer: [],
      puffAnimations: [],
      starsAnimations: [],
      missedCarsAnimations: []
    };
  }

  (0, _createClass3.default)(GameEngineStateManager, [{
    key: "reset",
    value: function reset() {
      // console.log('Reset game temp state')
      // TODO CLONE DEEP INITIAL STATE
      this.state = {
        currentFrame: 0,
        currentTime: 0,
        itemMasked: [],
        itemsToCollect: [],
        clickRecordedBuffer: [],
        puffAnimations: [],
        starsAnimations: [],
        missedCarsAnimations: []
      };
    }
  }, {
    key: "getClicksBuffer",
    value: function getClicksBuffer() {
      return this.state.clickRecordedBuffer;
    }
  }, {
    key: "getItemsToCollect",
    value: function getItemsToCollect() {
      return this.state.itemsToCollect;
    }
  }, {
    key: "getItemsMasked",
    value: function getItemsMasked() {
      return this.state.itemMasked;
    }
  }, {
    key: "getPuffAnimations",
    value: function getPuffAnimations() {
      return this.state.puffAnimations;
    }
  }, {
    key: "getMissedCarAnimations",
    value: function getMissedCarAnimations() {
      return this.state.missedCarsAnimations;
    }
  }, {
    key: "getStarsAnimations",
    value: function getStarsAnimations() {
      return this.state.starsAnimations;
    }
  }, {
    key: "getCurrentFrame",
    value: function getCurrentFrame() {
      return this.state.currentFrame;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.state.currentTime;
    }
  }, {
    key: "setCurrentFrame",
    value: function setCurrentFrame(newCurrentFrame) {
      this.state.currentFrame = newCurrentFrame;
    }
  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(newCurrentTime) {
      this.state.currentTime = newCurrentTime;
    }
  }, {
    key: "setCurrentMaskedItems",
    value: function setCurrentMaskedItems(maskedItems) {
      this.state.itemMasked = maskedItems;
    }
  }, {
    key: "addMaskedItem",
    value: function addMaskedItem(maskedItem) {
      this.state.itemMasked.push(maskedItem);
    }
  }, {
    key: "addPuffAnimation",
    value: function addPuffAnimation(puffAnimation) {
      this.state.puffAnimations.push(puffAnimation);
    }
  }, {
    key: "addStarsAnimation",
    value: function addStarsAnimation(starsAnimation) {
      this.state.starsAnimations.push(starsAnimation);
    }
  }, {
    key: "addCollectableItem",
    value: function addCollectableItem(item) {
      this.state.itemsToCollect.push(item);
    }
  }, {
    key: "addMissedCarAnimation",
    value: function addMissedCarAnimation(missedCar) {
      this.state.missedCarsAnimations.push(missedCar);
    }
  }, {
    key: "removeItemToCollect",
    value: function removeItemToCollect(idToRemove) {
      this.state.itemsToCollect = this.state.itemsToCollect.filter(function (item) {
        return item.id !== idToRemove;
      });
    }
  }, {
    key: "removePuffAnimation",
    value: function removePuffAnimation(idToRemove) {
      this.state.puffAnimations = this.state.puffAnimations.filter(function (item) {
        return item.id !== idToRemove;
      });
    }
  }, {
    key: "removeMissedCarAnimation",
    value: function removeMissedCarAnimation(idToRemove) {
      this.state.puffAnimations = this.state.puffAnimations.filter(function (item) {
        return item.id !== idToRemove;
      });
    }
  }, {
    key: "removeStarsAnimation",
    value: function removeStarsAnimation(idToRemove) {
      this.state.starsAnimations = this.state.starsAnimations.filter(function (item) {
        return item.id !== idToRemove;
      });
    }
  }, {
    key: "recordClickOrTouch",
    value: function recordClickOrTouch(clickData) {
      this.state.clickRecordedBuffer.push(clickData);
    }
  }, {
    key: "resetClickBuffer",
    value: function resetClickBuffer() {
      this.state.clickRecordedBuffer = [];
    }
  }]);

  return GameEngineStateManager;
}();

var GameEngineStateManagerInstance = new GameEngineStateManager();

exports.default = GameEngineStateManagerInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9hcHAvR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJHYW1lRW5naW5lU3RhdGVNYW5hZ2VyIiwic3RhdGUiLCJjdXJyZW50RnJhbWUiLCJjdXJyZW50VGltZSIsIml0ZW1NYXNrZWQiLCJpdGVtc1RvQ29sbGVjdCIsImNsaWNrUmVjb3JkZWRCdWZmZXIiLCJwdWZmQW5pbWF0aW9ucyIsInN0YXJzQW5pbWF0aW9ucyIsIm1pc3NlZENhcnNBbmltYXRpb25zIiwibmV3Q3VycmVudEZyYW1lIiwibmV3Q3VycmVudFRpbWUiLCJtYXNrZWRJdGVtcyIsIm1hc2tlZEl0ZW0iLCJwdXNoIiwicHVmZkFuaW1hdGlvbiIsInN0YXJzQW5pbWF0aW9uIiwiaXRlbSIsIm1pc3NlZENhciIsImlkVG9SZW1vdmUiLCJmaWx0ZXIiLCJpZCIsImNsaWNrRGF0YSIsIkdhbWVFbmdpbmVTdGF0ZU1hbmFnZXJJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0ksQUFPTSxxQ0FDSjtvQ0FBZTt3Q0FDYjs7U0FBQSxBQUFLO29CQUFRLEFBQ0csQUFDZDttQkFGVyxBQUVFLEFBQ2I7a0JBSFcsQUFHQyxBQUNaO3NCQUpXLEFBSUssQUFDaEI7MkJBTFcsQUFLVSxBQUNyQjtzQkFOVyxBQU1LLEFBQ2hCO3VCQVBXLEFBT00sQUFDakI7NEJBUkYsQUFBYSxBQVFXLEFBRXpCO0FBVmMsQUFDWDs7Ozs7NEJBV0ssQUFDUDtBQUNBO0FBQ0E7V0FBQSxBQUFLO3NCQUFRLEFBQ0csQUFDZDtxQkFGVyxBQUVFLEFBQ2I7b0JBSFcsQUFHQyxBQUNaO3dCQUpXLEFBSUssQUFDaEI7NkJBTFcsQUFLVSxBQUNyQjt3QkFOVyxBQU1LLEFBQ2hCO3lCQVBXLEFBT00sQUFDakI7OEJBUkYsQUFBYSxBQVFXLEFBRXpCO0FBVmMsQUFDWDs7OztzQ0FXZSxBQUNqQjthQUFPLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEFBQ25COzs7O3dDQUVvQixBQUNuQjthQUFPLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEFBQ25COzs7O3FDQUVpQixBQUNoQjthQUFPLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEFBQ25COzs7O3dDQUVvQixBQUNuQjthQUFPLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEFBQ25COzs7OzZDQUV5QixBQUN4QjthQUFPLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEFBQ25COzs7O3lDQUVxQixBQUNwQjthQUFPLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEFBQ25COzs7O3NDQUVrQixBQUNqQjthQUFPLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEFBQ25COzs7O3FDQUVpQixBQUNoQjthQUFPLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEFBQ25COzs7O29DQUVnQixBLGlCQUFpQixBQUNoQztXQUFBLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsQUFDM0I7Ozs7bUMsQUFFZSxnQkFBZ0IsQUFDOUI7V0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLEFBQzFCOzs7OzBDLEFBRXNCLGFBQWEsQUFDbEM7V0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLEFBQ3pCOzs7O2tDQUVjLEEsWUFBWSxBQUN6QjtXQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsS0FBdEIsQUFBMkIsQUFDNUI7Ozs7cUNBRWlCLEEsZUFBZSxBQUMvQjtXQUFBLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsS0FBMUIsQUFBK0IsQUFDaEM7Ozs7c0NBRWtCLEEsZ0JBQWdCLEFBQ2pDO1dBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQVgsQUFBMkIsS0FBM0IsQUFBZ0MsQUFDakM7Ozs7dUNBRW1CLEEsTUFBTSxBQUN4QjtXQUFBLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsS0FBMUIsQUFBK0IsQUFDaEM7Ozs7MEMsQUFFc0IsV0FBVyxBQUNoQztXQUFBLEFBQUssTUFBTCxBQUFXLHFCQUFYLEFBQWdDLEtBQWhDLEFBQXFDLEFBQ3RDOzs7O3dDQUVvQixBLFlBQVksQUFDL0I7V0FBQSxBQUFLLE1BQUwsQUFBVyxzQkFBaUIsQUFBSyxNQUFMLEFBQVcsZUFBWCxBQUEwQixPQUNwRCxnQkFBQTtlQUFRLEtBQUEsQUFBSyxPQUFiLEFBQW9CO0FBRHRCLEFBQTRCLEFBRzdCLE9BSDZCOzs7O3dDLEFBS1QsWUFBWSxBQUMvQjtXQUFBLEFBQUssTUFBTCxBQUFXLHNCQUFpQixBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLE9BQ3BELGdCQUFBO2VBQVEsS0FBQSxBQUFLLE9BQWIsQUFBb0I7QUFEdEIsQUFBNEIsQUFHN0IsT0FINkI7Ozs7NkMsQUFLSixZQUFZLEFBQ3BDO1dBQUEsQUFBSyxNQUFMLEFBQVcsc0JBQWlCLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsT0FDcEQsZ0JBQUE7ZUFBUSxLQUFBLEFBQUssT0FBYixBQUFvQjtBQUR0QixBQUE0QixBQUc3QixPQUg2Qjs7Ozt5QyxBQUtSLFlBQVksQUFDaEM7V0FBQSxBQUFLLE1BQUwsQUFBVyx1QkFBa0IsQUFBSyxNQUFMLEFBQVcsZ0JBQVgsQUFBMkIsT0FDdEQsZ0JBQUE7ZUFBUSxLQUFBLEFBQUssT0FBYixBQUFvQjtBQUR0QixBQUE2QixBQUc5QixPQUg4Qjs7Ozt1Q0FLWCxBLFdBQVcsQUFDN0I7V0FBQSxBQUFLLE1BQUwsQUFBVyxvQkFBWCxBQUErQixLQUEvQixBQUFvQyxBQUNyQzs7Ozt1Q0FFbUIsQUFDbEI7V0FBQSxBQUFLLE1BQUwsQUFBVyxzQkFBWCxBQUFpQyxBQUNsQzs7Ozs7OztBQUdILElBQU0saUNBQWlDLElBQXZDLEFBQXVDLEFBQUksQUFFM0M7O2tCQUFBLEFBQWUiLCJmaWxlIjoiR2FtZUVuZ2luZVN0YXRlTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFya3Vza3JldXR6ZXIvRG9jdW1lbnRzL0dpdGh1Yi9sYWItYmVhdC10aGUtdHJhZmZpYyJ9