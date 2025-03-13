/*Ejercicio 1
Crea una función que pida un número por parámetro y guarde su tabla de multiplicar en un array. El array será el valor devuelto por la función
Ejemplo --> Tabla del 3 --> [3,6,9,12,15,18,21,24,27,30]*/
function tablaDelTres(numero) {
  const resultado = [];
  for (let i = 1; i <= 10; i++) {
    resultado.push(numero * i);
  }return resultado
 
}
let num = 7;
console.log(tablaDelTres(num));
