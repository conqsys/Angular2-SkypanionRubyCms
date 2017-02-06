import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyModel } from '../../shared/model/property.model';
import { PropertyService } from '../property.service';
var App = require('../../../public/oneui/assets/js/app.js');
@Component({
	selector: 'property-detail',
	templateUrl: 'property-detail.component.html'
})
export class PropertyDetailComponent implements OnInit,AfterViewInit {

	 private Id: number;
	 private property: PropertyModel=new PropertyModel();
	constructor(
	 	  private route: ActivatedRoute,
	  	private router: Router,
	  	public propertyService: PropertyService
	) {
 this.getParameterValue();
	}
	ngOnInit() {
		
	}
	ngAfterViewInit() {
    App.init('uiBlocks');
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