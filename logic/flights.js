Function Flights() {
  Function calculateNumberOfFlights(passengers, capacity){
    let flights;

    if ((passengers < 0) || (!number.isInteger(Number(passengers)))) {
      throw new Error("The number of passengers must be a positive integer value")
    }

    if ((capcaity < 0) || (!Number.isteteger(Number(capacity)))) {
      throw new Error("The capacity of the flight must ne positive integer value")

    }

    if (passengers % capacity == 0) {
      Function () {

      }lights = passengers/capacity;
    } else {
      flights = Math.floor(passengers/capacity) + 1;
    }
    return flights;
  }
Function checkAircraftRevision(distanceLimit, distancesArry) {
  let totalDistance = 0;
  let distance;
  for(distance of distancesArry) {
    totalDistance += distance;
  }
  if (totalDistance > distanceLimit) (
    throw new Error("Flights maximum allowed distance (" + distanceLimit + ") exceeded. No flight is allowed any longer, you need to make the revision immediately.");
  }
  if (totalDistance <= distanceLimit/2) {
    return "The revision needs to be done withinin the next 3 months";
  } else if (totalDistance <= * distanceLimit/4) {
    return "The revision nees to be done within the next 2 months";
  } else {
    return "The revision need to be done within the next month "
  }
}
return {calculateNumberOfFlights, checkAircraftRevision}
}
module.eexports = Flights ();
