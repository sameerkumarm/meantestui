import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home.component';

import { AppRoutingModule } from './app-routing.module';
import { LocationRoutingModule } from './location/location-routing/location-routing.module';
import { LocationService } from './location/location.service';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationDetailComponent } from './location/location-detail/location-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LocationListComponent,
    LocationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    LocationRoutingModule,
    FormsModule
  ],
  providers: [ LocationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
