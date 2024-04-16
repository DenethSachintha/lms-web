import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ProgramWidgetComponent} from "../widget/program-widget/program-widget.component";

@Component({
  selector: 'app-user-my-programs',
  standalone: true,
  imports: [DatePipe,
  ProgramWidgetComponent],
  templateUrl: './user-my-programs.component.html',
  styleUrl: './user-my-programs.component.scss'
})
export class UserMyProgramsComponent {
  date = new Date();
}
