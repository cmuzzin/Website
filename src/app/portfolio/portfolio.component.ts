import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../shared/services/images.service";
import {collapse} from "../shared/animations/animations";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [collapse]
})
export class PortfolioComponent implements OnInit {
  collection: Array<any> = [];
  toggleCarousel: boolean;

  constructor(private imageService: ImagesService) {
  }
  ngOnInit() {
    this.collection = ImagesService.getItemImages();
    this.toggleCarousel = false;
  }

  openGallery() {
    this.toggleCarousel = true;
    this.imageService.toggleGallery.next(this.toggleCarousel);
  }

}
