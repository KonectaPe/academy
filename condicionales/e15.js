// Ejercicio 15: Tabla de Multiplicar
// Crea un programa en JavaScript que permita al usuario ingresar un número entre 1 y 10, y luego genere y muestre la tabla de multiplicar de ese número. El programa debe usar un ciclo for para generar las multiplicaciones del 1 al 10 y mostrarlas en la consola.

// Ejemplo de salida para el número 3:
// css
// Copiar código
// Tabla de multiplicar del 3:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30
// El programa debe continuar pidiendo un número hasta que el usuario ingrese un número válido entre 1 y 10.
let numero; // Almacena el número ingresado por el usuario

do {
  // Solicitar al usuario que ingrese un número entre 1 y 10
  numero = parseInt(
    prompt("Ingrese un número entre 1 y 10 para ver su tabla de multiplicar:")
  );

  // Validar que el número esté dentro del rango
  if (numero < 1 || numero > 10 || isNaN(numero)) {
    console.log("Por favor, ingrese un número válido entre 1 y 10.");
  }
} while (numero < 1 || numero > 10 || isNaN(numero)); // Repetir hasta que el número sea válido

// Mostrar la tabla de multiplicar
console.log(`Tabla de multiplicar del ${numero}:`);
for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
