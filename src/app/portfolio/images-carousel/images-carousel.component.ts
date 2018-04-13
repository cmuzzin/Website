import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss']
})
export class ImagesCarouselComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() collection: Array<any> = [];

  constructor() {
    console.log(this.showModal);
  }

  ngOnInit() {
  }

  closeModal() {
    this.showModal = false;
  }

}
