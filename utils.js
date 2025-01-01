function generateRandomNumber(){
    return Math.floor(Math.random() * 100) +1;
}

function celciousToFahrenheit(celcious){
    return (celcious * 9) / 5 + 32;
}

module.exports  = {
    generateRandomNumber,
    celciousToFahrenheit
} 