import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-width',
  templateUrl: './width.component.html',
  styleUrls: ['./width.component.css']
})
export class WidthComponent implements OnInit {
  @Input() width: number;

  constructor() {
  }

  ngOnInit() {
  }

}
