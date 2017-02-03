
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { UnitModel } from '../shared/model/unit.model';
import { PropertyModel } from '../shared/model/property.model';
import { ApiUrl } from '../config.component';
import 'Rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import {BaseDataModel} from '../shared/model/base-data.model'
@Injectable()

export class PropertyService {

 

  constructor(private http: Http) {

  }

  public getPropertiesSelector() : Promise<PropertyModel[]>  {
    // let headers = new Headers();
    // this.createAuthorizationHeader(headers);
    return this.http
      .get(ApiUrl.baseUrl + 'PropManProperties/PropManPropertiesSelector')
      .toPromise()
      .then((res) => res.json() as PropertyModel[])
      .catch(err => err);
  }

  public getProperties(
      pageNo,
      pageSizeFiltered,
      selectedPublish,
      selectedCommercial,
      propertyName,
      propertyNumber
  ) : Promise<BaseDataModel<PropertyModel>>{
    // let headers = new Headers();
    // this.createAuthorizationHeader(headers);
    console.log('pageno'+pageNo)
    console.log('pageSize'+pageSizeFiltered);
    return this.http
      .get(ApiUrl.baseUrl + 'PropManProperties/properties?pageNo='
      + pageNo
      + '&pageSize='
      + pageSizeFiltered
      + '&Published='
      + selectedPublish
      + '&type='
      + selectedCommercial
      + '&Name='
      + propertyName
      + '&Number='
      + propertyNumber
      )
      .toPromise()
      .then((res) => res.json() as  BaseDataModel<PropertyModel>)
      .catch(err => err);
  }
  public getPropertyDetail(Id: number): Promise<PropertyModel> {
    return this.http
      .get(ApiUrl.baseUrl + 'PropManProperties/' +Id)
      .toPromise()
      .then((res) => res.json() as PropertyModel)
      .catch(err => err);
  }

   public savePropertyDetail(property): Promise<PropertyModel> {
    if (property.Id != 0) {
      return this.http
        .put(ApiUrl.baseUrl + 'PropManProperties', property)
        .toPromise()
        .then((res) => res.json() as PropertyModel)
        .catch(err => err);
    } 
  }
  // public getAmenityDetails(id: number): Promise<AmenitiesModel> {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   return this.http
  //     .get(ApiUrl.baseUrl + 'PropManAmenities/' + id, { headers: headers })
  //     .toPromise()
  //     .then((res) => res.json() as AmenitiesModel)
  //     .catch(err => err);
  // }

  // public destroyAmenity(Id: number): Promise<AmenitiesModel> {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   return this.http
  //     .get(ApiUrl.baseUrl + 'PropManAmenities/' + Id, { headers: headers })
  //     .toPromise()
  //     .then((res) => res.json() as AmenitiesModel)
  //     .catch(err => err);
  // }

  // public saveAmenityDetail(amenity): Promise<AmenitiesModel[]> {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   //let amenityDetail=JSON.stringify(amenity);
  //   // console.log('save data'+amenityDetail);
  //   if (amenity.Id != 0) {
  //     return this.http
  //       .put(ApiUrl.baseUrl + 'PropManAmenities', amenity, { headers: headers })
  //       .toPromise()
  //       .then((res) => res.json() as AmenitiesModel[])
  //       .catch(err => err);
  //   } else {
  //     return this.http
  //       .post(ApiUrl.baseUrl + 'PropManAmenities', amenity, { headers: headers })
  //       .toPromise()
  //       .then((res) => res.json() as AmenitiesModel[])
  //       .catch(err => err);
  //   }
  // }
}
