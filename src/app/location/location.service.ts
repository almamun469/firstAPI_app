import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Location } from './location.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl:string="http://localhost:3000/locations";
  constructor(private httpClint:HttpClient) { }

  getAllLocation():Observable<any>{
    return this.httpClint.get<any>(this.baseUrl);
  }
}
