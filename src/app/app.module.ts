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
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VenuesTabComponent,
    CreateVenueComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
