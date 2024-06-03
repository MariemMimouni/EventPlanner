import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VenuesTabComponent} from "./venues-tab/venues-tab.component";
import {CreateVenueComponent} from "./create-venue/create-venue.component";
import { PacksTabComponent } from './packs-tab/packs-tab.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { ProfileComponent } from './client/profile/profile.component';
import { SearchComponent } from './client/search/search.component';
import { OrdersComponent } from './client/orders/orders.component';

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
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'client',
    component: ClientComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'search', component: SearchComponent }
    ]
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  { path: 'client', redirectTo: '/client/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
