import { Pais } from "./pais.model";
import { Concurso } from "./concurso.model";
export class Empleado {

    idEmpleado?:number;
	nombres?:string;
    fechaNacimiento?:Date;
    estado?:Concurso;
    fechaRegistro?:Date;
    pais?:Pais;
}