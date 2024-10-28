import "./index.css";
import SingleTask from "./componenets/SingleTask";
import { titleCase } from "./utils";

// DOM  targeting
const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const showYearEl = document.querySelector(".show-year");
const taskContainerEl=document.querySelector("[data-task-container]")
showYearEl.textContent = new Date().getFullYear();


// function
function renderTask(){
    taskContainerEl.innerHTML="";
    const frag=document.createDocumentFragment();
    tasks.forEach((task)=>{
        frag.appendChild(SingleTask(task.text,task.isCompleted));
    })
    taskContainerEl.appendChild(frag)

}
const tasks=[]
formEl.addEventListener("submit", (e) => {

  e.preventDefault();
  if (!inputEl.value) return;
//   creating new task

  const newTask=({
    text:titleCase(inputEl.value),
    isCompleted:true,
    id:tasks.length
  })
  tasks.unshift(newTask)
  renderTask()
  inputEl.value = "";
});
