import { Component, OnInit } from '@angular/core';
import { DashboardData } from 'src/Models/dashboards';
import { DashboardService } from 'src/Services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardData = {
    reservationsPerMonth: [],
    mostRequestedPack: { pack: '', count: 0 },
    mostRequestedVenues: []
  };

  reservationsPerMonthData: any;
  mostRequestedPackData: any;
  mostRequestedVenuesData: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.dashboardData = data;

      this.reservationsPerMonthData = {
        labels: data.reservationsPerMonth.map(d => d.month),
        datasets: [
          {
            label: 'Reservations per Month',
            backgroundColor: '#42A5F5',
            data: data.reservationsPerMonth.map(d => d.count)
          }
        ]
      };

      this.mostRequestedPackData = {
        labels: [data.mostRequestedPack.pack],
        datasets: [
          {
            data: [data.mostRequestedPack.count],
            backgroundColor: ['#FF6384'],
            hoverBackgroundColor: ['#FF6384']
          }
        ]
      };

      this.mostRequestedVenuesData = {
        labels: data.mostRequestedVenues.map(d => d.venue),
        datasets: [
          {
            data: data.mostRequestedVenues.map(d => d.count),
            backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384']
          }
        ]
      };
    });
  }
}
