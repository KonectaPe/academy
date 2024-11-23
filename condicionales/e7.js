// Ejercicio 7: Categoría de Edad
// Crea un programa en JavaScript que solicite al usuario ingresar su edad y, utilizando condicionales, clasifique al usuario en una de las siguientes categorías:

// Niño: 0 a 12 años.
// Adolescente: 13 a 17 años.
// Adulto: 18 a 59 años.
// Adulto Mayor: 60 años o más.
// El programa debe:

// Validar que la entrada del usuario sea un número positivo.
// Mostrar un mensaje con la categoría correspondiente.
// En caso de que la entrada sea inválida, mostrar un mensaje de error.

// Solicitar al usuario que ingrese su edad
const edad = parseInt(prompt("Ingrese su edad:"));

// Validar si la edad es un número positivo
if (edad >= 0) {
  // Determinar la categoría usando operadores ternarios
  const categoria =
    edad <= 12
      ? "Niño"
      : edad <= 17
      ? "Adolescente"
      : edad <= 59
      ? "Adulto"
      : "Adulto Mayor";

  // Mostrar la categoría al usuario
  console.log(`Con ${edad} años, usted es clasificado como: ${categoria}`);
} else {
  // Mensaje de error si el número es inválido
  console.error("Error: Por favor ingrese un número positivo.");
}
