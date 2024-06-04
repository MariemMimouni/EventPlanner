// src/app/client/client.component.ts
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {user} from "@angular/fire/auth";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  isLoggedIn: boolean =false;
  fullName:string | null=null;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.fullName=sessionStorage.getItem("fullName");
    if (!!this.fullName){
      this.isLoggedIn=true;
    }
    this.items=[
      {
        label:'Booking',
        routerLink:'booking',
        icon: 'pi pi-calendar'
      },
    ]

  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }

  protected readonly user = user;
  items: MenuItem[] | undefined;
}
