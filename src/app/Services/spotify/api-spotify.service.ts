import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const NewRelease:string = 'https://api.spotify.com/v1/browse/new-releases';
const Search:string = 'https://api.spotify.com/v1/search';

@Injectable()
export class ApiSpotifyService {
  private token:string;

  private header:HttpHeaders;

  constructor(
    private httpClient:HttpClient) {
   }

  SetToken(token:string){
    this.token = token;
    this.header = new HttpHeaders({
      'Authorization':'Bearer ' + this.token
    });
  }

  checkToken(): boolean{
    return this.token != undefined && this.token.length > 0;
  }

  Releases(): Observable<any>{
    return this.httpClient.get(NewRelease,{headers:this.header})
    .pipe(map( data =>{
      return data['albums'].items;
    }));
  }

  //opcion 0: busca artistas      opcion 1: busca canciones
  Search(option:number, termino:string): Observable<any>{
    switch(option){
      case 0:{
        return this.httpClient.get(Search + '?q=' + termino +'&type=artist' + '&market=AR',{headers:this.header})
          .pipe(map( data =>{
            return data['artists'].items;
          }));
      }
      case 1:{
        return this.httpClient.get(Search + '?q=' + termino +'&type=track' + '&market=AR',{headers:this.header})
        .pipe(map( data =>{
          return data['tracks'].items;
        }));
      }
      default:{
        return this.httpClient.get('');
      }
    }
  }
}
