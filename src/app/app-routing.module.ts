import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VenuesTabComponent} from "./venues-tab/venues-tab.component";
import {CreateVenueComponent} from "./create-venue/create-venue.component";
import { PacksTabComponent } from './packs-tab/packs-tab.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    canActivate: [authGuard],
    children:[{
      path: 'venues',
      component: VenuesTabComponent
    },
      {
        path: 'packs',
        component: PacksTabComponent
      },
      {
        path: 'reservations',
        component: ReservationsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },]
  },

  {
    path: 'login',
    pathMatch: 'full',
    component:LoginComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component:RegisterComponent
  },
  {
    path: 'booking',
    pathMatch: 'full',
    component: ReservationFormComponent
  },

   { path: '', redirectTo: '/login', pathMatch: 'full' }
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
