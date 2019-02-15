/* global Howler */
import { Howl } from 'howler'
import { prefixURL } from '../../utils/url';

class SoundsManager {
  constructor() {
    this.sounds = {}
    this.currentAmbientSound = null

    // console.log('Instantiate SoundsManager')
    // console.log('preload game sound')
    // Load Intro sound first
    this.addSound('ambient', 'intro', prefixURL('/static/assets/sounds/intro-small.mp3'))
  }

  preloadEssentialSounds(level = 1) {
    this.preloadLevelSpecific(1)

    this.addSound('punctual', 'carhit', prefixURL('/static/assets/sounds/carhit.mp3'))
    this.addSound(
      'punctual',
      'carhitandpopitem',
      prefixURL('/static/assets/sounds/carhitandpopitem.mp3')
    )
    this.addSound(
      'punctual',
      'carmissed',
      prefixURL('/static/assets/sounds/carmissed.mp3')
    )
    this.addSound(
      'punctual',
      'win-point-withitem',
      prefixURL('/static/assets/sounds/win-point-withitem.mp3')
    )
  }

  preloadOtherSounds(level = 1) {
    this.addSound(
      'punctual',
      'nextlevel',
      prefixURL('/static/assets/sounds/nextlevel.mp3')
    )

    this.addSound(
      'punctual',
      'healthrecovery',
      prefixURL('/static/assets/sounds/healthrecovery.mp3')
    )

    this.addSound('punctual', 'youlose', prefixURL('/static/assets/sounds/youlose.mp3'))
    this.addSound(
      'punctual',
      'transition-alert-normal',
      prefixURL('/static/assets/sounds/transition-alert-normal.mp3')
    )
    this.addSound(
      'punctual',
      'transition-normal-alert',
      prefixURL('/static/assets/sounds/transition-normal-alert.mp3')
    )

    this.addSound(
      'ambient',
      'youloseloop',
      prefixURL('/static/assets/sounds/youloseloop.mp3'),
      {
        loop: true
      }
    )

    this.addSound('ambient', 'alert', prefixURL('/static/assets/sounds/alert.mp3'), {
      loop: true
    })
  }

  preloadLevelSpecific(level = 1) {
    // Level main sound
    this.addSound(
      'ambient',
      `main_level${level}`,
      prefixURL(`/static/assets/sounds/main_level${level}.mp3`),
      {
        loop: true
      }
    )

    if (level === 3) {
      this.addSound('punctual', 'youwin', prefixURL('/static/assets/sounds/youwin.mp3'))
      this.addSound(
        'ambient',
        'youwinloop',
        prefixURL('/static/assets/sounds/youwinloop.mp3'),
        {

          loop: true
        }
      )
    }
  }

  addSound(soundType, soundName, soundSrc, options) {
    this.sounds[soundName] = {
      sound: new Howl({
        src: [soundSrc],
        ...options
      }),
      type: soundType
    }
  }

  playSound(soundName, playbackRate = 1) {
    const soundToPlay = this.sounds[soundName]
    if (this.sounds[soundName]) {
      if (soundToPlay.type === 'ambient') {
        // We can only play on ambient sound at a time
        // stop the current ambientSound
        if (this.currentAmbientSound) {
          // Simply stop() for now, we could fade-off like this
          // this.currentAmbientSound.sound.fade(1, 0, 1000);
          // but this leads to other bugs as it's async, if something else
          // happens while fading...
          this.currentAmbientSound.sound.stop()
        }
        // Fade-in entry
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
      // console.log(`Sound ${soundName} undefined`)
    }
  }

  pauseSound(soundName) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].sound.pause()
    } else {
      // console.log(`Sound ${soundName} undefined`)
    }
  }

  stopSound(soundName) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].sound.stop()
    } else {
      // console.log(`Sound ${soundName} undefined`)
    }
  }

  changePlaybackRate(soundName, newRate) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].sound.rate(newRate)
    } else {
      // console.log(`Sound ${soundName} undefined`)
    }
  }

  muteAll() {
    Howler.mute(true)
  }

  unMuteAll() {
    Howler.mute(false)
  }
}

const SoundsManagerInstance = new SoundsManager()

export default SoundsManagerInstance
