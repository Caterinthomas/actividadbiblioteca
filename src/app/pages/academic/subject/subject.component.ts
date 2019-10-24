import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  public titulo="Formulario de Asignaturas";
  public nombre: String;
  public creditos: String;
  public observacion: String;
  constructor() { }

  ngOnInit() {
  }
  Saveform(){
    alert(this.nombre)
  }
}
