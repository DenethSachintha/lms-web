import { Component } from '@angular/core';
import {ProgramWidgetComponent} from "../../../user/components/widget/program-widget/program-widget.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-admin-all-programs',
  standalone: true,
  imports: [
    ProgramWidgetComponent,
    MatButton
  ],
  templateUrl: './admin-all-programs.component.html',
  styleUrl: './admin-all-programs.component.scss'
})
export class AdminAllProgramsComponent {

}
