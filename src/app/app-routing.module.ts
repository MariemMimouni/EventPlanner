import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VenuesTabComponent} from "./venues-tab/venues-tab.component";
import {CreateVenueComponent} from "./create-venue/create-venue.component";
import { PacksTabComponent } from './packs-tab/packs-tab.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from "./client/home/home.component";
import {ClientComponent} from "./client/client.component";
import {AdminComponent} from "./admin/admin.component";
import {authGuard} from "./guards/auth.guard";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ReservationFormComponent} from "./reservation-form/reservation-form.component";

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
    path: 'client',
    component: ClientComponent,
    canActivate: [authGuard],


    children: [
      {
        path: 'booking',
        component: ReservationFormComponent
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'client', redirectTo: '/client/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
