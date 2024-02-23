function convertTemperature() {
    const temperature = parseFloat(document.getElementById("tempInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    let toUnit;
    let result;

    switch (fromUnit) {
        case "celsius":
            toUnit = "Fahrenheit";
            result = temperature * 9 / 5 + 32;
            break;
        case "fahrenheit":
            toUnit = "Celsius";
            result = (temperature - 32) * 5 / 9;
            break;
        case "kelvin":
            toUnit = "Celsius";
            result = temperature - 273.15;
            break;
    }

    document.getElementById("result").innerHTML = `Converted temperature: ${result.toFixed(2)} ${toUnit}`;
}
