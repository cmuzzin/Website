import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    const ss = this.ar.snapshot;
    console.log(ss);
  }

}
