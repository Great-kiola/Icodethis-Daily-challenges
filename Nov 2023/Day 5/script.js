let btn = document.querySelector(".btn");
let offBtn = document.querySelector(".offDiv");
let container = document.querySelector(".container");
let details = document.querySelector(".details");

let offDiv = document.querySelector(".offDiv");


btn.addEventListener("click", () => {
    container.style.backgroundColor = "var(--darkModeBg)";
    details.style.display = "none";
    offDiv.style.display = "flex";

})