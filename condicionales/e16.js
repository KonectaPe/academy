// Ejercicio 16: Contar Números Negativos, Positivos y Ceros
// Crea un programa en JavaScript que permita al usuario ingresar una lista de números (al menos 10 números). El programa debe contar cuántos números son positivos, cuántos son negativos y cuántos son ceros. El programa debe seguir solicitando números hasta que se ingresen al menos 10 números y debe usar un ciclo for para recorrer la lista de números.

// Al final, el programa debe mostrar la cantidad de números positivos, negativos y ceros.
let numeros = []; // Arreglo para almacenar los números ingresados
let positivos = 0; // Contador de números positivos
let negativos = 0; // Contador de números negativos
let ceros = 0; // Contador de ceros

// Solicitar al usuario que ingrese al menos 10 números
for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Ingrese el número ${i} (de 10 números):`));

  // Validar que el número ingresado sea un número
  if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
    i--; // Decrementamos para que se ingrese un número válido
    continue; // Salta el resto del ciclo y solicita el número de nuevo
  }

  // Almacenar el número en el arreglo
  numeros.push(numero);

  // Contar los números positivos, negativos y ceros
  if (numero > 0) {
    positivos++;
  } else if (numero < 0) {
    negativos++;
  } else {
    ceros++;
  }
}

// Mostrar los resultados
console.log(`Cantidad de números positivos: ${positivos}`);
console.log(`Cantidad de números negativos: ${negativos}`);
console.log(`Cantidad de ceros: ${ceros}`);
