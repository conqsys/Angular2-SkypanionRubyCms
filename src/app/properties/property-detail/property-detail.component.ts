import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyModel } from '../../shared/model/property.model';
import { PropertyService } from '../property.service';

@Component({
	selector: 'property-detail',
	templateUrl: 'property-detail.component.html'
})
export class PropertyDetailComponent implements OnInit {

	 private Id: number;
	 private property: PropertyModel=new PropertyModel();
	constructor(
	 	  private route: ActivatedRoute,
	  	private router: Router,
	  	public propertyService: PropertyService
	) {

	}
	ngOnInit() {
		 this.getParameterValue();
	}
	public getParameterValue(): void {
		this.Id = this.route.params['value'].Id;
		this.getPropertiesValue();
	}
	public getPropertiesValue(): void {
		this.propertyService.getPropertyDetail(this.Id).then(result => {
			this.property = result;
		});
	}

}