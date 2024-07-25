const buttons = document.querySelectorAll('input[type="button"]');
const multiplyButton = document.getElementById("multiply");
const screen = document.querySelector("#screen");
const clear = document.querySelector('.clear')

multiplyButton.value = "*";

clear.addEventListener('click', () => { screen.value = '' })
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    screen.value += button.value;
  });
});
