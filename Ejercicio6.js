/*Ejercicio 2
Crea una función que pida números por teclado (prompt) y mételos en un array. Cuando el usuario meta un 0, dejaremos de insertar (habrá que usar un bucle que pregunte constantemente). Por último, ordena los números ordenados de menor a mayor y devuelve el array. Prompt() devuelve un string. hay que convertirlo a entero con parseInt() https://www.tutorialspoint.com/how-to-convert-a-string-into-integer-in-javascript
*/
function arrayNumerosOrdenados(){
    const arraynumeros = [];
    let num = 1;
    do {
      let numero = parseInt(prompt("Introduce numero: "));
      if (numero == isNaN) {
        alert("Eso no es un numero");
        break;
      } else {
        if (numero != 0) {
          arraynumeros.push(numero);
        }
        num = numero;
      }
    } while (num != 0);
    return arraynumeros.sort(function (a, b) {
        return b - a;
      })
}
console.log(arrayNumerosOrdenados());
