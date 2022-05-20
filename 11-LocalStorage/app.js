//En el localStorage aunque se cierre el navegador se siguen viendo los datos
//esos datos se quedan guardados de manera permanente
//Registrar datos 
localStorage.setItem('nombreUsuario', 'Lopez');
localStorage.setItem('ubicación', 'Spain');

//para leer la informacion del LocalStorage
console.log(localStorage.getItem('nombreUsuario'));
console.log(localStorage.getItem('ubicación'));

//Elimnar o remover datos 

localStorage.removeItem('nombreUsuario');

//Limpiar el LocalStorage (cuando el usuario cierra el navegador)
localStorage.clear();


//Notacion JSON

//JSON es una forma de poder transmitir información entre aplicaciones 
// en la actualidad 

const usuario = {
    nombre : 'Juan',
    edad: '26'
}

//convertir datos en formato JSON con stringify 
//(convierte datos a string en formato JSON)
//convertimos a String  //es una cadena
const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);

//convertirlo de String a Objeto (resultado objeto)
const usuario2 = JSON.parse(usuarioJSON);
console.log(usuario2);