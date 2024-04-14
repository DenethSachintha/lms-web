import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-context',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton
  ],
  templateUrl: './user-context.component.html',
  styleUrl: './user-context.component.scss'
})
export class UserContextComponent {

}
