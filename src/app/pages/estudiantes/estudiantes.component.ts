import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public titulo="formulario de Estudiantes";
  public nombre: String;
  public apellido: String;
  public nit: String;
  public direccion: String;
  public telefono: String;

  constructor() { }

  ngOnInit() {
  }

  Saveform(){
    alert(this.nombre)
  }

}
