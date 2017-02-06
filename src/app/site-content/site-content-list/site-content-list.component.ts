import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SiteContentModel } from '../shared/site-content.model';
import { SiteContentService } from '../shared/site-content.service';
@Component({
	selector: 'site-content-list',
	templateUrl: 'site-content-list.component.html',
	styleUrls: ['site-content-list.component.css']
})
export class SiteContentListComponent implements OnInit {

	private siteContentModel: SiteContentModel[] = [];
	private Id: number;
	constructor(private route: ActivatedRoute,
		private router: Router,
		private siteContentService: SiteContentService
	) {
		// super(router);
		this.siteContentModel = new Array<SiteContentModel>();
		this.Id = this.route.params['value'].Id;
		// this.getLease();
	}

	ngOnInit() {
		this.getSiteContents();
	}

	private getSiteContents(): void {
		this.siteContentService
			.getSiteContents()
			.then(result => {
				if (result) {
					this.siteContentModel = result;
					// alert(JSON.stringify(this.siteContentModel[0]))
				}
			});
	}
	private addContent(): void {
		this.router.navigate(['/siteContent', 0]);
	}

	// private editSiteContent(ContentId: number): void {
	// 	this.router.navigate(['/siteContent', ContentId]);
	// }

	private removeSiteContent(ContentId: number): void {
		this.siteContentService
			.removeSiteContent(ContentId)
			.then(result => {
				if (result) {
					this.getSiteContents();
				}
			});
	}

}