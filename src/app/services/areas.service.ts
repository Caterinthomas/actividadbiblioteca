import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(protected http: HttpClient) { }
  getareas(){
    return this.http.get('http://trainning.omarenco.com/api/area')
  }
  postareas(data){
    return this.http.post('http://trainning.omarenco.com/api/area', data)
  }
}
