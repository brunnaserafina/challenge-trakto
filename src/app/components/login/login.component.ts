import { IUser } from './../../interfaces/user';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: IUser = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private service: AuthenticationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.service.login(this.user).subscribe(
      (response) => {
        this.toastr.success('Login efetuado com sucesso', 'Bem-vindo(a)!', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });

        localStorage.setItem(
          'trakto',
          JSON.stringify({
            name: response.firstname,
            avatar: response.avatar
              ? response.avatar.url
              : '../../../assets/images/perfil-icon.png',
            acess_token: response.access_token,
            refresh_token: response.refresh_token,
          })
        );

        this.router.navigate(['']);
      },
      (error: HttpErrorResponse) => {
        this.toastr.error(
          'Confira seus dados e tente novamente',
          'Erro de login!',
          {
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
          }
        );
      }
    );
  }
}
  