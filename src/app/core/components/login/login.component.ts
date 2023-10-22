import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //definicion de la variable para que se vea la contraseña
  togglePassword = true;
  group: FormGroup;
  //llamo a la funcion de iniciar sesion
  login() {}
  constructor() {
    this.group = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }
}
