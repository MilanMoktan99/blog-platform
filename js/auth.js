// Password validation function
function validatePassword(password) {
    const minLength = 8;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }

    if (!numberRegex.test(password)) {
        return "Password must contain at least one number.";
    }

    if (!symbolRegex.test(password)) {
        return "Password must contain at least one special symbol.";
    }

    return null; // valid
}

// Toggle password visibility with icon swap
function togglePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (!input || !icon) return;

    icon.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            icon.src = "../assets/icons/hide.png";
        } else {
            input.type = "password";
            icon.src = "../assets/icons/view.png";
        }
    });
}

togglePassword("loginPassword", "togglePassword");
togglePassword("registerPassword", "toggleRegisterPassword");


// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const passwordInput = document.getElementById("registerPassword");
        const password = passwordInput.value.trim();
        const errorElement = document.getElementById("passwordError");

        const validationError = validatePassword(password);

        if (validationError) {
            errorElement.textContent = validationError;
            passwordInput.classList.add("input-error");
            return;
        }

        // Clear error
        errorElement.textContent = "";
        passwordInput.classList.remove("input-error");

        // Save in cookies
        document.cookie = `userName=${name}; path=/`;
        document.cookie = `userEmail=${email}; path=/`;
        document.cookie = `userPassword=${password}; path=/`;

        alert("Registration Successful!");
        window.location.href = "login.html";
    });
}


// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const cookies = document.cookie.split(";").reduce((acc, cookie) => {
            const [key, value] = cookie.trim().split("=");
            acc[key] = value;
            return acc;
        }, {});

        if (email === cookies.userEmail && password === cookies.userPassword) {
            alert("Login Successful!");
            window.location.href = "../index.html";
        } else {
            alert("Invalid credentials!");
        }
    });
}
