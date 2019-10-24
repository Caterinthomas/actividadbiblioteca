import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { LibroTableComponent } from './libro-table/libro-table.component';
import { LibroComponent } from './libro.component';


const routes: Routes = [
  {
    path:'libro',
    component: LibroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
