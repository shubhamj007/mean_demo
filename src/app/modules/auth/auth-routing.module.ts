import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent,
  data: { title: 'Log In' }
},
{
  path: 'register',
  component: RegistrationComponent ,
  data: { title: 'Registration' }
},
{
  path: 'forgot-password',
  component: ForgotPasswordComponent,
  data: { title: 'Forgot Password' }
},
{
  path: 'reset-password/:resetToken',
  component: ResetPasswordComponent,
  data: { title: 'Reset password' }
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  static components = [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ];

}