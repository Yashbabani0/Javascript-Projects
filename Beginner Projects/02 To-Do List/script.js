const inputTask = document.querySelector("#input_task");
const btnAddTask = document.querySelector("#btnAddTask");
const listContainer = document.querySelector("#list_container");

// Function to add task to the list
function addTask(taskText) {
  let li = document.createElement("li");
  li.innerHTML = taskText;
  listContainer.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  saveData();
}

// Function to save the list to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load the list from local storage
function loadData() {
  const data = localStorage.getItem("data");
  if (data) {
    listContainer.innerHTML = data;
  }
}

// Event listener for adding new tasks
btnAddTask.addEventListener("click", () => {
  if (inputTask.value === "") {
    alert("Please enter a value");
    return false;
  } else {
    addTask(inputTask.value);
    inputTask.value = ""; // Clear the input field after adding the task
  }
});

// Event delegation for handling clicks on list items and delete buttons
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveData();
});

// Load existing tasks from local storage on page load
loadData();
