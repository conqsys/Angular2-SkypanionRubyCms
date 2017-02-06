import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmenitiesModel } from '../../shared/model/amenities.model';
import { AmenitiesService } from '../amenities.service';
var App = require('../../../assets/public/oneui/assets/js/app.js');

@Component({
  selector: 'amenity-edit',
  templateUrl: 'amenity-edit.component.html',
  styleUrls: ['amenity-edit.component.css']
})

export class AmenityEditComponent implements  AfterViewInit {

  private reqMsg: string = 'can' + 't be blank';

  private Id: number;
  private validateCheck: boolean = false;
  // private isValidateName: boolean = false;
  //  private isValidateIcon: boolean= false;
  private amenity: AmenitiesModel = new AmenitiesModel();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private amenitiesService: AmenitiesService) {
  //  this.amenity.Description = `<p></p>`;
    this.getParameterValue();
  }

  ngAfterViewInit() {
    App.init('uiBlocks');
     setTimeout(() => {
    this.getAmenityDetail();
     },200)
  }

  public getParameterValue(): void {
    // this.route.params.subscribe((params) => {
    this.Id = this.route.params['value'].Id;

    //  });

  }
  public getAmenityDetail(): void {
    this.amenitiesService.getAmenityDetails(this.Id).then(result => {
      if (result) {
        this.amenity = result;
        console.log(this.amenity);
      }
    });
  }

  public get validateDetail(): boolean {
    if (this.isValidateName && this.isValidateIcon) {
      return true;
    } else {
      return false;
    }
  }

  public get isValidateName(): boolean {
    let validate = this.amenity.Name ? true : false;
    return validate;
  }

  public get isValidateIcon(): boolean {
    let validate = this.amenity.Icon ? true : false;
    return validate;
  }

  public saveAmenityDetail(): void {
    this.validateCheck = true;
    console.log(this.amenity);
    if (this.validateDetail) {
      this.amenitiesService.saveAmenityDetail(this.amenity).then((res) => {
        if (res) {
          this.router.navigate(['/amenities']);
        }
      })
    }
  }
}