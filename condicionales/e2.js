// Ejercicio 2
// Escribir un programa que almacene la cadena de caracteres contraseña en una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida por el usuario coincide con la guardada en la variable.
const contrasenia = "contraseña";
const contraseniaUsuario = prompt("Introduce la contraseña");
if (contrasenia === contraseniaUsuario) {
  console.log("Usuario verificado, bienvenido");
} else {
  console.log("Contraseña incorrecta");
}
