import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ImagesService} from "../shared/services/image.service";
import { Gallery } from '../shared/dtos/gallary';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery: Gallery;
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

}
