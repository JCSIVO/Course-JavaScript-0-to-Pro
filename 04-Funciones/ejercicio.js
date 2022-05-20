/******************************************************************
 * Ejercicio de Codificación 3
 * 
 * Calcular cuantos años le falta a una persona para que se jubile
 * Una persona se jubila a los 65 años de edad
 * Enviar como datos a la funcion su año de nacimiento y su nombre 
 * 
 * Solución 1:
 ******************************************************************/

function calcularTiempoJubilaion(yearNacimiento1, nombre){
    console.log('Recuerda que la edad de jubilación es a los 65 años de edad');
    var resultado = yearJubilacion - yearNacimiento1;
    return resultado;

}
var yearJubilacion = 65;
var nombrePregunta = console.log(('¿Cual es tu nombre?'));
var nombre = 'Juan';
var yearPregunta = console.log(('¿En que año naciste?'));
//Se deberia de convertir el numero introducido a num y luego restarlo
var year = 1986;
var yearNacimiento1 = 2022 - year;
var resultado = calcularTiempoJubilaion(yearNacimiento1, nombre);
//console.log(calcularTiempoJubilaion(edad, nombre));
console.log(nombre + ' le quedan ' + resultado + ' años para jubilarse');

// Solución 2:

function calcularEdad(yearNacimiento){
    return 2022 - yearNacimiento;
}

function calcularTiempoJubilaion(yearNacimiento, nombre){
    var edad = calcularEdad(yearNacimiento);
    var yearJubilacion = 65 - edad;
    console.log(nombre + ' le faltan ' + yearJubilacion + ' años para jubilarse');
}

calcularTiempoJubilaion(1990, 'Pablo');
calcularTiempoJubilaion(1978, 'Lucas');
