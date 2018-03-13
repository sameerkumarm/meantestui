import { Component, OnInit } from '@angular/core';

import { LocationService } from './location/location.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls:[ './home.component.css' ]
})
export class HomePageComponent implements OnInit {
  locations:any[] = [];
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
     this.locationService.getLocations()
                     .then(locations => this.locations = locations.locations.reverse().slice(0,3))
  }

}
