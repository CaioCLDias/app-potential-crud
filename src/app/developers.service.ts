import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Developer } from './developers/developer';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  apiURL: string = environment.apiURL + '/developers';


  constructor(private http: HttpClient) {

  }

  save(dev: Developer): Observable<Developer> {
    console.log("salvar: " + dev.dataNascimento);
    return this.http.post(`${this.apiURL}`, dev);

  }

  update(dev: Developer): Observable<Developer> {
    return this.http.put(`${this.apiURL}/${dev.id}`, dev);

  }

  getDevs(nome: string): Observable<Developer[]> {
    const params = new HttpParams().set('nome', nome);
    
    const url = this.apiURL + "?" + params.toString();
    console.log(params);
    console.log(url);
    return this.http.get<Developer[]>(url);
  }

  getDevById(id: number): Observable<Developer> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deleteDev(dev: Developer): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${dev.id}`)
  }

}
