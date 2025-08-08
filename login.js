 const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.getElementById("signInForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMsg = document.getElementById("error-msg");

        // Dummy credentials
        const validEmail = "hrsilverrajkot@gmail.com";
        const validPassword = "8866570426";

        if (email === validEmail && password === validPassword) {
            // Redirect to the next page
            window.location.href = "hrbill.html";
        } else {
            errorMsg.textContent = "Invalid email or password";
            alert("Invalid email or password");
        }
        });
