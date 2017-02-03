import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../shared/model/users.model';
@Component({
	selector: 'user-detail',
	templateUrl: 'user-detail.component.html',
	styleUrls: ['user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	user: UsersModel;
	constructor() {
		this.user = new UsersModel();
	}

	ngOnInit() {
		// this.getUser();
	}

	// getUser() {
	// 	this.user.Id = 7;
	// 	this.user.Name = 'Tennis Court';
	// 	this.user.Description = '<p>Play some tennis</p>';
	// 	this.user.Icon = 'fa-tencent-weibo';
	// 	this.user.EntityUsers = [];

	// }
}