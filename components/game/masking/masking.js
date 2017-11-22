import GameEngineStateManager from '../../../statemanagement/app/GameEngineStateManager'

import { scaleDetection } from '../../../utils/resolution'

export function updateMasking (
  objectTrackerDataForThisFrame,
  canvasResolution,
  originalResolution
) {
  if (!objectTrackerDataForThisFrame) {
    return []
  }

  let objectsMaskedToUpdate = GameEngineStateManager.getItemsMasked()
  let objectsMaskedUpdated = []
  let objectsAvailableToBeMasked = []

  // Clean up objects to mask that have dissapeared from video
  objectsMaskedToUpdate = objectsMaskedToUpdate.filter(objectMasked => {
    return objectTrackerDataForThisFrame.find(
      objectTracked => objectTracked.id === objectMasked.id
    )
  })

  // For each object in the tracker data for this frame
  objectTrackerDataForThisFrame = objectTrackerDataForThisFrame.map(
    objectTracked => {
      // Scale object tracker data to the canvas resolution
      let objectTrackedScaled = scaleDetection(
        objectTracked,
        canvasResolution,
        originalResolution
      )

      let potentialObjectToMask = {
        idDisplay: objectTrackedScaled.idDisplay,
        id: objectTrackedScaled.id,
        x: objectTrackedScaled.x - objectTrackedScaled.w / 2,
        y: objectTrackedScaled.y - objectTrackedScaled.h / 2,
        w: objectTrackedScaled.w,
        h: objectTrackedScaled.h
      }

      // If this is one of the objects we are already masking
      // we just need to update of its position
      const objectToUpdate = objectsMaskedToUpdate.find(
        objectMasked => objectMasked.id === potentialObjectToMask.id
      )
      if (objectToUpdate) {
        // Add it to the new list
        objectsMaskedUpdated.push(potentialObjectToMask)
      } else {
        // We add it to the list of the object
        // that will potentially be clicked this frame
        objectsAvailableToBeMasked.push(potentialObjectToMask)
      }
    }
  )

  // Update objects masked
  GameEngineStateManager.setCurrentMaskedItems(objectsMaskedUpdated)

  return objectsAvailableToBeMasked
}
