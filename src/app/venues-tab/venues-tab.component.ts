import {Component, OnInit} from '@angular/core';
import {Venues} from "../../Models/Venues";
import {VenuesService} from "../../Services/venues.service";

@Component({
  selector: 'app-venues-tab',
  templateUrl: './venues-tab.component.html',
  styleUrls: ['./venues-tab.component.css']
})
export class VenuesTabComponent implements OnInit{
  venues!: Venues[]

  ngOnInit(): void {
    this.VenueS.GETALL().subscribe((v: Venues[] )=>{
      this.venues=v;
    })
  }


constructor(private VenueS: VenuesService) {
}
}
