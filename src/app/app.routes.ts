import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';

// Skypanion CMS Component

import { UnitComponent } from './units';
import { UnitDetailComponent } from './units/unit-detail';
import { UnitEditComponent } from './units/index';
import { AmenitiesComponent } from './amenities';
import { AmenityDetailComponent } from './amenities/amenity-detail/amenity-detail.component';
import { AmenityInfoComponent } from './amenities/amenity-info/amenity-info.component';
import { AmenityEditComponent } from './amenities/index';
import { DataResolver } from './app.resolver';
import { PropertyComponent, PropertyEditComponent, PropertyDetailComponent } from './properties';
import { LeaseComponent,LeaseDetailComponent } from './leases/index';
import { RegistrationComponent } from './registration';
import { UsersComponent } from './users/users.component';
import { TenantDashboardComponent } from './tenantDashboard/tenant-dashboard.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
export const ROUTES: Routes = [
  { path: '', component: AmenitiesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: TenantDashboardComponent },
  { path: 'users/:Id/edit', component: UserEditComponent },
  { path: 'units', component: UnitComponent },
  { path: 'units/:Id/edit', component: UnitEditComponent },
  { path: 'units/:Id', component: UnitDetailComponent },
  { path: 'amenities', component: AmenitiesComponent },
  { path: 'amenities/:Id', component: AmenityDetailComponent },
  { path: 'amenities/:Id/new', component: AmenityEditComponent },
  { path: 'amenities/:Id/edit', component: AmenityEditComponent },
  { path: 'amenities/amenity-info', component: AmenityInfoComponent },
  { path: 'properties', component: PropertyComponent },
  { path: 'properties/:Id/edit', component: PropertyEditComponent },
  { path: 'properties/:Id', component: PropertyDetailComponent },
  { path: 'leases', component: LeaseComponent },
  { path: 'leases/:Id', component: LeaseDetailComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: NoContentComponent }
];
