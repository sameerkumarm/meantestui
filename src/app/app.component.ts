import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from './location/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private locationService:LocationService) { }

 // class method for toggling  AddLocationBox in location-list.component.html
  showAddLocationBox(e):void{
    e.preventDefault();
    this.locationService.showAddLocationBox = !this.locationService.showAddLocationBox;
  }

}
