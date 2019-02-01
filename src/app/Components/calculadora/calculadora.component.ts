import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  operacion: string;

  constructor() {
    this.operacion = "+";
   }

  ngOnInit() {
  }

  CambiarOp(signo: string): void{
    this.operacion = signo;
  }  
}
