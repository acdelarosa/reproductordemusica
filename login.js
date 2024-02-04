const usuarios = {
    "users":[
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

btnLogin.addEventListener('click',function(){
    const username = document.getElementById('userInput').value;
    const password = document.getElementById('passwordInput').value;

    // Utilizamos el método find sobre el array de usuarios para buscar un usuario que coincida.
    // El método find itera sobre cada elemento del array y retorna el primero que cumpla la condición.
    const user =usuarios.users.find(u => u.username === username && u.password === password);


     // Comprobamos si la constante user tiene un valor (lo que significa que el usuario fue encontrado).
    if(user){

         // Usuario encontrado y contraseña correcta
         window.location.href = "./paginareproductor.html";   // Redirecciona a la paginareproductor.html
    }else{
        // Usuario no encontrado o contraseña incorrecta
        alert('Usuario o contraseña incorrecta.');
    }

   
  
       
})