import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {stickyNav} from "../../animations/animations";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [stickyNav]
})
export class HeroComponent implements OnInit, AfterViewInit {
  sticky: boolean;

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    window.scrollY > 30 ? this.sticky = true : this.sticky = false;
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const burger = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if(burger.length > 0 ) {
      burger.forEach((element) => {
        element.addEventListener('click', () => {
          const targetTemp = element.dataset.target;
          const target = document.getElementById(targetTemp);
          element.classList.toggle('is-active');
          target.classList.toggle('is-active');
        });
      });
    }
  }


}
