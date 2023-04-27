import { Component, OnInit } from '@angular/core';
import { faCalendarMinus, faBell } from '@fortawesome/free-regular-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  avatar: string = '';
  currentDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    const imageAddress: string | null = localStorage?.getItem('trakto');
    this.avatar = imageAddress ? JSON.parse(imageAddress).avatar : null;
  }

  faCalendarDays = faCalendarMinus;
  faBell = faBell;
  faSortDown = faSortDown;
}
