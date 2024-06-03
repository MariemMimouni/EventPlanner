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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {ToolbarModule} from "primeng/toolbar";
import { CreateVenueComponent } from './create-venue/create-venue.component';
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {FloatLabelModule} from "primeng/floatlabel";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {CheckboxModule} from "primeng/checkbox";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";
import {KeyFilterModule} from "primeng/keyfilter";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RippleModule } from 'primeng/ripple';
import {MessageModule} from "primeng/message";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment.development";
import { PacksTabComponent } from './packs-tab/packs-tab.component';
import { CardModule } from 'primeng/card';
import { ConfirmationService } from 'primeng/api';
import { PacksFormComponent } from './packs-form/packs-form.component';
import {StyleClassModule} from 'primeng/styleclass';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { StepperModule } from 'primeng/stepper';
import { DataViewModule } from 'primeng/dataview';
import { ReservationsComponent } from './reservations/reservations.component';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { OrdersComponent } from './client/orders/orders.component';
import { ProfileComponent } from './client/profile/profile.component';
import { SearchComponent } from './client/search/search.component';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { StepsModule } from 'primeng/steps';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VenuesTabComponent,
    CreateVenueComponent,
    PacksTabComponent,
    PacksFormComponent,
    ReservationsComponent,
    PacksFormComponent,
    ReservationFormComponent,
    ReservationsComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent
    DashboardComponent,
    ClientComponent,
    HomeComponent,
    OrdersComponent,
    ProfileComponent,
    SearchComponent,
    ClientComponent,
    HomeComponent,
    OrdersComponent,
    ProfileComponent,
    SearchComponent
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
    FormsModule,
    NgOptimizedImage,
    ToolbarModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    FloatLabelModule,
    FileUploadModule,
    ToastModule,
    CheckboxModule,
    InputGroupAddonModule,
    InputGroupModule,
    KeyFilterModule,
    ConfirmDialogModule,
    MessageModule,
    RippleModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    CardModule ,
    CalendarModule,
    ChartModule,
    TabViewModule,
    BadgeModule,
    AvatarModule,
    StepsModule,
    CarouselModule
    StepperModule,
    DataViewModule,
    StyleClassModule

  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
