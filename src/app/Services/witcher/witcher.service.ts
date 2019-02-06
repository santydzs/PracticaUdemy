import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';

//const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class WitcherService {
  private Url: string = 'http://demo0726911.mockable.io/witcher';
  
  private contratapas = {
    "libro1":"Geralt de Rivia, brujo y mutante sobrehumano, se gana la vida como cazador de monstruos en una tierra de magia y maravilla: con sus dos espadas al hombro -la de acero para hombres, y la de plata para bestias- da cuenta de estriges, manticoras, grifos, vampiros, quimeras y lobisomes, pero solo cuando amenazan la paz. Ironico, cinico, descreido y siempre errante, sus pasos lo llevan de pueblo en pueblo ofreciendo sus servicios, hallando las mas de las veces que los autenticos monstruos se esconden bajo rostros humanos. En su camino sorteara intrigas, elegira el mal menor, debatira cuestiones de precio, hollara el confin del mundo y realizara su ultimo deseo: asi comienzan las aventuras del brujo Geralt de Rivia. Andrzej Sapkowski es el gran renovador de la literatura fantastica de nuestros tiempos, un genio del lenguaje y la caracterizacion cuya prosa ya ha hechizado a millones de lectores en todo el mundo.",
    "libro2":"el libro 2"
  }

  constructor(private http: HttpClient) { }

  //consulta a la api rest para obtener toda la lista de libros
  public getall(): Observable<any>{
    return this.http.get(this.Url);
  }

  //consulta el object que contiene la leyenda de las contra tapas
  public getcontra(id:string):string{
    return this.contratapas[id];
  }
}
