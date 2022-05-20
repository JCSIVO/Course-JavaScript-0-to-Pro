//console.log('Okis')

/***********************
* Arreglos en JavaScript
 ***********************/

//Dos manera de definir Arreglo en Javascript
var nombre = ['Pablo','Carlos','Ana','Teresa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

//Mostrar en nombre de Ana corchetes y el indice
//aceder a los arreglos
console.log(nombre[2]);
console.log(nombre[1]);
console.log(vegetales[1]);

//Mutacion de arreglos
nombre [1] = 'Jose';
console.log(nombre[1]);

vegetales [2] = 'Acelga';
console.log(vegetales[2]);

//Para saber cuantos elemetos tiene un Array USAR PROPIEDAD length
console.log(nombre.length);
console.log(vegetales.length);

/******************************
* Operaciones con Arreglos
******************************/

var frutas = ['pera', 'manzana', 'uva', 'sandia'];
console.log(frutas);

//Recorrer un Arreglo (Sentencia For) y Sentencia ForEach (la mas utilizada)

for (var i = 0; i<= frutas.length -1; i ++){
    console.log(frutas[i]);
}

//Segunda manera de reccorrer el Array
frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
})



//Añadir mas elementos a un Array se añaden al final
frutas.push('naranja');
console.log(frutas);

//añadir elementos al principio del Array
frutas.unshift('fresa');
console.log(frutas);

//Dos metodos para quitar elementos del array
//Quita el ultimo elemento de la matriz
frutas.pop(); 
console.log();
//quitar elemento del princpio
frutas.shift();
console.log();


//Averiguar la posicion o el indice de un elemento con indexOf
var pos = frutas.indexOf('uva');
console.log(pos);


//Eliminar cualquier elemto del array
//con splice tienes que marcar los indices desde donde hasta donde eliminar
//cuantos elementios eliminar a partir del (1,)
//Ejemplo eliminar manzana y uva serie: frutas.splice(1,2)
frutas.splice(1,1)
console.log(frutas);

//Otros metodos son el reverse (permite hacer un arreglo reverso del que ya tengo)
//Slice (Para crear una copia del arreglo)


//Arreglos con elementos de diferentes tipos
//no hay ningun tipo de resitrccion para eliminar o modificar el arreglo
var persona = ['Pablo', 'Vazquez', 34,'987564213', 1.75];
console.log(persona);


/******************** 
* Objetos Literales
*********************/

//Las llaves son para cuando se crea un objeto de forma literal
//Dentro de las llaves se colocan las propiedades
//Son las propiedades o estados de un Objeto (identifican a un persona)
var persona = {
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ['Futbol','Peliculas','Ingles'],
    Trabajo: 'Instructor',
    esCasado: true
};

console.log(persona);

//Para acceder a los datos de dentro del objeto nos valemos del .
console.log(persona.apellido);

//otra forma de acceder a los datos es con los corchetes
console.log(persona['Trabajo']);


//mutacion de los datos, es decir, cambiarlos

persona.esCasado = false;
console.log(persona.esCasado);

//Como crear un objeto con "Object"

/******************************* 
* Objetos con la sintaxis Object
 *******************************/

//Crear un objeto pero llamando a la sintaxis OBJECT
//creamos el objeto
var persona2 = new Object()
persona2.nombre = 'Ana',
persona2.apellido = 'Pinedo',
persona2['trabajo'] = 'WebDeveloper',

console.log(persona2);


/******************* 
* Objetos y Metodos
********************/

//Crear metodo que calcule edad de la persona
//Funciona pero la logica no es la correcta 
var persona = {

    //propiedades
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ['Futbol','Peliculas','Ingles'],
    Trabajo: 'Instructor',
    esCasado: true,
    //creamos la variable y para acceder al metodo a traves de this.
    yearNacimiento: 1985,

    //Metodos
    calcularEdad: function(/*earNacimiento en el retur se aplica el this*/){
        //return 2022 - this.yearNacimiento;
        this.edad = 2022 - this.yearNacimiento;

    }
};

persona.calcularEdad();
console.log(persona);
//ya no se necesita mandar ningun dato
//var edad = persona.calcularEdad(1985);
//console.log(edad);