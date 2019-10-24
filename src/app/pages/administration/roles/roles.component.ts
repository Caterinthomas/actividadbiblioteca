import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  public titulo="Formulario de Roles";
  public rol: String;

  constructor() { }

  ngOnInit() {
  }
Saveform(){
    alert(this.rol)
  }
}
