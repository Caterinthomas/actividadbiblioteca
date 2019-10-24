import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AcademicRoutingModule } from './academic-routing.module';
import { GradesComponent } from './grades/grades.component';
import { SubjectComponent } from './subject/subject.component';


@NgModule({
  declarations: [GradesComponent, SubjectComponent],
  imports: [
    CommonModule,
    AcademicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AcademicModule { }
