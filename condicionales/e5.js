// Ejercicio 5: Clasificación de Notas de Alumnos
// Crea un programa en JavaScript que solicite al usuario ingresar la nota de un alumno (un número entre 0 y 100). El programa debe clasificar la nota en una de las siguientes categorías:

// Sobresaliente: 90 a 100.
// Notable: 75 a 89.
// Aprobado: 50 a 74.
// Desaprobado: 0 a 49.
// El programa debe:

// Validar que la nota ingresada sea un número entre 0 y 100.
// Mostrar un mensaje con la categoría correspondiente a la nota ingresada.
// En caso de una entrada inválida, mostrar un mensaje de error.

// Solicitar al usuario que ingrese la nota del alumno
const nota = parseInt(prompt("Ingrese la nota del alumno (0-100):"));

if (nota >= 0 && nota <= 100) {
  let clasificacion;

  // Clasificar la nota según los rangos
  if (nota >= 90 && nota <= 100) {
    clasificacion = "Sobresaliente";
  } else if (nota >= 75 && nota <= 89) {
    clasificacion = "Notable";
  } else if (nota >= 50 && nota <= 74) {
    clasificacion = "Aprobado";
  } else {
    clasificacion = "Desaprobado";
  }

  // Mostrar la clasificación al usuario
  console.log(`La nota ${nota} se clasifica como: ${clasificacion}`);
} else {
  // Mensaje de error si el número es inválido
  console.error("Error: Por favor ingrese un número válido entre 0 y 100.");
}
