document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('input[type="button"]');
  const multiplyButton = document.getElementById("multiply");
  const screen = document.querySelector("#screen");
  const historyList = document.querySelector("#history-list");
  const historyShow = document.querySelector('#historyShow')
  const historyBox = document.querySelector('.history')
  let history = [];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "C") {
        screen.value = ""; // Clear the screen
      } else if (button.value === "=") {
        try {
          // Replace 'x' with '*' for multiplication
          const expression = screen.value.replace(/x/g, "*");
          // Evaluate the expression and display the result
          const result = eval(expression);
          // Display the result on the screen
          screen.value = result;

          // Add the calculation to the history
          history.push(`${expression.replace(/\*/g, "x")} = ${result}`);
          updateHistory();
        } catch (error) {
          screen.value = "Error"; // Display an error message if the expression is invalid
        }
      } else {
        screen.value += button.value;
      }
    });
  });

  function updateHistory() {
    // Clear the current history display
    historyList.innerHTML = "";
    // Display the history
    history.forEach((entry) => {
      const listItem = document.createElement("li");
      listItem.textContent = entry;
      historyList.appendChild(listItem);
    });
  }
});

historyShow.addEventListener('click', () => {
  historyBox.style.display = 'flex';
})
 