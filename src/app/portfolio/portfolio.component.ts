import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../shared/services/image.service";
import {collapse} from "../shared/animations/animations";
import {Gallery} from "../shared/dtos/gallary";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [collapse]
})
export class PortfolioComponent implements OnInit {
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
