import { Component, OnInit } from '@angular/core';
import { ApiSpotifyService } from '../../../Services/spotify/api-spotify.service';

@Component({
  selector: 'app-music-home',
  templateUrl: './music-home.component.html',
  styleUrls: ['./music-home.component.css']
})
export class MusicHomeComponent implements OnInit {
  tokeninput:string;
  CheckToken:boolean= true;
  canciones:any[] = [];

  mensajeError:string;
  codigoError:number;
  CheckeError:boolean = false;

  constructor(private service:ApiSpotifyService) { }

  ngOnInit() {
    
  }

  CargarAlbunes(data){
    this.canciones = data;
    this.CheckToken = !this.CheckToken;
  }

  Redireccionar(error){
    this.mensajeError = error.error.error.message;
    this.codigoError = error.error.error.status;
    this.CheckeError = true;
  }

  enviarToken(){
    this.service.SetToken(this.tokeninput.trim());
    this.service.Releases().subscribe(
      data => this.CargarAlbunes(data.albums.items),
      error => this.Redireccionar(error)
    )
    
  }

}
