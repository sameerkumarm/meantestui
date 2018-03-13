import { Component, OnInit } from '@angular/core';

import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations:any[] = [];
  location:any = {};
  locationToEdit:any = {};
  locationToDelete:any = {};
  fetchingData:boolean = false;
  apiMessage:string;

  constructor(private locationService:LocationService) { }

  ngOnInit(): void {
    this.locationService.showAddLocationBox = true;
    this.locationService.getLocations()
                    .then(td => this.locations = td.locations )
  }

  AddLocation(location:any):void{
    if(!location){ return; }
    this.locationService.createLocation(location)
                    .then(td => {
                      console.log(td);
                      this.locations.push(td.location);
                    })
  }

  showEditLocation(location:any):void{
    this.locationToEdit = location;
    this.apiMessage = "";
  }

  EditLocation(location:any):void{
    if(!location){ return; }
    location.id = this.locationToEdit._id;
    this.locationService.updateLocation(location)
                    .then(td => {
                      const updatedLocations = this.locations.map(t => {
                        if(td.location._id !== t._id){
                          return t;
                        }
                        return { ...t, ...td.location };
                      })
                      this.apiMessage = td.message;
                      this.locations = updatedLocations;
                    })
  }

 showDeleteLocation(location:any):void{
   this.locationToDelete = location;
   this.apiMessage = "";
 }

 DeleteLocation(location:any):void{
   if(!location){ return; }
   this.locationService.deleteLocation(location)
                   .then(td => {
                     const filteredLocations = this.locations.filter(t => t._id !== td.location._id);
                     this.apiMessage = td.message;
                     this.locations = filteredLocations;
                   })
 }

}
