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

  constructor(private imageService: ImagesService) {
  }
  ngOnInit() {
    this.collection = this.imageService.getItemImages();
  }

  toggleCollection(collection) {
    collection.toggle = !collection.toggle;
  };


}
