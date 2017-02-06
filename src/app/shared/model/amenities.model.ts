export class AmenitiesModel {
  Id: number = 0;
  Type: string = '';
  Name: string = '';
  Description: string = '<p></p>';
  Icon: string = '';
  CreatedAt: string = '';
  UpdatedAt: string = '';
  EntityAmenities:Array<EntityAmenities>=[];
}

export class EntityAmenities {
  Id: number = 0;
  EntityId: number = 0;
  EntityType: string = '';
  AmenityId: number = 0;
  CreatedAt: string = '';
  UpdatedAt: string = '';
}
