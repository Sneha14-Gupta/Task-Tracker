import "./index.css";
import localforage from "localforage";
import SingleTask from "./componenets/SingleTask";
import { titleCase, randomID } from "./utils";
import { formEl, inputEl, taskContainerEl } from "./componenets/Domselection";

// DOM  targeting

const showYearEl = document.querySelector(".show-year");
showYearEl.textContent = new Date().getFullYear();

// localforage.setItem("button","structs");
// localforage.getItem("button").then(console.log);

localforage.setDriver(localforage.LOCALSTORAGE);

//  variable
let state = [];

function updateLocal() {
  localforage.setItem("tasks", state);
}

localforage.getItem("tasks").then((data) => {
  state = data || [];
  renderTask();
});

function clearTask() {
  state.length = 0;
  updateLocal();
  renderTask();
  inputEl.value = "";
}

function toggleCompleted(id) {
  state = state.map((task) => {
    if (id === task.id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
  updateLocal();
}

// function rendertask

function renderTask() {
  taskContainerEl.innerHTML = "";
  const frag = document.createDocumentFragment();
  state.forEach((task) => {
    frag.appendChild(SingleTask(task.text, task.isCompleted, task.id));
  });
  taskContainerEl.appendChild(frag);
}

// MARK :Listener(on new task)
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  // guard clause
  if (!inputEl.value) return;
  if (inputEl.value === ":clearall") return clearTask();

  //   creating new task

  const newTask = {
    text: titleCase(inputEl.value),
    isCompleted: false,
    id: randomID(),
  };

  state.unshift(newTask);
  updateLocal();
  renderTask();
  inputEl.value = "";
});

taskContainerEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    // to toggle
    toggleCompleted(e.target.id);
    state.sort((a, b) => a.isCompleted - b.isCompleted);
    updateLocal();
    renderTask();
  }
});
