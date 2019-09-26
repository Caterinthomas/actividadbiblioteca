import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { GradesComponent } from './grades/grades.component';
import { SubjectComponent } from './subject/subject.component';


@NgModule({
  declarations: [GradesComponent, SubjectComponent],
  imports: [
    CommonModule,
    AcademicRoutingModule
  ]
})
export class AcademicModule { }
