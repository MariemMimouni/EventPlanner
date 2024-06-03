import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Reservation } from 'src/Models/reservations';
import { ReservationService } from 'src/Services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  providers: [MessageService]
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[] = [];
  searchValue: string = '';

  constructor(private reservationService: ReservationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(data => {
      console.log(data);
      this.reservations = data.map(reservation => ({
        ...reservation,
        dateFrom: new Date(reservation.dateFrom),
        dateTo: new Date(reservation.dateFrom)


      }));
    });
  }

  updateStatus(id: string, status: string): void {
    this.reservationService.updateReservationStatus(id, status).subscribe(() => {
      this.reservations = this.reservations.map(reservation =>
        reservation.id === id ? { ...reservation, status } : reservation
      );
      this.showMessage(status);
    });
  }

  showMessage(status: string): void {
    this.messageService.add({
      severity: status === 'confirmed' ? 'success' : 'error',
      summary: 'Reservation Update',
      detail: `Reservation ${status}`
    });
  }

  clear(table: any) {
    table.clear();
    this.searchValue = '';
  }
}
