///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  toggleModal: boolean;
  constructor(private imageService: ImagesService) { }

  ngOnInit() {
    this.imageService.toggleGallery.subscribe((toggle) => {
      console.log(toggle);
       this.toggleModal = toggle;
    })
  }

  close() {
    this.toggleModal = false;
  }

}
