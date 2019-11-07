import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.css']
})
export class AutorFormComponent implements OnInit {
  public autorFormulario: FormGroup;
  public titulo="Autores";
  constructor(protected fb:FormBuilder) { }
  ngOnInit() {
  }
  createForm(){
    this.autorFormulario = this.fb.group({
      code:['',Validators.required],
      name:['',Validators.required],
      lastname:['',Validators.required],
      bd_year :['',Validators.required],
      death_year :['',Validators.required],
      bd_place :['',Validators.required]
    })
  }

}
