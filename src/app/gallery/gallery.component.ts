import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImagesService} from '../shared/services/image.service';
import { Gallery } from '../shared/dtos/gallary';
import { Image } from '../shared/dtos/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery: Gallery;
  acttiveImage: Image;
  modalVisibility = false;
  constructor(private ar: ActivatedRoute, private imagesService: ImagesService) { }

  ngOnInit() {
    const id = this.ar.snapshot.params.id;
    this.imagesService.getGallery(id).subscribe(
      data => {
        this.gallery = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onViewClick(image: Image) {
    this.acttiveImage = image;
    this.modalVisibility = !this.modalVisibility;
  }

  handleModalChange(ev: boolean) {
    this.modalVisibility = ev;
  }

}
