function validateForm(event) {
  event.preventDefault();

  // Validate email
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  if (!email) {
    emailError.textContent = 'Please enter an email address';
    emailError.classList.remove('hidden');
  } else if (!email.includes('@')) {
    emailError.textContent = 'Please enter a valid email address';
    emailError.classList.remove('hidden');
  } else {
    emailError.classList.add('hidden');
  }

  // Validate password
  const password = document.getElementById('password').value;
  const passwordError = document.getElementById('passwordError');
  if (!password) {
    passwordError.textContent = 'Please enter a password';
    passwordError.classList.remove('hidden');
  } else if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    passwordError.classList.remove('hidden');
  } else if (!/(?=.*[A-Z])/.test(password)) {
    passwordError.textContent = 'Password must contain at least one uppercase letter';
    passwordError.classList.remove('hidden');
  } else if (!/(?=.*\d)/.test(password)) {
    passwordError.textContent = 'Password must contain at least one number';
    passwordError.classList.remove('hidden');
  } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
    passwordError.textContent = 'Password must contain at least one special character';
    passwordError.classList.remove('hidden');
  } else {
    passwordError.classList.add('hidden');
  }

  // Check if "Remember me" is checked
  const rememberMeChecked = document.getElementById('remember-me').checked;

  // If both email and password are provided and password meets all criteria, submit the form
  if (email && password && password.length >= 8 && /(?=.*[A-Z])/.test(password) && /(?=.*\d)/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
    console.log('Form submitted');
    if (rememberMeChecked) {
      console.log('Remember me checked');
    }
  }
}

document.getElementById('loginForm').addEventListener('submit', validateForm);
