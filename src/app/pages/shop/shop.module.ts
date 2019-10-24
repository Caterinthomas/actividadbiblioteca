import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShopModule { }
