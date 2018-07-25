import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
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
