import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditorialService } from 'src/app/services/editorial.service';
@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.css']
})
export class EditorialFormComponent implements OnInit {
  public editorialFormulario : FormGroup;
  public titulo = "Editorial";
  public editorial:any;
  constructor(protected fb:FormBuilder, protected service: EditorialService) { 
    this.CreateForm()
  }
  ngOnInit() {
    this.service.geteditorial().subscribe(data=>{
      this.editorial=data;
    });
  }
  saveeditorial(){
    this.service.posteditorial(this.editorialFormulario.value).subscribe(data=>alert("listo"))
  }
  CreateForm(){
    this.editorialFormulario = this.fb.group({
      code: ['',Validators.required],
      description: ['',Validators.required],
      country: ['',Validators.required]
    })
  }

}