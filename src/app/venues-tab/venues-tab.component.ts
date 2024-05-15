import {Component, OnInit} from '@angular/core';
import {Venues} from "../../Models/Venues";
import {VenuesService} from "../../Services/venues.service";
import {Router} from "@angular/router";
import { Message } from 'primeng/api';
import { ConfirmationService, MessageService } from 'primeng/api';
import {DialogService,  DynamicDialogRef} from "primeng/dynamicdialog";
import {CreateVenueComponent} from "../create-venue/create-venue.component";




@Component({
  selector: 'app-venues-tab',
  templateUrl: './venues-tab.component.html',
  styleUrls: ['./venues-tab.component.css'],
  providers: [ConfirmationService, MessageService,DialogService]

})
export class VenuesTabComponent implements OnInit{
  ref: DynamicDialogRef | undefined;
  venues!: Venues[];
  messages!: Message[] ;
  ngOnInit(): void {
    this.getAllVenues();
  }


constructor(private VenueS: VenuesService, private router :Router, private confirmationService: ConfirmationService, private messageService: MessageService,public dialogService: DialogService) {
}

  getAllVenues() {
    this.VenueS.GETALL().subscribe((v: Venues[] )=>{
      this.venues=v;
      console.log(v);
    })
  }

  delete(id :string, event:Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this venue?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
        this.VenueS.DELETE(id).subscribe(() => {
          this.getAllVenues();
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Venue deleted!' });

        })
      },
      reject: () => {
      }
    });
      }
  create(){
      this.ref = this.dialogService.open(CreateVenueComponent, {
        header: 'Add a new Venue',
        width: '70%',
        modal:true,
        breakpoints: {
          '960px': '80vw',
          '640px': '90vw'
        },
      });
    this.ref.onClose.subscribe((v : Venues) => {
      if(v) {
        this.VenueS.ONSAVE(v).subscribe(() => {
          this.getAllVenues();
          this.messageService.add({severity: 'success', summary: 'Venue added successfully'});

        });
      }
    });

  }
  edit(id :string ) {
    this.VenueS.GETELEMENT(id).subscribe((v :Venues)=>{
      this.ref = this.dialogService.open(CreateVenueComponent, {
        data: {
          ...v
        },
        header: 'Edit the selected Venue',
        width: '50vw',
        modal:true,
        breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
        },
      });
      this.ref.onClose.subscribe((v : Venues) => {
        if (v) {
        this.VenueS.ONUPDATE(id, v).subscribe(() => {
          this.getAllVenues();
          this.messageService.add({severity: 'success', summary: 'Venue updated successfully'});
        });
      }
      });

    });

  }
  getSeverity(status: string) {
    if (status.toLowerCase()=="available"){
      return 'success';
    }else{
      return 'warning';
    }
  }
}
