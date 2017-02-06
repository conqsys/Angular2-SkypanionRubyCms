import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsersModel } from '../shared/model/users.model';
import { UsersService } from './users.service';
import { ConfirmService } from '../shared/service/confirm.service';
import { CurrentPageArguments } from '../pagination/pagination.component';
import { Cookie } from 'ng2-cookies/ng2-cookies';
var App = require('../../public/oneui/assets/js/app.js');

@Component({
	selector: 'users',
	templateUrl: 'users.component.html',
	styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, AfterViewInit {

	private users: Array<UsersModel> = [];
	private links: string[] = [];
	private userType: Array<any> = [];
	private status: Array<any> = [];
	private seletectedUserType: string = '';
	private seletectedStatus: boolean = null;
	private pageName = 'users';
	private totalItems: number;
	private _currentPage: CurrentPageArguments = new CurrentPageArguments();
	//private auth: any = {access_token:'s',type:'Portal::Webmaster'};
	private auth: any = {};
	constructor(public usersService: UsersService,
		private confirmService: ConfirmService
	) {

		this.generateUserType();
		this.generateStatusType();
		let auth = JSON.parse(Cookie.get('auth'));
		// if (auth.access_token != undefined) {
		// 	console.log('Auth in User');
		// 	console.log(auth);
		// 	this.auth = auth;
		// }
	}

	ngOnInit() {
		this.getUsers();
	}
	ngAfterViewInit() {

		App.init('uiBlocks');
	}
	private get currentPageFiltered(): CurrentPageArguments {
		return this._currentPage;
	}

	private set currentPageFiltered(newValue: CurrentPageArguments) {
		this._currentPage = newValue;
		this.getUsers();
	}

	getUsers(): void {
		this.usersService.getUsers(
			this.currentPageFiltered.pageNo,
			this.currentPageFiltered.pageSizeFilter,
			this.seletectedUserType,
			this.seletectedStatus).then((data) => {

				console.log(data);
				this.users = data.Data;
				this.totalItems = data.TotalRecords;
			})

	}
	private destroyUserDetail(Id): void {
		let isConfirm = this.confirmService.confirmMessage('Are you sure you' + 'd like to delete?');
		if (isConfirm) {
			this.usersService.destroyUser(Id).then((res) => {
				if (res) {
					this.getUsers();
				}
			}
			)
		}
	}
	private generateUserType(): void {
		this.userType.push({ label: 'Selected User Type', value: '' });
		this.userType.push({ label: 'Webmaster', value: 'Portal::Webmaster' });
		this.userType.push({ label: 'Adminstrator', value: 'Portal::Administrator' });
		this.userType.push({ label: 'Tenant', value: 'PropMan::Tenant' });

	}
	private generateStatusType(): void {
		this.status.push({ label: 'selected status type', value: null });
		this.status.push({ label: 'confirmed', value: true });
		this.status.push({ label: 'unconfirmed', value: false });


	}



	private activateUser = function (userId) {

		this.usersService.activateUser(userId).then((res) => {
			console.log('User Activated')
			console.log(res);
			this.getUsers();
		})
	}
	private clearFilterElement(): void {
		this.seletectedUserType = '';
		this.seletectedStatus = null;
		this.getUsers();
	}
	private filterUser(): void {
		this.getUsers();
	}
	public onCurrentPageChanged(newValue: CurrentPageArguments) {
		this.currentPageFiltered = newValue;
		console.log(this.currentPageFiltered);
	}
}
