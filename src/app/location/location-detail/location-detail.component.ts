import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
  location:any[]=[];

  constructor(
    private locationService:LocationService,
    private route:ActivatedRoute,
    private loc:Location
  ) { }

  ngOnInit():void {
    this.route.paramMap
        .switchMap((params:ParamMap) => this.locationService.getLocation(params.get('id')))
        .subscribe(td => this.location =  td.location[0])
  }

  goBack():void {
    this.loc.back();
  }



}
