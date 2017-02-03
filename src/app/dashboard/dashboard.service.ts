
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AmenitiesModel } from '../shared/model/amenities.model';
import { ApiUrl } from '../config.component';
import 'Rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
@Injectable()

export class AmenitiesService {
 

  constructor(private http: Http) {

  }
 
  public getAmenities() {

   
    
    return this.http
      .get(ApiUrl.baseUrl + 'PropManAmenities')
      .map(res => res.json());
  }
  public getAmenityDetails(id: number): Promise<AmenitiesModel> {
    let headers = new Headers();
   // this.createAuthorizationHeader(headers);
    return this.http
      .get(ApiUrl.baseUrl + 'PropManAmenities/' + id)
      .toPromise()
      .then((res) => res.json() as AmenitiesModel)
      .catch(err => err);
  }

  public destroyAmenity(Id: number): Promise<AmenitiesModel> {
    let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http
      .get(ApiUrl.baseUrl + 'PropManAmenities/' + Id)
      .toPromise()
      .then((res) => res.json() as AmenitiesModel)
      .catch(err => err);
  }

  public saveAmenityDetail(amenity): Promise<AmenitiesModel[]> {
    let headers = new Headers();
   
    //let amenityDetail=JSON.stringify(amenity);
    // console.log('save data'+amenityDetail);
    if (amenity.Id != 0) {
      return this.http
        .put(ApiUrl.baseUrl + 'PropManAmenities', amenity)
        .toPromise()
        .then((res) => res.json() as AmenitiesModel[])
        .catch(err => err);
    } else {
      return this.http
        .post(ApiUrl.baseUrl + 'PropManAmenities', amenity)
        .toPromise()
        .then((res) => res.json() as AmenitiesModel[])
        .catch(err => err);
    }
  }
}
