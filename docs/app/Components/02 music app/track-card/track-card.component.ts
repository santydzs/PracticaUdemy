import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent implements OnInit {
  @Input() tracks: any[];

  constructor() { }

  ngOnInit() {
  }

}
