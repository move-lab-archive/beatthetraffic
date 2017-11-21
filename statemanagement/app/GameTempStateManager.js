/*
  Here goes things that change on each requestAnimationFrame ticks
  we do not want to put that in the redux store as it gives an overhead
  that brings performance down
*/

const initialState = {
  listOfItemMasked: [],
  clickRecordedBuffer: []
}

class GameTempStateManager {
  constructor () {
    this.state = initialState
  }

  reset () {
    console.log('Reset game temp state')
    this.state = initialState
  }
}

const GameTempStateManagerInstance = new GameTempStateManager()

export default GameTempStateManagerInstance
