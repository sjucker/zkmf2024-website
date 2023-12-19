import type { CoordinatesDTO } from '~/types/rest'

const RADIUS_OF_EARTH_IN_KM = 6371
const DEGREES_TO_RADIANS = 0.017453292519943295

export default function (pointA: CoordinatesDTO, pointB: CoordinatesDTO) {
  const longitudeA = pointA.longitude * DEGREES_TO_RADIANS
  const longitudeB = pointB.longitude * DEGREES_TO_RADIANS
  const latitudeA = pointA.latitude * DEGREES_TO_RADIANS
  const latitudeB = pointB.latitude * DEGREES_TO_RADIANS

  // Haversine formula
  const deltaLongitude = longitudeB - longitudeA
  const deltaLatitude = latitudeB - latitudeA
  const a = Math.pow(Math.sin(deltaLatitude / 2), 2) + Math.cos(latitudeA) * Math.cos(latitudeB) * Math.pow(Math.sin(deltaLongitude / 2), 2)

  const c = 2 * Math.asin(Math.sqrt(a))

  return c * RADIUS_OF_EARTH_IN_KM * 1000
}
