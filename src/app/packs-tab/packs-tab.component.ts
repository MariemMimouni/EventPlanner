import { Component } from '@angular/core';
import { PacksServiceService } from 'src/Services/packs.service.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-packs-tab',
  templateUrl: './packs-tab.component.html',
  styleUrls: ['./packs-tab.component.css']
})
export class PacksTabComponent {
  packs = [
    { id:"01" ,title: 'Pack S', description: 'Description du Pack S' },
    { id:"02" ,title: 'Pack M', description: 'Description du Pack M' },
    { id:"03" ,title: 'Pack L', description: 'Description du Pack L' }
];
constructor(private packsService: PacksServiceService, private confirmationService: ConfirmationService) {
  this.loadPacks();
}
loadPacks() {
  this.packsService.getAll().subscribe((data: any[]) => {
    console.log(data);
    this.packs = data;
    console.log(this.packs);
  });
}

deletePack(pack: any) {
  this.confirmationService.confirm({
    message: 'Do you want to delete this pack?',
    accept: () => {
      this.packsService.delete(pack.id).subscribe(() => {
        this.loadPacks();
      });
    }
  });
}

editPack(pack: any) {
  // Code de l'edit
  console.log('Pack édité :', pack);
}
}



