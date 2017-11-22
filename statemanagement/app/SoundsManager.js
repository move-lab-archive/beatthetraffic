/* global Howler */
import { Howl } from 'howler'

class SoundsManager {
  constructor () {
    this.sounds = {}
    this.currentAmbientSound = null

    console.log('Instantiate SoundsManager')
    console.log('preload game sound')
    this.addSound('ambient', 'intro', '/static/assets/sounds/intro.mp3')
  }

  preloadGameSounds () {
    this.addSound(
      'ambient',
      'main_level1',
      '/static/assets/sounds/main_level1.mp3',
      {
        loop: true
      }
    )
    this.addSound(
      'ambient',
      'main_level2',
      '/static/assets/sounds/main_level2.mp3',
      {
        loop: true
      }
    )
    this.addSound(
      'ambient',
      'main_level3',
      '/static/assets/sounds/main_level3.mp3',
      {
        loop: true
      }
    )
    this.addSound('ambient', 'nextlevel', '/static/assets/sounds/nextlevel.mp3')
    this.addSound('punctual', 'popA', '/static/assets/sounds/popA.mp3')
    this.addSound('punctual', 'popB', '/static/assets/sounds/popB.mp3')
    this.addSound('punctual', 'carhit', '/static/assets/sounds/carhit.mp3')
    this.addSound(
      'punctual',
      'carmissed',
      '/static/assets/sounds/carmissed.mp3'
    )
    this.addSound('punctual', 'youwin', '/static/assets/sounds/youwin.mp3')
    this.addSound('punctual', 'youlose', '/static/assets/sounds/youlose.mp3')
    this.addSound(
      'punctual',
      'transition-alert-normal',
      '/static/assets/sounds/transition-alert-normal.mp3'
    )
    this.addSound(
      'punctual',
      'transition-normal-alert',
      '/static/assets/sounds/transition-normal-alert.mp3'
    )

    this.addSound(
      'ambient',
      'youloseloop',
      '/static/assets/sounds/youloseloop.mp3',
      {
        loop: true
      }
    )
    this.addSound(
      'ambient',
      'youwinloop',
      '/static/assets/sounds/youwinloop.mp3',
      {
        loop: true
      }
    )
    this.addSound('ambient', 'alert', '/static/assets/sounds/alert.mp3', {
      loop: true
    })

    this.addSound(
      'punctual',
      'win-point-withitem',
      '/static/assets/sounds/win-point-withitem.mp3'
    )
  }

  addSound (soundType, soundName, soundSrc, options) {
    this.sounds[soundName] = {
      sound: new Howl({
        src: [soundSrc],
        ...options
      }),
      type: soundType
    }
  }

  playSound (soundName, playbackRate = 1) {
    const soundToPlay = this.sounds[soundName]
    if (this.sounds[soundName]) {
      if (soundToPlay.type === 'ambient') {
        // We can only play on ambient sound at a time
        // stop crossfade them
        if (this.currentAmbientSound) {
          // Fade off
          // this.currentAmbientSound.sound.fade(1, 0, 1000);
          // TODO IF WE FADE LIKE THAT, we need to make sure to stop the sound
          // on the end of the fade, if not there is a bug if you load another level and
          // game over and retry, simply stop for now
          this.currentAmbientSound.sound.stop()
        }
        // Fade entry
        soundToPlay.sound.seek(0) // if previously not stopped
        soundToPlay.sound.rate(playbackRate)
        soundToPlay.sound.fade(0, 1, 500)
        soundToPlay.sound.play()
        this.currentAmbientSound = soundToPlay
      } else {
        // It's a punctual sound, we can play it on top of anything
        this.sounds[soundName].sound.play()
      }
    } else {
      console.log(`Sound ${soundName} undefined`)
    }
  }

  pauseSound (soundName) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].sound.pause()
    } else {
      console.log(`Sound ${soundName} undefined`)
    }
  }

  stopSound (soundName) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].sound.stop()
    } else {
      console.log(`Sound ${soundName} undefined`)
    }
  }

  changePlaybackRate (soundName, newRate) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].sound.rate(newRate)
    } else {
      console.log(`Sound ${soundName} undefined`)
    }
  }

  muteAll () {
    Howler.mute(true)
  }

  unMuteAll () {
    Howler.mute(false)
  }
}

const SoundsManagerInstance = new SoundsManager()

export default SoundsManagerInstance
