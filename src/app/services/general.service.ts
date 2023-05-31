import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/config/environments';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private url = environment.produccion? environment.urlPodu: environment.urlDev
  constructor(private http: HttpClient) { }

  get(ruta:string): Observable<any>{
    return this.http.get(this.url+ruta)
  }

}
