// src/Services/dashboard.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DashboardData } from 'src/Models/dashboards';
import { Reservation } from 'src/Models/reservations';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:300'; 

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardData> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/Reservation`).pipe(
      map((reservations: Reservation[]) => {
        const reservationsPerMonth = this.calculateReservationsPerMonth(reservations);
        const mostRequestedPack = this.calculateMostRequestedPack(reservations);
        const mostRequestedVenues = this.calculateMostRequestedVenues(reservations);

        return { reservationsPerMonth, mostRequestedPack, mostRequestedVenues };
      })
    );
  }

  private calculateReservationsPerMonth(reservations: Reservation[]): { month: string, count: number }[] {
    const counts = reservations.reduce((acc, reservation) => {
      const month = new Date(reservation.date).toLocaleString('default', { month: 'long' });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(counts).map(month => ({ month, count: counts[month] }));
  }

  private calculateMostRequestedPack(reservations: Reservation[]): { pack: string, count: number } {
    const packCounts = reservations.reduce((acc, reservation) => {
      acc[reservation.pack] = (acc[reservation.pack] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    const mostRequestedPack = Object.keys(packCounts).reduce((a, b) => packCounts[a] > packCounts[b] ? a : b);
    return { pack: mostRequestedPack, count: packCounts[mostRequestedPack] };
  }

  private calculateMostRequestedVenues(reservations: Reservation[]): { venue: string, count: number }[] {
    const venueCounts = reservations.reduce((acc, reservation) => {
      acc[reservation.venue] = (acc[reservation.venue] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(venueCounts).map(venue => ({ venue, count: venueCounts[venue] }));
  }
}
