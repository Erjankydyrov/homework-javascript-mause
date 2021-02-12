let div = document.querySelector("div");
let canMove = false;

document.body.addEventListener("mousemove", function(event) {
    if(canMove == true){
    div.style.left = event.clientX - 30 + "px";
    div.style.top = event.clientY - 30 + "px";
    }
});