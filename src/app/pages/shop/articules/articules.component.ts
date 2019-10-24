import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articules',
  templateUrl: './articules.component.html',
  styleUrls: ['./articules.component.css']
})
export class ArticulesComponent implements OnInit {

  public titulo="Formulario de Articulos";
  public nombre: String;
  public descripcion: String;
  public unidad: String;
  public cantidad: String;


  constructor() { }

  ngOnInit() {
  }

  Saveform(){
    alert(this.nombre)
  }

}
