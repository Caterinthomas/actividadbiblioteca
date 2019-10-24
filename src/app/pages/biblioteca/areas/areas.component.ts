import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  public titulo="formulario de Areas";
  public areas: String;
  public pasillo: String;
  public estanteria: String;
  constructor() { }

  ngOnInit() {
  }
  Saveform(){
    alert(this.areas)
  }
}
