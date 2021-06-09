const toggleBtn = document.querySelector(".toggle-btn");
const crossBtn = document.querySelector(".cross-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar")
})

crossBtn.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar");
})