import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.css']
})
export class ExistenciaComponent implements OnInit {
public autoForm:FormGroup;
  constructor(protected fb:FormBuilder) { }

  ngOnInit() {
  }
  createForm(){
    this.autoForm=this.fb.group({
  codigo:'',
  nombre:'',
  fechaNac:''
    });
  }

}
