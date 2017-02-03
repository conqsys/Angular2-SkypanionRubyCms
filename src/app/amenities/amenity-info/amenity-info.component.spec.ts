import { TestBed, inject } from '@angular/core/testing';

import { AmenityInfoComponent } from './amenity-info.component';

describe('a amenity-info component', () => {
	let component: AmenityInfoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AmenityInfoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AmenityInfoComponent], (AmenityInfoComponent) => {
		component = AmenityInfoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});