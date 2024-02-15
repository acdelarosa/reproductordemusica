const usuarios = {
    "users": [
        {
            "username": "admin",
            "password": "contrasena1"
        },
        {
            "username": "usuario1",
            "password": "contrasena2"
        }


    ]
}

const btnLogin = document.getElementById('btnLogin')

btnLogin.addEventListener('click', function () {
    event.preventDefault()

    const username = document.getElementById('userInput').value;
    const password = document.getElementById('passwordInput').value;

    // Utilizamos el método find sobre el array de usuarios para buscar un usuario que coincida.
    // El método find itera sobre cada elemento del array y retorna el primero que cumpla la condición.
    const user = usuarios.users.find(u => u.username === username && u.password === password);



    // Comprobamos si la constante user tiene un valor (lo que significa que el usuario fue encontrado).
    if (user) {
        alert('Login successful')
        localStorage.setItem('isLogged', true)
        // Usuario encontrado y contraseña correcta
        window.location.href = "../paginareproductor.html";   // Redirecciona a la paginareproductor.html
    } else {
        // Usuario no encontrado o contraseña incorrecta
        /*  usernameInput.value = ''
         passwordInput.value = '' */
        alert('Wrong credentials')
    }
})
if (localStorage.getItem('isLogged')) {
    const form = document.getElementById('loginForm')
    form.innerHTML = `
    <div class="log">

    <button id="logout">Log out</button>
          <a href="../paginareproductor.html" id="back">
           Back
        </a>
        </div>`

    const logoutBtn = document.getElementById('logout')
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLogged')
        window.location.href = '../paginareproductor.html'
    })
}
