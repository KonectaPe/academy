// Ejercicio 13: Adivina el Número
// Crea un programa en JavaScript que simule un juego de adivinanza. El objetivo es que el usuario adivine un número aleatorio generado por el programa. El programa debe:

// Generar un número aleatorio entre 1 y 100.
// Solicitar al usuario que ingrese un número para adivinar el número generado.
// El programa debe verificar si el número ingresado es mayor, menor o igual al número generado:
// Si el número ingresado es mayor, mostrar un mensaje que diga "El número es más bajo. Intenta nuevamente".
// Si el número ingresado es menor, mostrar un mensaje que diga "El número es más alto. Intenta nuevamente".
// Si el número ingresado es igual al generado, mostrar un mensaje diciendo "¡Felicidades! Has adivinado el número".
// El programa debe seguir solicitando un número hasta que el usuario adivine correctamente.
// Utilizar un ciclo do while para asegurarse de que el proceso se repita hasta que el usuario adivine correctamente.
// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let numeroUsuario; // Almacenará el número ingresado por el usuario
let intentos = 0; // Contador de intentos

// Iniciar el juego
do {
  // Solicitar al usuario que ingrese un número
  numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));

  // Contar el intento
  intentos++;

  // Validar que el número ingresado esté dentro del rango
  if (numeroUsuario < 1 || numeroUsuario > 100 || isNaN(numeroUsuario)) {
    console.log("Por favor, ingresa un número válido entre 1 y 100.");
  } else if (numeroUsuario > numeroSecreto) {
    console.log("El número es más bajo. Intenta nuevamente.");
  } else if (numeroUsuario < numeroSecreto) {
    console.log("El número es más alto. Intenta nuevamente.");
  }
} while (numeroUsuario !== numeroSecreto); // Repetir hasta adivinar el número

// Felicitar al usuario por adivinar el número
console.log(
  `¡Felicidades! Has adivinado el número ${numeroSecreto} en ${intentos} intentos.`
);
