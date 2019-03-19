import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiSpotifyService } from '../../../Services/spotify/api-spotify.service';

@Component({
  selector: 'app-input-token',
  templateUrl: './input-token.component.html',
  styleUrls: ['./input-token.component.css']
})
export class InputTokenComponent implements OnInit {
  private CheckToken:boolean;
  private CheckError:boolean = false;
  private tokeninput:string;

  private mensajeError:string;
  private codigoError:number;

  @Output() public CheckValido = new EventEmitter<boolean>();

  constructor(private service:ApiSpotifyService) {
    this.CheckToken = !this.service.checkToken();

   }

  ngOnInit() {
  }

  MostrarError(error){
    this.mensajeError = error.error.error.message;
    this.codigoError = error.error.error.status;
    this.service.SetToken(undefined);
    this.CheckError = true;
  }

  ComunicacionValida(){
    this.CheckToken = false;
    this.CheckError = false;

    this.CheckValido.emit(true);
  }

  enviarToken(){
    this.service.SetToken(this.tokeninput.trim());
    
    this.service.Releases().subscribe(
      data => this.ComunicacionValida(),
      error => this.MostrarError(error)
    )
  }
}
