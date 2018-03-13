import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {
  private apiUrl = 'http://localhost:3001/api/';
  showAddLocationBox = true;

  constructor(private http: Http) { }

  getLocations(): Promise<any> {
      return this.http.get(this.apiUrl)
                 .toPromise()
                 .then(this.handleData)
                 .catch(this.handleError);
  }

  getLocation(id: string): Promise<any> {
    return this.http.get(this.apiUrl + id)
                    .toPromise()
                    .then(this.handleData)
                    .catch(this.handleError);
  }

  createLocation(location: any): Promise<any> {
    return this.http.post(this.apiUrl, location)
               .toPromise()
               .then(this.handleData)
               .catch(this.handleError);
  }

  updateLocation(location: any): Promise<any> {
    return this.http
               .put(this.apiUrl, location)
               .toPromise()
               .then(this.handleData)
               .catch(this.handleData);
  }

  deleteLocation(location: any): Promise<any> {
    return this.http
               .delete(this.apiUrl + location._id)
               .toPromise()
               .then(this.handleData)
               .catch(this.handleError);
  }

  private handleData(res: any) {
       const body = res.json();
       console.log(body); // for development purposes only
       return body || {};
   }

 private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for development purposes only
     return Promise.reject(error.message || error);
 }

}
