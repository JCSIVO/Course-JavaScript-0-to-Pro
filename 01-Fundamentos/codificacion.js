//Ejercicio de codificación
//Se tiene los siguientes datos

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/*Utilicar la siguiente formula para calcular el IMC (indice de masa corporal) 
de Luis y de Carlos, IMC es igual al peso dividido entre la altura al cuadrado,
luego comparar e indicar si el IMC de Carlos es superior al de Luis.  
*/

var IMCLuis = pesoLuis / (alturaLuis * alturaLuis);
var IMCCarlos = pesoCarlos / (alturaCarlos * alturaCarlos);
console.log('El IMC de Luis es: ' + IMCLuis);
console.log('El IMC de Carlos es: ' + IMCCarlos);

var comparacion = IMCCarlos > IMCLuis;
console.log('¿El IMC de Carlos es superior al de Luis?: ' + comparacion);