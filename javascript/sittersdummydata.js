 // Dummy data for form submission
    const dummyData = {
        firstName: "Janet",
        lastName: "Aballo",
        location: "Kabalagala",
        dob: "1990-01-01",
        gender: "female",
        nextOfKin: "Vivian",
        nin: "1234567890",
        recommender: "Somebody",
        educationLevel: "Bachelor's Degree",
        contact: "1234567890",
        sittersNumber: "0987654321"
    };

    // Simulate form submission with dummy data
    function submitDummyData() {
        // Display collected data (you can replace this with your desired processing logic)
        console.log(dummyData);
        alert("Registration successful!"); // You may replace this alert with a redirect or any other action
    }

    // Optionally, you can trigger form submission automatically on page load
    window.onload = function() {
        submitDummyData();
    };

