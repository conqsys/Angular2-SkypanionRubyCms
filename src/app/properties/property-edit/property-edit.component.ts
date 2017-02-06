import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PropertyModel } from './index';
import { PropertyService } from '../property.service';
import { AmenitiesService } from '../../amenities/amenities.service';
var App = require('../../../assets/public/oneui/assets/js/app.js');
@Component({
	selector: 'property-edit',
	templateUrl: 'property-edit.component.html',
	styleUrls: ['property-edit.component.css']
})

export class PropertyEditComponent implements OnInit, AfterViewInit {

	private Id: number;
	private property: PropertyModel = new PropertyModel();
	private validateCheck: boolean = false;
	private AmenitySelector: Array<any> = [];
	private selectedAmenity: string[] = [];
	private bannerFileName: String = '';
	private bannerFileImage: String = '';
	private tileFileName: String = '';
	private tileFileImage: String = '';
	private description: string = '';
	public isPublished: boolean = false;
	constructor(private route: ActivatedRoute,
		private propertyService: PropertyService,
		private amenitiesService: AmenitiesService,
		private router: Router) {

	}
	ngOnInit() {
		this.getParameterValue();
	}
	ngAfterViewInit() {

    App.init('uiBlocks');
  }
	private getParameterValue(): void {
		this.Id = this.route.params['value'].Id;
		this.getAmenitySelector();

	}
	private getAmenitySelector(): void {
		this.amenitiesService.getAmenitySelector().then((res) => {
			this.AmenitySelector = res;
		})

		this.getPropertyDetail();
	}
	private getPropertyDetail(): void {
		this.propertyService.getPropertyDetail(this.Id).then(result => {
			this.property = result;
			if (this.property.Published != null) {
				this.isPublished = true;
			} else {
				this.isPublished = false;
			}

		});
	}

	public fileChangeEvent(fileInput: any, isTile: boolean): void {
		console.log(fileInput);
		var FR = new FileReader();
		FR.onload = (e) => {
			if (isTile) {
				this.tileFileName = fileInput.target.files[0].name;
				this.tileFileImage = (e.target as any).result;
				console.log(this.tileFileName);
			} else {
				this.bannerFileName = fileInput.target.files[0].name;
				this.bannerFileImage = (e.target as any).result;
			}
		};
		FR.readAsDataURL(fileInput.target.files[0]);
	}

	private saveProperty(): void {
		let propertyData = {
			Id: this.Id,
			Banner: this.bannerFileName,
			BannerData: this.bannerFileImage,
			Tile: this.tileFileName,
			TileData: this.tileFileImage,
			IsPublished: this.isPublished,
			Description: this.description,
			SelectedAmenity: this.selectedAmenity
		};
		this.propertyService.savePropertyDetail(propertyData).then((res) => {
			// 	console.log(res);
			this.router.navigate(['/properties/' + this.Id]);
		})
	}
	private backtoProperty(): void {
	
		this.router.navigate(['/properties']);
	}
}