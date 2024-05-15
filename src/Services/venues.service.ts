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
  GETELEMENT(id: string):Observable<Venues>{
    return this.httpClient.get<Venues>(`http://localhost:300/venues/${id}`)
  }
  ONSAVE( venueToSave: Venues):Observable <any>{
    const venue={
      ...venueToSave,
      id: Math.ceil(Math.random()*1000)
    }
    return this.httpClient.post('http://localhost:300/venues',venue)
  }
  ONUPDATE(id:string,venue:Venues):Observable<any>{
    return this.httpClient.put(`http://localhost:300/venues/${id}`,venue)
  }
  constructor(private httpClient :HttpClient) {}

  DELETE(id: string) {

    return this.httpClient.delete(`http://localhost:300/venues/${id}`)
  }
}
