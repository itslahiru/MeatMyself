// login.js
function handleLoginFormSubmit(event) {
    event.preventDefault();

    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    // Send a request to the server to check the credentials
    fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
            if (response.status === 200) {
                // If the login is successful, redirect the user to the homepage
                window.location.href = "/home";
            } else {
                // If the login fails, display an error message
                alert("Invalid email or password. Please try again.");
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
}
