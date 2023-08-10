// Declarar variables

let gastosNecesarios, gastosOpcionales, ahorro;

/* Solicitar al usuario el monto de sus ingresos totales */

let ingresoTotal = prompt("Inserte el monto de sus ingresos totales mesuales");

/* Cálculo de Modelo de Presupuesto */

const modeloPpto = {

    gastosNecesarios: (ingresoTotal)*0.50,
    gastosOpcionales: (ingresoTotal)*0.30,
    ahorro: (ingresoTotal)*0.20,

};

/* Mostar resultado en pantalla al usuario*/

document.write(`<h1>

    Bienvenido al programa de finanzas personales, basado en tus ingresos,<br> 
    tu modelo de presupuesto debería esstar conformado de la siguiente forma:<br>

    Gastos necesarios: ${modeloPpto.gastosNecesarios}<br>
    Gastos opcionales: ${modeloPpto.gastosOpcionales}<br>
    Ahorro: ${modeloPpto.ahorro}



</h1>`);
