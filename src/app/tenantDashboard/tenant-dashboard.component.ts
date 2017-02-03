import { Component, OnInit } from '@angular/core';
import { LeaseModel } from '../shared/model/lease.model';
import { TenantDashboardService } from './tenant-dashboard.service';
import { ConfirmService } from '../shared/service/confirm.service';

@Component({
	selector: 'app-tenant-dashboard',
	templateUrl: 'tenant-dashboard.component.html',
	styleUrls: ['./tenant-dashboard.component.css']
})

export class TenantDashboardComponent implements OnInit {

	tenantDashboard: LeaseModel=new LeaseModel() ;
	links: string[] = [];

	constructor(
		private confirmService: ConfirmService,
		private tenantDashboardService: TenantDashboardService
	) {
		this.getDashboardDetails();
	}

	ngOnInit() {


	}

	getDashboardDetails() {
		this.tenantDashboardService.getDashboardDetails().then((data) => {
			console.log(data);
			this.tenantDashboard = data;
		})
	}

}