import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PacksServiceService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:300/Packs');
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`http://localhost:300/Packs/${id}`);
  }

  update(id: string, pack: any): Observable<any> {
    return this.httpClient.put(`http://localhost:300/Packs/${id}`, pack);
  }
}