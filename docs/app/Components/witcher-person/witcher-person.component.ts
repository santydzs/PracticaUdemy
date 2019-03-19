import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { WitcherService } from '../../Services/witcher/witcher.service';

@Component({
  selector: 'app-witcher-person',
  templateUrl: './witcher-person.component.html',
  styleUrls: ['./witcher-person.component.css']
})
export class WitcherPersonComponent implements OnInit {
  private personaje:object = {};
  private texto:string;
  private contador: number = 5;

  constructor(private ruta:ActivatedRoute,private servicio:WitcherService, private enrutador:Router){  }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.texto = params['texto'];
      this.personaje = this.servicio.getper(this.texto);
    });
    
  }

  timeout():void{
    setTimeout(()=>{
      this.contador--;
    },1000);
  }

  ngAfterViewChecked(){
    if(this.personaje == undefined){
      this.timeout();
      if(this.contador == 0){
        this.enrutador.navigate(['/']);
      }
    }
  }
}
