const converToCelsius = (temperature) => {
    let celsius = (temperature - 32)* (5/9)
    return celsius
}
const describeTemperature = (temperature) => {
    let celsius = converToCelsius (temperature)
    if (celsius < 0 ) {
        return "very cold"
    }
    else if (celsius < 20 ) {
        return " cold"
    }
    else if (celsius < 30 ) {
        return " warm"
    }
     else if (celsius < 40 ) {
        return " hot"
    } 
    else if (celsius >= 40 ) {
        return " very hot"
    }   
};
console.log(converToCelsius(19))
console.log(describeTemperature(100))