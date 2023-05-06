import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // url:string= "aca va la url de nuestra api";
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>
  {
    return this.http.get('../assets/data/data.json');//dentro del parentesis va 'this.url+"persona"
  }
}
