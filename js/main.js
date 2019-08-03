
function myFunction() {
  let check = document.getElementById("myBtn").classList.contains("change");
  if (window.matchMedia("(max-width: 600px)").matches||check){
    document.getElementById("myBtn").classList.toggle("change");
  }
}

function years(){
	let d = new Date();
	let d2 = new Date('September 20, 1993');
  let years = Math.floor((d-d2) / 31536000000)
  document.getElementById("old").innerHTML = "Age: "+years;
}