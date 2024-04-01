const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("passwordCheck");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handelSubmit();
});

const handelSubmit = () => {
  usernameValue = username.value.trim();
  useremailValue = email.value.trim();
  userpasswordValue = password.value.trim();
  userconfirmPasswordValue = confirmPassword.value.trim();

  if (usernameValue === "") {
    errorMessage(username, "User name is empty");
  } else {
    successMessage(username, usernameValue);
  }
  if (useremailValue === "") {
    errorMessage(email, "Email cannot be  empty");
  } else if (!isEmail(useremailValue)) {
    errorMessage(email, "Enter a Valid Email!");
  } else {
    successMessage(email, useremailValue);
  }
  if (userpasswordValue === "") {
    errorMessage(password, "Password cannot be  empty");
  } else {
    successMessage(password, userpasswordValue);
  }
  if (userconfirmPasswordValue === "") {
    errorMessage(confirmPassword, "Password cannot be  empty");
  } else if (userpasswordValue !== userconfirmPasswordValue) {
    errorMessage(confirmPassword, "Password doesn't match!");
  } else {
    successMessage(confirmPassword, userconfirmPasswordValue);
  }
};

const successMessage = (input, value) => {
  console.log(value);
  const controlForm = input.parentElement;
  controlForm.className = "control-form success";
};

const errorMessage = (input, massage) => {
  const controlForm = input.parentElement;
  const small = controlForm.querySelector("small");
  console.log(controlForm);

  controlForm.className = "control-form fail";
  small.innerText = massage;
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
