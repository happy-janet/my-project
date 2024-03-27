document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (fullName === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Store form data in local storage
    let formData = {
        fullName: fullName,
        email: email,
        password: password
    };

    localStorage.setItem('adminFormData', JSON.stringify(formData));

    // Reset the form
    document.getElementById('signupForm').reset();

    // Inform the user about successful signup
    alert('Signup Successful!');

    // Optionally, redirect to another page after successful signup
    // window.location.href = 'success.html';
});
