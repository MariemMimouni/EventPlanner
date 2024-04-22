import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VenuesTabComponent} from "./venues-tab/venues-tab.component";

const routes: Routes = [
  {
    path: 'venues',
    pathMatch: 'full',
    component: VenuesTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
