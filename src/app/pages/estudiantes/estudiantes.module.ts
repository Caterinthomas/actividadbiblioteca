import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';


@NgModule({
  declarations: [
    EstudiantesComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EstudiantesModule { }
