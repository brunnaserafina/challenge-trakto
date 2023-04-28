import { AllMaterialsComponent } from './components/all-materials/all-materials.component';
import { EducationalMaterialComponent } from './components/educational-material/educational-material.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'material-didatico',
    component: EducationalMaterialComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'material-didatico/todos',
    component: AllMaterialsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
