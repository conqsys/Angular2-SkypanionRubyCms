
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AmenitiesModel, EntityAmenities } from '../shared/model/amenities.model';
import { ApiUrl } from '../config.component';
import 'Rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { BaseDataModel } from '../shared/model/base-data.model'
@Injectable()

export class AmenitiesService {

  constructor(private http: Http) {

  }
  public getAmenities(pageNo, pageSizeFilter): Promise<BaseDataModel<AmenitiesModel>> {
    return this.http
      .get(ApiUrl.baseUrl + 'PropManAmenities?pageNo=' + pageNo
      + '&pageSize=' + pageSizeFilter
      )
      .toPromise()
      .then(res => res.json() as BaseDataModel<AmenitiesModel>)
      .catch(err => err);
  }
  public getAmenityDetails(id: number): Promise<AmenitiesModel> {
    let headers = new Headers();
    return this.http
      .get(ApiUrl.baseUrl + 'PropManAmenities/' + id)
      .toPromise()
      .then((res) => res.json() as AmenitiesModel)
      .catch(err => err);
  }
  public getAmenitySelector(): Promise<any> {
    return this.http
      .get(ApiUrl.baseUrl + 'PropManAmenities/PropManAmenitiesSelector')
      .toPromise()
      .then((res) => res.json() as any)
      .catch(err => err);
  }
  public destroyAmenity(Id: number): Promise<AmenitiesModel> {
    return this.http
      .get(ApiUrl.baseUrl + 'PropManAmenities/' + Id)
      .toPromise()
      .then((res) => res.json() as AmenitiesModel)
      .catch(err => err);
  }

  public getEntityAmenities(Id: number): Promise<EntityAmenities[]> {
    return this.http
      .get(ApiUrl.baseUrl + 'PropManAmenityEntity/PropManEntityAmenitiesByPropId?propID=' + Id)
      .toPromise()
      .then((res) => res.json() as EntityAmenities[])
      .catch(err => err);

  }

  public saveAmenityDetail(amenity): Promise<AmenitiesModel> {
    if (amenity.Id != 0) {
      return this.http
        .put(ApiUrl.baseUrl + 'PropManAmenities', amenity)
        .toPromise()
        .then((res) => res.json() as AmenitiesModel)
        .catch(err => err);
    } else {
      return this.http
        .post(ApiUrl.baseUrl + 'PropManAmenities', amenity)
        .toPromise()
        .then((res) => res.json() as AmenitiesModel)
        .catch(err => err);
    }
  }
}
