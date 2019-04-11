import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {head, last} from 'lodash-es';
import { Image } from '../..//shared/dtos/image';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() activeImage: Image;
  @Input() images: Array<Image> = [];
  @Input() isActive: boolean;
  @Output() onModalChange: EventEmitter<boolean> = new EventEmitter();
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  constructor() {}

  ngOnInit() {
    const start = this.images.indexOf(head(this.images));
    const end = this.images.indexOf(last(this.images));
    const index = this.images.indexOf(this.activeImage);
    if (start === index) {
      this.prevBtnDisabled = true;
    }
    if (end === index) {
      this.nextBtnDisabled = true;
    }
  }

  onPrev() {
     const start = this.images.indexOf(head(this.images));
     const nextIndex = this.images.indexOf(this.activeImage) - 1;
     if (start === nextIndex) {
        this.activeImage = this.images[nextIndex];
        this.prevBtnDisabled = true;
        this.nextBtnDisabled = false;
        return;
     }
     if (nextIndex !== -1) {
       this.activeImage = this.images[nextIndex];
       this.nextBtnDisabled = false;
     }
  }

  onNext() {
    const end = this.images.indexOf(last(this.images));
    const nextIndex = this.images.indexOf(this.activeImage) + 1;
    if (end === nextIndex) {
       this.activeImage = this.images[nextIndex];
       this.prevBtnDisabled = false;
       this.nextBtnDisabled = true;
       return;
    }
    if (nextIndex !== -1) {
      this.activeImage = this.images[nextIndex];
      this.prevBtnDisabled = false;
    }
  }

  close() {
     const isActive = this.isActive = !this.isActive;
     this.onModalChange.emit(isActive);
  }

}
