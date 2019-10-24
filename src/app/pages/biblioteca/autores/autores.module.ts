import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresFormComponent } from './autores-form/autores-form.component';
import { AutoresTableComponent } from './autores-table/autores-table.component';
import { AutoresComponent } from './autores.component';


@NgModule({
  declarations: [
    AutoresFormComponent, 
    AutoresTableComponent, 
    AutoresComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AutoresModule { }
