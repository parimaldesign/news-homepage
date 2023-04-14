// Toggle 

let toggler = document.getElementById("toggleMenu");
let nav = document.getElementById("nav");
let body = document.getElementById("body");

toggler.addEventListener('click',function(){
    toggler.classList.toggle("close")
    nav.classList.toggle("nav-show");
    body.classList.toggle("overlay")
})