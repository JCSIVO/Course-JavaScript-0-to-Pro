/*//Examinando el DOM
//Mostramos toda la informacion de dicho de dicho Objeto (document)
//Mostramos de forma general todo lo que comoprende el objeto document de esta pagina
console.dir(document);

//Nos muestra la ruta fisica de nuestro archivo (donde esta guardado)
console.log(document.URL);

//Mostrar el titulo del documento
console.log(document.title);
//cambiar dicho titulo
document.title = 'Prueba';
console.log(document.title);

//Mostrar todo el contenido del HEAD
console.log(document.head);

//mostrar el contenido del Body
//console,log(document.body);

//mostrar todos los obejtos que compreden este documento
//Esta en desuso se deja en comentario
//console.log(document.all);
//Mostrar el indice 5 del arreglo All
//console.log(document.all[5]);


//para acceder al formulario
console.log(document.forms[0]);

//Saber sobre el tema de imagenes
console.log(document.images);

//para ver los enlaces
console.log(document.links);


//Popiedad del document que hace devolver una referencia hacia un objeto
//que tenga un ID especifico (getelementByID)
//getElementByID
//Devolvera el contenido de un elemento de acuerdo a su ID
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
console.log(header);

//Manipular los header

//manipular el contenido del texto a traves del ID (el ID solo se puede de 1-1)
headerTitle.textContent = 'Hola';
headerTitle.innerText = 'Adios';

//agregar codigo HTML el H1 cambia a H3
headerTitle.innerHTML = '<h3>Prueba</h3>';


//Probamos la propiedad getElementsByClassName (podemos obtener vaios elementos)
var items = document.getElementsByClassName('list-group-item');
//Se puede modificar cualquier como el anterior
console.log(items[0]);
items[0].textContent = 'Prueba';

//Acceder a los elementos con etiqueta especifica
//getElementsByTagName
//Mostrar todos los elementos con etiqueta li
var items = document.getElementsByTagName('li');
items[2].textContent = 'Prueba02';


//Dos selectores mas basados en consultas

//querySelector
//permite seleccionar el primer elemento de acuerdo a un parametro
//que le vamos a indicar
//Seleccionar el Header
var header = document.querySelector('#main-header');
header.style.border = 'solid 4px #000';
header.style.borderBottom ='solid 4px #ccc';

//Modificar input
var input = document.querySelector('input');
input.value = 'Hola Mundo';

//Modificar el boton ya que solo ha modificado el primer input que ha encontrado
var submit = document.querySelector('input[type="submit"]');
submit.value = "Enviar";

//Seleccionar elementos de la lista y cambiarlos
var item = document.querySelector('.list-group-item');
item.style.color = 'red';

//querySelectorAll
//Es lo mismo que el de arriba pero selecciona todos los elementos 
//que le pasemos o que tenga esa propiedad especifica

var items = document.querySelectorAll('.list-group-item');
//Recordar marcar el indice [] porque lo toma como un arreglo
items[2].style.color = 'green';

var titulos = document.querySelectorAll('.title');
console.log(titulos);

//Cambiar solo a uno indicamos en el array cual modificar
titulos [0].textContent = 'pruebastitulo';

//Aplicar estilos a la lista en este caso a los impares
var impar = document.querySelectorAll('li:nth-child(odd)');
impar[0].style.backgroundColor = '#ccc';
//Lo de arriba solo lo hace al del indice 0 y tenemos 
//que recorrer el arreglo para que se ejecuten a todos.
var impar = document.querySelectorAll('li:nth-child(odd)');
for(var i =0; i<impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
}


//Modificar los pares 
var par = document.querySelectorAll('li:nth-child(even)');
for(var i =0; i<impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4f4';
}

//Hacemos referencia al padre para seleccionar o agrupar
//Son funciones que nos van a ayudar cuando quiero hacer las cosas
//un poco mas rapido seleccionarlo todo de manera mas rapida.

//ParentNode
//Seleccionar el que tenga items como ID 
var itemList = document.querySelector('#items');
//Mostrar al padre de los elementos cuyo ID es Items
console.log(itemList.parentNode);
var main = itemList.parentNode;
main.style.backgroundColor = '#f4f4f4';

//Buscar el padre del padre del padre
console.log(main.parentNode.parentNode); //Resultado body


//Similar al aprent Node
//ParentElement

var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
var main = itemList.parentElement;
main.style.backgroundColor = '#f4f4f4';
console.log(main.parentElement.parentElement); 


//4 metodos para Modificar el DOM 
var itemList = document.querySelector('#items');

//childNodes (nodos hijos)
//Devuelve un arrgelo de nodos de 9 elementos
console.log(itemList.childNodes);

//children (hijos)
//devuelve un arrreglo con cada uno de las listas
console.log(itemList.children);

//firstChild ()primer lemento hijo
//devuelve el primer items
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'prueba';

//lastChild (ultimo elemento hijo)
//devuelve el ultimo elemento de la lista
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Pruebass4';



//Elementos Hermanos
//Elementos que esten en la misma linea (tabulación)

var itemList = document.querySelector('#items');

//previousSibling (hermano previo)
console.log(itemList.previousSibling); //resultado text

//previousElementSibling (hermano anterior)
console.log(itemList.previousElementSibling); //resultado h2

//nextSibling

console.log(itemList.nextSibling); //resultado text

//nextElementSibling
console.log(itemList.nextElementSibling); //resultado nul porque ya no hay mas elementos hermanos


//crear elementos HTML dentro de nuestro sitio web

//createElement
//tagName
var nuevoDiv = document.createElement('div');
///atributos o clases de CSS
nuevoDiv.className = 'hola';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title','Hola Mundo');
console.log(nuevoDiv);

//createTextNode
var nuevoNodoText = document.createTextNode('Hola Mundo');
//agregar hijo
nuevoDiv.appendChild(nuevoNodoText);

console.log(nuevoDiv);

//para agregarlo dentro de la pagina hay que seleccionar un elemento de nuestra
//pagina e indicarle si ponerlo antes o despues de ese elemento

var contenedor = document.querySelector('header .container');
console.log(contenedor);

var h1 = document.querySelector('h1');
console.log(h1);


//agregar nuestro Div creado

contenedor.insertBefore(nuevoDiv,h1);*/


