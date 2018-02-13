import {
  isInsideArea,
  shrinkAreaByPercentage
} from '../../../../utils/resolution'

const MIN_ACTIVE_FRAMES = 50

let mapOfFirstTimeObjectsAppearFrameNb = {}

export default function detectMissedItemsThisFrame (
  currentFrame,
  objectTrackerData,
  allowedDisappearAreas,
  alreadyKilledItems,
  visibleCanvasAreaScaledToVideoResolution
) {
  if (currentFrame === 0) {
    // Reset buffer
    mapOfFirstTimeObjectsAppearFrameNb = {}
  }

  if (
    !objectTrackerData[currentFrame] ||
    !objectTrackerData[currentFrame + 1]
  ) {
    return []
  }

  // Shrink visible area because the tracked items are generally
  // badly tracked on the edges, and as we track the center
  // of the bbox, it can be that it never "leaves the viewport"
  // We reason on a 10% less big viewport to "workaround" this but we could
  // => Improve tracker to avoid the shrinking of the bbox on the edges
  let visibleArea = shrinkAreaByPercentage(
    visibleCanvasAreaScaledToVideoResolution,
    10
  )

  // *** STEP 1 ***
  // Register appearance of objects that are appearing for the
  // first time in the visible canvas
  objectTrackerData[currentFrame]
    .filter(objectTracked => isInsideArea(visibleArea, objectTracked))
    .forEach(item => {
      if (!mapOfFirstTimeObjectsAppearFrameNb[item.id]) {
        mapOfFirstTimeObjectsAppearFrameNb[item.id] = currentFrame
      }
    })

  // *** STEP 2 ***
  // Compute the objectTracked list of this frame that are
  // => inside the visible viewport
  // => matched for more than MIN_ACTIVE_FRAME in the visible viewport
  // => not already masked
  const visibleTrackedObjects = objectTrackerData[currentFrame].filter(
    objectTracked =>
      !alreadyKilledItems.includes(objectTracked.id) &&
      currentFrame - mapOfFirstTimeObjectsAppearFrameNb[objectTracked.id] >
        MIN_ACTIVE_FRAMES &&
      !alreadyKilledItems.includes(objectTracked.id) &&
      isInsideArea(visibleArea, objectTracked)
  )

  // *** STEP 3 ***
  // Get the items that are in this frame but not in the next frame

  // 3.1 : Get "in viewport" items of next frame
  const visibleTrackedObjectsNextFrame = objectTrackerData[
    currentFrame + 1
  ].filter(objectTracked => isInsideArea(visibleArea, objectTracked))

  // 3.2 : For every object on the currentFrame, check if it his on the next on
  // -> if it is not, make sure it is an object on the edge of the viewport
  // (we don't count disappearing item that are not in the edge as the tracking can be bad)
  // -> Output the position of the center of the object 5 frame earlier for display of the
  // disappearing hint
  const visibleTrackedObjectThatAreNotInTheNextFrame = visibleTrackedObjects
    .filter(
      objectTracked =>
        !visibleTrackedObjectsNextFrame.find(
          nextFrameObject => nextFrameObject.id === objectTracked.id
        ) &&
        // Make sure it is outside of the visible viewport shrinked by 10%
        !isInsideArea(shrinkAreaByPercentage(visibleArea, 10), objectTracked)
      // IDEA Make sure it's not too small, generaly item badly tracked are small
    )
    .map(objectTracked => {
      let sameObjectFiveFrameBefore = objectTrackerData[currentFrame - 5].find(
        item => item.id === objectTracked.id
      )
      return {
        ...objectTracked,
        disappearingHint: {
          x: sameObjectFiveFrameBefore.x,
          y: sameObjectFiveFrameBefore.y
        }
      }
    })

  return visibleTrackedObjectThatAreNotInTheNextFrame
}
