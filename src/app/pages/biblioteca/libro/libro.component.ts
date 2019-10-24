import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  public titulo="formulario de Libros";
  public tlibro: String;
  public descripcion: String;
  public npaginas: String;
  public anno: String;


  constructor() { }

  ngOnInit() {
  }

  Saveform(){
    alert(this.tlibro)
  }

}
