const returnFirstTwoDrivers = function (drivers) { // a
return drivers.slice(0, 2);

}; // console.log(returnFirstTwoDrivers) would = Antonia, Nuru

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}; // console.log(returnaLastTwoDrivers)= Amari, No 

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 // console.log(selectingDrivers[0]) = returnFirstTwoDrivers

 const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value;
    

    };
 };

 