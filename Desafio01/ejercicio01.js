/* Solicitar al usuario los datos para el cálculo de punto de equilibrio */

let costosFijos = prompt("Inserte el monto de sus costos fijos");
let precioVenta = prompt("Inserte el precio de venta");
let costosVar = prompt("Inserte costos variables");

if (precioVenta == costosVar) {

    alert("El precio de venta y los costos variables no pueden ser iguales");
    costosFijos = prompt("Inserte el monto de sus costos fijos");
    precioVenta = prompt("Inserte el precio de venta");
    costosVar = prompt("Inserte costos variables");
} 


/* Cálculo de Punto de equilibrio CV */

let CV = (costosFijos)/(precioVenta-costosVar);

/* Mostar resultado en pantalla al usuario*/

document.write(`<h1>Tú punto de equilibrio es de  ${CV}</h1>`);
