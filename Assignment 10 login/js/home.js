let userName = document.getElementById("userName");
let btn = document.querySelector(".btn");

userName.innerHTML = localStorage.getItem("userName");

btn.addEventListener("click", function () {
  localStorage.removeItem("userName");
});
