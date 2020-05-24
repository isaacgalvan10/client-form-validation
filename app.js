// DOM Selectors

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('re-password');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

// get values from the inputs
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const rePasswordValue = rePassword.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username can not be blank');
  } else if (usernameValue.length < 5) {
    setErrorFor(username, 'Username must be more than 5 characters');
  } else {
    setSuccessFor(username)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank')
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }

  if (rePasswordValue === '') {
    setErrorFor(rePassword, 'Re-enter Password');
  } else if(rePasswordValue !== passwordValue) {
    setErrorFor(rePassword, 'Passwords do not match')
  } else {
    setSuccessFor(rePassword);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}