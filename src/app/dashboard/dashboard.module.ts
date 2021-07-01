import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardScreenComponent,
    StockCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    DashboardScreenComponent,
  ]
})
export class DashboardModule { }
