const temperature = 9;
const windSpeed = 20;
const windChill = document.querySelector("#wind-chill");

function windChillCalculator(temperature, windSpeed) {
    const temperatureF = (9 / 5 * temperature) + 32;
    const windSpeedMPH = windSpeed / 1.609344;

    const windChillCalculated = ((35.74 + (0.6215 * temperatureF) - (35.75 * (windSpeedMPH ** 0.16)) + ((0.4275 * temperatureF) * (windSpeedMPH ** 0.16)) - 32) * (5 / 9));



    return windChillCalculated
}

if (temperature <= 10 && windSpeed > 4.8) {

    windChill.innerHTML = `${windChillCalculator(temperature, windSpeed).toFixed(1) }&deg;C`
} else { windChill.innerHTML = `N/A` }