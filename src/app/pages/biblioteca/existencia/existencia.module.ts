import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ExistenciaRoutingModule } from './existencia-routing.module';
import { ExistenciaFormComponent } from './existencia-form/existencia-form.component';
import { ExistenciaTableComponent } from './existencia-table/existencia-table.component';
import { ExistenciaComponent } from './existencia.component';


@NgModule({
  declarations: [
    ExistenciaFormComponent, 
    ExistenciaTableComponent, 
    ExistenciaComponent
  ],
  imports: [
    CommonModule,
    ExistenciaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExistenciaModule { }
