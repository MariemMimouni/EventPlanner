import {Component, OnInit} from '@angular/core';
import { PacksServiceService } from 'src/Services/packs.service.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Packs} from "../../Models/packs";
import {CreateVenueComponent} from "../create-venue/create-venue.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {Event} from "@angular/router";
import {Venues} from "../../Models/Venues";
import {PacksFormComponent} from "../packs-form/packs-form.component";

@Component({
  selector: 'app-packs-tab',
  templateUrl: './packs-tab.component.html',
  styleUrls: ['./packs-tab.component.css'],
  providers: [ConfirmationService, MessageService, DialogService]
})
export class PacksTabComponent implements OnInit{
  ref: DynamicDialogRef | undefined;
  packs: Packs[] | undefined;
constructor(private packsService: PacksServiceService, private confirmationService: ConfirmationService,private messageService: MessageService,public dialogService: DialogService) {
}
loadPacks() {
  this.packsService.getAll().subscribe((data: any[]) => {
    this.packs = data;
  });
}

  deletePack(id: string, event: MouseEvent) {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Do you want to delete this pack?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    acceptButtonStyleClass:"p-button-danger p-button-text",
    rejectButtonStyleClass:"p-button-text p-button-text",
    acceptIcon:"none",
    rejectIcon:"none",
    accept: () => {
      this.packsService.delete(id).subscribe(() => {
        this.loadPacks();
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Venue deleted!' });

      });
    },
    reject: () => {
    }
  });
}

editPack(id: string) {
  this.packsService.getPackById(id).subscribe((p :Packs)=>{
  this.ref = this.dialogService.open(PacksFormComponent, {
    data: {
      ...p
    },
    header: 'Edit the selected Pack',
    width: '50vw',
    modal:true,
    breakpoints: {
      '960px': '75vw',
      '640px': '90vw'
    },
  });
  this.ref.onClose.subscribe((v : Venues) => {
    if (v) {
      this.packsService.update(id, v).subscribe(() => {
        this.loadPacks();
        this.messageService.add({severity: 'success', summary: 'Venue updated successfully'});
      });
    }
  });

});
}

  createPack() {
    this.ref = this.dialogService.open(PacksFormComponent, {
      header: 'Add a new Pack',
      width: '50%',
      modal:true,
      breakpoints: {
        '960px': '80vw',
        '640px': '90vw'
      },
    });
    this.ref.onClose.subscribe((p : Packs) => {
      if(p) {
        this.packsService.save(p).subscribe(() => {
          this.loadPacks();
          this.messageService.add({severity: 'success', summary: 'Pack added successfully'});

        });
      }
    });
  }

  ngOnInit(): void {
    this.loadPacks();

  }
}



