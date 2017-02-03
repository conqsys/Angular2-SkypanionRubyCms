import { TestBed, inject } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';

describe('a user-info component', () => {
	let component: UserInfoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserInfoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UserInfoComponent], (UserInfoComponent) => {
		component = UserInfoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});