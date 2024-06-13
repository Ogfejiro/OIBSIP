function convert() {
  // Check if elements exist before accessing them
  var fromUnit = document.getElementById("fromUnit");
  if (fromUnit) {
    fromUnit = fromUnit.value;
  } else {
    console.error("Element 'fromUnit' not found!");
    return; // Exit the function if element is missing
  }

  var toUnit = document.getElementById("toUnit");
  if (toUnit) {
    toUnit = toUnit.value;
  } else {
    console.error("Element 'toUnit' not found!");
    return;
  }

  var temperature = document.getElementById("temperature");
  if (temperature) {
    temperature = parseFloat(temperature.value);
  } else {
    console.error("Element 'temperature' not found!");
    return;
  }

  var convertedValue;
  var resultUnit;

  // Performing conversion logic (unchanged)
  switch (fromUnit) {
    case "C":
      if (toUnit === "F") {
        convertedValue = (temperature * 9) / 5 + 32;
        resultUnit = "F";
      } else {
        convertedValue = temperature;
        resultUnit = "C";
      }
      break;

    case "F":
      if (toUnit === "C") {
        convertedValue = ((temperature - 32) * 5) / 9;
        resultUnit = "C";
      } else {
        convertedValue = temperature;
        resultUnit = "F";
      }
      break;
  }

  // Update the result element
  document.getElementById("result").value =
    convertedValue.toFixed(2) + " " + resultUnit;
}
