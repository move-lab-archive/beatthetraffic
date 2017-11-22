/*
  STORE outside redux
  Here goes things that change on each requestAnimationFrame ticks
  we do not want to put that in the redux store as it cause an overhead
  that brings performance down, and we don't care of immutability
*/

class GameTempStateManager {
  constructor () {
    this.state = {
      currentFrame: 0,
      currentTime: 0,
      itemMasked: [],
      itemsToCollect: [],
      clickRecordedBuffer: [],
      puffAnimations: []
    }
  }

  reset () {
    console.log('Reset game temp state')
    this.state = {
      currentFrame: 0,
      currentTime: 0,
      itemMasked: [],
      itemsToCollect: [],
      clickRecordedBuffer: [],
      puffAnimations: []
    }
  }

  getClicksBuffer () {
    return this.state.clickRecordedBuffer
  }

  getItemsToCollect () {
    return this.state.itemsToCollect
  }

  getItemsMasked () {
    return this.state.itemMasked
  }

  getPuffAnimations () {
    return this.state.puffAnimations
  }

  getCurrentFrame () {
    return this.state.currentFrame
  }

  getCurrentTime () {
    return this.state.currentTime
  }

  setCurrentFrame (newCurrentFrame) {
    this.state.currentFrame = newCurrentFrame
  }

  setCurrentTime (newCurrentTime) {
    this.state.currentTime = newCurrentTime
  }

  setCurrentMaskedItems (maskedItems) {
    this.state.itemMasked = maskedItems
  }

  addMaskedItem (maskedItem) {
    this.state.itemMasked.push(maskedItem)
  }

  addPuffAnimation (puffAnimation) {
    this.state.puffAnimations.push(puffAnimation)
  }

  addCollectableItem (item) {
    this.state.itemsToCollect.push(item)
  }

  removeItemToCollect (idToRemove) {
    this.state.itemsToCollect = this.state.itemsToCollect.filter(
      item => item.id !== idToRemove
    )
  }

  removePuffAnimation (idToRemove) {
    this.state.puffAnimations = this.state.puffAnimations.filter(
      item => item.id !== idToRemove
    )
  }

  recordClickOrTouch (clickData) {
    this.state.clickRecordedBuffer.push(clickData)
  }

  resetClickBuffer () {
    this.state.clickRecordedBuffer = []
  }
}

const GameTempStateManagerInstance = new GameTempStateManager()

export default GameTempStateManagerInstance
