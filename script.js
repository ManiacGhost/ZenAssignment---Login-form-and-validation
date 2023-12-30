function validateForm() {
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Password validation
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least one uppercase letter, one number, and only "@" as a special character.');
        return false;   
    }

    // Redirect if password is correct
    if (password == 'SmartServTest@123') {
        alert('Login successful! Redirecting to the dashboard...');
        location.replace("./dasboard.html");
        
    } else {
        alert('Incorrect password. Please try again.');
        return false;
    }
}



