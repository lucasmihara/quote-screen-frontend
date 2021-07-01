import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardScreenComponent } from './dashboard/dashboard-screen/dashboard-screen.component';

const routes: Routes = [
  {path: '', component: DashboardScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
