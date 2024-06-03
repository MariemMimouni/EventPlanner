// src/app/client/home/home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  packs: any[] = [];
  venues: any[] = [];
  items: any[] = [];
  steps: any[] = [];
  selectedPack: any = null;

  ngOnInit() {
    this.packs = [
      { name: 'Pack 1', description: 'Pack Premium', image: 'path/to/image1.jpg' },
      { name: 'Pack 2', description: 'Pack L', image: 'path/to/image2.jpg' },
      { name: 'Pack 3', description: 'Pack Basic', image: 'path/to/image1.jpg' },
    ];

    this.venues = [
      { name: 'Venue 1', description: 'Marassim', image: 'path/to/image1.jpg' },
      { name: 'Venue 2', description: 'Layeli', image: 'path/to/image2.jpg' },
      { name: 'Venue 3', description: 'Nahr El founoun', image: 'path/to/image1.jpg' },
      { name: 'Venue 4', description: 'hotel ', image: 'path/to/image2.jpg' },
    ];

    this.items = [
      { label: 'Venues', command: (event: any) => { this.navigateStep(0); } },
      { label: 'Packs', command: (event: any) => { this.navigateStep(1); } },
      { label: 'Confirmation', command: (event: any) => { this.navigateStep(2); } }
    ];
    this.steps = [
      { label: 'Venues', command: (event: any) => { this.navigateStep(0); } },
      { label: 'Packs', command: (event: any) => { this.navigateStep(1); } },
      { label: 'Confirmation', command: (event: any) => { this.navigateStep(2); } },
      { label: 'Pick a Date', command: (event: any) => { this.navigateStep(3); } }
    ];
  }

  navigateStep(index: number) {
    // Logic to navigate to the specific step
  }

  selectPack(pack: any) {
    this.selectedPack = pack;
  }
}
