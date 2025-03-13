/*Ejercicio 2: Declara una función que acepte un nombre como 
parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.*/

function ContarNombre(NombreCompleto){
    return NombreCompleto.split(" ").length;
}
let nombre = "Antonio Alberto Jesús";
console.log(ContarNombre(nombre));




