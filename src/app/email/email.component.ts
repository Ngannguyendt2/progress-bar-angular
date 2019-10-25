import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Input() email: string;

  constructor() {
  }

  ngOnInit() {
  }

}
