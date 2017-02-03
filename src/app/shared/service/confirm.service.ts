import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ConfirmService {
	constructor(private http: Http) {
	}

	confirmMessage(message: string) {
		let isConfirm = confirm(message);
		return isConfirm;
	}
}
