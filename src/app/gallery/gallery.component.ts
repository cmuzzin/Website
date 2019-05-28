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
  galleries: Array<Gallery>;
  gallery: Gallery;
  acttiveImage: Image;
  modalVisibility = false;
  constructor(private ar: ActivatedRoute, private imagesService: ImagesService) { }

  ngOnInit() {
    const id = this.ar.snapshot.params.id;
    this.imagesService.getGalleries().subscribe(
      data => {
        this.galleries = data;
      },
      error => console.log(error)
    );
    this.getGallery(id);
  }

  getGallery(id: number) {
    this.imagesService.getGallery(id).subscribe(
      data => {
        this.gallery = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onGalleryClick(id: number) {
    this.getGallery(id);
  }

  onViewClick(image: Image) {
    this.acttiveImage = image;
    this.modalVisibility = !this.modalVisibility;
  }

  handleModalChange(ev: boolean) {
    this.modalVisibility = ev;
  }

}
