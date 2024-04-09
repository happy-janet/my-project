document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');

    nameError.textContent = '';
    emailError.textContent = '';

    var isValid = true;

    if (name === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    }

    if (email === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Invalid email format';
      isValid = false;
    }

    if (isValid) {
      // Store details in local storage
      var userDetails = {
        name: name,
        email: email,
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));

      // Optional: Redirect to another page or show a success message
      alert('Form submitted successfully');
      // window.location.href = 'success.html';
    }
  });

  function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }