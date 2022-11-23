const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("Please, fill in all the fields!");
  } else {
    const formFields = {
      email: email.value,
      password: password.value,
    };
    console.log(formFields);
    event.currentTarget.reset();
  }
}
