"use strict";
// car featuers
function cardetails(manufactuere, modelName, ...addinfo) {
    const car = Object.assign({ manufactuere, modelName }, Object.fromEntries(addinfo));
    return car;
}
const mycardetails = cardetails('toyota', 'Grande', ['color', 'black'], ['year, 2024']);
console.log(mycardetails);
