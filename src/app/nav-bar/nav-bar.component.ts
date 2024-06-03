import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
items: MenuItem[] | undefined;

  ngOnInit(): void {
  this.items=[
    {
      label:'Venues',
      routerLink:'venues'
    },
    {
      label: 'Packs',
      routerLink:'packs',
    },
    {
      label: 'Reservations',
      routerLink:'reservations'

    },
    {
      label: 'Dashboard',
      routerLink:'dashboard',
      routerLinkActiveOptions:'active'

    },
  ]
  }
  constructor(private router: Router) { }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
