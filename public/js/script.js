const button1 = document.querySelector("#button1");
const hidden = document.querySelector("#tiet");
const button2 = document.querySelector("#button2");
const loginForm = document.querySelector("#login-form");
const backBtn = document.querySelector("#back-btn");

button1.addEventListener("click", function () {
  button1.style.display = "none";
  button2.style.display = "none";
  loginForm.style.display = "block";
  hidden.style.display="none";
});
button2.addEventListener("click", function () {
    button1.style.display = "none";
    button2.style.display = "none";
    loginForm.style.display = "block";
    hidden.style.display = "none";
});

backBtn.addEventListener("click", function () {
  button1.style.display = "block";
  button2.style.display = "block";
  loginForm.style.display = "none";
    hidden.style.display = "block";
});
