import { HttpClient } from '@angular/common/http';
import Stock from '../shared/model/stock-model'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly baseUrl = 'http://localhost:8080/bootcamp'
  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    let stocks: Promise<Stock[]> = this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();

    return stocks;
  }
}
