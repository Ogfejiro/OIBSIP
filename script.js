const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value); // Replace eval with a safer method
  } catch (error) {
    display.value = "Error";
  }
}
