let display = document.getElementById("display");

function append(char) {
  if (display.innerText === "0") {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  let text = display.innerText;
  if (text.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = text.slice(0, -1);
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}
