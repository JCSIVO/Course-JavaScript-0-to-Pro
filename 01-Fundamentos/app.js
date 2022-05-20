//Primer ejemplo para abrir un .js desde archivo externo
console.log("Hola a todos!!");

/************************************
 * Lección de definición de Variables
*************************************/

//definimos la primera variable y puede ser con ' ' ó " "
var primerNombre = 'Grover';

//imprimirla por consola y de tipo string
console.log(primerNombre);

//generamos variable de tipo numerica y otra float o decimal
var edad = 40;
var sueldo = 120.67

console.log(edad);
console.log(sueldo);

//variable Booleana
var tieneTrabajo = true;
var tieneTrabajo1 = false;
console.log(tieneTrabajo)
console.log(tieneTrabajo1)


//variable indefinida
var puestoDeTrabajo;
console.log(puestoDeTrabajo);


//variable nula utilizando otra variable ya definida
tieneTrabajo = null;
console.log(tieneTrabajo)



//Converisón de tipos
//Mutacion de variables, es cuando Javascript cambia de tipo una variable
//en este caso edad era de tipo num y luego es string, JS lo hace dinamicamente 
var primerNombre, edad, sexo, esSoltero;
primerNombre = 'Groove';
edad = 34;
sexo = 'M';
esSoltero = false;

console.log('El nombre es: '+ primerNombre + ', y su edad es: ' + edad + ', ¿Es soltero?' + esSoltero);

var edad = 'veinte';
console.log(edad);


/****************************************
 * Operadores -Matemáticos (+,  -,  *, /)
*****************************************/


var edadGrover, edadPablo, diferenciaEdad, sumaEdades, yearActual, yearGrove,yearPablo;
edadGrover = 34;
edadPablo = 28;
yearActual = 2022;

diferenciaEdad = edadGrover - edadPablo;
sumaEdades = edadGrover + edadPablo;

yearGrover = yearActual - edadGrover;
yearPablo = yearActual - edadPablo;

console.log(diferenciaEdad); //resultado 6
console.log(sumaEdades); //resultado 62
console.log("Año en el que nacio Grove: " + yearGrover); // nacio en 1988
console.log("Año en el que nacio Pablo: " + yearPablo); //nacio en 1994
console.log(yearActual * 5); //resultado 10110
console.log(yearActual/ 2); //resultado 1011


//Operadores Logicos

var mayorGrover = edadGrover == edadPablo;
console.log(mayorGrover);


//Operador Typeof
console.log(typeof edadGrover);
console.log(typeof edadPablo);
console.log(mayorGrover);
console.log(typeof 'Grover es mayor que pablo');

//Operadores Unarios Aritméticos

// ++ Incremento
// -- Decremento

var edadCarmen = 18;
var edadMaria = 14;

//no hay diferencia porque suma la edad y lo imprime
++edadCarmen;
edadCarmen++;
console.log(edadCarmen);
console.log(edadCarmen++) //resultado es 18 ya que muestra la edad y luego aplica el operador
console.log(--edadCarmen)//resultado 18 debido a que el operador no ha actuado
console.log(edadCarmen); //resultado 19 debido a que anteriormente lo ha sumado


//Operadores de asignación
// = 
var a = 5;
var b = 18;

//a va a tener el valor de 5 mas sumar el valor de b (18)

a += b;
a -= b;
a *= b;
a /= b;
var c;
c = a % b; //devuelde el residuo de una division.
a %= b;
