import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbPagination} from './pagination';
import {NgbPaginationConfig} from './pagination-config';

export {NgbPagination} from './pagination';


@NgModule({declarations: [NgbPagination], exports: [NgbPagination], imports: [CommonModule], providers: [NgbPaginationConfig]})
export class NgbPaginationModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbPaginationModule}; }
}
