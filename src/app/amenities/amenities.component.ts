import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AmenitiesModel } from '../shared/model/amenities.model';
import { AmenitiesService } from './amenities.service';
import { ConfirmService } from '../shared/service/confirm.service';
import { CurrentPageArguments } from '../pagination/pagination.component';
var App = require('../../public/oneui/assets/js/app.js');

@Component({
	selector: 'amenities',
	templateUrl: 'amenities.component.html',
	styleUrls: ['./amenities.component.css']
})

export class AmenitiesComponent implements OnInit, AfterViewInit {

	amenities: AmenitiesModel[] = [];
	links: string[] = [];
	private pageName='amenities';
	private totalItems: number;
	 private _currentPage: CurrentPageArguments = new CurrentPageArguments();
	constructor(public amenitiesService: AmenitiesService,
		private confirmService: ConfirmService
	) {
	
	}

	ngOnInit() {
			this.getAmenities();
	}
	ngAfterViewInit() {

    App.init('uiBlocks');
  }
  private get currentPageFiltered(): CurrentPageArguments {
    return this._currentPage;
  }

  private set currentPageFiltered(newValue: CurrentPageArguments) {
    this._currentPage = newValue;
     this.getAmenities();
  }
	getAmenities(): void {
		this.amenitiesService.getAmenities(this.currentPageFiltered.pageNo
		,this.currentPageFiltered.pageSizeFilter).then((data) => {
			console.log(data);
			this.amenities = data.Data;
			this.totalItems=data.TotalRecords;
		})
	}
	private destroyAmenityDetail(Id): void {
		let isConfirm = this.confirmService.confirmMessage('Are you sure you' + 'd like to delete?');
		if (isConfirm) {
			this.amenitiesService.destroyAmenity(Id).then((res) => {
				if (res) {
					this.getAmenities();
				}
			}
			)
		}
	}

	  public onCurrentPageChanged(newValue: CurrentPageArguments) {
    this.currentPageFiltered = newValue;
		console.log(this.currentPageFiltered);
  }
}