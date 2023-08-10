// Solicitar al usuario el monto de sus ingresos totales

const nombreUsuario = prompt("Nombre de usuario")
const edad = prompt("Inserte su edad");

// Validación edad

if (edad < 18) {

    document.write(`<h1>

    ERROR: TU EDAD NO ES SUFINCIANTE PARA ENTRAR EN ESTE SITIO

</h1>`);

} else {

    document.write(`<h1>

    BIENVENIDO ${nombreUsuario} </h1>`);}


