console.log("radli li?")

var div = document.createElement("div");
div.setAttribute("id","background");
div.innerHTML = "Hello";
div.setAttribute('class', 'fullscreen');

var image = document.getElementById("img")
image.src = ".\src\gallery\abstract01.jpeg"

var divOpen = document.createElement("span");
divOpen.innerHTML = "O";

var divClose = document.createElement("span");
divClose.innerHTML = "X";

document.getElementById("main").appendChild(divOpen);

function toggleFullscreen() {
    document.getElementById("main").appendChild(div);
    document.getElementById("background").appendChild(divClose);    
    document.getElementById("background").appendChild(image);
}

divClose.onclick = function() { 
    console.log("Radi li klik na X???")
    div.remove(div)
 };

 divOpen.onclick = function() { 
    console.log("Otvoren FULL")
    document.getElementById("main").appendChild(div);
    document.getElementById("background").appendChild(divClose);    
 };
