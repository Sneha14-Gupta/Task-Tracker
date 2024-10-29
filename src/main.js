import "./index.css";
import SingleTask from "./componenets/SingleTask";
import { titleCase, randomID } from "./utils";

// DOM  targeting
const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const showYearEl = document.querySelector(".show-year");
const taskContainerEl = document.querySelector("[data-task-container]");
showYearEl.textContent = new Date().getFullYear();

//  variable
let state = [];

function toggleCompleted(id) {
  state = state.map((task) => {
    if (id === task.id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
}

// function to rendertask

function renderTask() {
  taskContainerEl.innerHTML = "";
  const frag = document.createDocumentFragment();
  state.forEach((task) => {
    frag.appendChild(SingleTask(task.text, task.isCompleted, task.id));
  });
  taskContainerEl.appendChild(frag);
}


formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;

  //   creating new task

  const newTask = {
    text: titleCase(inputEl.value),
    isCompleted: false,
    id: randomID(),
  };

  state.unshift(newTask);
  renderTask();
  inputEl.value = "";
});

taskContainerEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    toggleCompleted(e.target.id);
    state.sort((a, b) => a.isCompleted - b.isCompleted);
    renderTask();
  }
});

