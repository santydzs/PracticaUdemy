import { Component, Input } from '@angular/core';
import { Libro } from '../../Class/libro';

@Component({
  selector: 'app-witcher-list-card',
  templateUrl: './witcher-list-card.component.html',
  styleUrls: ['./witcher-list-card.component.css']
})
export class WitcherListCardComponent {
  @Input() libro:Libro;

  constructor() { }

}
