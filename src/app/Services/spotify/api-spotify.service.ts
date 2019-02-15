import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';

const NewRelease:string = 'https://api.spotify.com/v1/browse/new-releases';

@Injectable()
export class ApiSpotifyService {
  public token:string;

  constructor(
    private httpClient:HttpClient) {
   }

  SetToken(token:string){
    this.token = token;
  }

  Releases(): Observable<any>{
    var header = new HttpHeaders({
      'Authorization':'Bearer ' + this.token
    });

    return this.httpClient.get(NewRelease,{headers:header});
  }
}
