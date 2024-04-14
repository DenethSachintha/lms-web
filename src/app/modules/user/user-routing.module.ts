import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserHomeComponent} from "./components/user-home/user-home.component";

const routes: Routes = [
  {path: '', redirectTo: '/user/process/home', pathMatch: 'full'},
  {
    path: 'process', loadComponent: () => import('./components/user-context/user-context.component')
      .then(c => c.UserContextComponent), children: [
      {path: 'home', component: UserHomeComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
