import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Venues} from "../Models/Venues";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  GETALL():Observable<Venues[]>{
    return this.httpClient.get<Venues[]>('http://localhost:300/venues')
  }
  constructor(private httpClient :HttpClient) {}
}
