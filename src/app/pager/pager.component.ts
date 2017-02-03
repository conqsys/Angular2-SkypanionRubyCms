import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export class VendorFilterArguments {
    companyId: number
}

@Component({
    selector: 'sp-pager',
    templateUrl: './pager.component.html',
})

export class PagerComponent implements OnInit {
    private _dataSource: string;
    private _totalitems: number;
    private _currentPage: any;
    @Input() public get pageName(): string {
        return this._dataSource;
    }
    public set pageName(newvalue: string) {
        this._dataSource = newvalue;
    }

    @Input() public get totalItems(): number {
        return this._totalitems;
    }
    public set totalItems(newvalue: number) {
        this._totalitems = newvalue;
    }


    @Input() public get currentPageFiltered(): any {
        return this._currentPage;
    }
    public set currentPageFiltered(newvalue: any) {
        this._currentPage = newvalue;
    }
    constructor(
        router: Router
    ) {

    }

    ngOnInit() { }
}