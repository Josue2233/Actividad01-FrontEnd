import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';

const routes: Routes = [
  { path:"addEmpleado", component: AddEmpleadoComponent  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
