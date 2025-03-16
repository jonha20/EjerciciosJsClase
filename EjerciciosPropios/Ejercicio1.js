/*Ejercicio 1:
Escribe una función en JavaScript que reciba un array de números y devuelva un nuevo array con los números que sean mayores que 10. Si el número es menor o igual a 10, no debe incluirse en el nuevo array. */

function numerosMayores10(numeros) {
  const mayoresDe10 = [];
  numeros.forEach((num) => {
    if (num > 10) {
      mayoresDe10.push(num);
    }
  });
  return mayoresDe10;
}
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numerosMayores10(arrayNumeros));
