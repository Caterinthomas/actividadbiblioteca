import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  public titulo="formulario de Editorial";
  public tipo: String;

  constructor() { }

  ngOnInit() {
  }

  Saveform(){
    alert(this.tipo)
  }

}
