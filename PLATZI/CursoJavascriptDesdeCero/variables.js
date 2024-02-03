/**
 * Let   => para la creacion de variables, cambia con el tiempo
 * const => son constantes
*/
let edad;
let nombre;
let anioNac;
let fechaActual = new Date(); //Muestra la fecha completa del sistema
let anioActual = fechaActual.getFullYear(); // obtengo solo el año de la fecha del sistema
nombre = prompt("Por favor ingrese su nombre:");
anioNac = prompt("Agregue su año de nacimiento:");

edad =  anioActual - anioNac
alert("Su edad es:" + edad);


/**
 * Inmutabilidad
 * tipo de dato primitivo
 */
let numero =23  // valor original
numero += 10    // esto ya es una variable totalmente nueva
console.log(numero)



/**
 * Mutabilidad
 * 
 */

/**
 * TipadoDinamico
 * 
 */