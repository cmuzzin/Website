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

  constructor(private imageService: ImagesService) {
  }

  ngOnInit() {
    this.imageService.getGalleries().subscribe(data => {
      console.log(data);
      this.galleries = data;
    });

  }

}
