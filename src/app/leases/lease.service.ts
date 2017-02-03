
import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { LeaseModel } from '../shared/model/lease.model';
import {BaseDataModel} from '../shared/model/base-data.model'
import { ApiUrl } from '../config.component';
import 'Rxjs/Rx';
import 'rxjs/add/operator/map'
@Injectable()

export class LeaseService {
  public Url= 'http://192.168.1.207:5000/api/';
 
  constructor(private http: Http) {

  }
  public getLeases(pageNo,pageSizeFilterd,selectedOccupant) :Promise<BaseDataModel<LeaseModel>> {

    return this.http
      .get(ApiUrl.baseUrl + 'PropManLeases?pageNo='+pageNo+'&pageSize='+pageSizeFilterd+'&occType='+selectedOccupant)
      .toPromise()
      .then(res => res.json() as BaseDataModel<LeaseModel>)
      .catch(err=>err)
  }
  public getLease(Id: number): Promise<LeaseModel>  {

    return this.http
      .get(ApiUrl.baseUrl + 'PropManLeases/' + Id)
      .toPromise()
      .then((res) => res.json() as LeaseModel)
      .catch(err => err);
  }
}
