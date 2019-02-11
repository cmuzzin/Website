import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to',
  templateUrl: './scroll-to.component.html',
  styleUrls: ['./scroll-to.component.scss']
})
export class ScrollToComponent {
  toTop = false;
  toBottom = true;

  @HostListener('window:scroll', ['$event'])
  scroll() {
    this.toTop = window.scrollY > 0;
    this.toBottom = (window.scrollY + window.innerHeight) < document.documentElement.scrollHeight * .98;
  }

  scrollTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  }

  scrollBottom() {
    window.scrollTo({ left: 0, top: document.documentElement.scrollHeight, behavior: 'instant' });
  }

}
