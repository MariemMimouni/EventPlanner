import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Packs} from "../Models/packs";
import {Venues} from "../Models/Venues";
@Injectable({
  providedIn: 'root'
})
export class PacksServiceService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Packs[]> {
    return this.httpClient.get<any[]>('http://localhost:300/Packs');
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`http://localhost:300/Packs/${id}`);
  }

  update(id: string, pack: any): Observable<any> {
    return this.httpClient.put(`http://localhost:300/Packs/${id}`, pack);
  }
  save(packToSave: Packs): Observable<any>{
    const pack={
      ...packToSave,
      id: Math.ceil(Math.random()*1000)
    }
    return this.httpClient.post('http://localhost:300/Packs',pack);
  }
  getPackById(id: string):Observable<Packs>{
      return this.httpClient.get<Packs>(`http://localhost:300/Packs/${id}`)
  }
}
