import { TestBed, inject } from '@angular/core/testing';

import { AmenitiesComponent } from './amenities.component';

describe('a amenities component', () => {
	let component: AmenitiesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AmenitiesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AmenitiesComponent], (AmenitiesComponent) => {
		component = AmenitiesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});