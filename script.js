const passwordShowCheckbox = document.querySelector("#show__pass");
const passwordInput = document.querySelector("#password");

passwordShowCheckbox.addEventListener("change", (e) => {
  passwordInput.type = e.target.checked ? "text" : "password";
});
