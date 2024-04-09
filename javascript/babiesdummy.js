// Dummy data for baby registration form
const dummyData = {
    babyName: "Sophia",
    gender: "female",
    age: 12,
    location: "Kabalagala",
    timeOfArrival: "10:00",
    parentsName: "Alfonso",
    amount: 5000,
    periodOfStay: "1 week",
    babyNumber: 1
};

// Function to handle form submission
function submitDummyData() {
    // Display collected data (you can replace this with your desired processing logic)
    console.log("Baby's Name:", dummyData.babyName);
    console.log("Gender:", dummyData.gender);
    console.log("Age:", dummyData.age);
    console.log("Location:", dummyData.location);
    console.log("Time of Arrival:", dummyData.timeOfArrival);
    console.log("Parent's Name:", dummyData.parentsName);
    console.log("Amount in Shillings:", dummyData.amount);
    console.log("Period of Stay:", dummyData.periodOfStay);
    console.log("Baby Number:", dummyData.babyNumber);
}

// Optionally, you can trigger form submission automatically on page load
window.onload = function() {
    submitDummyData();
};
