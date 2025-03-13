/*Ejercicio 1: Declara una función que acepte una palabra como parámetro y la devuelva con
todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".*/
function separarLetras(palabra){
    return palabra.toUpperCase().replaceAll(""," ");
}
let nombre = "Jonathan";
console.log(separarLetras(nombre));
