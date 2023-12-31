function validateForm(e) {
    e.preventDefault();
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Initialize form validity as true
    var isFormValid = true;

    // Email validation
    var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.test(username)) {
        alert('Please enter a valid email address');
        isFormValid = false;
    }
    
    // Password validation
    var pass = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;
    if (!pass.test(password)) {
        alert('Password must contain at least one uppercase letter, one number, and only "@" as a special character.');
        isFormValid = false;
    }
    console.log(password)
    // Redirect if password is correct and form is valid
    if (password == 'SmartServTest@123') {
        alert('Login successful! Redirecting to the dashboard...');
        location.replace("dashboard.html");
    } else if (isFormValid) {
        alert('Incorrect password. Please try again.');
    }
}