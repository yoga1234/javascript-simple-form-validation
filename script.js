const name = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form-input');
const errorElement = document.getElementById('error-text');

form.addEventListener('submit', (e) => {
  let messages = [];
  if(name.value === '' || name.value == null){
    messages.push("Name is required");
  }

  if(password.value.length <= 6){
    messages.push("Password must be linger than 8 characters");
  }

  if(messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});
