import { Pipe, PipeTransform } from '@angular/core';
import { promise } from 'protractor';

@Pipe({
  name: 'contador'
})
export class ContadorPipe implements PipeTransform {
  private cantidad:number;

  transform(valor: string, args: string): number {
    switch(args){
      case 'palabras':{
          this.cantidad = this.ContarPalabras(valor);
          break;
      }
      case 'letras':{
          this.cantidad = this.ContarLetras(valor);
          break;
      }
      default:{
          this.cantidad = 0;
      }
    }
    
    return this.cantidad;
  }

  ContarPalabras(cadena:string): number{
    var palabras = cadena.split(" ");
    return palabras.length;

  }

  ContarLetras(cadena:string): number{
    var contador = 0;
    var palabras = cadena.toString().split(" ");
    palabras.forEach((subpalabra) =>{
      contador += subpalabra.length;
    })

    return contador;
  }
}
