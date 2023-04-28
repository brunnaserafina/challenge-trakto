import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-materials',
  templateUrl: './all-materials.component.html',
  styleUrls: ['./all-materials.component.css'],
})
export class AllMaterialsComponent {
  data: any[] = [];
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;

  constructor(private router: Router, private service: AuthenticationService) {}

  ngOnInit(): void {
    this.service.listLastTenDesigns().subscribe((response: any) => {
      this.data = response.data;
      this.hasNextPage = response.hasNextPage;
      this.hasPreviousPage = response.hasPreviousPage;
    });
  }
}
