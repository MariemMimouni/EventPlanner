import { Component } from '@angular/core';
import {AuthentificationService} from "../authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
constructor(private authService : AuthentificationService, private router :Router) {
}
  signIn() {
    this.authService.doGoogleLogin().then(()=>{
      this.router.navigate(['/venues'])
    })
  }
}
