import { Component } from '@angular/core';
import {ProgramWidgetComponent} from "../widget/program-widget/program-widget.component";

@Component({
  selector: 'app-user-payments',
  standalone: true,
  imports: [
    ProgramWidgetComponent
  ],
  templateUrl: './user-payments.component.html',
  styleUrl: './user-payments.component.scss'
})
export class UserPaymentsComponent {

}
