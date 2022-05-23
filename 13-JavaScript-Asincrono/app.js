//Funcionamiento de la función SetTimeOut

//Establecer un temporizador para ejecutar codigo 
//setTimeout(() => console.log('Esto aparece después de 3 segundos'), 3000);


//JavaScript Asíncrono

/** 
 * Sincrona => Todo se ejecuta de forma secuencial,es decir de arriba
 * para abajo. 
 * 
 * Asíncrono => Se puede ejecutar código en BackGround pero a la misma vez
 * puedes estar haciendo otras funcionalidades en tu programa.
 * */ 

//Se convierte en Asincrona porque el codigo se ejecuta de manera secuencial
//y tras los dos segundos se ejecuta de manera automatica el settimeout
/*const segundo = ()=> {
    setTimeout(() => {
        console.log('Llamada a segundo');

    },2000);
    //console.log('Llamada a segundo');
}

const primero = () => {
    console.log('Inicio de primero');
    segundo();
    console.log('Fin de primero');
}
primero();

//Simulación para la obtencion de datos de forma remota

const getUsuario = () =>{
    setTimeout(() => {
        const userIds = [101, 102, 103, 105];
        console.log(userIds);

        setTimeout ((id)=>{
            const usuario = {
                email: 'lopes@gmail.com',
                nombre: 'Juan'
            }
            console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);
            setTimeout((idPermiso)=>{
                const permiso = ['admin', 'creador'];
                console.log(permiso);
            }, 1500, userIds[2]);
        }, 1500, userIds[1]);
    }, 1500);
}
getUsuario();*/

//Las promesas nos permiten trabajar con las funciones asincronas de 
//forma mas eficiente y ordenada 
//objeto que representa el exito o el error de una operacion asincrona (promise)

//Ejemplo del uso de Promesas
//Ejemplo 1
let promesa = new Promise ((resolve, reject) => { 
    if(true){  //para dar error cambiar a False
        resolve('La operación fue un éxito');
    } else {
    reject('Hubo un problema');
    }
});

//controlamos el acierto y con el catch el error
promesa.then( response => {
    console.log('Response: ' + response)
}).catch( error =>{
    console.log('Error: ' + error);
});



//Ejemplo 2
var miPromesa = Promise.resolve('Comida');
miPromesa.then(resp => console.log(resp));


//Ejmplo 3
var miPromesa2 = new Promise(function(resolve, reject){
    setTimeout (()=> resolve(4), 2000);
})
miPromesa2.then(resp => {
    resp += 5;
    console.log(resp);
})

//De CallBacks a Promesas

const getUsuarioIds = new Promise((response, reject) => {
    setTimeout(() => {
        response([101, 102, 103, 105]);
    }, 1700)
});

const getUsuario = userID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const usuario = {
                email: 'lopez@gamil.com',
                nombre: 'Juan'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
        }, 1500, userID)
    });
}

const getPermisos = id => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const permiso = ['admin', 'creador'];
            resolve(permiso);
        }, 1500, id);
    });
}
getUsuarioIds
.then(IDs =>{
    console.log(IDs);
    return getUsuario(IDs[3]);
})
.then(usuario =>{
    console.log(usuario);
    return getPermisos(usuario.id);
})
.then(permiso => {
    console.log(permiso);
})
.catch(()=>{
    console.log('Error');
})

//Funcion con Async/Await

async function getUsuarioAW(){
    const IDs = await getUsuarioIds;
    console.log(IDs);
    const usuario = await getUsuario(IDs[3]);
    console.log(usuario);
    const permisos = await getPermisos(usuario.id)
    console.log(permisos);
    return usuario;
}

//const usuario = getUsuarioAW();
//getUsuarioAW().then(resultado => console.log(`${resultado} Es un usuario.`))
//console.log(usuario);

//Ejemplo de una llamada AJAX con HTML Request

const request = new XMLHttpRequest();
//Mostrar la información manejando eventos
request.addEventListener('readystatechange', (e) =>{
    if(e.target.readyState === 4){
        const datos = JSON.parse(e.target.responseText);
        console.log(datos);
    }
});
request.open('GET', 'http://jsonplaceholder.typicode.com/users');
request.send();


