import { TestBed, inject } from '@angular/core/testing';

import { UnitDetailComponent } from './unit-detail.component';

describe('a unit-detail component', () => {
//	let component: UnitDetailComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UnitDetailComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UnitDetailComponent], (UnitDetailComponent) => {
	//	component = UnitDetailComponent;
	}));

	it('should have an instance', () => {
	//	expect(component).toBeDefined();
	});
});