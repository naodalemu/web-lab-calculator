function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendValue(value) {
  const display = document.getElementById("display");
  const currentValue = display.value;

  if (value === ".") {
    const segments = currentValue.split(/[\+\-\*\/]/);
    if (segments[segments.length - 1].includes(".")) {
      return;
    }
  }

  const operators = ["+", "-", "*", "/"];
  const lastChar = currentValue.slice(-1);

  if (operators.includes(value)) {
    if (operators.includes(lastChar)) {
      display.value = currentValue.slice(0, -1) + value;
      return;
    } else if (lastChar === ".") {
      return;
    }
  }

  if (currentValue === "Error") {
    clearDisplay();
    display.value += value;
  } else {
    display.value += value;
  }
}

function calculate() {
  const display = document.getElementById('display');
  try {
      display.value = eval(display.value);

      if (isNaN(display.value) || display.value === Infinity) {
          throw new Error('Invalid calculation');
      }
  } catch (e) {
      display.value = 'Error';
  }
}