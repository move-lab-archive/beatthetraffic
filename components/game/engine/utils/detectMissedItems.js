import { isInsideSomeAreas } from '../../../../utils/resolution'

const MIN_ACTIVE_FRAMES = 60

// TODO Maybe some of that intel will be handled by the tracker
export default function detectMissedItemsThisFrame (
  currentFrame,
  objectTrackerData,
  allowedDisappearAreas,
  alreadyKilledItems
) {
  if (objectTrackerData['general']) {
    const itemsMissedThisFrame = objectTrackerData['general'].filter(
      objectTracked =>
        objectTracked.disappearFrame === currentFrame && // Disapear this frame
        objectTracked.nbActiveFrame > MIN_ACTIVE_FRAMES && // Have been tracked more than MIN_ACTIVE_FRAMES
        !alreadyKilledItems.includes(objectTracked.id) && // Not already killed
        isInsideSomeAreas(
          allowedDisappearAreas,
          objectTracked.disappearArea,
          objectTracked.idDisplay
        ) // Is dissapearing inside an allowed area
    )

    return itemsMissedThisFrame
  } else {
    return []
  }
}
