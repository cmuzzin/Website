import { Component, OnInit } from '@angular/core';
import {ImagesService} from "../../shared/services/image.service";
import {Gallery} from "../../shared/dtos/gallary";

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss']
})
export class RecentWorkComponent implements OnInit {

  galleries: Array<Gallery>;
  isOpen: boolean;

  constructor(private imageService: ImagesService) {
  }

  ngOnInit() {
    this.imageService.getGalleries().subscribe(data => {
      this.galleries = data;
    });

    this.imageService.openGallery.subscribe(data => {
      if(data) {
        this.isOpen = data.isOpen;
      }
    });

  }

  openGallery(gallery: Gallery) {
    let next = {
      isOpen: this.isOpen = !this.isOpen,
      gallery: gallery
    };
    this.imageService.openGallery.next(next);
  };

}
