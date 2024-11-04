import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  locations:any;

  constructor(private locationService:LocationService, private router:Router, private httpClint:HttpClient){}

  ngOnInit(): void {
this.locations=this.locationService.getAllLocation();
  }


}
