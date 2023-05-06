
const hamburgerButton = document.querySelector(".nav-toggler");

const navCurtain = document.querySelector(".nav-curtain");

function toggleNone(){
    navCurtain.classList.toggle("active");
    hamburgerButton.classList.toggle("active");
}

hamburgerButton.addEventListener("click", toggleNone);