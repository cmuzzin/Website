import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from '../../shared/dtos/gallary';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss']
})
export class RecentWorkComponent implements OnInit {
  @Input() galleries: Array<Gallery>;
  constructor() {}

  ngOnInit() {}

}
