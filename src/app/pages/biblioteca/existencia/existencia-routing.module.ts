import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExistenciaFormComponent } from './existencia-form/existencia-form.component';
import { ExistenciaTableComponent } from './existencia-table/existencia-table.component';
import { ExistenciaComponent } from './existencia.component';


const routes: Routes = [
  {
    path:'existencia',
    component: ExistenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExistenciaRoutingModule { }
