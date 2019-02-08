import { Component, OnInit } from '@angular/core';
import { WitcherService } from '../../Services/witcher/witcher.service';
import { Libro } from '../../Class/libro';

@Component({
  selector: 'app-witcher-list',
  templateUrl: './witcher-list.component.html',
  styleUrls: ['./witcher-list.component.css']
})
export class WitcherListComponent implements OnInit {
  libros: Array<Libro> = new Array<Libro>();
  error: boolean = false;
  codigo:string;

  constructor(private service:WitcherService) { }

  ngOnInit() {
    this.service.getall().subscribe(
      //ejecucion en caso que la respuesta sea correcta (200)
      libros => libros.forEach(libro => this.ParseLibro(libro)),

      //ejecucion en caso que sea erronea (!200)
      err => {
        this.error = true;
        this.codigo = err['status'];
      });
  }

  ParseLibro(libro:any){
    var lib = new Libro();
    lib.img = '../../../assets/' + libro["img"];
    lib.titulo = libro["Titulo"];
    lib.paginas = libro["Paginas"];
    lib.publicacion = libro["publicacion"];
    lib.id = libro["img"];
    lib.id = lib.id.split('.')[0];
    this.libros.push(lib);
  }
}
