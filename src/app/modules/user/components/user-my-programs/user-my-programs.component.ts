import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-user-my-programs',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './user-my-programs.component.html',
  styleUrl: './user-my-programs.component.scss'
})
export class UserMyProgramsComponent {
  date = new Date();
}
