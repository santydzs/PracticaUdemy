import { Component, OnInit } from '@angular/core';
import { ApiSpotifyService } from '../../../Services/spotify/api-spotify.service';

@Component({
  selector: 'app-music-home',
  templateUrl: './music-home.component.html',
  styleUrls: ['./music-home.component.css']
})
export class MusicHomeComponent implements OnInit {
  CheckToken:boolean = false;
  canciones:any[] = [];

  constructor(private service:ApiSpotifyService) {
    this.CheckToken = this.service.checkToken();

    if(this.CheckToken){
      this.ConsultarAPI();
    }
  }

  ngOnInit() {
    
  }

  CargarAlbunes(data){
    this.canciones = data;
    this.CheckToken = true;
  }

  Redireccionar(){
    this.service.SetToken(undefined);
    this.CheckToken = this.service.checkToken();
  }

  ConsultarAPI(){
    this.service.Releases().subscribe(
      data => this.CargarAlbunes(data),
      error => this.Redireccionar()
    )
  }

}
