document.getElementById('user').addEventListener('change', function() {
    const selectedUser = this.value;
    const uniIdInput = document.getElementById('uniId');
    switch(selectedUser) {
      case 'student':
        uniIdInput.placeholder = 'Student ID';
        break;
      case 'lecturer':
        uniIdInput.placeholder = 'Lecturer ID';
        break;
      case 'visitor':
        uniIdInput.placeholder = 'NIC';
        break;
      case 'shuttle-service':
        uniIdInput.placeholder = 'Licence Number';
        break;
      default:
        uniIdInput.placeholder = 'Uni ID';
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Reset error messages
    document.querySelectorAll('.text-red-500').forEach(function(element) {
      element.classList.add('hidden');
    });
  
    // Get input values
    const name = document.getElementById('name').value.trim();
    const uniId = document.getElementById('uniId').value.trim();
    const vehicleNumber = document.getElementById('vehicleNumber').value.trim();
    const vehicleBrand = document.getElementById('vehicleBrand').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Check if any field is empty
    if (!name) {
      document.getElementById('nameError').classList.remove('hidden');
    } else if (!isValidName(name)) {
      document.getElementById('nameError').innerText = 'Name must not contain special characters';
      document.getElementById('nameError').classList.remove('hidden');
    }
    if (!uniId) {
      document.getElementById('uniIdError').classList.remove('hidden');
    } else if (!isValidUniID(uniId)) {
      document.getElementById('uniIdError').innerText = 'ID must contain only numbers and letters';
      document.getElementById('uniIdError').classList.remove('hidden');
    }
    if (!vehicleNumber) {
      document.getElementById('vehicleNumberError').classList.remove('hidden');
    }
    if (!vehicleBrand) {
      document.getElementById('vehicleBrandError').classList.remove('hidden');
    }
    if (!email) {
      document.getElementById('emailError').classList.remove('hidden');
    } else if (!isValidEmail(email)) {
      document.getElementById('emailError').innerText = 'Please enter a valid email address';
      document.getElementById('emailError').classList.remove('hidden');
    }
    if (!password) {
      document.getElementById('passwordError').classList.remove('hidden');
    } else if (!isValidPassword(password)) {
      document.getElementById('passwordError').innerText = 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character';
      document.getElementById('passwordError').classList.remove('hidden');
    }
  
    // If all fields are filled and email and password are valid, submit the form
    if (name && uniId && vehicleNumber && vehicleBrand && email && password && isValidEmail(email) && isValidPassword(password)) {
      console.log('Form submitted');
      // Perform form submission logic here
    }
  });
  
  // Function to validate the name
  function isValidName(name) {
    // Regular expression for name validation (allows letters, numbers, dot symbol, and spaces)
    const nameRegex = /^[a-zA-Z0-9. ]+$/;
    return nameRegex.test(name);
  }
  
  // Function to validate the student ID (Uni ID)
  function isValidUniID(uniId) {
    // Regular expression for Uni ID validation (allows only letters and numbers)
    const uniIdRegex = /^[a-zA-Z0-9]+$/;
    return uniIdRegex.test(uniId);
  }
  
  // Function to validate the password
  function isValidPassword(password) {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
  
  // Function to validate the email
  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  