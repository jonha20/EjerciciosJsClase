/*Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase*/
let frase = "Mi casa es vieja y morada";
var numero = 0
//const frasefrag = frase.split('');
var letra = "a";

for(var i = 0; i < frase.length; i++){
    if(letra == frase[i]){
        numero++
    }
}

console.log("Hay un total de "+ numero + " As");