import "./index.css";
import SingleTask from "./componenets/SingleTask";
import { titleCase } from "./utils";

// DOM  targeting
const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const showYearEl = document.querySelector(".show-year");
const taskContainerEl=document.querySelector("[data-task-container]")

showYearEl.textContent = new Date().getFullYear();


// / variable
const state=[]

// function to rendertask
function renderTask(){
    taskContainerEl.innerHTML="";
    const frag=document.createDocumentFragment();
    state.forEach((task)=>{
        frag.appendChild(SingleTask(task.text,task.isCompleted,task.id));
    })
    taskContainerEl.appendChild(frag)

}


formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;
  
//   creating new task

  const newTask=({
    text:titleCase(inputEl.value),
    isCompleted:true,
    id:state.length
  })

  state.unshift(newTask)
  renderTask()
  inputEl.value = "";
});

taskContainerEl.addEventListener("click",(e)=>{
  if(e.target.tagName==="INPUT"){
    console.log("Hello");
    
  }
  
})