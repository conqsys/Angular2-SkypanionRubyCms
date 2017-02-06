import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LeaseModel } from '../../shared/model/lease.model';
import { LeaseService } from '../lease.service';
var App = require('../../../assets/public/oneui/assets/js/app.js');
@Component({
	selector: 'lease-detail',
	templateUrl: 'lease-detail.component.html',
	styleUrls: ['lease-detail.component.css']
})
export class LeaseDetailComponent implements OnInit,AfterViewInit {

	lease: LeaseModel;
	private Id: number;
	constructor(private route: ActivatedRoute,
    public leaseService: LeaseService) {
		this.lease = new LeaseModel();
		this.Id = this.route.params['value'].Id;
	  this.getLease();
	}

	ngOnInit() {
	
	}
	ngAfterViewInit() {

    App.init('uiBlocks');
  }

	getLease() {
		this.leaseService.getLease(this.Id).then(result => {
			console.log('lease is ');
			console.log(result);
      this.lease = result;
    });
	}
}