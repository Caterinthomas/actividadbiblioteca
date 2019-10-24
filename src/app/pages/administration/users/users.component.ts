import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public titulo="Formulario de Usuarios";
  public nombre: String;
  public apellido: String;
  public user: String;
  public password: String;
  public cpassword: String;

  constructor() { }

  ngOnInit() {
  }
  Saveform(){
    alert(this.user)
  }

}
