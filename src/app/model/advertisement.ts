import {User} from './user';
import {Car} from './car';

export class Advertisement {
  id: string;
  availableFrom: Date;
  availableTo: Date;
  advertiser: User;
  car: Car;
  // helper for image
  image: any[] = [];
}
