import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AreasService} from 'src/app/services/areas.service';

@Component({
  selector: 'app-areas-form',
  templateUrl: './areas-form.component.html',
  styleUrls: ['./areas-form.component.css']
})
export class AreasFormComponent implements OnInit {
  public areasFormulario: FormGroup;
  public titulo="formulario de Areas";
  areas :any;
  
   constructor(protected fb: FormBuilder, protected service:AreasService ) { 
     this.createForm()
   }
  ngOnInit() {
    this.service.getareas().subscribe(data =>{
      this.areas=data;
    });
  
}

saveareas(){
  this.service.postareas(this.areasFormulario.value).subscribe(data=>alert("listo"))
}
  createForm(){
    this.areasFormulario = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required]
      }) 
    }
  }
