'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _howler = require('howler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SoundsManager = function () {
  function SoundsManager() {
    (0, _classCallCheck3.default)(this, SoundsManager);

    this.sounds = {};
    this.currentAmbientSound = null;

    // console.log('Instantiate SoundsManager')
    // console.log('preload game sound')
    // Load Intro sound first
    this.addSound('ambient', 'intro', '/static/assets/sounds/intro.mp3');
  }

  (0, _createClass3.default)(SoundsManager, [{
    key: 'preloadGameSounds',
    value: function preloadGameSounds() {
      this.addSound('ambient', 'main_level1', '/static/assets/sounds/main_level1.mp3', {
        loop: true
      });
      this.addSound('ambient', 'main_level2', '/static/assets/sounds/main_level2.mp3', {
        loop: true
      });
      this.addSound('ambient', 'main_level3', '/static/assets/sounds/main_level3.mp3', {
        loop: true
      });
      this.addSound('punctual', 'nextlevel', '/static/assets/sounds/nextlevel.mp3');
      this.addSound('punctual', 'healthrecovery', '/static/assets/sounds/healthrecovery.mp3');
      this.addSound('punctual', 'carhit', '/static/assets/sounds/carhit.mp3');
      this.addSound('punctual', 'carhitandpopitem', '/static/assets/sounds/carhitandpopitem.mp3');
      this.addSound('punctual', 'carmissed', '/static/assets/sounds/carmissed.mp3');
      this.addSound('punctual', 'youwin', '/static/assets/sounds/youwin.mp3');
      this.addSound('punctual', 'youlose', '/static/assets/sounds/youlose.mp3');
      this.addSound('punctual', 'transition-alert-normal', '/static/assets/sounds/transition-alert-normal.mp3');
      this.addSound('punctual', 'transition-normal-alert', '/static/assets/sounds/transition-normal-alert.mp3');

      this.addSound('ambient', 'youloseloop', '/static/assets/sounds/youloseloop.mp3', {
        loop: true
      });
      this.addSound('ambient', 'youwinloop', '/static/assets/sounds/youwinloop.mp3', {
        loop: true
      });
      this.addSound('ambient', 'alert', '/static/assets/sounds/alert.mp3', {
        loop: true
      });

      this.addSound('punctual', 'win-point-withitem', '/static/assets/sounds/win-point-withitem.mp3');
    }
  }, {
    key: 'addSound',
    value: function addSound(soundType, soundName, soundSrc, options) {
      this.sounds[soundName] = {
        sound: new _howler.Howl((0, _extends3.default)({
          src: [soundSrc]
        }, options)),
        type: soundType
      };
    }
  }, {
    key: 'playSound',
    value: function playSound(soundName) {
      var playbackRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var soundToPlay = this.sounds[soundName];
      if (this.sounds[soundName]) {
        if (soundToPlay.type === 'ambient') {
          // We can only play on ambient sound at a time
          // stop the current ambientSound
          if (this.currentAmbientSound) {
            // Simply stop() for now, we could fade-off like this
            // this.currentAmbientSound.sound.fade(1, 0, 1000);
            // but this leads to other bugs as it's async, if something else
            // happens while fading...
            this.currentAmbientSound.sound.stop();
          }
          // Fade-in entry
          soundToPlay.sound.seek(0); // if previously not stopped
          soundToPlay.sound.rate(playbackRate);
          soundToPlay.sound.fade(0, 1, 500);
          soundToPlay.sound.play();
          this.currentAmbientSound = soundToPlay;
        } else {
          // It's a punctual sound, we can play it on top of anything
          this.sounds[soundName].sound.play();
        }
      } else {
        // console.log(`Sound ${soundName} undefined`)
      }
    }
  }, {
    key: 'pauseSound',
    value: function pauseSound(soundName) {
      if (this.sounds[soundName]) {
        this.sounds[soundName].sound.pause();
      } else {
        // console.log(`Sound ${soundName} undefined`)
      }
    }
  }, {
    key: 'stopSound',
    value: function stopSound(soundName) {
      if (this.sounds[soundName]) {
        this.sounds[soundName].sound.stop();
      } else {
        // console.log(`Sound ${soundName} undefined`)
      }
    }
  }, {
    key: 'changePlaybackRate',
    value: function changePlaybackRate(soundName, newRate) {
      if (this.sounds[soundName]) {
        this.sounds[soundName].sound.rate(newRate);
      } else {
        // console.log(`Sound ${soundName} undefined`)
      }
    }
  }, {
    key: 'muteAll',
    value: function muteAll() {
      Howler.mute(true);
    }
  }, {
    key: 'unMuteAll',
    value: function unMuteAll() {
      Howler.mute(false);
    }
  }]);

  return SoundsManager;
}();
/* global Howler */


