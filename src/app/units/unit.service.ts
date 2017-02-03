import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { UnitModel } from '../shared/model/unit.model';
import { LeaseModel } from '../shared/model/lease.model';
import { ApiUrl } from '../config.component';
import 'Rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import {BaseDataModel} from '../shared/model/base-data.model';
@Injectable()

export class UnitService {
	
	constructor(private http: Http) {

	}

	getUnitDetails(pageNo,
	  pageSizeFilter,
	  selectedPublish,
		selectedVacancy,
		selectedProperty,
		unitNumber
	) : Promise<BaseDataModel<UnitModel>> {
		let headers = new Headers();
		console.log(selectedPublish);
		console.log(selectedVacancy);
		console.log(selectedProperty);
		console.log(unitNumber);
		return this.http
			.get(ApiUrl.baseUrl + 'PropManUnits/units?pageNo='
			+ pageNo
      +'&pageSize='+pageSizeFilter
			+'&propId='
			+ 2
			+ '&vacant='
			+ selectedVacancy
			+ '&published='
			+ selectedPublish
			+ '&number='
			+ unitNumber)
			.toPromise()
			.then((res) => res.json() as  BaseDataModel<UnitModel>)
			.catch(err => err);

	}
	getUnitDetail(unitId) {
		return this.http
			.get(ApiUrl.baseUrl + 'PropManUnits/GetUnitById?unitId=' + unitId)
			.toPromise()
			.then((res) => res.json() as UnitModel)
			.catch(err => err);
	}
	getLeases(unitId) {
		return this.http
			.get(ApiUrl.baseUrl + 'PropManLeases/LeasesByUnitId?unitId=6268')
			.toPromise()
			.then((res) => res.json() as LeaseModel[])
			.catch(err => err);
	}
	public updateUnit(unit): Promise<UnitModel> {
		//	let headers = new Headers();
		//this.createAuthorizationHeader(headers);
		//let amenityDetail=JSON.stringify(amenity);
		// console.log('save data'+amenityDetail);
		console.log('Unit data is ');
		console.log(unit);
		return this.http
			.put(ApiUrl.baseUrl + 'PropManUnits', unit)
			.toPromise()
			.then((res) => res.json() as UnitModel)
			.catch(err => err);

	}
}