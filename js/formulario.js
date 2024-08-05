/*// Función para registrar un usuario
function register() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const email = document.getElementById('registerEmail').value;

  fetch('https://tu-dominio-backend.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Registro exitoso:', data);
    // Maneja la respuesta (ej. redireccionar, mostrar mensaje, etc.)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// Función para iniciar sesión
function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  fetch('https://tu-dominio-backend.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Login exitoso:', data);
    // Maneja la respuesta (ej. redireccionar, mostrar mensaje, etc.)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
*/