import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FileUploadEvent} from "primeng/fileupload";
import {VenuesService} from "../../Services/venues.service";
import {Router} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-create-venue',
  templateUrl: './create-venue.component.html',
})
export class CreateVenueComponent implements OnInit{
    ngOnInit(): void {
      this.initForm();
    }
formGroup !: FormGroup;
  stat: any[] =[
    'Available' ,
    'Not Available'
  ];


  initForm(): void {
    const data = this.config.data;
    this.formGroup = new FormGroup({
      name: new FormControl(data ? data.name : null, [Validators.required]),
      location: new FormControl(data ? data.location : null, [Validators.required]),
      capacity: new FormControl(data ? data.capacity : null, [Validators.required]),
      surface: new FormControl(data ? data.surface : null, [Validators.required]),
      price: new FormControl(data ? data.price : null, [Validators.required]),
      status: new FormControl(data ? data.status : null, [Validators.required]),
      imageUrl: new FormControl(data ? data.imageUrl : null, [Validators.required]),

    });
  }

  create():void{
    this.ref.close(this.formGroup.value);
  }
  constructor(private VenueS :VenuesService, private router: Router,public ref: DynamicDialogRef,
              public config: DynamicDialogConfig, private fireStorage: AngularFireStorage) {
  }

  cancel() {
    this.ref.close();
  }

  async onUpload($event: FileUploadEvent) {
    const file = $event.files[0];
    if (file) {
      // Upload the file to Firebase Storage
      const path = `venues/${file.name}`;
      const result = await this.fireStorage.upload(path, file);

      // Get the download URL of the uploaded file
      const downloadURL = await result.ref.getDownloadURL();

      // Save the file name or download URL in your JSON server
      // For example, you can update the form control value
      // @ts-ignore
      this.formGroup.get('imageUrl').setValue(downloadURL);
    }
  }
}
