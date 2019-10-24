import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';
import { AreasModule } from './areas/areas.module';
import { AutoresModule } from './autores/autores.module';
import { EditorialModule } from './editorial/editorial.module';
import { ExistenciaModule } from './existencia/existencia.module';
import { LibroModule } from './libro/libro.module';
import { TipoModule } from './tipo/tipo.module';


@NgModule({
  declarations: [
    BibliotecaComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    AreasModule,
    AutoresModule,
    EditorialModule,
    ExistenciaModule,
    LibroModule,
    TipoModule
  ]
})
export class BibliotecaModule { }