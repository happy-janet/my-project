// Dummy data
const sittersData = [
    { id: 1, name: "John Doe", location: "Kabalagala", dob: "1990-01-01", gender: "Male", nextOfKin: "Jane Doe", nin: "1234567890", recommender: "Mary Smith", religion: "Christian", education: "Diploma", contact: "+256123456789", status: "On Duty" },
    { id: 2, name: "Jane Smith", location: "Makindye", dob: "1992-05-05", gender: "Female", nextOfKin: "Jack Smith", nin: "0987654321", recommender: "David Johnson", religion: "Muslim", education: "Degree", contact: "+256987654321", status: "Off Duty" }
];

// Function to display sitters
function displaySitters() {
    const sittersTable = document.getElementById('sitters-table');
    sittersTable.innerHTML = ''; // Clear previous data
    sittersData.forEach(sitter => {
        const row = `
            <tr>
                <td>${sitter.id}</td>
                <td>${sitter.name}</td>
                <td>${sitter.location}</td>
                <td>${sitter.dob}</td>
                <td>${sitter.gender}</td>
                <td>${sitter.nextOfKin}</td>
                <td>${sitter.nin}</td>
                <td>${sitter.recommender}</td>
                <td>${sitter.religion}</td>
                <td>${sitter.education}</td>
                <td>${sitter.contact}</td>
                <td>${sitter.status}</td>
            </tr>
        `;
        sittersTable.innerHTML += row;
    });
}

// Call the function to display sitters when the page loads
window.onload = function() {
    displaySitters();
};
