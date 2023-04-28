import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  faChevronRight,
  faChevronLeft,
  faCircleChevronRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educational-material',
  templateUrl: './educational-material.component.html',
  styleUrls: ['./educational-material.component.css'],
})
export class EducationalMaterialComponent {
  @ViewChild('widgetsContent', { static: true }) widgetsContent!: ElementRef;

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faCircleChevronRight = faCircleChevronRight;
  faCircleChevronLeft = faCircleChevronLeft;

  data: any[] = [];
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;

  isAtStart = true;
  isAtEnd = false;

  currentDate: Date = new Date();

  constructor(private router: Router, private service: AuthenticationService) {}

  ngOnInit(): void {
    this.service.listLastTenDesigns().subscribe((response: any) => {
      this.data = response.data;
      this.hasNextPage = response.hasNextPage;
      this.hasPreviousPage = response.hasPreviousPage;
    });

    this.widgetsContent.nativeElement.addEventListener('scroll', () => {
      this.isAtStart = this.widgetsContent.nativeElement.scrollLeft === 0;
      this.isAtEnd =
        this.widgetsContent.nativeElement.scrollLeft ===
        this.widgetsContent.nativeElement.scrollWidth -
          this.widgetsContent.nativeElement.clientWidth;
    });
  }

  scrollToRight() {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 500,
      behavior: 'smooth',
    });
  }

  scrollToLeft() {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 500,
      behavior: 'smooth',
    });
  }

  navigateToAllMaterials() {
    this.router.navigate(['material-didatico/todos']);
  }
}
