export class UnitModel {
  Id: number = 0;
  PropertyId: number = 0;
  GroupId: number = 0;
  Published: string = '';
  Number: string = '';
  Description: string = '';
  Tile: string = '';
  Banner: string = '';
  SquareFeet: number = 0;
  NumberOfRooms: number = 0;
  NumberOfBedrooms: number = 0;
  NumberOfBaths: number = 0;
  CommonAreaPercent: number = 0;
  GrossPotentialRent: number = 0;
  UnitDefinition: string = '';
  MonthlyBaseRent: number = 0;
  UnitStatus: number = 0;
  UnitType: number = 0;
  UnitAddress1: string = '';
  UnitAddress2: string = '';
  UnitNumber: string = '';
  OldUnitDefinition: string = '';
  Dishwasher: boolean = false;
  Disposal: boolean = false;
  Fireplace: boolean = false;
  AirConditioned: boolean = false;
  Furnished: boolean = false;
  OfficeSize: string = '';
  RetailSize: string = '';
  FlooringInfo: string = '';
  CeilingHeight: string = '';
  TypeOfHeat: string = '';
  UtilitiesInfo3: string = '';
  WarehouseSize: string = '';
  GeneralInfoLine1: string = '';
  GeneralInfoLine2: string = '';
  GeneralInfoLine3: string = '';
  GeneralInfoLine4: string = '';
  RentReadyDate1: string = '';
  RentReadyDesc1: string = '';
  RentReadyDate2: string = '';
  RentReadyDesc2: string = '';
  RentReadyDate3: string = '';
  RentReadyDesc3: string = '';
  RentReadyDate4: string = '';
  RentReadyDesc4: string = '';
  RentReadyDate5: string = '';
  RentReadyDesc5: string = '';
  RentReadyDate6: string = '';
  RentReadyDesc6: string = '';
  RentReadyDate7: string = '';
  RentReadyDesc7: string = '';
  RentReadyDate8: string = '';
  RentReadyDesc8: string = '';
  Kitchen: boolean = false;
  VacancyDate: string = '';
  LastModifiedBy: string = '';
  VacantIndicator: string = '';
  Vacant: boolean = false;
  UsableSquareFootage: number = 0;
  ProRataSquareFootage: number = 0;
  MarketRateSquareFootage: number = 0;
  RecordModified: number = 0;
  StackBuilding: string = '';
  StackFloor: number = 0;
  AltUnitStatus: string = '';
  BrokerStatus: number = 0;
  CreatedAt: string = '';
  UpdatedAt: string = '';
  TileUrl: string='';
  Property:UnitProperty=new UnitProperty();
  totalItems:number;
}

export class UnitProperty {
  Number:string;
}

export class UnitFilteredArguments {
propertyId:number=null;
vacant:boolean;
published:boolean;

}