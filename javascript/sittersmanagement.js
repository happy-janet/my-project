document.addEventListener('DOMContentLoaded', function() {
    const sittersList = document.getElementById('sitters-list');
    const sitterForm = document.getElementById('sitter-form');
    const submitBtn = document.getElementById('submit-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const registrationForm = document.getElementById('registrationForm');
    
    // Your existing JavaScript code for managing sitters (rendering, adding, editing, deleting) goes here...

    // Function to handle babysitter registration form submission
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(this);

        // Convert FormData to JSON
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Basic validation
        if (!jsonData["firstName"] || !jsonData["lastName"] || !jsonData["location"] || !jsonData["dob"] || !jsonData["gender"] || !jsonData["nextOfKin"] || !jsonData["nin"] || !jsonData["recommender"] || !jsonData["educationLevel"] || !jsonData["contact"] || !jsonData["sittersNumber"]) {
            alert("Please fill in all fields.");
            return;
        }

        // Display collected data (you can replace this with your desired processing logic)
        console.log(jsonData);
        alert("Registration successful!"); // You may replace this alert with a redirect or any other action

        // Optionally, you can reset the form after successful submission
        registrationForm.reset();
    });
});
