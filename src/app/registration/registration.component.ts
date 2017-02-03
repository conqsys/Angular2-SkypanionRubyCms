import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../shared/model/registration.model';
import { RegistrationService } from './registration.service';
import { ConfirmService } from '../shared/service/confirm.service';

@Component({
	selector: 'registration',
	templateUrl: 'registration.component.html',
	styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

	registration: RegistrationModel;
	links: string[] = [];

	constructor(public registrationService: RegistrationService,
		private confirmService: ConfirmService
	) {
	}

	ngOnInit() {

this.registration=new RegistrationModel();
	}	

	
	private registerUser(): void {
			this.registrationService.saveRegistration(this.registration).then((res) => {
			}
			)
	}
}