import { Component, OnInit } from '@angular/core';

import { AmenitiesModel } from '../../shared/model/amenities.model';

@Component({
	selector: 'amenity-info',
	templateUrl: 'amenity-info.component.html',
	styleUrls: ['amenity-info.component.css']
})

export class AmenityInfoComponent implements OnInit {

	isEdit: boolean = false;
	
	amenity: AmenitiesModel=new AmenitiesModel();

	ngOnInit() {
		
	}


}