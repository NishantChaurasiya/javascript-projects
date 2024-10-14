"use strict"
const inputSection = document.querySelector(".input-section");
const taskSection = document.querySelector(".task-section");
const err = document.querySelector(".error");
const localTodoList = [];


const handleParentClick = (event) => {
   const eventElement = event.target;
   eventElement.previousSibling.style.cssText = "color:green;"
   eventElement.parentElement.style.cssText = "background-color:rgba(0, 128, 0, 0.321); border:none;  pointer-events: none; opacity:0.3; ";
   setTimeout(() => {
      eventElement.parentElement.style.display = "none"
   }, 1000);

};
const myFunction = (event) => {
   event.stopPropagation();
   handleParentClick(event);
};
const handleClick = (e) => {
   e.preventDefault();
   const todoValue = inputSection.firstElementChild.value.trim()
   if (todoValue == "") {
      err.innerText = "Please write a task";
      err.classList.remove("hidden");
      inputSection.firstElementChild.addEventListener("input", () => {
         err.classList.add("hidden");
      });
      return
   } else {
      if (localTodoList.includes(todoValue) == true) {
         err.innerText = "Please write  a different task";
         err.classList.remove("hidden");
         inputSection.firstElementChild.value = "";
         inputSection.firstElementChild.addEventListener("input", () => {
            err.classList.add("hidden");
         });
         return
      } else {
         localTodoList.push(todoValue);
      }
   }
   

   let taskContainer = document.createElement("div");
   taskContainer.classList.add("task-container");
   taskContainer.innerHTML = `<p class="para">${inputSection.firstElementChild.value}</p><button onclick="myFunction(event)" class="check">COMPLETE</button>`;
   // localstorage set
   taskSection.append(taskContainer);
   inputSection.firstElementChild.value = "";
};
inputSection.lastElementChild.addEventListener("click", (e) => {
   handleClick(e);
});
