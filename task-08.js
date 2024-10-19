const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);

  const email = formElement.elements["email"].value;
  const password = formElement.elements["password"].value;

  if (!email || !password) {
    alert("Enter email and password!");
    return;
  }

  const formObj = {
    email: email,
    password: password,
  };

  console.log(formObj);

  console.log(`Email: ${formObj.email} ,  Password: ${formObj.password}`);
  form.reset();
});
