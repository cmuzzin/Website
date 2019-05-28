import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { head, last } from 'lodash-es';
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
    const index = this.images.indexOf(this.activeImage);
    start === index ? this.prevBtnDisabled = true : this.nextBtnDisabled = true;
  }

  onPrev() {
     const start = this.images.indexOf(head(this.images));
     const nextIndex = this.images.indexOf(this.activeImage) - 1;
     this.activeImage = start === nextIndex ? this.images[start] : this.images[nextIndex];
     this.prevBtnDisabled = start === nextIndex;
     this.nextBtnDisabled = false;
  }

  onNext() {
    const end = this.images.indexOf(last(this.images));
    const nextIndex = this.images.indexOf(this.activeImage) + 1;
    this.activeImage = end === nextIndex ? this.images[end] : this.images[nextIndex];
    this.prevBtnDisabled = false;
    this.nextBtnDisabled = end === nextIndex;
  }

  close() {
     const isActive = this.isActive = !this.isActive;
     this.onModalChange.emit(isActive);
  }

}
