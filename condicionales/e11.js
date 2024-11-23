// Ejercicio 11: Determinar si es Tiempo de Vacaciones
// Crea un programa en JavaScript que solicite al usuario ingresar el mes del año (en formato numérico del 1 al 12) y determine si es temporada de vacaciones o no. Las vacaciones están definidas de la siguiente manera:

// Vacaciones: De diciembre (12) a febrero (2).
// No vacaciones: De marzo (3) a noviembre (11).
// El programa debe:

// Validar que el número ingresado esté entre 1 y 12.
// Usar una estructura switch para determinar si es temporada de vacaciones o no.
// Mostrar un mensaje indicando si es tiempo de vacaciones o no, dependiendo del mes ingresado.
// En caso de un número fuera de rango, mostrar un mensaje de error.
// Solicitar al usuario que ingrese el número del mes
const mes = parseInt(prompt("Ingrese el número del mes (1-12):"));

// Validar que el número esté en el rango válido
if (mes >= 1 && mes <= 12) {
  let mensaje;

  // Determinar si es temporada de vacaciones usando switch
  switch (true) {
    case mes === 12 || mes === 1 || mes === 2:
      mensaje = "¡Es tiempo de vacaciones!";
      break;
    default:
      mensaje = "No es temporada de vacaciones.";
  }

  // Mostrar el resultado
  console.log(mensaje);
} else {
  // Mensaje de error si el número es inválido
  console.error("Error: Por favor ingrese un número válido entre 1 y 12.");
}
