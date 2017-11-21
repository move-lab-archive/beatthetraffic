import GameTempStateManager from '../../../statemanagement/app/GameTempStateManager'

import { scaleDetection } from '../../../utils/resolution'

// Enlarge YOLO detection bbox constant
const ENLARGE_SIZE = 25

export function updateMasking (
  objectTrackerDataForThisFrame,
  canvasResolution,
  originalResolution
) {
  let objectsMaskedToUpdate = GameTempStateManager.getItemsMasked()
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

      // Compute the potential object to mask data
      // Enlarge mask to mask better
      let potentialObjectToMask = {
        idDisplay: objectTrackedScaled.idDisplay,
        id: objectTrackedScaled.id,
        x: objectTrackedScaled.x - objectTrackedScaled.w / 2 - ENLARGE_SIZE,
        y: objectTrackedScaled.y - objectTrackedScaled.h / 2 - ENLARGE_SIZE,
        w: objectTrackedScaled.w + ENLARGE_SIZE * 2,
        h: objectTrackedScaled.h + ENLARGE_SIZE * 2
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
  GameTempStateManager.setCurrentMaskedItems(objectsMaskedUpdated)

  return objectsAvailableToBeMasked
}
