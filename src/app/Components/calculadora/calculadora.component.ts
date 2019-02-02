import { Component, OnInit } from '@angular/core';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  operacion: string;
  campo1: number;
  campo2: number;
  resultado: number;
  visible: boolean;
  historial: string[];

  constructor() {
    this.operacion = "+";
    this.campo1 = 0;
    this.campo2 = 0;
    this.resultado = 0;
    this.visible = false;
    this.historial = [];
   }

  ngOnInit() {
  }

  CambiarOp(signo: string): void{
    this.operacion = signo;
  }
  
  CargarHistorial(){
    var operacion = this.campo1.toString() + ' ' + this.operacion + ' ' + this.campo2.toString() + ' = ' + this.resultado.toString();
    this.historial.push(operacion);
  }

  Ejecutar(): void{
    switch(this.operacion){
      case "+":{
        this.resultado = this.campo1 + this.campo2;
        break;
      }
      case "-":{
        this.resultado = this.campo1 - this.campo2;
        break;
      }
      case "/":{
        this.resultado = this.campo1 / this.campo2;
        break;
      }
      case "x":{
        this.resultado = this.campo1 * this.campo2;
        break;
      }
    }

    this.CargarHistorial();
  }
}
