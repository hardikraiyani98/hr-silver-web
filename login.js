document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMsg = document.getElementById("error-msg");

        // Dummy credentials
        const validEmail = "hrsilver";
        const validPassword = "bill";

        if (email === validEmail && password === validPassword) {
            // Redirect to the next page
            window.location.href = "hrbill.html";
        } else {
            errorMsg.textContent = "Invalid email or password.";
                alert("Invalid email or password");
        }
        });
