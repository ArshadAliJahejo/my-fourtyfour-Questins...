// car featuers

function cardetails (manufactuere: string, modelName: string, ...addinfo: string[][]){
    const car = {manufactuere, modelName, ...Object.fromEntries(addinfo)};

    return car; 
}
const mycardetails = cardetails('toyota', 'Grande', ['color', 'black'], ['year, 2024'] )


console.log(mycardetails);