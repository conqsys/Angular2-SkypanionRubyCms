import { Component, OnInit } from '@angular/core';

import { UsersModel } from '../../shared/model/users.model';

@Component({
	selector: 'user-info',
	templateUrl: 'user-info.component.html',
	styleUrls: ['user-info.component.css']
})

export class UserInfoComponent implements OnInit {

	isEdit: boolean = false;
	
	user: UsersModel;

	ngOnInit() {
		
	}


}