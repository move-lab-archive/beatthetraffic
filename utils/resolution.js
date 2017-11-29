export function scaleDetection (
  detection,
  canvasResolution,
  originalResolution
) {
  return {
    ...detection,
    x: detection.x * canvasResolution.w / originalResolution.w,
    y: detection.y * canvasResolution.h / originalResolution.h,
    w: detection.w * canvasResolution.w / originalResolution.w,
    h: detection.h * canvasResolution.h / originalResolution.h
  }
}

export function scaleArea (area, finalResolution, originalResolution) {
  return {
    x: area.x * finalResolution.w / originalResolution.w,
    y: area.y * finalResolution.h / originalResolution.h,
    w: area.w * finalResolution.w / originalResolution.w,
    h: area.h * finalResolution.h / originalResolution.h
  }
}

export function scalePoint (point, finalResolution, originalResolution) {
  return {
    x: point.x * finalResolution.w / originalResolution.w,
    y: point.y * finalResolution.h / originalResolution.h
  }
}

export function enlargeBbox (bbox, enlargeSize) {
  return {
    x: bbox.x - enlargeSize,
    y: bbox.y - enlargeSize,
    w: bbox.w + enlargeSize * 2,
    h: bbox.h + enlargeSize * 2
  }
}

export function isInsideArea (area, point) {
  const xMin = area.x
  const xMax = area.x + area.w
  const yMin = area.y
  const yMax = area.y + area.h

  if (
    point.x >= xMin &&
    point.x <= xMax &&
    point.y >= yMin &&
    point.y <= yMax
  ) {
    return true
  } else {
    return false
  }
}

export function areAreasOverlapping (area1, area2) {
  if (
    area1.x + area1.w < area2.x ||
    area2.x + area2.w < area1.x ||
    area1.y + area1.h < area2.y ||
    area2.y + area2.h < area1.h
  ) {
    return false
  } else {
    return true
  }
}

export function isInsideSomeAreas (areas, point, idDisplay) {
  const isInside = areas.some(area => isInsideArea(area, point))
  // console.log(`Run isInsideSomeAreas for ${idDisplay}, returned: ${isInside}`)
  return isInside
}
