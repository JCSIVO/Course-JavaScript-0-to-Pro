/*******************************************************************
 * Ejercicio 4
 * Implementar una función que nos permita evaluar el procentaje de
 * respuestas positivas y negativas de un examen 
 * la funcion debe recibir el nombre y la cantidad de respuestas 
 * positivas y negativas.
 * 
 * La funcion debe calcular el porcentaje que representa cada tipo 
 * de respuesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(> 90%), B(70% - 89%), C (45% - 69%), D(<45%).
********************************************************************/

const { Console } = require("console");

//Solución 1:
basePreguntas = 100;
function evaluarExamen(nombre, respuestaPositiva, respuestaNegativa){
    var totalRespuestasPositiva = (respuestaPositiva / basePreguntas) * basePreguntas;
    //console.log('respuesta + ' + totalRespuestasPositiva);
    var totalRespuestasNegativa = (respuestaNegativa / basePreguntas) * basePreguntas;
    //console.log('respuesta - ' + totalRespuestasNegativa);
    //console.log(`${nombre} tiene un procentaje de aciertos del : ${respuestaNegativa}`);
    //return totalRespuestasPositiva;

switch(true){
    case totalRespuestasPositiva > 90: 
        console.log(`El alumno : ${nombre} tiene un score A: + ${totalRespuestasPositiva} - ${totalRespuestasNegativa}`);
        break;
    case  totalRespuestasPositiva >= 70:
        console.log(`El alumno : ${nombre} tiene un score B: + ${totalRespuestasPositiva} - ${totalRespuestasNegativa}`);
        break;
    case totalRespuestasPositiva  >= 45:
        console.log(`El alumno : ${nombre} tiene un score C: + ${totalRespuestasPositiva} - ${totalRespuestasNegativa}`);
        break;
    case totalRespuestasPositiva < 45:
        console.log(`El alumno : ${nombre} tiene un score D: + ${totalRespuestasPositiva} - ${totalRespuestasNegativa}`);
        break;
    default: 
        console.log(`El alumno ${nombre} no promociona + ${totalRespuestasPositiva} - ${totalRespuestasNegativa}`);
        break;
    
    }
}
console.log(evaluarExamen('Gabriel',50 ,50 ));
console.log(evaluarExamen('Martin',10 , 90));
console.log(evaluarExamen('María',90 , 10));
console.log(evaluarExamen('Juan',30 , 70));
console.log(evaluarExamen('Paco',92 , 8));



//Solución 2

var calcularScore = function(nombre, pos, neg){
    var porPos = ( pos / 100)*100;
    var porNeg = ( neg / 100)*100;
    var score = '';

    if (porPos > 90){
        score = 'A';
    }else if(porPos >= 70){
        score = 'B';
    }else if(porPos >= 45){
        score = 'C';
    }else {
        score = 'D';
    }
    return `${nombre} tiene el score ${score}, Positiva: ${porPos} ,Negativa:${porNeg}`;
}
var resultado = calcularScore('Pablo', 65, 35);
console.log(resultado);
