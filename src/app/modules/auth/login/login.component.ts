import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fieldTextType:boolean = false;
  loginForm = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    passWord: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  constructor() { }

  public submit() {
    if (this.loginForm.valid) {
      console.log("Form is Validate");
    }
  };
}
