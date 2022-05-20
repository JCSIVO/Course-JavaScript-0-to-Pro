//Propiedades de un objeto

let miLibro = {
    titulo: 'El libro de JavaScript',
    autor: 'Juan lopes',
    paginas: 400,
    publicado: false
}

console.log(miLibro);

//mostrar una de las propiedades

console.log(miLibro.titulo);
console.log(miLibro.autor);
console.log(`${miLibro.titulo} creado por ${miLibro.autor}`);

//modificar los datos
miLibro.paginas = 500;
console.log(miLibro.paginas);


//Metodos

let persona = {
    nombre: 'Lucas',
    edad: 28,
    sueldo: 1200,
    metodoPrueba: function(){
        //console.log('Escribiendo desde el metodo prueba');
        return 'Resultado desde prueba';
    },
    cambiarEdad: function(edad){
        this.edad = this.edad + edad;
    }
}

let result = persona.metodoPrueba();
console.log(result);
persona.cambiarEdad(3);
console.log(persona.edad);
    


//Objeto String 

let nombre = 'Juan Sanchez';
let nombre2 = '   Pedro  Garcia   ';
let clave = '12309clave.e'
console.log(nombre.length);


//convertir String a mayuscula o minusculas
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());


//limpiar espacios en blancos de la cadena
console.log(nombre2.trim());

//Para buscar o encotrar texto dentro de la cadena
console.log(clave.includes('clave')); //resultado true
console.log(clave.includes('claves')); //resultado false

//para empezar por una posicion especifica a buscar
console.log(clave.includes('clave' , 7)); //false
console.log(clave.includes('clave', 5)); //resultado true 
