import { scaleDetection } from '../../../../utils/resolution'
import GameEngineStateManager from '../../../../statemanagement/app/GameEngineStateManager'

class TrackerUIEngine {
  computeCircleRadius (bboxArea) {
    return Math.sqrt(bboxArea / 100)
  }

  computeCornerLength (bboxArea) {
    return Math.sqrt(bboxArea / 50)
  }

  drawTrackerUIData (
    context,
    objectTrackerDataForThisFrame,
    canvasResolution,
    originalResolution
  ) {
    objectTrackerDataForThisFrame
      .filter(objectTracked => {
        return (
          !GameEngineStateManager.getItemsMasked().find(
            itemMasked => itemMasked.id === objectTracked.id
          ) && objectTracked.isZombie !== true
        )
      })
      .map(objectTracked => {
        let objectTrackedScaled = scaleDetection(
          objectTracked,
          canvasResolution,
          originalResolution
        )

        // Set params
        //context.strokeStyle = '#4EFFFF'
      //  context.fillStyle = '#4EFFFF'
        context.strokeStyle = 'transparent'
        context.fillStyle = 'transparent'
        context.lineWidth = 2
        context.globalAlpha = 1

        const bboxArea = objectTrackedScaled.w * objectTrackedScaled.h
        const canvasArea = canvasResolution.w * canvasResolution.h
        const bboxAreaPercentageOfCanvas = bboxArea * 100 / canvasArea

        // Draw circle with dynamic radius depending on Bbox size
        let bboxCenter = {
          x: objectTrackedScaled.x,
          y: objectTrackedScaled.y
        }

        // Clear react if there is a carrot of stuff
        // Maybe better to check when drawing
        context.clearRect(
          objectTrackedScaled.x - objectTrackedScaled.w / 2,
          objectTrackedScaled.y - objectTrackedScaled.h / 2,
          objectTrackedScaled.w,
          objectTrackedScaled.h
        )

        context.beginPath()
        context.arc(
          bboxCenter.x,
          bboxCenter.y,
          this.computeCircleRadius(bboxArea),
          0,
          2 * Math.PI,
          false
        )
        context.fill()

        // If bbox area is more than 0.8% of canvas area, display the target
        if (bboxAreaPercentageOfCanvas > 0.8) {
          // Shortcut to objectTrackedScaled to avoid writing 1000 lines of code
          const obj = objectTrackedScaled

          // Compute target corner relative size
          const cornerLength = this.computeCornerLength(bboxArea)
          const cornerTickness = cornerLength / 3

          // Draw target
          // Top right
          context.fillRect(
            obj.x + obj.w / 2,
            obj.y - obj.h / 2,
            cornerTickness,
            cornerLength
          )
          context.fillRect(
            obj.x + obj.w / 2 - cornerLength + cornerTickness,
            obj.y - obj.h / 2,
            cornerLength,
            cornerTickness
          )
          // Top left
          context.fillRect(
            obj.x - obj.w / 2,
            obj.y - obj.h / 2,
            cornerTickness,
            cornerLength
          )
          context.fillRect(
            obj.x - obj.w / 2,
            obj.y - obj.h / 2,
            cornerLength,
            cornerTickness
          )
          // Bottom left
          context.fillRect(
            obj.x - obj.w / 2,
            obj.y + obj.h / 2 - cornerLength + cornerTickness,
            cornerTickness,
            cornerLength
          )
          context.fillRect(
            obj.x - obj.w / 2,
            obj.y + obj.h / 2,
            cornerLength,
            cornerTickness
          )
          // Bottom right
          context.fillRect(
            obj.x + obj.w / 2,
            obj.y + obj.h / 2 - cornerLength + cornerTickness,
            cornerTickness,
            cornerLength
          )
          context.fillRect(
            obj.x + obj.w / 2 - cornerLength + cornerTickness,
            obj.y + obj.h / 2,
            cornerLength,
            cornerTickness
          )
        }
      })
  }
}

const TrackerUIEngineInstance = new TrackerUIEngine()

export default TrackerUIEngineInstance
