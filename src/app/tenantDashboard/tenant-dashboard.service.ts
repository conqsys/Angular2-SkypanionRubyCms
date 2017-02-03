
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { LeaseModel } from '../shared/model/lease.model';
import { ApiUrl } from '../config.component';
import 'Rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
@Injectable()

export class TenantDashboardService {
 
  constructor(private http: Http) {

  }

  public getDashboardDetails():Promise<LeaseModel> {
    return this.http
      .get(ApiUrl.baseUrl + 'User/leasebytenant')
      .toPromise()
      .then((res) => res.json() as LeaseModel)
      .catch(err => err);
  }

}
