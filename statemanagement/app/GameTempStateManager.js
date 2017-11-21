/*
  Here goes things that change on each requestAnimationFrame ticks
  we do not want to put that in the redux store as it gives an overhead
  that brings performance down
*/

const initialState = {
  currentFrame: 0,
  currentTime: 0,
  itemMasked: [],
  itemsToCollect: [],
  clickRecordedBuffer: []
}

class GameTempStateManager {
  constructor () {
    this.state = initialState
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

  removeItemToCollect (idToRemove) {
    this.state.itemsToCollect = this.state.itemsToCollect.filter(
      item => item.id !== idToRemove
    )
  }

  recordClickOrTouch (clickData) {
    this.state.clickRecordedBuffer.push(clickData)
  }

  resetClickBuffer () {
    this.state.clickRecordedBuffer = []
  }

  reset () {
    console.log('Reset game temp state')
    this.state = initialState
  }
}

const GameTempStateManagerInstance = new GameTempStateManager()

export default GameTempStateManagerInstance
