import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmenitiesModel, EntityAmenities } from '../../shared/model/amenities.model';
import { AmenitiesService } from '../amenities.service';
var App = require('../../../public/oneui/assets/js/app.js');
@Component({
  selector: 'amenity-detail',
  templateUrl: 'amenity-detail.component.html',
  styleUrls: ['amenity-detail.component.css']
})
export class AmenityDetailComponent implements OnInit, AfterViewInit {

  amenity: AmenitiesModel = new AmenitiesModel();

  private Id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private amenitiesService: AmenitiesService
  ) {
    
  }

  ngOnInit() {
    this.getParameterValue();

  }
ngAfterViewInit() {

    App.init('uiBlocks');
  }
  public getParameterValue(): void {
    this.Id = this.route.params['value'].Id;
    this.getAmenityDetail();
    
  }

  public getAmenityDetail(): void {
    this.amenitiesService.getAmenityDetails(this.Id).then(result => {
      console.log("Amenity Result")
      if (result) {
        console.log("Amenity Result")
        console.log(result)
        this.amenity = result;
        this.amenity.EntityAmenities=[];
        this.getEntityAmenitiesDetail();
      }
    });
  }

  public getEntityAmenitiesDetail(): void {
    this.amenitiesService.getEntityAmenities(this.Id).then((res) => {
      if (res) {
       this.amenity.EntityAmenities = res;
       
      }
    })

  }

}