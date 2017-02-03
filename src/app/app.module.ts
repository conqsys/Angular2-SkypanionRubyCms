import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers, Http, BaseRequestOptions, RequestOptions } from '@angular/http';
import { PopoverModule } from 'ng2-popover';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/* for checkeditor */
import { CKEditorModule } from 'ng2-ckeditor';
/* for pagination */

import {NgbPaginationModule} from './pagination/paginationDirective/pagination/pagination.module';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { NoContentComponent } from './no-content';
import {
  DropdownModule,
  PaginatorModule,
  MultiSelectModule
} from 'primeng/primeng';
/* for pagination */
import { PaginationComponent } from './pagination/pagination.component';

/* for pager*/
import { PagerComponent } from './pager/pager.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';

/* skypanion ruby CMS components */
import { UnitComponent } from './units';
import { UnitDetailComponent } from './units/unit-detail';
import { UnitEditComponent } from './units/index';
import { UnitService } from './units/unit.service';
/* skypanion ruby lease compoinent */
import { LeaseComponent, LeaseDetailComponent } from './leases/index';
import { LeaseService } from './leases/lease.service';
/*  skypanion ruby amenity components  */
import { AmenitiesComponent } from './amenities';
import { RegistrationComponent } from './registration';

import { AmenityDetailComponent } from './amenities/amenity-detail/amenity-detail.component';
import { AmenityInfoComponent } from './amenities/amenity-info/amenity-info.component';
import { AmenityEditComponent } from './amenities/index';
import { AmenitiesService } from './amenities/amenities.service';
import { UsersComponent } from './users';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserEditComponent } from './users/index';
import { UsersService } from './users/users.service';
import { RegistrationService } from './registration/registration.service';

import { PropertyComponent } from './properties';
import { PropertyDetailComponent } from './properties/property-detail';
import { PropertyEditComponent, PropertyUnitDetailComponent } from './properties/index';
import { PropertyService } from './properties/property.service';
import { TenantDashboardService } from './tenantDashboard/tenant-dashboard.service';

import { ConfirmService } from './shared/service/confirm.service';
import { UploadService } from './shared/service/upload.service';

import { TenantDashboardComponent } from './tenantDashboard/tenant-dashboard.component';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
class MyRequestOptions extends BaseRequestOptions {
  constructor() {
    super();
    let auth = JSON.parse(Cookie.get('auth'));

    console.log('Auth Token is');
    console.log(auth);
    //  this.headers.append('Authorization', 'Bearer ' + auth.access_token);
    this.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3ZWJtYXN0ZXIiLCJqdGkiOiI4N2Q4MTU4ZS1hZjFkLTQ2ZWYtYWRkYy1kYTFlMmE2ODk5ZjMiLCJpYXQiOjE0ODU5NDM5MTAsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ3ZWJtYXN0ZXIiLCJVc2VySWQiOiIxMjc0MjUiLCJFbWFpbCI6ImhlbGxvQGlvbmVtaWNyby5jb20iLCJuYmYiOjE0ODU5NDM5MTAsImV4cCI6MTQ4NTk5NTg1OSwiaXNzIjoiaHR0cDovL2FiYy5jb20iLCJhdWQiOiJNb2xlY3VsYXJBcHAifQ.mNunbo_ErAQG2OO1G8NGEUu6RKez3UvMtvZIZ8HW6YE' );

  }
}

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NoContentComponent,
    UnitComponent,
    UnitDetailComponent,
    AmenitiesComponent,
    UsersComponent,
    RegistrationComponent,
    AmenityDetailComponent,
    AmenityInfoComponent,
    AmenityEditComponent,
    //  UserDetailComponent,
    //   UserInfoComponent,
    UserEditComponent,
    UnitEditComponent,
    PropertyComponent,
    PropertyDetailComponent,
    PropertyEditComponent,
    LeaseComponent,

    PropertyUnitDetailComponent,
    PaginationComponent,
    PagerComponent,

    LeaseDetailComponent,
    PropertyUnitDetailComponent,
    TenantDashboardComponent,
    IconPickerComponent

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
    DropdownModule,
    NgbPaginationModule,
    // NgbModule.forRoot(),
    PopoverModule,
    Ng2FilterPipeModule,
    PaginatorModule,
    MultiSelectModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],

  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    AmenitiesService,
    RegistrationService,
    ConfirmService,
    UnitService,
    PropertyService,
    UploadService,
    UsersService,
    LeaseService,
    TenantDashboardService,
    { provide: RequestOptions, useClass: MyRequestOptions }

  ]
})

export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) { }

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
