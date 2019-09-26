import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulesComponent } from './articules/articules.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {
    path:'articules',
    component: ArticulesComponent
  },
  {
    path:'categories',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
