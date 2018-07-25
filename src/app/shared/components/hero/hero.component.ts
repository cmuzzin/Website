import {Component, HostListener, OnInit} from '@angular/core';
import {navShowHide} from "../../animations/animations";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [navShowHide]
})
export class HeroComponent implements OnInit {
  isSticky: boolean;

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    window.scrollY > 30 ? this.isSticky = true : this.isSticky = false;
  };

  constructor() { }

  ngOnInit() {
  }


}
