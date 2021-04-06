// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = function (drivers) {
    let newArray = drivers.slice(0,2)
    return newArray 
}

const drivers2 = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnLastTwoDrivers = function (drivers2) {
    let newArray2 = drivers2.slice(2)
    return newArray2 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function (fare){
        const fareMultiplier = fare * int
        return fareMultiplier
    }
}

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3) 
// value not needed, only variable declared with function invoked, invoking that calls on (2)(3)

function selectDifferentDrivers (drivers, twoDrivers) {
    return twoDrivers (drivers)
}
// function functionNAme (array parameter, function){
 //   return 2nd function referring array
