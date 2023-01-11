const btn = document.querySelector("#menu");
const menuContent = document.querySelector(".menu-content");
btn.addEventListener("click", (e)=>{
menuContent.classList.toggle("menu-active");
});