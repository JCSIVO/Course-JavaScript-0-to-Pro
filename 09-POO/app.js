//Manejo de clases en Javascript 

//Se usa palabra reservada Class y seguidamente creamos el constructor

class Persona{
    constructor(nombre, edad, profesiones = []){
        //atributos
        //this.nombre = 'Lucas';
        //this.edad = 30;
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;
        }
        getBiografia(){
            let biografia = `${this.nombre}, tiene ${this.edad}. Profesiones:`;

            this.profesiones.forEach((profesion)=>{
                biografia += `${profesion}`;
            })
            return biografia;
        }
}

class Empleado extends Persona{
    constructor(nombre, edad, profesiones = [], sueldo, puesto){
        super(nombre, edad, profesiones)
        this.sueldo = sueldo;
        this.puesto = puesto;

    }

    //refeninicion de metodos getBiografia
    getBiografia(){
        return super.getBiografia() + ` Puesto: ${this.puesto}, Salario: ${this.salario}`;
    }
    
}

//const persona1 = new Persona //debemos de agregar la palabra new
const persona1 = new Empleado('Pablo', 30, ['arquitecto', 'doctor'], 1500, 'Gerente');
const persona2 = new Empleado('Maria', 24, ['ingeniero', 'instructor'], 1000, 'RRHH');
const persona3 = new Empleado('Ana', 25, ['Administracion'],1000, 'Administrador'); 
const persona4 = new Persona('Carlos', 43, ['Administrador']);
//persona1(); (llamarla como metodo)
console.log(persona1.getBiografia());// para ver el tipo se usa: typeof
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());
console.log(persona4.getBiografia());



