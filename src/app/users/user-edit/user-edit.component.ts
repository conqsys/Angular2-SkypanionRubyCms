import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersModel } from '../../shared/model/users.model';
import { UsersService } from '../users.service';
 var App =require('../../../public/oneui/assets/js/app.js');

@Component({
  selector: 'user-edit',
  templateUrl: 'user-edit.component.html',
  styleUrls: ['user-edit.component.css']
})

export class UserEditComponent implements OnInit,AfterViewInit {

  private reqMsg: string = 'can' + 't be blank';

  private Id: number;
  private validateCheck: boolean = false;
  private errors: Array<any> = [];
  private isValidateUserName: boolean = false;
  private isValidateEmail: boolean = false;
  private isValidateConfermPassword: boolean = false;
  private isValidatePassword: boolean = false;
  private isValidateFirstName: boolean = false;   
  private isValidateLastName: boolean = false;
  private isValidatePhone1: boolean = false;
  private isValidatePhone2: boolean = false;
  private isValidateAddress1: boolean = false;
  private isValidateAddress2: boolean = false;
  private isValidateCity: boolean = false;
  private isValidateState: boolean = false;
  private isValidateZip: boolean = false;
  private isValidateCountry: boolean = false;
  private isInvalidEmail: boolean = false;
  private user: UsersModel = new UsersModel();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService) {
    //  this.user.Description = `<p>My HTML</p>`;
  }
  ngOnInit() {
    this.getParameterValue();

  }
  ngAfterViewInit() {
    
    App.init('uiBlocks');
  }

  public getParameterValue(): void {
    // this.route.params.subscribe((params) => {
    this.Id = this.route.params['value'].Id;
    this.getUserDetail();
    //  });

  }
  public getUserDetail(): void {
    this.usersService.getUserDetails(this.Id).then(result => {
      console.log(result);
      if (result) {
        this.user = result;
        this.user.Password = '';
        this.user.ReEnterPassword = '';
      }
    });
  }

  public updateUserDetail(): void {
    //if(this.user.UserName=='')
    this.errors = [];
    this.isValidateUserName = false;
    this.isValidateConfermPassword = false;
    this.isValidatePassword = false;
    this.isValidateFirstName = false;   
    this.isValidateLastName = false;
    this.isValidatePhone1 = false;
    this.isValidatePhone2 = false;
    this.isValidateAddress1 = false;
    this.isValidateAddress2 = false;
    this.isValidateCity = false;
    this.isValidateState = false;
    this.isValidateZip = false;
    this.isValidateCountry = false;
    this.isValidateEmail=false;
    this.isInvalidEmail=false;
    this.validateInput();
    if (this.errors.length == 0) {
      this.usersService.saveUserDetail(this.user).then(result => {
        console.log(result)
        if (result) {
          console.log(result)
        }
      })
    }
  }

  private validateInput(): void {
    if (this.user.UserName == '') {
      let errMsg = 'UserName can' + 't be blank';
      this.isValidateUserName = true;
      this.errors.push({ message: errMsg });
    }
    if (this.user.Email == '') {
      let errMsg = 'Email can' + 't be blank';
      this.isValidateEmail = true;
      this.errors.push({ message: errMsg });
    }
    if(!this.validateEmail() &&  this.user.Email!=''){
      let errMsg = 'Invalid Email';
      this.isInvalidEmail = true;
      this.errors.push({ message: errMsg });
    }
    if (this.user.Password == '') {
      this.isValidatePassword = true;
      let errMsg = 'Password can' + 't be blank';
      this.errors.push({ message: errMsg });
    }

    if (this.user.Password != ''
      && this.user.Password.localeCompare(this.user.ReEnterPassword) !== 0) {
      this.isValidateConfermPassword = true;
      let errMsg =  'These passwords don'+'t match.';
      this.errors.push({ message: errMsg });
    }
    if(this.user.ProfileId && this.user.ProfileId!=0) {
    if (this.user.FirstName == '') {
      this.isValidateFirstName = true;
      let errMsg = 'FirstName can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
    if (this.user.LastName == '') {
      this.isValidateLastName = true;
      let errMsg = 'LastName can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
    if (this.user.Phone1 == '') {
      this.isValidatePhone1 = true;
      let errMsg = 'Phone1 can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
    if (this.user.Phone2 == '') {
      this.isValidatePhone2 = true;
      let errMsg = 'Phone2 can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
    if (this.user.Address1 == '') {
      this.isValidateAddress1 = true;
      let errMsg = 'Address1 can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
    if (this.user.Address2 == '') {
      this.isValidateAddress2 = true;
      let errMsg = 'Address2 can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
    if (this.user.City == '') {
      this.isValidateCity = true;
      let errMsg = 'City can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
    if (this.user.State == '') {
      this.isValidateState = true;
      let errMsg = 'State can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
    if (this.user.Zip == '') {
      this.isValidateZip = true;
      let errMsg = 'Zip can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
    if (this.user.Country == '') {
      this.isValidateCountry = true;
      let errMsg = 'Country can' + 't be blank';
      this.errors.push({ message: errMsg });
    }
  }

  }

  private validateEmail(){
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(this.user.Email) ?true:false; 
}

  // public get validateDetail(): boolean {
  //   if (this.isValidateName && this.isValidateIcon) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // public get isValidateName(): boolean {
  //   let validate = this.user.Name ? true : false;
  //   return validate;
  // }

  // public get isValidateIcon(): boolean {
  //   let validate = this.user.Icon ? true : false;
  //   return validate;
  // }

  // public saveUserDetail(): void {
  //   this.validateCheck = true;
  //   console.log(this.user);
  //   if (this.validateDetail) {
  //     this.usersService.saveUserDetail(this.user).then((res) => {
  //      if(res) {
  //        this.router.navigate(['/users']);
  //      }
  //     })
  //   }
  // }
}
