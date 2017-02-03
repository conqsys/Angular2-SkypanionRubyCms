import { UnitDetailComponent } from '../unit-detail';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UnitModel } from '../../shared/model/unit.model';
import { UploadService } from '../../shared/service/upload.service';
import { UnitService } from '../unit.service';

@Component({
	selector: 'unit-edit',
	templateUrl: 'unit-edit.component.html',
	styleUrls: ['Unit-edit.component.css']
})

export class UnitEditComponent implements OnInit {

	private Id: number;
	private validateCheck: boolean = false;
	private file: File;
	public  isPublished:boolean=false;
	private unit: UnitModel = new UnitModel();
	filesToUpload: Array<File> = [];
	bannerFileName: String='';
	bannerFileImage: String='';
	tileFileName: String='';
	tileFileImage: String='';
	constructor(private route: ActivatedRoute,
		private unitService: UnitService,
		private router: Router) {
		this.unit.Number = '1';
		this.unit.Property.Number = '3';
	}
	ngOnInit() {
		this.getParameterValue();
	}
	public getParameterValue(): void {
		this.Id = this.route.params['value'].Id;
		this.getUnitDetail();
	}
	public getUnitDetail(): void {
			this.unitService.getUnitDetail(this.Id).then((result) => {
				this.unit=result;
				if(this.unit.Published!=null){
					this.isPublished=true;
				}else{
					this.isPublished=false;
				}
				console.log("result unit dta");
				console.log(this.unit);
		})
	}

	public fileChangeEvent(fileInput: any, isTile: boolean) {
		console.log(fileInput);
		var FR = new FileReader();
		FR.onload = (e) => {
			if (isTile) {
				this.tileFileName = fileInput.target.files[0].name;
				this.tileFileImage = (e.target as any).result;
				console.log(this.tileFileName);
			} else {
				this.bannerFileName = fileInput.target.files[0].name;
				this.bannerFileImage = (e.target as any).result;
			}
		};
		FR.readAsDataURL(fileInput.target.files[0]);
		this.filesToUpload.push(fileInput.target.files);
	}
	public saveUnitDetail() {
		let unitData = {
			Id:this.Id,
			BannerName: this.bannerFileName,
			BannerData: this.bannerFileImage,
			TileName: this.tileFileName,
			TileData: this.tileFileImage,
			IsPublished:this.isPublished
		};
		console.log(unitData);
		this.unitService.updateUnit(unitData).then((result) => {
			console.log(result);
			this.router.navigate(['/units/'+this.Id]);
		}, (error) => {
			console.error(error);
		});
	}
	// private fileUpload(e): void {

	// 	var files = e.srcElement.files;
	// 	console.log(files);
	// 	this.upload.postWithFile('http://localhost:8182/upload', [], files).then(() => {
	// 		console.log('sent');
	// 	});
	// }
}