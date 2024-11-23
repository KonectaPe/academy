// Ejercicio 4: Estaciones del Año
// Crea un programa en JavaScript que solicite al usuario ingresar un mes del año (en formato numérico del 1 al 12) y, utilizando condicionales, determine a qué estación del año pertenece ese mes. Las estaciones se definen así:

// Verano: Enero, Febrero, Marzo.
// Otoño: Abril, Mayo, Junio.
// Invierno: Julio, Agosto, Septiembre.
// Primavera: Octubre, Noviembre, Diciembre.
// El programa debe:

// Validar que el usuario ingrese un número entre 1 y 12.
// Mostrar un mensaje indicando a qué estación pertenece el mes ingresado.
// En caso de un número inválido, mostrar un mensaje de error.

// Solicitar al usuario que ingrese un mes
const mes = parseInt(prompt("Ingrese el número del mes (1-12):"));

if (mes >= 1 && mes <= 12) {
  let estacion;

  // Determinar la estación según el mes ingresado
  if (mes >= 1 && mes <= 3) {
    estacion = "Verano";
  } else if (mes >= 4 && mes <= 6) {
    estacion = "Otoño";
  } else if (mes >= 7 && mes <= 9) {
    estacion = "Invierno";
  } else {
    estacion = "Primavera";
  }

  // Mostrar la estación al usuario
  console.log(`El mes ${mes} pertenece a la estación: ${estacion}`);
} else {
  // Mensaje de error si el número es inválido
  console.error("Error: Por favor ingrese un número válido entre 1 y 12.");
}
