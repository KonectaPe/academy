// Ejercicio 14: Menú de Opciones para Calcular el Área de Figuras Geométricas
// Crea un programa en JavaScript que permita al usuario calcular el área de diferentes figuras geométricas. El programa debe tener un menú con las siguientes opciones:

// Círculo (El usuario debe ingresar el radio del círculo).
// Rectángulo (El usuario debe ingresar la base y la altura del rectángulo).
// Triángulo (El usuario debe ingresar la base y la altura del triángulo).
// Salir (El programa debe salir del menú).
// El programa debe seguir mostrando el menú hasta que el usuario elija la opción de salir.

// Para calcular el área de cada figura, utiliza las siguientes fórmulas:
// Círculo:
// 𝐴
// =
// 𝜋
// ×
// 𝑟
// 2
// A=π×r
// 2

// Rectángulo:
// 𝐴
// =
// base
// ×
// altura
// A=base×altura
// Triángulo:
// 𝐴
// =
// base
// ×
// altura
// 2
// A=
// 2
// base×altura
// ​

// Utiliza un ciclo do while para que el programa siga ejecutándose hasta que el usuario elija la opción de salir.
let opcion; // Almacena la opción seleccionada por el usuario

do {
  // Mostrar el menú
  console.log("Menú de opciones:");
  console.log("1: Calcular área de un Círculo");
  console.log("2: Calcular área de un Rectángulo");
  console.log("3: Calcular área de un Triángulo");
  console.log("4: Salir");

  // Solicitar la opción
  opcion = parseInt(prompt("Elija una opción (1-4):"));

  // Realizar la acción según la opción seleccionada
  switch (opcion) {
    case 1:
      // Cálculo del área del Círculo
      const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
      const areaCirculo = Math.PI * Math.pow(radio, 2);
      console.log(`El área del círculo es: ${areaCirculo.toFixed(2)}`);
      break;

    case 2:
      // Cálculo del área del Rectángulo
      const baseRectangulo = parseFloat(
        prompt("Ingrese la base del rectángulo:")
      );
      const alturaRectangulo = parseFloat(
        prompt("Ingrese la altura del rectángulo:")
      );
      const areaRectangulo = baseRectangulo * alturaRectangulo;
      console.log(`El área del rectángulo es: ${areaRectangulo.toFixed(2)}`);
      break;

    case 3:
      // Cálculo del área del Triángulo
      const baseTriangulo = parseFloat(
        prompt("Ingrese la base del triángulo:")
      );
      const alturaTriangulo = parseFloat(
        prompt("Ingrese la altura del triángulo:")
      );
      const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
      console.log(`El área del triángulo es: ${areaTriangulo.toFixed(2)}`);
      break;

    case 4:
      // Salir
      console.log("Gracias por usar el programa. ¡Hasta luego!");
      break;

    default:
      // Opción inválida
      console.log("Opción no válida. Por favor, elija una opción entre 1 y 4.");
      break;
  }
} while (opcion !== 4); // El ciclo sigue hasta que el usuario elija la opción de salir
