// Ejercicio 12: Simulador de Menú de Opciones de un Restaurante
// Crea un programa en JavaScript que simule un menú de opciones de un restaurante, donde el usuario pueda elegir diferentes platos, bebidas y postres. El programa debe:

// Mostrar un menú con las siguientes opciones:

// 1: Platos principales
// 2: Bebidas
// 3: Postres
// 4: Ver total
// 5: Salir
// Cada vez que elija un plato, bebida o postre, el programa debe preguntar cuántos quiere y sumar el costo total. Los precios son los siguientes:

// Platos principales: $10 por plato
// Bebidas: $3 por bebida
// Postres: $5 por postre
// El programa debe seguir ejecutándose hasta que el usuario elija la opción 5 para salir.

// Validar las opciones ingresadas para que el usuario solo pueda elegir entre las opciones válidas del menú.

// Mostrar el total acumulado cada vez que el usuario elija la opción 4.

// Utilizar un ciclo while para permitir que el usuario haga múltiples elecciones hasta que decida salir.
// Variables para el total de cada categoría
let totalPlatos = 0;
let totalBebidas = 0;
let totalPostres = 0;
let total = 0;

// Mostrar el menú inicial
console.log("Menú del Restaurante:");
console.log("1: Platos principales ($10 por plato)");
console.log("2: Bebidas ($3 por bebida)");
console.log("3: Postres ($5 por postre)");
console.log("4: Ver total");
console.log("5: Salir");

let opcion;

while (opcion !== 5) {
  // Solicitar al usuario que seleccione una opción
  opcion = parseInt(prompt("Elija una opción (1-5):"));

  // Validar que la opción esté dentro del rango
  if (opcion >= 1 && opcion <= 5) {
    switch (opcion) {
      case 1:
        // Platos principales
        const platos = parseInt(
          prompt("¿Cuántos platos principales desea ordenar?")
        );
        if (platos > 0) {
          totalPlatos += platos * 10;
          console.log(`Se han agregado ${platos} platos principales al total.`);
        } else {
          console.log("Por favor ingrese un número válido de platos.");
        }
        break;

      case 2:
        // Bebidas
        const bebidas = parseInt(prompt("¿Cuántas bebidas desea ordenar?"));
        if (bebidas > 0) {
          totalBebidas += bebidas * 3;
          console.log(`Se han agregado ${bebidas} bebidas al total.`);
        } else {
          console.log("Por favor ingrese un número válido de bebidas.");
        }
        break;

      case 3:
        // Postres
        const postres = parseInt(prompt("¿Cuántos postres desea ordenar?"));
        if (postres > 0) {
          totalPostres += postres * 5;
          console.log(`Se han agregado ${postres} postres al total.`);
        } else {
          console.log("Por favor ingrese un número válido de postres.");
        }
        break;

      case 4:
        // Ver total
        total = totalPlatos + totalBebidas + totalPostres;
        console.log(`Total acumulado: $${total}`);
        break;

      case 5:
        // Salir
        console.log("Gracias por su visita. ¡Hasta luego!");
        break;

      default:
        console.log(
          "Opción no válida. Por favor ingrese una opción entre 1 y 5."
        );
        break;
    }
  } else {
    console.log("Error: Por favor ingrese un número válido entre 1 y 5.");
  }
}
