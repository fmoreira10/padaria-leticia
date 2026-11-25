
const btn=document.querySelector(".menu");
const nav=document.querySelector("nav");
if(btn&&nav){btn.addEventListener("click",()=>nav.classList.toggle("active"));document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("active")));}
