import { TestBed, inject } from '@angular/core/testing';

import { AmenityDetailComponent } from './amenity-detail.component';

describe('a amenity-detail component', () => {
	let component: AmenityDetailComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AmenityDetailComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AmenityDetailComponent], (AmenityDetailComponent) => {
		component = AmenityDetailComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});