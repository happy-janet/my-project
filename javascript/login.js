document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Here you can perform authentication, for simplicity let's assume
    // username is "admin" and password is "adminpassword"
    if (username === "admin" && password === "adminpassword") {
        // Successful login, redirect or perform other actions
        window.location.href = "dashboard.html";
    } else {
        // Display error message
        document.getElementById("loginMessage").innerText = "Invalid username or password";
    }
});

//storage of data
function saveData(){
    localStorage.setItem("username", username);
}
