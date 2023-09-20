import { Component } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { Empleado } from 'src/app/models/empleado.model';
import { PaisService } from 'src/app/services/pais.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Concurso } from 'src/app/models/concurso.model';
import { ConcursoService } from 'src/app/services/concurso.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent {

    lstPaises : Pais[] = [];
    lstConcursos: Concurso[] = [];
    
    objModalidad: Empleado = {
          nombres :  "",
          fechaNacimiento : new Date(),
          estado :{
            idConcurso:-1,
          },
          fechaRegistro : new Date(),
          pais:{
              idPais:-1,
          } 
    };
      

    constructor(private paisService: PaisService, private empleadoService:EmpleadoService, private concursoService: ConcursoService){

          this.paisService.listaPais().subscribe(
                data => this.lstPaises = data
          );

          this.concursoService.listaConcurso().subscribe(
            data => this.lstConcursos = data
      );
    }
    

    inserta(){
          this.empleadoService.registraEmpleado(this.objModalidad).subscribe(
                x =>  Swal.fire({icon: 'info',title: 'Resultado del Registro - Jacinto',text: x.errores}) 
          );
    }    
}