function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('modeIcon');

  body.classList.toggle('dark-mode');

  // Change icon
  if (body.classList.contains('dark-mode')) {
    icon.textContent = '🌙';
  } else {
    icon.textContent = '🌞';
  }
}

function startClock() {
  updateTime(); // run immediately
  setInterval(updateTime, 1000); // update every second
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toDateString();
  document.getElementById('clock').textContent = `${dateString} - ${timeString}`;
}

  const form = document.getElementById('sign-in');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.getElementById('successMessage').textContent = '';

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const accountType = document.getElementById('accountType').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    // Username validation
    if (!/^[A-Za-z]+$/.test(username)) {
      document.getElementById('usernameError').textContent = ' only letters allowed.';
      valid = false;
    }
    // Email validation
    let valid = true;
const email = document.getElementById('emailInput').value;
if (!email.includes('@')|| !email.includes('.').test(email)) {
  document.getElementById('emailError').textContent = 'Please enter a valid email address.';
  let valid = true;
}
 else {showError('emailError', 'Enter a valid email');
    return;
  }
   // Password strength validation
    function validatePassword() {
      const password = document.getElementById("password").value;
      const message = document.getElementById("message");

      // Regex: At least one lowercase, one uppercase, one digit, one special character, and minimum 8 characters
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (regex.test(password)) {
        message.textContent = "✅ Strong password!";
        message.className = "success";
        return true;
      } else {
        message.textContent = "❌ Password must contain uppercase, lowercase, number, special character, and be at least 8 characters long.";
        message.className = "error";
        return false;
      }
    }

    // Confirm password match
    function Confirmpasswordmatch() 
    if (password !== confirmPassword) {
        message.textContent = "❌ Passwords do not match.";
        message.className = "error";
        return false;
      }
    else{
      message.textContent = "✅ Password is strong and matches!";
      message.className = "success";
      return true;
    }

    
// Final success message
if (valid) {
  alert(`You have successfully registered as a ${accountType.toLowerCase()}.`);
  form.reset();
}
  });
