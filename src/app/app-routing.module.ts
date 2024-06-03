import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VenuesTabComponent} from "./venues-tab/venues-tab.component";
import {CreateVenueComponent} from "./create-venue/create-venue.component";
import { PacksTabComponent } from './packs-tab/packs-tab.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'venues',
    pathMatch: 'full',
    component: VenuesTabComponent
  },
  {
    path: 'venues/create',
    pathMatch: 'full',
    component: CreateVenueComponent
  },
  {
    path: 'packs',
    pathMatch: 'full',
    component: PacksTabComponent
  },
  {
    path: 'reservations',
    pathMatch: 'full',
    component: ReservationsComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
