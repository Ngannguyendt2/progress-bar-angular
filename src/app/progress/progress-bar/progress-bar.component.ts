import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  background = '#7f7f7f';
  color = '#007f00';
  width = 40;

  constructor() {
  }

  ngOnInit() {
  }

}
