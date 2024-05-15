import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Decoration } from '../Models/Decoration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecorationService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Decoration[]> {
    return this.httpClient.get<Decoration[]>('http://localhost:3000/decorations');
  }

  // méthodes  Crud
}
