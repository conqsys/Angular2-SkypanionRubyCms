import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { UnitModel } from '../shared/model/unit.model';
import { ApiUrl } from '../../config.component';

declare var $: any;

@Injectable()
export class UploadService {
    requestUrl: string;
    responseData: any;
    handleError: any;
    formData: any;

    constructor(private router: Router,
        private http: Http
    ) {      
        this.http = http;
    }
    public makeFileRequest(url, files): Promise<any> {
        console.log(files);
        return new Promise((resolve, reject) => {
            
           let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
               formData.append("files", files[i], files[i].name);
            }
            console.log(files[0]);
        //     var ob = { Description: '1' }
        //    formData.append('updateUnit', JSON.stringify(ob));
           
          console.log(formData);
            xhr.open("PUT",ApiUrl.baseUrl.toString() , true);
            xhr.setRequestHeader('Content-Type', 'application/json, charset=utf-8')
            xhr.send(JSON.stringify(formData));

        });
    }
}