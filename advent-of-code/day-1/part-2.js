const { massList } = require('./input');

const getAdditionalFuelRequiredPerMass = function(mass) {
    const fuel = Math.floor(mass/3) - 2
    if(fuel <= 0) 
        return 0;
    else {
        return fuel + getAdditionalFuelRequiredPerMass(fuel);
    }
};

const getTotalFuelRequiredForTravel = function(massList) {
    const total = massList.reduce((sum, mass) => {
        return sum + getAdditionalFuelRequiredPerMass(mass);
    }, 0);
    return total;
};

console.log('Sum of the fuel requirements for all of the modules on your spacecraft', getTotalFuelRequiredForTravel(massList));