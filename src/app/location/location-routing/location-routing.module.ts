import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationListComponent } from '../location-list/location-list.component';
import { LocationDetailComponent } from '../location-detail/location-detail.component'

const locationRoutes: Routes = [
  { path:'locations', component:LocationListComponent },
  { path:'location/:id', component:LocationDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(locationRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class LocationRoutingModule { }
