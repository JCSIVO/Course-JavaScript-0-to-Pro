/*************************
 * Ejercicio se sentencias  
 *************************/

/**************************
 * Tienes dos alumnos Pablo y María
 * Pablo tiene las siguientes notas en el curso de JavaScript: 14, 8, 16.
 * María tiene las siguientes notas en el curso de JavaScript: 12, 18, 10.
 * 
 * Calcular el promedio de cada alumno, además indicar quién tiene el promedio
 * superior, e indicar si el alumno esta aprobado, para ello su promedio  
 * debe ser superior a 13.
***************************/

var alumno1 = 'Pablo';
var alumno2 = 'Maria';

var cursoPablo = [14, 8, 16];
var cursoMaria = [12, 18, 10];
var aprobado = 13;

var promedioPablo = (cursoPablo[0] + cursoPablo[1] + cursoPablo[2])/3;
console.log('Promeidio de Pablo: ' + promedioPablo);
var promedioMaria = (cursoMaria[0] + cursoMaria[1] + cursoMaria[2])/3;
console.log('Promedio de Maria: ' + promedioMaria);

//Promedio superior // habria que incluir una opcion por si tuviesen el mismo promedio
promedioPablo > promedioMaria ? console.log(alumno1 + ' tiene un promedio superior') : console.log(alumno2 + ' Tiene un promedio superior');


//Mostrar si estan aprobados
if (promedioPablo > aprobado && promedioMaria > aprobado){
    console.log(alumno1 + ' y ' + alumno2 + ' estan aprobados');
} else if(promedioPablo || promedioMaria > aprobado){
    if (promedioPablo > aprobado ){
        console.log(alumno1 + ' esta aprobado')
    }else {
        console.log(alumno2 + ' esta aprobado')
    }
} else{
    console.log(alumno1 +' y ' + alumno2+ ' estan suspensos');
}


//otra forma de resolver el ejercicio

var promedioPablo = (14, 8, 16)/3;
var promedioMaria = (12, 18, 10)/3;

//promedio superior
if(promedioPablo > promedioMaria){
    console.log('Pablo tiene el promedio susperior');
}else if(promedioMaria > promedioPablo){
    console.log('María tiene el promeidio suprior');
}else{
    console.log('Maria y Pablo tienen el mismo promedio');
}


//mostrar si estan aprobados

for(var i = 1; 1 <= 2; i++){
    if( i=== 1){
        console.log('Promedio de Pablo: ' + promedioPablo);
        if(promedioPablo > 13){
            console.log('Pablo esta aprobado');
        }else{
            console.log('Pablo esta suspenso');
        }
    }else{
        console.log('Promedio de María : ' + promedioMaria);
        if(promedioMaria > 13){
            console.log('Maria esta aprobada')
        }else{
            console.log('María esta suspensa');
        }
    }
}