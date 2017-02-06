
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { SiteContentModel } from '../shared/site-content.model';
import { ApiUrl } from '../../config.component';
import 'Rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
@Injectable()

export class SiteContentService {
 

  constructor(private http: Http) {

  }
 

  public getSiteContents(): Promise<SiteContentModel[]> {
		//  let headers = new Headers();
    return this.http
      .get(ApiUrl.baseUrl + 'SitePage/')
      .toPromise()
      .then((res) => res.json() as SiteContentModel[] )
      .catch(err => err);
  }

  public removeSiteContent(Id: number): Promise<any> {
    // let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http
      .get(ApiUrl.baseUrl + 'SitePage/delete/' + Id)
      .toPromise()
      .then((res) => res.json() as any)
      .catch(err => err);
  }
  public getSiteContentByID(Id: number): Promise<any> {
    // let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http
      .get(ApiUrl.baseUrl + 'SitePage/' + Id)
      .toPromise()
      .then((res) => res.json() as any )
      .catch(err => err);
  }
  public saveSiteContents(siteContentModel:SiteContentModel): Promise<any> {
		  if (siteContentModel.Id != 0) {
      return this.http
        .put(ApiUrl.baseUrl + 'SitePage/', siteContentModel)
        .toPromise()
        .then((res) => res.json() as any)
        .catch(err => err);
    } else{
      return this.http
        .post(ApiUrl.baseUrl + 'SitePage/', siteContentModel)
        .toPromise()
        .then((res) => res.json() as any )
        .catch(err => err);
    }
  }
}
