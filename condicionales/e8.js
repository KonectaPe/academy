// Ejercicio 8: Calcular el Índice de Masa Corporal (IMC)
// Crea un programa en JavaScript que solicite al usuario ingresar su peso (en kilogramos) y su altura (en metros). El programa debe calcular el Índice de Masa Corporal (IMC) utilizando la fórmula:

// IMC
// =
// peso
// altura
// 2
// IMC=
// altura
// 2

// peso
// ​

// Según el resultado, el programa debe clasificar el IMC en una de las siguientes categorías:

// Bajo peso: IMC menor a 18.5.
// Peso normal: IMC entre 18.5 y 24.9.
// Sobrepeso: IMC entre 25.0 y 29.9.
// Obesidad: IMC de 30.0 o más.
// El programa debe:

// Validar que el usuario ingrese números positivos para el peso y la altura.
// Mostrar el IMC calculado con dos decimales.
// Mostrar la categoría correspondiente según el IMC.
// En caso de entrada inválida, mostrar un mensaje de error.

// Solicitar al usuario ingresar su peso y altura
const peso = parseFloat(prompt("Ingrese su peso en kilogramos (kg):"));
const altura = parseFloat(prompt("Ingrese su altura en metros (m):"));

// Validar que los valores sean positivos
if (peso > 0 && altura > 0) {
  // Calcular el IMC
  const imc = peso / altura ** 2;

  // Determinar la categoría usando operadores ternarios
  const categoria =
    imc < 18.5
      ? "Bajo peso"
      : imc < 25.0
      ? "Peso normal"
      : imc < 30.0
      ? "Sobrepeso"
      : "Obesidad";

  // Mostrar el resultado al usuario
  console.log(`Su IMC es: ${imc.toFixed(2)} (${categoria}).`);
} else {
  // Mensaje de error si los datos son inválidos
  console.error(
    "Error: Por favor ingrese valores positivos para peso y altura."
  );
}
