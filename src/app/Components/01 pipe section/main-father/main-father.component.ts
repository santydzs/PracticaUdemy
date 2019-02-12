import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-father',
  templateUrl: './main-father.component.html',
  styleUrls: ['./main-father.component.css']
})
export class MainFatherComponent implements OnInit {
  money:number = 25677.5;
  frase:string = 'cantidad de palabras';

  promesa = new Promise((resolve,reject) => {
    setTimeout(()=>
      resolve('llego los datos')
    , 2500);
  });

  constructor() { }

  ngOnInit() {
  }

}
