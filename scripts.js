let body = document.querySelector("body");
let btn = document.querySelector(".btn");

// when user clicked the btn class, it will toggle the class light for the body
btn.onclick = function() {
    body.classList.toggle("light");
}