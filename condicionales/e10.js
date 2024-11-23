// Ejercicio 10: Menú de Opciones de una Calculadora Básica
// Crea un programa en JavaScript que simule una calculadora básica. El programa debe:

// Mostrar un menú con las siguientes opciones:
// 1: Suma
// 2: Resta
// 3: Multiplicación
// 4: División
// 5: Salir
// Solicitar al usuario seleccionar una opción del menú.
// Si elige una operación (1 a 4), solicitar dos números y realizar la operación correspondiente usando una estructura switch.
// Si elige "5", finalizar el programa con un mensaje de despedida.
// Mostrar un mensaje de error si se selecciona una opción inválida.
// Mostrar el menú al usuario
console.log("Menú de Calculadora Básica:");
console.log("1: Suma");
console.log("2: Resta");
console.log("3: Multiplicación");
console.log("4: División");
console.log("5: Salir");

// Solicitar al usuario que seleccione una opción
const opcion = parseInt(
  prompt("Ingrese el número de la operación que desea realizar (1-5):")
);

switch (opcion) {
  case 1:
    // Suma
    const suma1 = parseFloat(prompt("Ingrese el primer número:"));
    const suma2 = parseFloat(prompt("Ingrese el segundo número:"));
    console.log(`Resultado de la suma: ${suma1 + suma2}`);
    break;

  case 2:
    // Resta
    const resta1 = parseFloat(prompt("Ingrese el primer número:"));
    const resta2 = parseFloat(prompt("Ingrese el segundo número:"));
    console.log(`Resultado de la resta: ${resta1 - resta2}`);
    break;

  case 3:
    // Multiplicación
    const multi1 = parseFloat(prompt("Ingrese el primer número:"));
    const multi2 = parseFloat(prompt("Ingrese el segundo número:"));
    console.log(`Resultado de la multiplicación: ${multi1 * multi2}`);
    break;

  case 4:
    // División
    const div1 = parseFloat(prompt("Ingrese el primer número:"));
    const div2 = parseFloat(prompt("Ingrese el segundo número:"));
    if (div2 !== 0) {
      console.log(`Resultado de la división: ${div1 / div2}`);
    } else {
      console.error("Error: No se puede dividir por cero.");
    }
    break;

  case 5:
    // Salir
    console.log("Gracias por usar la calculadora. ¡Hasta luego!");
    break;

  default:
    // Opción inválida
    console.error(
      "Error: Opción no válida. Por favor ingrese un número del 1 al 5."
    );
}
