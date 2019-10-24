import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorialRoutingModule } from './editorial-routing.module';
import { EditorialFormComponent } from './editorial-form/editorial-form.component';
import { EditorialTableComponent } from './editorial-table/editorial-table.component';
import { EditorialComponent } from './editorial.component';


@NgModule({
  declarations: [
    EditorialFormComponent, 
    EditorialTableComponent, 
    EditorialComponent
  ],
  imports: [
    CommonModule,
    EditorialRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditorialModule { }
