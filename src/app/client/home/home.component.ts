// src/app/client/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import {Venues} from "../../../Models/Venues";
import {VenuesService} from "../../../Services/venues.service";
import {PacksServiceService} from "../../../Services/packs.service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  packs: any[] = [];
  venues: any[] = [];
  steps: any[] = [];
  selectedPack: any = null;
  getAllVenues() {
    this.VenueS.GETALL().subscribe((v: Venues[] )=>{
      this.venues=v.filter(venue => venue.status === 'Available');
      console.log(v);
    })
  }
  getAllPacks() {
    this.packsService.getAll().subscribe((data: any[]) => {
      this.packs = data;
    });
  }
  ngOnInit() {
    this.getAllVenues();
    this.getAllPacks();


    this.steps = [
      { label: 'Choose the Venue', icon: 'pi pi-fw pi-home' },
      { label: 'Pick the Pack',  icon: 'pi pi-fw pi-check'},
      { label: 'Reserve the Date', icon: 'pi pi-fw pi-calendar' }
    ];
  }

  navigateStep(index: number) {
    // Logic to navigate to the specific step
  }


  constructor(private VenueS: VenuesService,private packsService: PacksServiceService,) {
  }
}
