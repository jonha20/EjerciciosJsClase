/*Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números*/
var numero = parseInt(prompt("Introduce un numero:"));
var numerosImpares = numero + 50;
const array = []
for(numero; numero<=numerosImpares; numero++){
    if(numero%2){
        array.push(numero);
    }
}
console.log(array);