import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SiteContentModel } from '../shared/site-content.model';
import { SiteContentService } from '../shared/site-content.service';
@Component({
	selector: 'site-content',
	templateUrl: 'site-content.component.html',
	styleUrls: ['site-content.component.css']
})
export class SiteContentComponent implements OnInit, AfterViewInit {

	private sitecontent: SiteContentModel = new SiteContentModel();;
	private ContentId: number;
	private demo: string = "<p>asdasd</p>";
	constructor(private activatedRoute: ActivatedRoute,
		private siteContentService: SiteContentService,
		private router: Router,
	) {

		this.activatedRoute.params.subscribe(params => {
			this.ContentId = +params['Id']; // (+) converts string 'id' to a number
		});

	}
	ngAfterViewInit() {
		setTimeout(() => {
			if (this.ContentId > 0) {
				this.getSiteContentByID();
			}
		}, 500);
	}
	ngOnInit() {
		//this.getSiteContentByID();
	}
	Cancel() {
		this.router.navigate(['/siteContentList']);
	}

	SaveSiteContents() {
		alert(JSON.stringify(this.sitecontent))
		this.siteContentService.saveSiteContents(this.sitecontent).then(result => {
			this.router.navigate(['/siteContentList']);
		});
	}

	private getSiteContentByID(): void {
		this.siteContentService
			.getSiteContentByID(this.ContentId)
			.then(result => {
				this.sitecontent = result;
			});
	}

}