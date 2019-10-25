import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  name = 'Nguyen Thi Ngan';
  email = 'ngan@gmail.com';
  phone = '0123424332';

  constructor() {
  }

  ngOnInit() {
  }

}
