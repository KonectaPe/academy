console.log("Hola mundo");

// Igualdad (==): Comprueba si dos valores son iguales en valor.

// Aquí, ambos operandos son del mismo tipo (número) y tienen el mismo valor, por lo que la comparación es verdadera.
console.log(5 == 5); // true

// En este caso, los operandos son de diferentes tipos (número y cadena). El operador de igualdad (==) realiza una conversión de tipo implícita antes de comparar los valores. La cadena "5" se convierte en el número 5, y luego se comparan los valores numéricos, que son iguales, por lo que la comparación es verdadera.

// JavaScript realiza conversiones implícitas en el operador de igualdad (==) para facilitar la comparación entre valores de diferentes tipos. Esto se debe a que JavaScript es un lenguaje de tipado dinámico, lo que significa que los tipos de datos pueden cambiar en tiempo de ejecución y el lenguaje intenta ser flexible y permisivo para simplificar el desarrollo.
console.log(5 == "5"); // true

// Desigualdad (!=): Comprueba si dos valores no son iguales en valor.
console.log(3 != "3"); // false
console.log(4 != 4); // false

// Igualdad estricta (===): Comprueba si dos valores son iguales en tipo y valor.
console.log(3 === 3); // true
console.log("3" === 3); // false

// Desigualdad estricta (!==): Comprueba si dos valores no son iguales en tipo o valor.
console.log(3 !== "3"); // true
console.log(4 !== 4); // false

// Mayor que (>): Comprueba si el operando de la izquierda es mayor que el operando de la derecha.
console.log(5 > 3); // true

// Menor que (<): Comprueba si el operando de la izquierda es menor que el operando de la derecha.
console.log(5 < 3); // false

// Mayor o igual que (>=): Comprueba si el operando de la izquierda es mayor o igual que el operando de la derecha.
console.log(5 >= 5); // true

// Menor o igual que (<=): Comprueba si el operando de la izquierda es menor o igual que el operando de la derecha.
console.log(5 <= 5); // true
