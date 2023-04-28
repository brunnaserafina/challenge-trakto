import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faCalendarMinus, faBell } from '@fortawesome/free-regular-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  avatar: string = '';
  currentDate: Date = new Date();
  headerClass: string = 'page-educational';
  imageLogo: string = '../../../../assets/images/logo-header-black.png';
  display: string = '';

  faCalendarDays = faCalendarMinus;
  faBell = faBell;
  faSortDown = faSortDown;
  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(private router: Router) {
    if (window.location.pathname === '/') {
      this.headerClass = 'page-home';
      this.imageLogo = '../../../../assets/images/logo-header.svg';
      this.display = 'none';
    }
  }

  ngOnInit(): void {
    const imageAddress: string | null = localStorage?.getItem('trakto');
    this.avatar = imageAddress ? JSON.parse(imageAddress).avatar : null;
  }

  goBack() {
    if (window.location.pathname === '/material-didatico') {
      this.router.navigate(['/']);
    } else if (window.location.pathname === '/material-didatico/todos') {
      this.router.navigate(['/material-didatico']);
    }
  }

  showMenu = false;

  showLogoutMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
