import {Component, OnInit} from '@angular/core';
import {Venues} from "../../Models/Venues";
import {Reservation} from "../../Models/reservations";
import {VenuesService} from "../../Services/venues.service";
import {Packs} from "../../Models/packs";
import {PacksServiceService} from "../../Services/packs.service.service";
import {ReservationService} from "../../Services/reservations.service";
import {Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
  providers: [MessageService]
})
export class ReservationFormComponent implements OnInit{
  venues!: Venues[];
  packs ! :Packs[];
  rangeDates: Date[] | null = null;
  selectedVenue: Venues | null = null;
  selectedPack: Packs | null = null;
  constructor(private VenueS: VenuesService,private packsService: PacksServiceService, private resService: ReservationService,
              private router :Router,  private messageService: MessageService) {
  }

  getAllVenues() {
    this.VenueS.GETALL().subscribe((v: Venues[] )=>{
      this.venues=v.filter(venue => venue.status === 'available');
      console.log(v);
    })
  }
  getAllPacks() {
    this.packsService.getAll().subscribe((data: any[]) => {
      this.packs = data;
    });
  }
  ngOnInit(): void {
    this.getAllVenues();
    this.getAllPacks();
  }
  selectVenue(venue: Venues) {
    this.selectedVenue = venue;
  }

  selectPack(pack: Packs) {
    this.selectedPack = pack;
  }

  isVenueSelected() {
    return this.selectedVenue !== null;
  }

  isPackSelected() {
    return this.selectedPack !== null;
  }

  isDateRangeSelected() {
    return this.rangeDates !== null && this.rangeDates.length === 2;
  }

  book() {
    if (this.selectedVenue && this.selectedPack && this.rangeDates) {
      // Perform booking logic here
      console.log('Booking:', {
        venue: this.selectedVenue,
        pack: this.selectedPack,
        dates: this.rangeDates
      });
      const toBook = {
        firstName: "user",
        lastName:"user",
        venue: this.selectedVenue,
        pack: this.selectedPack,
        dateFrom: this.rangeDates[0],
        dateTo: this.rangeDates[1],
        status: "Pending"
      }
      this.resService.addReservation(toBook).subscribe(()=>{
        this.messageService.add({severity: 'success', summary: 'Venue updated successfully'});
          this.router.navigate(['/home']);
      })
    }
  }
}

