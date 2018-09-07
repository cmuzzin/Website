
import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../../services/image.service";
import {Gallery} from "../../dtos/gallary";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  gallery: Gallery;
  isOpen: boolean;

  constructor(private imageService: ImagesService) {

  }

  ngOnInit() {
    this.imageService.openGallery.subscribe((data) => {
      if (data) {
        this.isOpen = data.isOpen;
        this.imageService.getGallery(data.gallery.galleryId).subscribe(gallery => {
          this.gallery = gallery;
        });
      }
    });

  }

  close() {
    let next = {
      isOpen: this.isOpen = !this.isOpen,
      gallery: this.gallery
    };
    this.imageService.openGallery.next(next);
  }

}
