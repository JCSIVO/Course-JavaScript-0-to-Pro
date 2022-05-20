//ES5 - Variables
var nombre5 = 'Pablo';
console.log(nombre5);
var edad5 = 35;
nombre5 = 'Carlos';
console.log(nombre5);

//ES6 - Variables (const = inmutable -- Let se puede modificar)
const nombre6 = 'Pedro'; //Variable de solo lectura no modificable
let edad6 = 28;
console.log(nombre6);
console.log(edad6);
//nombre6 = 'Ana'; 
console.log(nombre6); //Muestra error porque no se puede asignar otro valor a un const
edad6 = 30;
console.log(edad6);

//Bloques y alcance de las variables
//var test;
let test
test = 10;
function prueba(){
    let test //Esta variable solo tiene alcance dentro de este bloque
    test = 15;
}
prueba();
console.log(test);

//Lo que se declara dentro de un bloque se queda dentro del bloque
{
    const a = 3;
    let b = 4;
    var c = 5;
}
//console.log(a + b);
console.log(c);

//Funciones de cadenas ES6
let nombre = 'Juan' ;
let apellido = 'Lopez';
let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto)
console.log(`${nombre} `.repeat(5));//repite el nombre 5 veces
console.log(nombreCompleto.includes('an'));//busca si existe esa palabra
console.log(nombreCompleto.startsWith('Ju'));//comienzo de una cadena es igual
console.log(nombreCompleto.endsWith('ez'));//buscar palabras final de la frase

//Funciones Flecha

const year = [2000, 2005, 2008, 2012];

//ES5
var edad5 =year.map(function(el){
    return 2022 - el;
});
console.log(edad5);

//ES6 
let edad7 = year.map(el => 2022- el);
console.log(edad7);

edad7 = year.map((el, index)=> `Edad${index + 1}: ${2022 -el}`);
console.log(edad7);


edad7 = year.map (
    (el, index)=> {
        const yearActual =new Date().getFullYear();
        const edad = yearActual - el;
        return `Edad${index + 1}: ${edad}`; 
    }
);
console.log(edad7);

//ES5
function cuadrado(num){
    return num * num;
}
console.log(cuadrado(5));

//ES5
const cuadrado2 = function(num){
    return num * num;
}
console.log(cuadrado2(5));


//convertirlo a funcion flecha
const cuadrado3 = (num) => num * num;

console.log(cuadrado3(5));


const personas = [
    {
        nombre: 'Pablo',
        edad: 20
    },
    {
        nombre: 'Ana',
        edad: 25
    },
    {
        nombre:'Carlos',
        edad:30
    },
    {
        nombre: 'Pepe',
        edad: 35
    }
];

const menores30 = personas.filter(function(persona){
    return persona.edad < 35;
});
console.log(menores30);

///Convertirlo a funcion flecha
const menores31 = personas.filter((personas)=> personas.edad<35);
console.log(menores31);

//Destructuración - Destrucción - Destructuring

//ES5
var datos = ['Pablo',25];

var nombres = datos[0];
var edad = datos[1];
console.log(nombres);
console.log(edad);

//ES6
var [nombres,edad] = ['Pablo', 25];
console.log(nombres);
console.log(edad);

const personaa = {
    nombress: 'Carlos',
    edades: 30
}
const {nombress, edades} = personaa;
console.log(nombress);
console.log(edades);

//crear un alias
const {Nombre: n, Edad: e} = personas;
console.log(n);
console.log(e);


//Mapas -- Maps

//Similar a un arrglo pero con claves - valor

const datos5 = new Map();

//Asignar datos al mapa
datos5.set('nombre', 'Grover');
datos5.set('Edad', 35);
datos5.set(1, 'Juan@email.com');
datos5.set(2, 'lopedas@email.com');
datos5.set('movil', 98765432);

//Para leer los datos

console.log(datos5.get('nombre'));
console.log(datos5.get(2));
console.log(datos5.size); // para ver el tamaño

//datos5.delete(2);// para borrar datos

//eliminar todo el mapa
//datos5.clear();

//recorrer el mapa como un array
datos.forEach((value,key) => {
    console.log(`${key} : ${value}`);
});

//Operador de Propagacion (Spread operator)
var suma = function(a, b, c, d){
    return a + b + c + d;
}
var ope1 = suma(10, 20,30,40);
console.log(ope1);

var valores = [10,20,30,40];
const ope2 = suma(...valores);
console.log(ope2);


//junatar matrices agrupar valores entre dos matrices

const rrhh = ['Pedro', 'Ana', 'Pablo'];
const constabilidad = ['Felipe','Carlos','Maria'];

const empresa = [... rrhh, ...constabilidad];

console.log(empresa);
