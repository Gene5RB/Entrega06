// Declarar variable

const usuario = "admin";
const contraseña = 1234;


// Solicitar datos para inicio de sesión

const nombreUsuario = prompt("Nombre de usuario");
const clave = prompt("Inserte contraseña");

// Validación de usuario

if (nombreUsuario === usuario && clave === contraseña) {

    document.write(`<h1>BIENVENIDO ${nombreUsuario}</h1>`);

} else {

    alert("ERROR: USUARIO O CLAVE INVÁLIDO");
    const nombreUsuario = prompt("Nombre de usuario");
    const clave = prompt("Inserte contraseña");
}

    
