
document.querySelectorAll(".toggle-password").forEach(button => {

    button.addEventListener("click", () => {

        const input = document.getElementById(button.dataset.target);

        if (!input) return;

        const isHidden = input.type === "password";

        input.type = isHidden ? "text" : "password";

        button.classList.toggle("active", isHidden);

        button.setAttribute("aria-pressed", String(isHidden));

        button.setAttribute(
            "aria-label",
            isHidden ? "Hide password" : "Show password"
        );

    });

});


/* SIGN UP VALIDATION */

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password = document.getElementById("signupPassword").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;

        }

        alert(
            "Registration UI completed! Backend authentication will be added in future."
        );

        signupForm.reset();

    });

}


/* LOGIN FORM */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Login UI completed! Real authentication will be added in future."
        );

        loginForm.reset();

    });

}
