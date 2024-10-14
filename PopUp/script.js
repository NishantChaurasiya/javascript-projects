const btn=document.querySelector(".btn");
const cross=document.querySelector(".cross")
btn.addEventListener("click",()=>{
   btn.nextElementSibling.classList.remove("hidden")
   btn.classList.add("hidden")
   cross.classList.remove("hidden")
});
cross.addEventListener("click",()=>{
   btn.nextElementSibling.classList.add("hidden")
   btn.classList.remove("hidden")
   cross.classList.add("hidden")
})