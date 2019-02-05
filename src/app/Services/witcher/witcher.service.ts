import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/Class/libro';

//const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class WitcherService {
  private Url: string = 'http://demo0726911.mockable.io/witcher';
  
  constructor(private http: HttpClient) { }

  public getall(): Observable<any>{
    //retorno la promesa del service
    return this.http.get(this.Url);
  }
}
