// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
    return function(fare) {
        return fareMultiplier * fare;
    }
}

function fareDoubler(fare) {
    const doubledFare = createFareMultiplier(2);
    return doubledFare(fare);
}

function fareTripler(fare) {
    const tripledFare = createFareMultiplier(3)
    return tripledFare(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else return returnLastTwoDrivers(arrayOfDrivers)
}