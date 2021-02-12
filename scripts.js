let div = document.querySelector("div");
let canMove = false;

div.addEventListener("mousedown", function(event) {
   canMove = true;
});

 
document.body.addEventListener("mousemove", function(event) {
    if(canMove == true){
    div.style.left = event.clientX - 30 + "px";
    div.style.top = event.clientY - 30 + "px";
    }
});