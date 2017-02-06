import { Component, OnInit, Input } from '@angular/core';
import { UnitModel } from '../../shared/model/unit.model';
import { UnitService } from './index';
import { CurrentPageArguments } from '../../pagination/pagination.component';
@Component({
	selector: 'property-unit-detail',
	templateUrl: 'property-unit-detail.component.html'
})
export class PropertyUnitDetailComponent implements OnInit {

	@Input() propertyId: number;
	vacancy: Array<any> = new Array();
	publish: Array<any> = new Array();
	selectedPublish: boolean = null;
	selectedVacancy: boolean = null;
	unitNumber: string = '';
	units: Array<UnitModel> = [];
	private pageName = 'unit';
	private totalItems: number;
	private _currentPage: CurrentPageArguments = new CurrentPageArguments();
	constructor(
		private unitService: UnitService
	) {
		this.generatePublishDetail();
		this.generateVacancyDetail();
	}

	private get currentPageFiltered(): CurrentPageArguments {
		return this._currentPage;
	}

	private set currentPageFiltered(newValue: CurrentPageArguments) {
		this._currentPage = newValue;
		this.filteredPropertyDetail();
	}
	ngOnInit() {
		this.filteredPropertyDetail();
	}

	
	private filteredPropertyDetail(): void {
		this.unitService.getUnitDetails(
			this.currentPageFiltered.pageNo,
			this.currentPageFiltered.pageSizeFilter,
			this.selectedPublish,
			this.selectedVacancy,
			this.propertyId,
			this.unitNumber).then((res) => {
				this.units = res.Data;
				this.totalItems = res.TotalRecords;
				console.log(this.selectedPublish, this.selectedVacancy, this.propertyId, this.unitNumber);
				console.log(this.units);
			})
	}

	public generatePublishDetail(): void {
		this.publish.push({ label: 'Select Publishing', value: null });
		this.publish.push({ label: 'Published', value: false });
		this.publish.push({ label: 'Unpublished', value: true });
	}
	public generateVacancyDetail(): void {
		this.vacancy.push({ label: 'Select vacancy', value: null });
		this.vacancy.push({ label: 'Vacant', value: true });
		this.vacancy.push({ label: 'Occupied', value: false });
	}
	public onCurrentPageChanged(newValue: CurrentPageArguments) {
		this.currentPageFiltered = newValue;
		console.log(this.currentPageFiltered);
	}



}