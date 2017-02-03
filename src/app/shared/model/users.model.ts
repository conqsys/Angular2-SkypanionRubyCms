export class UsersModel {
  Id: number = 0;
  Type: string = '';
  UserName: string = '';
  Email: string = '';
  Password: string = '';
  ReEnterPassword:string='';
  FirstName: string = '';
  LastName: string = '';
  Phone1: string = '';
  Phone2: string = '';
  Address1: string = '';
  Address2: string = '';
  City: string = '';
  State: string = '';
  Zip: string = '';
  Country: string = '';
	ConfirmedAt: string = '';
	OnBoardingComplete: string = '';
  CreatedAt: string = '';
  UpdatedAt: string = '';
  ProfileId:number = 0;
  EntityUsers: EntityUsers[] = [];
}

export class EntityUsers {
  Id: number = 0;
  EntityId: number = 0;
  EntityType: string = '';
  UserId: number = 0;
  CreatedAt: string = '';
  UpdatedAt: string = '';
}
