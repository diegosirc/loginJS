document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí deberías realizar la validación del usuario y contraseña,
        // y luego redirigir o realizar otras acciones según el resultado.

        // Ejemplo de validación simple:
        if (username === 'messi' && password === '1010') {
            window.location.href = 'index.html';
            // Redirige o realiza otras acciones aquí.
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});
