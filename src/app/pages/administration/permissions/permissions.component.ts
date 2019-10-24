import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  public titulo="Formulario de Permisos";
  public permiso: String;

  constructor() { }

  ngOnInit() {
  }
  Saveform(){
    alert(this.permiso)
  }
}
