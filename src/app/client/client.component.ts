// src/app/client/client.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  menuItems: any[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/client/home'] },
      { label: 'Orders', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/client/orders'] },
      { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/client/profile'] },
      { label: 'Search', icon: 'pi pi-fw pi-search', routerLink: ['/client/search'] }
    ];
  }
}
