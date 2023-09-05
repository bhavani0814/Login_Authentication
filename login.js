<script>
        const registerForm = document.getElementById('register-form');
        const loginForm = document.getElementById('login-form');
        const errorMessage = document.getElementById('error-message');

        const users = {}; 

        registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (users[username]) {
            errorMessage.textContent = 'Username already registered.';
             } else {
             const hashedPassword = hashPassword(password);
             users[username] = hashedPassword;
             errorMessage.textContent = 'Registration successful!';
            }
        });

        loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (users[username] && comparePasswords(password, users[username])) {
            errorMessage.textContent = 'Login successful!';
            } else {
            errorMessage.textContent = 'Incorrect login credentials.';
            }
        });


        function hashPassword(password) {
            return password; // Insecure, should use a proper hashing library (e.g., bcrypt)
        }

        function comparePasswords(inputPassword, storedPassword) {
            return inputPassword === storedPassword;
        }

</script>
