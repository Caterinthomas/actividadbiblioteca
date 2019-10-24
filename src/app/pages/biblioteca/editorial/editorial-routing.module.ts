import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorialFormComponent } from './editorial-form/editorial-form.component';
import { EditorialTableComponent } from './editorial-table/editorial-table.component';
import { EditorialComponent } from './editorial.component';


const routes: Routes = [
  {
    path:'editorial',
    component: EditorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialRoutingModule { }
