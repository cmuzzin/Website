import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: Array<any>;
  active: number;

  constructor() { }

  ngOnInit() {
     this.active = this.images[0];
  }

}