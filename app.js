const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementsByTagName('form');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (name.value === '' || name.value == null) {
    messages.push('Name is required');
  }

if (password.valuelength <= 6) {
  messages.push('Password must be longer than 6 characters');
}

  if (messages.length > 0) {
    e.preventDefault();
    nameError.innerText = messages.join(', ');
  }
})