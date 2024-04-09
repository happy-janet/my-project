document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code goes here

  // Example: Create a bar chart using Chart.js
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Sitters', 'Babies', 'Payments', 'Procurement'],
          datasets: [{
              label: 'Data Summary',
              data: [150, 200, 300, 100], // Example data, replace with actual data
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  // Add your data management functionalities here

});
document.addEventListener('DOMContentLoaded', function() {
  // Sample data arrays (you can replace with actual data)
  let sittersData = [];
  let babiesData = [];
  let paymentsData = [];
  let procurementData = [];

  // Example function to add a sitter
  function addSitter() {
      // Get data from form fields or inputs
      let sitterName = document.getElementById('sitterName').value;
      let sitterLocation = document.getElementById('sitterLocation').value;
      // Add validation checks if needed

      // Create a sitter object
      let sitter = {
          name: sitterName,
          location: sitterLocation
          // Add more properties as needed
      };

      // Add the sitter to the data array
      sittersData.push(sitter);

      // Refresh the sitter table or list
      refreshSitterTable();
  }

  // Example function to edit a sitter
  function editSitter(index) {
      // Get updated data from form fields or inputs
      let sitterName = document.getElementById('editSitterName').value;
      let sitterLocation = document.getElementById('editSitterLocation').value;
      // Add validation checks if needed

      // Update the sitter object at the specified index
      sittersData[index].name = sitterName;
      sittersData[index].location = sitterLocation;
      // Update other properties as needed

      // Refresh the sitter table or list
      refreshSitterTable();
  }

  // Example function to delete a sitter
  function deleteSitter(index) {
      // Remove the sitter from the data array at the specified index
      sittersData.splice(index, 1);

      // Refresh the sitter table or list
      refreshSitterTable();
  }

  // Example function to refresh the sitter table or list
  function refreshSitterTable() {
      // Clear existing data in the table or list
      // Then loop through the sittersData array to populate the table or list with updated data
  }

  // Similar functions can be created for managing babies, payments, and procurement

  // Add event listeners to call the functions when needed
  document.getElementById('addSitterBtn').addEventListener('click', addSitter);
  document.getElementById('editSitterBtn').addEventListener('click', () => editSitter(selectedSitterIndex));
  document.getElementById('deleteSitterBtn').addEventListener('click', () => deleteSitter(selectedSitterIndex));
});
