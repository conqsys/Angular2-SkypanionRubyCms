import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { UnitModel, UnitFilteredArguments } from '../shared/model/unit.model';
import { SelectItem } from 'primeng/primeng';
import { UnitService } from './unit.service';
import { PropertyService } from '../properties/property.service';
import { CurrentPageArguments } from '../pagination/pagination.component';
var App = require('../../assets/public/oneui/assets/js/app.js');

@Component({
  selector: 'app-unit',
  styleUrls: ['./unit.component.css'],
  templateUrl: './unit.component.html'
})
export class UnitComponent implements OnInit, AfterViewInit {

  units: UnitModel[] = [];
  properties: Array<any> = new Array();
  publish: Array<any> = new Array();
  vacancy: Array<any> = new Array();
  selectedPublish: boolean = null;
  selectedVacancy: boolean = null;
  selectedProperty: number = null;
  unitNumber: string = '';
  private pageName = 'unit';
  private totalItems: number;
  private _currentPage: CurrentPageArguments = new CurrentPageArguments();

  constructor(

    private unitService: UnitService,
    private propertyService: PropertyService
  ) {
    this.generatePropertyDetail();
    this.generatePublishDetail();
    this.generateVacancyDetail();
  }
  ngAfterViewInit() {

    App.init('uiBlocks');
  }
  private get currentPageFiltered(): CurrentPageArguments {
    return this._currentPage;
  }

  private set currentPageFiltered(newValue: CurrentPageArguments) {
    this._currentPage = newValue;
    this.filteredUnitsDetail();
  }
  public generatePropertyDetail(): void {
    let defaultProperty = { label: 'select property', value: null };
    this.propertyService.getPropertiesSelector().then((res) => {
      this.properties.splice(0, 0, defaultProperty);
      res.map((property) => {
        this.properties.splice(this.properties.length, 0, property);
      })
      // console.log(this.properties);
    })
  }

  public generatePublishDetail(): void {
    this.publish.push({ label: 'Select Publishing', value: null });
    this.publish.push({ label: 'Published', value: true });
    this.publish.push({ label: 'Unpublished', value: false });
  }
  public generateVacancyDetail(): void {
    this.vacancy.push({ label: 'Select vacancy', value: null });
    this.vacancy.push({ label: 'Vacant', value: true });
    this.vacancy.push({ label: 'Occupied', value: false });
  }

  public ngOnInit() {
    // this.defaultUnits();
    this.filteredUnitsDetail();

  }

  filteredUnitsDetail() {
    this.unitService.getUnitDetails(
      this.currentPageFiltered.pageNo,
      this.currentPageFiltered.pageSizeFilter,
      this.selectedPublish,
      this.selectedVacancy,
      this.selectedProperty,
      this.unitNumber
    ).then((res) => {

      this.units = res.Data;
      this.totalItems = res.TotalRecords;

    })
  }
  pageChangeHandler(): void {
    console.log('page handeler');
  }

  public submitState(value: string): void {
    console.log('submitState', value);

  }
  public onCurrentPageChanged(newValue: CurrentPageArguments) {
    this.currentPageFiltered = newValue;
    console.log(this.currentPageFiltered);
  }
}
