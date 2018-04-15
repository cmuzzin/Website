import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgxCarousel} from "ngx-carousel";

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss']
})
export class ImagesCarouselComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() collection: any;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  carouselConfig: NgxCarousel;


  constructor() {

  }

  ngOnInit() {
    this.carouselConfig = {
      grid: {xs: 1, sm: 1, md: 3, lg: 3, all: 0},
      slide: 1,
      speed: 400,
      interval: 10000,
      point: {
        visible: true
      },
      loop: true,
      touch: true
    }
  }

  close() {
    this.closeModal.emit(false);
  };

}
