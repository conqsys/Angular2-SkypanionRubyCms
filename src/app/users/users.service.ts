
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { UsersModel } from '../shared/model/users.model';
import {BaseDataModel} from '../shared/model/base-data.model';
import { ApiUrl } from '../config.component';
import 'Rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
@Injectable()

export class UsersService {
  

  constructor(private http: Http) {

  }


  public getUsers(pageNo,pageSizeFilter,seletectedUserType, seletectedStatus): Promise<BaseDataModel<UsersModel>> {
    console.log()
    return this.http
      .get(ApiUrl.baseUrl + 'User/GetAllUsers?pageNo='
      +pageNo
      +'&pageSize='
      +pageSizeFilter
      +'&confirmationstatus='
      + seletectedStatus 
      + '&type=' + seletectedUserType)
      .toPromise()
      .then(res => res.json() as BaseDataModel<UsersModel>)
      .catch(err => err)
  }
  public getUserDetails(id: number): Promise<UsersModel> {
    let headers = new Headers();
    return this.http
      .get(ApiUrl.baseUrl + 'User/GetUserById?userId=' + id)
      .toPromise()
      .then((res) => res.json() as UsersModel)
      .catch(err => err);
  }

  public destroyUser(Id: number): Promise<UsersModel> {
    return this.http
      .get(ApiUrl.baseUrl + 'User/' + Id)
      .toPromise()
      .then((res) => res.json() as UsersModel)
      .catch(err => err);
  }
  public activateUser(Id: number): Promise<boolean> {

    return this.http
      .post(ApiUrl.baseUrl + 'User/' + Id + '/enable',null)
      .toPromise()
      .then((res) => res.json() as boolean)
      .catch(err => err);
  }

  public saveUserDetail(user): Promise<UsersModel> {
    console.log(user);
    if (user.Id != 0) {
      return this.http
        .put(ApiUrl.baseUrl + 'User', user)
        .toPromise()
        .then((res) => res.json() as UsersModel)
        .catch(err => err);
    } else {
      return this.http
        .post(ApiUrl.baseUrl + 'User', user)
        .toPromise()
        .then((res) => res.json() as UsersModel)
        .catch(err => err);
    }
  }
}
