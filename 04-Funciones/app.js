//Creacion de la primera función
//Una funcion es una operacion que nos va a devolver un resultado
function bienvenido(){console.log('Hola bienvenido a la seccion de funciones');
return 'Hola bienvenido a la seccion de funciones dentro de variable';
}

//llamamiento de la función
bienvenido();

//guardar dicho mensaje en una variable
var mensaje = bienvenido();
console.log(mensaje);

//Partes de una función
// Entradas (argumentos), Código, Salida (return)
 function cuadradoNumero(num){
     //console.log(num);//resultado 3
     var resultado = num * num;
     return resultado;

 }

 var num = 3;
 var valor = cuadradoNumero(num);
 console.log(valor);
 console.log(cuadradoNumero(num));
 console.log(cuadradoNumero(5));


 function calcularEdad(yearNacimiento){
     return 2022 - yearNacimiento;

 }

 var edad1 = calcularEdad(1990);
 var edad2 = calcularEdad(1980);
 var edad3 = calcularEdad(1970);
 console.log(edad1);
 console.log(edad2);
 console.log(edad3);


 /****************************
  * Funciones como expresiones
  ****************************/

 //Es como si esa variable tomase los datos de la función e invocar a la función
 var prueba = function(nombre){
     //console.log('Prueba');
     //return 'Mensaje de Pruebass';
     return 'Hola ' + nombre;
 }

 prueba();
 console.log(prueba());
console.log(prueba('Lucas'));


//Agumentos undefined => indefinidos
//se Crea una variable per sin definirla sin ponerle valor;

var nombre;
var prueba = function(n){
    return 'Hola ' + n;
}
//para solventar se da valor a la variable
nombre = 'Luis';
console.log(prueba(nombre)); //undefined
console.log(prueba());//undefined


//Arguntos nulos

var a 
a = null;
var valorNulo = function(a){
    return a;
}

console.log(valorNulo(a));


//Argumentos por Default o Defecto
//valor por defecto en el momento de la definicion porque o sinos vale NAN
//dentro de la función el argumento  puede vale a=3, b=5 y c=8 para que sean valores por defecto
var sumar = function (a, b, c = 3){
    return a + b + c;
}
console.log(sumar(10, 4));
console.log(sumar(10, 4, 7)); //no toma el valor de 3
console.log(sumar(10, null, 7));

//Plantillas de cadenas (Templates String)
//se utiliza el simbolo de $ y la expresion entre llaves y dentro de ``(tilde invertida)

//Uso de String normal
var nombre = 'Diego';
console.log('el nombre es: ' + nombre);

//Uso de las tildes invertidas
//iniciar la funcion
var nombre1 = 'Juanito';
console.log(`El nombre es: ${nombre1}`);

var a = 5;
var b = 10;
//console.log('La suma es: ' + (a + b));
console.log(`La suma es : ${a + b}`);