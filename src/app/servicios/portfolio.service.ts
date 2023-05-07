import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../components/experience/experience';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // url:string= "aca va la url de nuestra api";
  // constructor(private http:HttpClient) { }

  // obtenerDatos():Observable<any>
  // {
  //   return this.http.get('../assets/data/data.json');
  // }
  private url = "http://localhost:8080/api/v1/experiences";

  constructor(private httpClient:HttpClient) { }

  obtenerDatos():Observable<Experience[]>
  {
     return this.httpClient.get<Experience[]>(`${this.url}`);
  }

}
