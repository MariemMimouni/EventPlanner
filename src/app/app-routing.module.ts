import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VenuesTabComponent} from "./venues-tab/venues-tab.component";
import {CreateVenueComponent} from "./create-venue/create-venue.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
