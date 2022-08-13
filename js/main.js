// Soft loader
window.onload = function() {
  setTimeout(function() {
    document.getElementById("loader").remove();
  }, 1000);
};

// Menu toggle
function toggleMenu() {
  var element = document.getElementById("menu");
  element.classList.toggle("menu-toggle");
  var element = document.getElementById("menu-toggle");
  element.classList.toggle("rotate");
}

// Sidebar toggle
function expandRight() {
  var element = document.getElementById("left-content");
  element.classList.toggle("left-toggle");
  var element = document.getElementById("sidebar");
  element.classList.toggle("sidebar-toggle");
  var element = document.getElementById("left");
  element.classList.toggle("right-expand");
  var element = document.getElementById("left-close-btn");
  element.classList.toggle("rotate");
  var element = document.getElementById("right");
  element.classList.toggle("testexpand");

  let x = document.getElementById("menu"); {
    if (x.classList.contains("menu-toggle")) {
      x.classList.remove("menu-toggle")
    } else {}
  }

}

//  Proba za bolju implementaciju korigovanja sirine desnog dela
//
//var eleft = document.getElementById("left");
//var eright = document.getElementById("right");
//var eleftcheck = eleft.classList.contains("right-expand");
//console.log(eleft);
//console.log(eright);
//console.log(eleftcheck);
