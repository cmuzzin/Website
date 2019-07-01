import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common'
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
  activeGallery: number;
  activeImage: Image;
  modalVisibility = false;
  constructor(private ar: ActivatedRoute, private imagesService: ImagesService, private location: Location) { }

  ngOnInit() {
    const id = this.ar.snapshot.params.id;
    this.imagesService.getGalleries().subscribe(
      data => {
        this.activeGallery = id;
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
    this.activeGallery = id;
    this.location.replaceState(`/gallery/${id}`);
    this.getGallery(id);
  }

  onViewClick(image: Image) {
    this.activeImage = image;
    this.modalVisibility = !this.modalVisibility;
  }

  handleModalChange(ev: boolean) {
    this.modalVisibility = ev;
  }

}
