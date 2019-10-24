import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  public titulo="Formulario de Grados";
  public grado: String;

  constructor() { }

  ngOnInit() {
  }

  Saveform(){
    alert(this.grado)
  }

}
