import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.css']
})
export class EditorialFormComponent implements OnInit {
  public editorialFormulario : FormGroup;
  public titulo = "Editorial";
  constructor(protected fb:FormBuilder) { }
  ngOnInit() {
  }
  CreateForm(){
    this.editorialFormulario = this.fb.group({
      code: ['',Validators.required],
      descripcion: ['',Validators.required],
      country: ['',Validators.required]
    })
  }

}