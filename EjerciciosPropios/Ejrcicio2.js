/*Ejercicio 2:
Crea una función en JavaScript que reciba un array de palabras y cuente cuántas de esas palabras tienen más de 5 letras. La función debe devolver el total de palabras que cumplen con esta condición. Utiliza un bucle para recorrer el array y condicionales para verificar la longitud de cada palabra.*/
const palabras = ["casa" , "comer", "cacatua", "pepino", "mota", "pirulo"]
let numeroPalabras = 0;
palabras.forEach(arraypalabras =>{
    let numeroletras= 0;
    arraypalabras.split("")
    for (let i = 0; i < arraypalabras.length; i++) {
        numeroletras++
    }
    if(numeroletras >= 5){
        numeroPalabras++
    }
})