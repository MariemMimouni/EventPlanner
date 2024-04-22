import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import {MenubarModule} from "primeng/menubar";
import { VenuesTabComponent } from './venues-tab/venues-tab.component';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VenuesTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    RatingModule,
    TagModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
