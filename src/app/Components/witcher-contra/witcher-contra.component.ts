import { Component, OnInit } from '@angular/core';
import { WitcherService } from '../../Services/witcher/witcher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-witcher-contra',
  templateUrl: './witcher-contra.component.html',
  styleUrls: ['./witcher-contra.component.css']
})
export class WitcherContraComponent implements OnInit {
  private codigo:string;
  private leyenda:string;
  private titulo:string;

  constructor(private service:WitcherService, private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(params => {this.codigo = params['id'],this.titulo = params["titulo"]});
   }

  ngOnInit() {
    this.leyenda = this.service.getcontra(this.codigo);
  }

}
