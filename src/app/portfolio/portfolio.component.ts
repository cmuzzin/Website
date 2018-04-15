import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../shared/services/images.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  toggleModal: boolean;
  collection: Array<any> = [];
  selection: any;

  constructor(private imageService: ImagesService) {
    this.toggleModal = false;
  }
  ngOnInit() {
    this.collection = this.imageService.getItemImages();
  }

  modalFlag(images) {
    this.selection = images;
    this.toggleModal = true;
  };

  closeModal(ev) {
    this.toggleModal = ev;
  }


}
