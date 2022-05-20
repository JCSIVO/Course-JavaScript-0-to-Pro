/********************* 
* Sentencia if / else
**********************/

var nombre = 'Pablo';
var estadoCivil = 'soltero';
//var estaCasado = false;
var estaCasado = true;

//if evalua el primer bloque () y si es verdadera lo ejecuta y si else
//if(estadoCivil ==='casado')
if (estaCasado){
    //Si es verdadera la condición
    console.log(nombre + ' esta casado');
}else{
    //Si es falsa la condición
    console.log(nombre + ' esta soltero');
}



/*************************
 * Sentencias Condicionales
 *************************/

 var nombre = 'Pedro';
 var edad = 15;
 var edad = 20;
 var edad = 63;
 var edad = 8;

 // edad < 12 es un niño
 // edad > 11, es < 18, es un adolescente
 // edad > 17, es <60, es un adulto
 // edad > 60, es un anciano

 if(edad < 12){
     console.log(nombre + ' es un niño');
 }else if (edad > 11 && edad < 18){
     console.log(nombre + ' es un adolescente');
 } else if (edad > 17 && edad < 60){
     console.log(nombre + ' es unn adulto');
 } else {
     console.log(nombre + ' es un anciano');
 }


 /********************
 * Operador ternario
 *********************/

 var nombre = 'Lucas';
 var edad = 19;
 var edad = 16;

 //if corto, preciso, resumido, siempre tiene valor true o false pero resumido
 //si la primera opcion es verdadera se ejecuta lo de despuess del ? y si es falsa los :
 //Es como un if/else resumido en un sola linea
 edad >= 18 ? console.log(nombre + ' Es mayor de edad') : console.log(nombre + ' Es un adolescente');



 /********************
  * Sentencia Switch
  ******************/

 var mes = 3;
 var mes = 2;
 var mes = 8;

 switch(mes){
     case 1:
         console.log('Enero');
         break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    default:
        console.log('Mes no considerado');
 }


 /*******************************
 * Setencias repetitivas - Bucles
 * Sentencia For
 * Sentencia While
 * Sentencia Do..While
 ********************************/

 //Sentencia For

 for(var i = 10; i >= 1; i--){
     console.log(i);
 }

 //Sentencia While 
 //1-se declara variable y mientras sea verdadera ejecuta el while
 //las sentencias While siempre se ejecutan cuando la condicion es verdadera
 var i = 1;
 while(i <= 10){
     console.log(i);
     i++;
 }

 var i = 10;
 while(i >= 1){
     console.log(i);
     i--;
 }
//En esrta ocasion no se ejecuta nada porque la condicion no se cumple
 var i = 0;
 while(i >= 1){
     console.log(i);
     i--;
 }


/**********************
* Sentencias Do..While
**********************/

//a diferencia del for o del While el Do..While se va aejecutar
// por lo menos una vez aunque la condicion no se cumple pero una vez 
//por lo menos accede al bucle ya que la condicion la evalua al final.
var i = 1;
do{
    console.log(i)
    i++;
}while(i <= 10);

//En este ejemplo se va a ejecutar solo una vez mostrando solo el numero 12
var i = 12;
do{
    console.log(i)
    i++;
}while(i <= 10);



/******************************
* Valores verdaderos y falsos 
*******************************/

//Valores falsos: undefined, null, 0, ''
//Valores verdaderos: NOT valores falsos (los contrarios a falsos)

var edad1; //Variable no definida
edad1 = 10; //variable esta definida
edad1 = 0; //variable no definida
edad1 = '';// variable no definida

if (edad1){
    console.log('Variable esta definida');
}else {
    console.log('Variable no definida');
}


//Operadores de Igualdad // operador desigual (!=)
//== compara que los datos sean iguales en valor (10 ,10 )

edad2 = '10'; // con coersion
if (edad2 == 10){
    console.log('Variable con coersión');
}else{
    console.log('Variable sin coersión');
}
// === compara que los datos sean iguales en valor y tipo (10 , '10')
edad3 = '10'; //muestra sin coersion para que sea verdadera quitar string ('')
if (edad3 === 10){
    console.log('Variable con coersión');
}else{
    console.log('Variable sin coersión');
}