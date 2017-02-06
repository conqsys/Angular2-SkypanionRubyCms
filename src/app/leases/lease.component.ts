import { Component, OnInit } from '@angular/core';
import { LeaseModel } from '../shared/model/lease.model';
import { LeaseService } from './lease.service';
import { CurrentPageArguments } from '../pagination/pagination.component';
var App = require('../../public/oneui/assets/js/app.js');

@Component({
	selector: 'lease',
	templateUrl: 'lease.component.html'
})

export class LeaseComponent implements OnInit {

	leases: LeaseModel[] = [];
	links: string[] = [];
	private pageName = 'Lease';
	private totalItems: number;
	private occupant: Array<any> = [];
	private selectedOccupant: number;
	private _currentPage: CurrentPageArguments = new CurrentPageArguments();
	constructor(public leaseService: LeaseService) {
		this.getLeases();
		this.generateOccupantList();
	}

	ngOnInit() {
	}
	ngAfterViewInit() {

    App.init('uiBlocks');
  }
	private get currentPageFiltered(): CurrentPageArguments {
		return this._currentPage;
	}

	private set currentPageFiltered(newValue: CurrentPageArguments) {
		this._currentPage = newValue;
		this.getLeases();
	}

	getLeases(): void {

		this.leaseService.getLeases(
			this.currentPageFiltered.pageNo,
			this.currentPageFiltered.pageSizeFilter,
			this.selectedOccupant
		).then((res) => {
		
			console.log(res);
			this.leases = res.Data;
			this.totalItems = res.TotalRecords;
		})
	}
	private generateOccupantList(): void {
		this.occupant.push({ label: 'Select Occupant Type', value: 0 });
		this.occupant.push({ label: 'Unknow', value: 1});
		this.occupant.push({ label: 'Current', value: 2 });
		this.occupant.push({ label: 'Former', value: 3 });
		this.occupant.push({ label: 'Future', value:4 });

	}
	private onCurrentPageChanged(newValue: CurrentPageArguments) {
		this.currentPageFiltered = newValue;
		console.log(this.currentPageFiltered);
	}
	private filterLeaseDetail(): void {
		this.getLeases();
	}
	private clearFilterDetail(): void {
		this.selectedOccupant = 0;
		this.getLeases();
	}
}