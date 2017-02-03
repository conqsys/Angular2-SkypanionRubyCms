
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { RegistrationModel } from '../shared/model/registration.model';
import { ApiUrl } from '../config.component';
import 'Rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
@Injectable()

export class RegistrationService {

  constructor(private http: Http) {

  }

  public saveRegistration(registerUser:RegistrationModel): Promise<RegistrationModel[]> {
      return this.http
        .post(ApiUrl.baseUrl + 'User/register', registerUser)
        .toPromise()
        .then((res) => res.json() as RegistrationModel[])
        .catch(err => err);
  }
}
