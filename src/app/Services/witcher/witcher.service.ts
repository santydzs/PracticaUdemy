import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';

//const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class WitcherService {
  private Url: string = 'https://demo0726911.mockable.io/witcher';
  
  private contratapas = {
    "libro1":"Geralt de Rivia, brujo y mutante sobrehumano, se gana la vida como cazador de monstruos en una tierra de magia y maravilla: con sus dos espadas al hombro -la de acero para hombres, y la de plata para bestias- da cuenta de estriges, manticoras, grifos, vampiros, quimeras y lobisomes, pero solo cuando amenazan la paz. Ironico, cinico, descreido y siempre errante, sus pasos lo llevan de pueblo en pueblo ofreciendo sus servicios, hallando las mas de las veces que los autenticos monstruos se esconden bajo rostros humanos. En su camino sorteara intrigas, elegira el mal menor, debatira cuestiones de precio, hollara el confin del mundo y realizara su ultimo deseo: asi comienzan las aventuras del brujo Geralt de Rivia. Andrzej Sapkowski es el gran renovador de la literatura fantastica de nuestros tiempos, un genio del lenguaje y la caracterizacion cuya prosa ya ha hechizado a millones de lectores en todo el mundo.",
    "libro2":"La vida de un brujo cazador de monstruos no es fácil. Tan pronto puede uno tener que meterse hasta el cuello en un estercolero para eliminar a la bestia carroñera que amenaza la ciudad, intentando no atrapar una infección incurable, como se puede encontrar unido a la cacería de uno de los últimos dragones, en la que la cuestión no es si los cazadores conseguirán matar a la pobre bestia, sino qué pasará cuando tengan que repartirse el botín. Magos, príncipes, estarostas, voievodas, druidas, vexlings, dríadas, juglares y criaturas de todo pelaje pueblan esta tierra, enzarzados en conflictos de supervivencia, codicia y amor, y entre ellos avanza, solitario, el brujo Geralt de Rivia. Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo.'",
    "libro3":"En verdad os digo que se acerca el tiempo de la espada y el hacha, la epoca de la tormenta salvaje. Se acerca el Tiempo del Invierno Blanco y de la Luz Blanca. El Tiempo de la Locura y el Tiempo del Odio, el Tiempo del Fin. El mundo morira entre la escarcha y resucitara de nuevo junto con el nuevo sol. Resucitara de entre la Antigua Sangre, de Hen Ichaer, de la semilla sembrada. De la semilla que no germina sino que estalla en llamas. ¡Asi sera! ¡Contemplad las senales! Que senales sean, yo os dire: primero se derramara sobre la tierra la sangre de los Aen Seidhe, la Sangre de los Elfos...´ Aen Ithlinnespeath, profecia de Ithlinne Aegli aep Aevenien Andrzej Sapkowski es el gran renovador de la literatura fantastica de nuestros tiempos, un genio del lenguaje y la caracterizacion cuya prosa ya ha hechizado a millones de lectores en todo el mundo.",
    "libro4":"Decir que la conoci seria una exageracion. Pienso que, excepto el brujo y la hechicera, nadie la conocio de verdad jamas. Cuando la vi por vez primera no me causo especial impresion, incluso pese a las extraordinarias circunstancias que lo acompanaron. Se de algunos que han afirmado que al instante, a primera vista, percibieron el halito de la muerte que seguia a esta muchacha. A mi sin embargo me parecio completamente normal, y ya por entonces sabia yo que no era normal, por eso me esforce en mirar, descubrir, percibir lo extraordinario en ella. Pero nada vi y nada percibi. Nada que pudiera haber sido senal, presentimiento ni profecia de los tragicos acontecimientos posteriores. Aquellos de los que fue causa. Y aquellos que ella misma provoco. ´ Jaskier Andrzej Sapkowski es el gran renovador de la literatura fantastica de nuestros tiempos, un genio del lenguaje y la caracterizacion cuya prosa ya ha hechizado a millones de lectores en todo el mundo.",
    "libro5":"Entonces le dijo la profetisa al brujo: ´Este consejo te doy: ponte botas de yerro, toma en la mano un bastón de yerro. Ve con tus botas de yerro hasta el fin del mundo y por el camino agita el bastón y riega todo con lágrimas. Ve a través de la agua y el fuego, no te detengas ni mires a tu alredor. Y cuando las almadreñas se te desgasten, cuando el bastón de yerro se deshaga, cuando el viento y el calor te sequen los ojos de tal forma que de ellos ni una lágrima acierte a escapar, entonces, en el fin del mundo, hallarás lo que buscas y lo que amas. Pudiera ser. Y el brujo cruzó la agua y el fuego, sin mirar a su alrededor. Pero no se puso botas de yerro ni tomó bastón. Sólo llevó su espada de brujo. No escuchó las palabras de la profetisa. Y bien que hizo, porque era una mala profetisa.´ Flourens Delannoy, Cuentos y leyendas. Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo",
    "libro6":"Puedo darte todo lo que desees dijo el hada. Riqueza, poder y cetro, fama, una vida larga y feliz. Elige. No quiero riqueza ni fama, poder ni cetros respondió la bruja. Quiero un caballo que sea negro y tan imposible de alcanzar como el viento de la noche. Quiero una espada que sea luminosa y afilada como los rayos de la luna. Quiero atravesar el mundo en la oscura noche con mi caballo negro, quiero quebrar las fuerzas del Mal y de la Oscuridad con mi espada de luz. Eso es lo que quiero. Te daré un caballo que será más negro que la noche y más ligero que el viento de la noche le prometió el hada. Te daré una espada que será más luminosa y afilada que los rayos de la luna. Pero no es poco lo que pides, bruja, habrás de pagármelo muy caro. ¿Con qué? En verdad nada tengo. Con tu sangre.´ Flourens Delannoy, Cuentos y leyendas Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo.",
    "libro7":"De las llamitas, algunas altas y poderosas eran, vivamente brillaban y con claridad, otras por su parte eran pequeñas, vacilantes y temblorosas, y oscurecíase su luz y amortigu íbase a trechos. En el mismo final había una llamita pequeña y tan débil que apenas ardía, apenas se removía, ora brillando con gran esfuerzo, ora casi, casi apag índose del todo.´ -¿De quién es ese fueguecillo moribundo? -preguntó el brujo. -Tuyo -respondió la Muerte.´ Flourens Delannoy, Cuentos y leyendas Andrzej Sapkowski es el gran renovador de la literatura fant ística de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo",
    "libro8":"Poco sabía el brujo Geralt de Rivia lo que le esperaba al acudir a la villa costera de Kerack. Primero fue acusado injustamente de desfalco, luego fue misteriosamente liberado bajo fianza, y finalmente descubrió que sus preciadas espadas, dejadas en depósito al entrar en la ciudad, habían desaparecido. Demasiadas casualidades, en efecto, y m íxime cuando tras ellas est í la atractiva hechicera Lytta Neyd, llamada Coral. De esta manera, Geralt de Rivia se encuentra de nuevo implicado en los escabrosos asuntos de los magos, y ni la fiel (aunque ocasionalmente engorrosa) compañía del trovador Jaskier, ni el recuerdo de su amada Yennefer, ni toda su fama como implacable cazador de monstruos podr ín evitar que se vea cada vez m ís envuelto en una oscura trama. M ís bien al contrario. Estación de tormentas es el esperado regreso de Andrzej Sapkowski al mundo de Geralt de Rivia, su creación de fama mundial. En esta precuela de la Saga vuelven a brillar las virtudes que le han convertido en, posiblemente, el mejor escritor contempor íneo de fantasía: su estilo inimitable, su íspero realismo temperado por el humor negro y su vigor aventurero. ´Un artista de enorme originalidad (...) Las im ígenes que crea se quedan para siempre en la memoria (...) Lectura apasionante, literatura de primera fila, y uno de los frentes de la vanguardia de la narrativa europea.´ --Andrés Ib íñez en ABC"
  }

  private Personajes = [{
    "id":"geralt",
    "nombre":"Geralt de Rivia",
    "raza":"Humano",
    "genero":"Masculino",
    "profesion":"Brujo"
  },
  {
    "id":"ciri",
    "nombre":"Cirilla Fiona Elen Riannon",
    "raza":"Humano",
    "genero":"Femenino",
    "profesion":"Bruja"
  },
  {
    "id":"triss",
    "nombre":"Triss Merigold",
    "raza":"Humano",
    "genero":"Femenino",
    "profesion":"Mago"
  },
  {
    "id":"yennefer",
    "nombre":"Yennefer of Vengerberg",
    "raza":"Quadroon",
    "genero":"Femenino",
    "profesion":"Mago"
  }
]

  constructor(private http: HttpClient) { }

  //consulta a la api rest para obtener toda la lista de libros
  public getall(): Observable<any>{
    return this.http.get(this.Url);
  }

  //consulta el object que contiene la leyenda de las contra tapas
  public getcontra(id:string):string{
    return this.contratapas[id];
  }

  //Buscador de personajes
  public getper(id:string):object{
    if(id != undefined){
      return this.Personajes.find(x => x["id"] == id.toLowerCase());
    }else{
      return undefined;
    }
  }
}
