import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.css']
})
export class AutorFormComponent implements OnInit {
  public autorFormulario: FormGroup;
  public titulo="Autores form";
  public authors:any;
  constructor(protected fb:FormBuilder, protected service:AuthorService) {
    this.createForm()
   }
  ngOnInit() {
    this.service.getAuthors().subscribe(data =>{

this.authors=data;
    });
  }
  saveAuthor(){
    this.service.postAuthor(this.autorFormulario.value).subscribe(data=>alert("listo"))
  
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
