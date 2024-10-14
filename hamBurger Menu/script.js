const menu =document.querySelector(".menu");
const list=document.querySelector(".list");
const cross=document.querySelector(".cross");
menu.addEventListener("click",()=>{
    menu.style.opacity = "0";
    list.classList.remove("hide");
    cross.classList.remove("hidden");
});
const handleEvent=()=>{
    menu.style.opacity = "1";
    list.classList.add("hide");
    cross.classList.add("hidden");
}
cross.addEventListener("click",()=>{
    handleEvent();
});
document.addEventListener("scroll",()=>{
    handleEvent();
    
});
