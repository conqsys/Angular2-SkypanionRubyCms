import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { PropertyModel } from '../shared/model/property.model';
import { PropertyService } from './property.service';
import { SelectItem } from 'primeng/primeng';
import { CurrentPageArguments } from '../pagination/pagination.component';
var App = require('../../assets/public/oneui/assets/js/app.js');

@Component({
  selector: 'app-properties',
  styleUrls: ['./property.component.css'],
  templateUrl: './property.component.html'
})
export class PropertyComponent implements OnInit, AfterViewInit {

  private properties: Array<PropertyModel> = [];
  private cities: SelectItem[];
  private selectedCity: string;
  private publish: Array<any> = new Array();
  private commercial: Array<any> = [];
  private selectedPublish: boolean = null;
  private selectedCommercial: string = '';
  private propertyName: string = '';
  private propertyNumber: number = null;
  private pageName = 'property';
  private totalItems: number;
  private _currentPage: CurrentPageArguments = new CurrentPageArguments();
  constructor(public propertyService: PropertyService) {
    this.generatePublishDetail();
    this.generatePropertyType();
       this.getProperties();
  }

  public ngOnInit() {
    this.getProperties();
  }
  ngAfterViewInit() {

    App.init('uiBlocks');
  }
  private get currentPageFiltered(): CurrentPageArguments {
    return this._currentPage;
  }

  private set currentPageFiltered(newValue: CurrentPageArguments) {
    this._currentPage = newValue;
     this.getProperties();
  }

  private generatePublishDetail(): void {
    this.publish.push({ label: 'Select Publishing', value: null });
    this.publish.push({ label: 'Published', value: false });
    this.publish.push({ label: 'Unpublished', value: true });
  }
  private generatePropertyType(): void {
    this.commercial.push({ label: 'Selected Property Type', value: null });
    this.commercial.push({ label: 'Commercial Property', value: 'PropMan::CommercialProperty' });
    this.commercial.push({ label: 'Residential Property', value: 'PropMan::ResidentialProperty' });
  }

  private getProperties(): void {
    this.propertyService.getProperties(
      this.currentPageFiltered.pageNo,
      this.currentPageFiltered.pageSizeFilter,
      this.selectedPublish,
      this.selectedCommercial,
      this.propertyName,
      this.propertyNumber
    ).then((res) => {
       console.log(res);
      if (res.Data) {
        this.properties = res.Data;
        this.totalItems = res.TotalRecords;
      }
    })
  }

  private clearFiltered(): void {
    this.propertyNumber = null;
    this.propertyName = '';
    this.selectedPublish = null;
    this.selectedCommercial = '';
  }

  public submitState(value: string) {
    console.log('submitState', value);

  }

  public onCurrentPageChanged(newValue: CurrentPageArguments) {
    this.currentPageFiltered = newValue;
    console.log(this.currentPageFiltered);
  }
}
