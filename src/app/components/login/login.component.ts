import { Component } from '@angular/core';
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInput,
    MatFormFieldModule,
    MatButton,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
