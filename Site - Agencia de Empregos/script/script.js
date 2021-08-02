let active = true;
let menu = document.querySelector(".menu-container");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", ()=>{
    document.body.style.overflow = active ? 'hidden': 'initial';

    menu.classList.toggle("on", active);
    active = !active;
})