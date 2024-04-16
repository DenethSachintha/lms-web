import { Component } from '@angular/core';
import {ProgramWidgetComponent} from "../widget/program-widget/program-widget.component";

@Component({
  selector: 'app-user-all-programs',
  standalone: true,
  imports: [
    ProgramWidgetComponent
  ],
  templateUrl: './user-all-programs.component.html',
  styleUrl: './user-all-programs.component.scss'
})
export class UserAllProgramsComponent {

}
