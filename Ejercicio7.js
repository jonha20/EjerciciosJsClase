/*Ejercicio 3
Escriba un programa que pida un año y que escriba si es bisiesto o no. Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.
*/
function añoBisiesto(fecha){
    const splitaño = fecha.split(" ");
    const año = splitaño[3]
    let resultado = ""
    if (parseInt(año) % 400 == 0) {
        resultado = "El año " + año + " es bisiesto"
    }else if (parseInt(año) % 100 == 0) {
        resultado = "El año " + año + " no es bisiesto"
    }else if (parseInt(año) % 4 == 0) {
        resultado = "El año " + año + " es bisiesto"
    }else{
        resultado = "El año " + año + " no es bisiesto"
    }
    return resultado;
}

const date = new Date(prompt("Introduce fecha en formato americano: ")).toDateString('es-ES')
console.log(añoBisiesto(date));

