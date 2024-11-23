// Ejercicio 9: Estaciones del Año usando switch
// Crea un programa en JavaScript que solicite al usuario ingresar un mes del año (en formato numérico del 1 al 12). Utilizando una estructura switch, el programa debe determinar y mostrar a qué estación del año pertenece el mes ingresado.

// Las estaciones se definen así:

// Verano: Enero (1), Febrero (2), Marzo (3).
// Otoño: Abril (4), Mayo (5), Junio (6).
// Invierno: Julio (7), Agosto (8), Septiembre (9).
// Primavera: Octubre (10), Noviembre (11), Diciembre (12).
// El programa debe:

// Validar que el número ingresado esté entre 1 y 12.
// Mostrar un mensaje con la estación correspondiente.
// En caso de un número inválido, mostrar un mensaje de error.
// Solicitar al usuario que ingrese un mes
const mes = parseInt(prompt("Ingrese el número del mes (1-12):"));

// Validar si el mes está en el rango válido
if (mes >= 1 && mes <= 12) {
  let estacion;

  // Determinar la estación usando switch
  switch (mes) {
    case 1:
    case 2:
    case 3:
      estacion = "Verano";
      break;
    case 4:
    case 5:
    case 6:
      estacion = "Otoño";
      break;
    case 7:
    case 8:
    case 9:
      estacion = "Invierno";
      break;
    case 10:
    case 11:
    case 12:
      estacion = "Primavera";
      break;
    default:
      estacion = "Desconocida"; // Esto nunca ocurrirá debido a la validación previa
  }

  // Mostrar la estación al usuario
  console.log(`El mes ${mes} pertenece a la estación: ${estacion}`);
} else {
  // Mensaje de error si el número es inválido
  console.error("Error: Por favor ingrese un número válido entre 1 y 12.");
}
