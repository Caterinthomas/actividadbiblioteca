import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ArticulesComponent } from './articules/articules.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    ArticulesComponent, 
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
