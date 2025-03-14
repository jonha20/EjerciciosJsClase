/*Ejercicio 3
Escriba un programa que pida un año y que escriba si es bisiesto o no. Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.
*/
function añoBisiesto(fecha) {
  let resultado = "";
  if ((parseInt(fecha) % 4 === 0 && parseInt(fecha) % 100 !== 0) || parseInt(fecha) % 400 === 0) {
    resultado = "El año " + fecha + " es bisiesto";
  } else {
    resultado = "El año " + fecha + " no es bisiesto";
  }
  return resultado;
}

const date = new Date(prompt("Introduce fecha en formato americano: ")).getFullYear();
console.log(date);
console.log(añoBisiesto(date));
