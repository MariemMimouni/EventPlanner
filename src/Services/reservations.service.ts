import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservation } from 'src/Models/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:300';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/Reservation`).pipe(
      map(reservations => reservations.map(reservation => ({
        ...reservation,
        date: new Date(reservation.date)
      })))
    );
  }

  updateReservationStatus(id: number, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/Reservation/${id}`, { status });
  }
}
