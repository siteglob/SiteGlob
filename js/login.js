/**
 * Event listener for the login form submission.
 * Handles user login by sending a POST request to the server.
 * Displays appropriate messages based on the server response.
 *
 * @param {Event} event - The submit event triggered by the form.
 * @returns {void}
 */
async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor, ingrese su correo electrónico y contraseña');
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
            email,
            password
        });

        /**
 * Event listener for the login form submission.
 * Handles user login by sending a POST request to the server.
 * Displays appropriate messages based on the server response.
 *
 * @param {Event} event - The submit event triggered by the form.
 * @returns {void}
 */
async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor, ingrese su correo electrónico y contraseña');
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
            email,
            password
        });

        console.log(response);

        // Verificar si la respuesta es exitosa
        if (response.status !== 200) {
            alert(response.data.message);
            console.error(response.data.message);
            console.error(response.data.errors);
            console.error(response.config.data);
            console.error(response.request);
            return;
        }

        console.log(response.data.token);

        // Verificar si la respuesta es exitosa
        if (response.status !== 200) {
            alert(response.data.message);
            console.error(response.data.message);
            console.error(response.data.errors);
            console.error(response.config.data);
            console.error(response.request);
            return;
        }

        console.log(response.data.token);

        // Verificar si la respuesta es exitosa

        document.getElementById('form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const apellidos = document.getElementById('apellidos').value;
            const direccion = document.getElementById('direccion').value;
            const localidad = document.getElementById('localidad').value;
            const cp = document.getElementById('cp').value;
            const provincia = document.getElementById('provincia').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const telefono = document.getElementById('telefono').value;
            const token = sessionStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                nombre,
                apellidos,
                direccion,
                localidad,
                cp,
                provincia,
                email,
                password,
                telefono,
                token
            });

            // Verificar si la respuesta es exitosa
         
        if (response.status === 200) {
            alert('Inicio de sesión exitoso');
            // Guardar el token en un almacenamiento seguro
            sessionStorage.setItem('token', response.data.token);
            // Redireccionar a la página de la plataforma
            window.location.href = 'bienvenida.html';
            console.log(response.data.token);
        } else {
            alert(response.data.message);
            console.error(response.data.message);
            console.error(response.data.errors);
            console.error(response.config.data);
            console.error(response.request);
        }
    } catch (error) {
        console.error(error);
    }
}

// Event listener for the login form submission.
document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
    });

}

// Event listener for the login form submission.
document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
    });


}
