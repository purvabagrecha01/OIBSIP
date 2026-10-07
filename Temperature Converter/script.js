function convertTemperature() {

    const input = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;

    const error = document.getElementById("error");

    const celsiusResult = document.getElementById("celsius");
    const fahrenheitResult = document.getElementById("fahrenheit");
    const kelvinResult = document.getElementById("kelvin");

    // Clear previous error
    error.textContent = "";

    // Validate empty input
    if (input.trim() === "") {
        error.textContent = "⚠️ Please enter a temperature value.";
        return;
    }

    const temperature = Number(input);

    // Validate numeric input
    if (isNaN(temperature)) {
        error.textContent = "⚠️ Please enter a valid numeric value.";
        return;
    }

    let celsius;

    // Convert input to Celsius
    if (unit === "Celsius") {
        celsius = temperature;
    }

    else if (unit === "Fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    }

    else if (unit === "Kelvin") {
        celsius = temperature - 273.15;
    }

    // Absolute zero validation
    if (celsius < -273.15) {
        error.textContent =
            "⚠️ Temperature cannot be below absolute zero (-273.15°C).";

        celsiusResult.textContent = "-- °C";
        fahrenheitResult.textContent = "-- °F";
        kelvinResult.textContent = "-- K";

        return;
    }

    // Convert Celsius to other units
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Display results
    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";
}