//Agregar elemento a la lista
 var form = document.getElementById('formAgregar');
 var lista = document.getElementById('items');
 var filtro = document.getElementById('filtro');

 //evento Submit del formulario
 form.addEventListener('submit',agregarItem);
 //evento click de la lista
 lista.addEventListener('click',eliminarItem);
 //Evento del teclado en el campo de filtro
 filtro.addEventListener('keyup',filtrarItems);
 
 
 //Funcion para agregar un item a la lista
 function agregarItem(e){
     e.preventDefault();
     var newItem = document.getElementById('item').value;
     
     var li = document.createElement('li');
     li.className = 'list-group-item';
     li.appendChild(document.createTextNode(newItem));

     var botonDel = document.createElement('button');
     botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
     botonDel.appendChild(document.createTextNode('X'));

     li.appendChild(botonDel);

     lista.appendChild(li);
 }

 //Funcion para eliminar un item de la lista
 function eliminarItem(e){
     if(e.target.classList.contains('eliminar')){
         if(confirm('¿Seguro que desea eliminar el elemento?')){
             var li = e.target.parentElement;
             lista.removeChild(li);
         }
     }
 }

 //Funcion para filtrar elementos de la lista
 function filtrarItems(e){
     var texto  = e.target.value.toLowerCase();
     //console.log(texto);
     var items = lista.getElementsByTagName('li');
     //console.log(items);
     Array.from(items).forEach(function(item){
         var itemNombre = item.firstChild.textContent;
         if(itemNombre.toLowerCase().indexOf(texto) != -1){
             item.style.display = 'block';
         }else{
             item.style.display = 'none';
         }
     });
 }