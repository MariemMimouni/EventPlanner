import {Component, OnInit} from '@angular/core';
import {Venues} from "../../Models/Venues";
import {VenuesService} from "../../Services/venues.service";
import {Packs} from "../../Models/packs";
import {PacksServiceService} from "../../Services/packs.service.service";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{
  venues!: Venues[];
  packs ! :Packs[];
  rangeDates: Date[] | null = null;
  selectedVenue: Venues | null = null;
  selectedPack: Packs | null = null;
  constructor(private VenueS: VenuesService,private packsService: PacksServiceService) {
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
    }
  }
}

