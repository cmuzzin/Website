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
  showGallery: boolean;
  galleries: Array<Gallery>;

  constructor(private imageService: ImagesService) {
  }
  ngOnInit() {
     this.imageService.getImages().subscribe(data => {
         this.galleries = data;
     })

  }

  openGallery() {
    this.showGallery = !this.showGallery;
    this.imageService.toggleGallery.next(this.showGallery);
  };

}
