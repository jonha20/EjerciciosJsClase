/*Ejercicio 4
Contar todas las "o" almacenadas en un array de palabras. En cada posición del array hay una palabra almacenada. Tip: piensa en doble bucle
Ejemplo de datos y llamada a la función
let data = ["yoda", "best", "has", "tortilla", "cAfe", "barrita tomate", "zumo"];
contarCaracteres(data,"a");*/
const data = [
  "yoda",
  "best",
  "has",
  "tortilla",
  "cAfe",
  "barrita tomate",
  "zumo",
];
const letra = []
letra = data.split("")

let num = 0;
for (let i = 0; i < data.length; i++) {
    data[i].split("")
    /*for (let x = 0; x < letra.length; x++) {
        if (String(letra[x]) == "o") {
            num++
        }
    }*/
}

console.log(letra);


/*data.forEach(palabras => {
    palabras.forEach(letras =>{
        
    })
})*/
/*data.forEach((palabras) => {
  palabras.split("");
  palabras.forEach((letra) => {
    if (letra == "o") {
      num++;
    }
  });
});
*/