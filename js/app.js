document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("theme") == "invert") {
    document.querySelector("body").classList.add("invert");
  }
});

document.querySelector("#invertButton").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("invert");
  
  if(localStorage.getItem("theme") == "invert") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "invert");
  }
});