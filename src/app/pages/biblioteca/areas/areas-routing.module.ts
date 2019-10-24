import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasFormComponent } from './areas-form/areas-form.component';
import { AreasTableComponent } from './areas-table/areas-table.component';
import { AreasComponent } from './areas.component';


const routes: Routes = [
  {
    path:'areas',
    component: AreasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
