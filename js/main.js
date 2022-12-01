// Soft loader
window.onload = function () {
  setTimeout(function () {
    document.getElementById("loader").remove();
  }, 1000);
};

// Toggle function
function toggleClass(base, toggle) {
  const e = document.getElementById(base);
  e.classList.toggle(toggle);
}

// Menu toggle
function toggleMenu() {
  toggleClass("menu", "menu-toggle");
  toggleClass("menu-toggle", "rotate");
}

// Sidebar toggle
function expandRight() {
  toggleClass("left-content", "left-toggle");
  toggleClass("sidebar", "sidebar-toggle");
  toggleClass("left", "right-expand");
  toggleClass("left-close-btn", "rotate");
  toggleClass("right", "testexpand");
  if (document.getElementById("menu").classList.contains("menu-toggle")) {
    document.getElementById("menu").classList.remove("menu-toggle");
  }
}

// Contact toggle
function toggleContact() {
  toggleClass("contact", "expand-contact");
}

// Image Fullscreen
function FullView(ImgLink) {
  document.getElementById("fullscreen-img").src = ImgLink;
  document.getElementById("fullscreen").style.display = "flex";
}

function CloseFullView() {
  document.getElementById("fullscreen").style.display = "none";
}