var SoundsManagerInstance = new SoundsManager();

exports.default = SoundsManagerInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWFuYWdlbWVudC9hcHAvU291bmRzTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJIb3dsIiwiU291bmRzTWFuYWdlciIsInNvdW5kcyIsImN1cnJlbnRBbWJpZW50U291bmQiLCJhZGRTb3VuZCIsImxvb3AiLCJzb3VuZFR5cGUiLCJzb3VuZE5hbWUiLCJzb3VuZFNyYyIsIm9wdGlvbnMiLCJzb3VuZCIsInNyYyIsInR5cGUiLCJwbGF5YmFja1JhdGUiLCJzb3VuZFRvUGxheSIsInN0b3AiLCJzZWVrIiwicmF0ZSIsImZhZGUiLCJwbGF5IiwicGF1c2UiLCJuZXdSYXRlIiwiSG93bGVyIiwibXV0ZSIsIlNvdW5kc01hbmFnZXJJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBUzs7OztJLEFBRUgsNEJBQ0o7MkJBQWU7d0NBQ2I7O1NBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZDtTQUFBLEFBQUssc0JBQUwsQUFBMkIsQUFFM0I7O0FBQ0E7QUFDQTtBQUNBO1NBQUEsQUFBSyxTQUFMLEFBQWMsV0FBZCxBQUF5QixTQUF6QixBQUFrQyxBQUNuQzs7Ozs7d0NBRW9CLEFBQ25CO1dBQUEsQUFBSyxTQUFMLEFBQ0UsV0FERixBQUVFLGVBRkYsQUFHRTtjQUhGLEFBSUUsQUFDUSxBQUdWO0FBSkUsQUFDRTtXQUdKLEFBQUssU0FBTCxBQUNFLFdBREYsQUFFRSxlQUZGLEFBR0U7Y0FIRixBQUlFLEFBQ1EsQUFHVjtBQUpFLEFBQ0U7V0FHSixBQUFLLFNBQUwsQUFDRSxXQURGLEFBRUUsZUFGRixBQUdFO2NBSEYsQUFJRSxBQUNRLEFBR1Y7QUFKRSxBQUNFO1dBR0osQUFBSyxTQUFMLEFBQ0UsWUFERixBQUVFLGFBRkYsQUFHRSxBQUVGO1dBQUEsQUFBSyxTQUFMLEFBQ0UsWUFERixBQUVFLGtCQUZGLEFBR0UsQUFFRjtXQUFBLEFBQUssU0FBTCxBQUFjLFlBQWQsQUFBMEIsVUFBMUIsQUFBb0MsQUFDcEM7V0FBQSxBQUFLLFNBQUwsQUFDRSxZQURGLEFBRUUsb0JBRkYsQUFHRSxBQUVGO1dBQUEsQUFBSyxTQUFMLEFBQ0UsWUFERixBQUVFLGFBRkYsQUFHRSxBQUVGO1dBQUEsQUFBSyxTQUFMLEFBQWMsWUFBZCxBQUEwQixVQUExQixBQUFvQyxBQUNwQztXQUFBLEFBQUssU0FBTCxBQUFjLFlBQWQsQUFBMEIsV0FBMUIsQUFBcUMsQUFDckM7V0FBQSxBQUFLLFNBQUwsQUFDRSxZQURGLEFBRUUsMkJBRkYsQUFHRSxBQUVGO1dBQUEsQUFBSyxTQUFMLEFBQ0UsWUFERixBQUVFLDJCQUZGLEFBR0UsQUFHRjs7V0FBQSxBQUFLLFNBQUwsQUFDRSxXQURGLEFBRUUsZUFGRixBQUdFO2NBSEYsQUFJRSxBQUNRLEFBR1Y7QUFKRSxBQUNFO1dBR0osQUFBSyxTQUFMLEFBQ0UsV0FERixBQUVFLGNBRkYsQUFHRTtjQUhGLEFBSUUsQUFDUSxBQUdWO0FBSkUsQUFDRTtXQUdKLEFBQUssU0FBTCxBQUFjLFdBQWQsQUFBeUIsU0FBekIsQUFBa0M7Y0FBbEMsQUFBcUUsQUFDN0QsQUFHUjtBQUpxRSxBQUNuRTs7V0FHRixBQUFLLFNBQUwsQUFDRSxZQURGLEFBRUUsc0JBRkYsQUFHRSxBQUVIOzs7OzZCLEFBRVMsVyxBQUFXLFdBQVcsQSxVQUFVLEEsU0FBUyxBQUNqRDtXQUFBLEFBQUssT0FBTCxBQUFZO2VBQ0gsQUFBSTtlQUNKLENBREEsQUFDQSxBQUFDO0FBQU4sV0FGcUIsQUFDaEIsQUFFRixBQUVMO2NBTEYsQUFBeUIsQUFLakIsQUFFVDtBQVAwQixBQUN2Qjs7Ozs4QixBQVFPLFdBQTZCO1VBQWxCLEFBQWtCLG1GQUFILEFBQUcsQUFDdEM7O1VBQU0sY0FBYyxLQUFBLEFBQUssT0FBekIsQUFBb0IsQUFBWSxBQUNoQztVQUFJLEtBQUEsQUFBSyxPQUFULEFBQUksQUFBWSxZQUFZLEFBQzFCO1lBQUksWUFBQSxBQUFZLFNBQWhCLEFBQXlCO0FBRXZCO0FBQ0E7Y0FBSSxLQUFKLEFBQVMscUJBQXFCLEFBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7aUJBQUEsQUFBSyxvQkFBTCxBQUF5QixNQUF6QixBQUErQixBQUNoQztBQUNEO0FBQ0E7c0JBQUEsQUFBWSxNQUFaLEFBQWtCLEtBWGdCLEFBV2xDLEFBQXVCLEdBWFcsQUFDbEMsQ0FVMEIsQUFDMUI7c0JBQUEsQUFBWSxNQUFaLEFBQWtCLEtBQWxCLEFBQXVCLEFBQ3ZCO3NCQUFBLEFBQVksTUFBWixBQUFrQixLQUFsQixBQUF1QixHQUF2QixBQUEwQixHQUExQixBQUE2QixBQUM3QjtzQkFBQSxBQUFZLE1BQVosQUFBa0IsQUFDbEI7ZUFBQSxBQUFLLHNCQUFMLEFBQTJCLEFBQzVCO0FBaEJELGVBZ0JPLEFBQ0w7QUFDQTtlQUFBLEFBQUssT0FBTCxBQUFZLFdBQVosQUFBdUIsTUFBdkIsQUFBNkIsQUFDOUI7QUFDRjtBQXJCRCxhQXFCTyxBQUNMO0FBQ0Q7QUFDRjs7OzsrQixBQUVXLFdBQVcsQUFDckI7VUFBSSxLQUFBLEFBQUssT0FBVCxBQUFJLEFBQVksWUFBWSxBQUMxQjthQUFBLEFBQUssT0FBTCxBQUFZLFdBQVosQUFBdUIsTUFBdkIsQUFBNkIsQUFDOUI7QUFGRCxhQUVPLEFBQ0w7QUFDRDtBQUNGOzs7OzhCLEFBRVUsV0FBVyxBQUNwQjtVQUFJLEtBQUEsQUFBSyxPQUFULEFBQUksQUFBWSxZQUFZLEFBQzFCO2FBQUEsQUFBSyxPQUFMLEFBQVksV0FBWixBQUF1QixNQUF2QixBQUE2QixBQUM5QjtBQUZELGFBRU8sQUFDTDtBQUNEO0FBQ0Y7Ozs7dUNBRW1CLEEsV0FBVyxBLFNBQVMsQUFDdEM7VUFBSSxLQUFBLEFBQUssT0FBVCxBQUFJLEFBQVksWUFBWSxBQUMxQjthQUFBLEFBQUssT0FBTCxBQUFZLFdBQVosQUFBdUIsTUFBdkIsQUFBNkIsS0FBN0IsQUFBa0MsQUFDbkM7QUFGRCxhQUVPLEFBQ0w7QUFDRDtBQUNGOzs7OzhCQUVVLEFBQ1Q7YUFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiOzs7O2dDQUVZLEFBQ1g7YUFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiOzs7Ozs7QUF4S0g7OztBQTJLQSxJQUFNLHdCQUF3QixJQUE5QixBQUE4QixBQUFJLEFBRWxDOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNvdW5kc01hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmt1c2tyZXV0emVyL0RvY3VtZW50cy9HaXRodWIvbGFiLWJlYXQtdGhlLXRyYWZmaWMifQ==