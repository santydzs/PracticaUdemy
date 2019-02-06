import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WitcherService } from '../../Services/witcher/witcher.service';

@Component({
  selector: 'app-witcher-person',
  templateUrl: './witcher-person.component.html',
  styleUrls: ['./witcher-person.component.css']
})
export class WitcherPersonComponent implements OnInit {
  private personaje:object = {};
  private texto:string;

  constructor(private ruta:ActivatedRoute,private servicio:WitcherService){  }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.texto = params['texto'];
      this.personaje = this.servicio.getper(this.texto);
    });
    
  }

}
