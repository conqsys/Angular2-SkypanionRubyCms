import { Component, OnInit } from '@angular/core';
import { AmenitiesModel } from '../shared/model/amenities.model';
import { AmenitiesService } from './amenities.service';
import { ConfirmService } from '../shared/service/confirm.service';

@Component({
	selector: 'amenities',
	templateUrl: 'amenities.component.html',
	styleUrls: ['./amenities.component.css']
})

export class AmenitiesComponent implements OnInit {

	amenities: AmenitiesModel[] = [];
	links: string[] = [];

	constructor(
		private confirmService: ConfirmService
	) {
		//this.getAmenities();
	}

	ngOnInit() {


	}	

	// getAmenities() {

	// 	this.amenitiesService.getAmenities().subscribe((data) => {
	// 		console.log(data);
	// 		this.amenities = data;
	// 	})
	// }
	// private destroyAmenityDetail(Id): void {
	// 	let isConfirm = this.confirmService.confirmMessage('Are you sure you' + 'd like to delete?');
	// 	if (isConfirm) {
	// 		this.amenitiesService.destroyAmenity(Id).then((res) => {

	// 		}
	// 		)
	// 	}
	// }
}