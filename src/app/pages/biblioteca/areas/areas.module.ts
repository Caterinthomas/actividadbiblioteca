import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasFormComponent } from './areas-form/areas-form.component';
import { AreasTableComponent } from './areas-table/areas-table.component';
import { AreasComponent } from './areas.component';


@NgModule({
  declarations: [
    AreasFormComponent, 
    AreasTableComponent,
    AreasComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AreasModule { }