/*Ejercicio 4
Contar todas las "o" almacenadas en un array de palabras. En cada posición del array hay una palabra almacenada. Tip: piensa en doble bucle
Ejemplo de datos y llamada a la función
let data = ["yoda", "best", "has", "tortilla", "cAfe", "barrita tomate", "zumo"];
contarCaracteres(data,"a");*/

function contarLetras(arrayPalabras) {
  let num = 0;
  arrayPalabras.forEach((palabras) => {
    const separacion = palabras.split("");
    separacion.forEach((letras) => {
      if (letras == "a" || letras == "A") {
        num++;
      }
    });
  });
  return num;
}

const data = [
  "yoda",
  "best",
  "has",
  "tortilla",
  "cAfe",
  "barrita tomate",
  "zumo",
];
console.log("Hay " + contarLetras(data) + " A en el texto");
