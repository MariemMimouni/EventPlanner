import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {PacksServiceService} from "../../Services/packs.service.service";

@Component({
  selector: 'app-packs-form',
  templateUrl: './packs-form.component.html',
  styleUrls: ['./packs-form.component.css']
})
export class PacksFormComponent implements OnInit{
  formGroup !: FormGroup;
  initForm(): void{
    const data = this.config.data;
    this.formGroup = new FormGroup(
      {
        name: new FormControl(data ? data.name : null, [Validators.required]),
        description: new FormControl(data ? data.description : null, [Validators.required]),
        price: new FormControl(data ? data.price : null, [Validators.required]),

      }
    )
}
  create():void{
    this.ref.close(this.formGroup.value);
  }
  cancel() {
    this.ref.close();
  }
  ngOnInit(): void {
    this.initForm();
  }
  constructor(private PackS :PacksServiceService, private router: Router,public ref: DynamicDialogRef,
              public config: DynamicDialogConfig,) {
  }

}
