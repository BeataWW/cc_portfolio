
/*
function myFunction(x) {
    x.classList.toggle("change");
}
/*
var menuicon = document.querySelector(".menu-icon");
menuicon.addEventListener("click", function () {
  document.querySelector(".menu-icon").classList.toggle("change");
}, false);*/

// Get the button, and when the user clicks on it, execute myFunction
//document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  //document.getElementById("navbar").classList.toggle(".nav-lists");
  document.getElementById("myBtn").classList.toggle("change");
}