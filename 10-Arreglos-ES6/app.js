// Arreglos en ES6+

const gachamiga = ['harina', 'ajos', 'aceite'];

//Para objetos
const gachamiga1 = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'marisco',
        tipo: 'fresco'
    },
    {
        codigo : 3,
        titulo: 'cebolla'
    }
];

//agregar o quitar elementos del principio o final
//agregar elemento con push()
gachamiga.push('sal'); //agregamos elemento sal

//quitar el ultimo elemento con pop()
gachamiga.pop();//eliminamos el ultimo elemento
console.log(gachamiga.pop()); //mostrar elemento eliminado


//agregar un elemento al principio del arreglo unshift() y para borrar shitf()
gachamiga.shift();//quita elemento antes de hacer unshift
gachamiga.unshift('embutido');


//console.log(gachamiga);
console.log(gachamiga.length);
gachamiga[0] = 'agua';
console.log(gachamiga);
console.log(gachamiga[2]);
//console.log(gachamiga[5]);//undefined porque no hay nada 
console.log(gachamiga[gachamiga.length - 1]);

gachamiga.splice(1,0,'limon');
console.log(gachamiga);

//Bucles sobre matrices

//const sumar = function(){
//}

//gachamiga.forEach(sumar);//generar iteraciones

//crear bucles por medio de los arreglos
gachamiga.forEach(function(item, index){
    //console.log('test');
    //console.log(item);
    console.log(index)
});

gachamiga.splice(1,0,'limon');
console.log(gachamiga);


for(let i = 0; i< gachamiga.length; i++){
    console.log(`Indice: ${i}: ${gachamiga[i]}`);
}

//Buscar elementos dentro de un arreglo


console.log(gachamiga.indexOf('agua')); //Buscar indice de agua
//con la estructura de los obejtos lo anterior no funciona porque y 
//devuelve un -1 o false porque no lo encuentra

//para trabajar con objetos

const index = gachamiga1.findIndex(function(ing, index){
    console.log(ing);
    //return ing.titulo === 'marisco'; //indice 1
    return ing.titulo === 'cebolla'; //indice 2
    //return ing.titulo === 'Cebolla'; //indice -1 porque JS distinge entre mayu y minus.

});
console.log(gachamiga1);
console.log(index); //imprime indice 1 porque empieza desde 0

//Con datos sencillos debemos utilizar indexOf y cuando tenemos objetos con findIndex 
//hacemos la busqueda mas precisa


//Ampliando la busqueda

const buscarIngrediente = function(gachamiga1, titulo){
    const index = gachamiga1.findIndex(function(ing, index){
        return ing.titulo === titulo;

    });
    return index;
}
console.log(buscarIngrediente(gachamiga1, 'marisco'));//devuelve el indice 1
console.log(gachamiga1[buscarIngrediente(gachamiga1, 'pescado')]);
console.log(gachamiga1[buscarIngrediente(gachamiga1, 'marisco')]);


//Filtrando un array

//Filtrar es buscar una condicion que cumpla con parte del contenido
//filtrar todos los titulos que tengan la letra "e"

const paises = ['Andorra', 'España', 'EEUU', 'Rusia', 'Colombia'];
//filtrar todos los que tengan una letra o
console.log(paises.filter(pais => pais.includes('o')));
console.log(paises.filter(pais => pais.includes('Es')));


//filtrar ingredientes

const filtraringredientes = gachamiga1.filter(function(ing, index){
    //const ingredientes = ing.titulo.includes('e'); //devuelve dos
    const ingredientes = ing.titulo.includes('a'); //devuelve tres
    return ingredientes;
});

console.log(filtraringredientes);

//ordenador un arreglo con el metodo sort()

console.log(gachamiga1);

gachamiga1.sort(function(a,b){
    if(a.titulo > b.titulo){
        return 1;
    }
    if(a.titulo < b.titulo){
        return -1;
    }
    return 0;
});

console.log(gachamiga1);