import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public titulo="formulario de Categorias";
  public nombre: String;
  public descripcion: String;
  public estado: String;

  constructor() { }

  ngOnInit() {
  }

Saveform(){
    alert(this.nombre)
  }
  
}
