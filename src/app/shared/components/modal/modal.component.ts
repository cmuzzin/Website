import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  toggleModal: boolean;
  images: Array<any>;
  constructor(private imageService: ImagesService) { }

  ngOnInit() {
    this.imageService.toggleGallery.subscribe((toggle) => {
       this.toggleModal = toggle;
    })
  }

  close() {
    this.toggleModal = false;
  }

}
