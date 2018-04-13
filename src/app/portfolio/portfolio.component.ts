import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  toggleModal: boolean;
  constructor() {
    this.toggleModal = false;
  }
  ngOnInit() {
  }

  modalFlag() {
    console.log(this.toggleModal);
    this.toggleModal = true;
  };

}
