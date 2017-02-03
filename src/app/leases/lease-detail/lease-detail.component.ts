import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LeaseModel } from '../../shared/model/lease.model';
import { LeaseService } from '../lease.service';
@Component({
	selector: 'lease-detail',
	templateUrl: 'lease-detail.component.html',
	styleUrls: ['lease-detail.component.css']
})
export class LeaseDetailComponent implements OnInit {

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

	getLease() {
		this.leaseService.getLease(this.Id).then(result => {
			console.log('lease is ');
			console.log(result);
      this.lease = result;
    });
	}
}