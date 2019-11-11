import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(protected http: HttpClient) { }
  geteditorial(){
   return this.http.get('http://trainning.omarenco.com/api/editorial') 
  }
  posteditorial(data){
    return this.http.post('http://trainning.omarenco.com/api/editorial', data)
  }
}
