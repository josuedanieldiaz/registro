export class Persona {
    _id?: string;
    nombre: string;
    fecha: string;
    sexo: string;  
    
    constructor(nombre: string, fecha: string, sexo: string){

        this.nombre = nombre;
        this.fecha = fecha;
        this.sexo = sexo;

    }
}