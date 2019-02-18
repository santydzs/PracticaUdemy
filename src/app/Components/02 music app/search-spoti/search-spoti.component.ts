import { Component, OnInit } from '@angular/core';
import { ApiSpotifyService } from '../../../Services/spotify/api-spotify.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-search-spoti',
  templateUrl: './search-spoti.component.html',
  styleUrls: ['./search-spoti.component.css']
})
export class SearchSpotiComponent implements OnInit {
  private CheckToken:boolean;
  private CheckError:boolean;
  private artistas:any[];

  constructor(private service:ApiSpotifyService) {
    this.CheckToken = this.service.checkToken();
   }

  ngOnInit() {
  }

  UrlError()
  {
    this.service.SetToken(undefined);
    this.artistas = undefined;
  }

  Buscar(value:string){
    this.service.Search(1,value).subscribe(
      data => this.artistas = data,
      error => this.UrlError()
    );
  }

  mostrar(valor:boolean){
    this.CheckToken = valor;
  }
}
