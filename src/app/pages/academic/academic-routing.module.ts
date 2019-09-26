import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradesComponent } from './grades/grades.component';
import { SubjectComponent } from './subject/subject.component';


const routes: Routes = [
  {
    path:'grades',
    component: GradesComponent
  },
  {
    path:'subject',
    component: SubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRoutingModule { }
