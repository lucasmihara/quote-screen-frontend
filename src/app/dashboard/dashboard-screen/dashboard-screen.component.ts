import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/model/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.css']
})
export class DashboardScreenComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void> {
    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks);
  }

}
